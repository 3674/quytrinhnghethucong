import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';
import { MASTER_RECORDS } from './src/data/records.ts';
import { SOURCES } from './src/data/sources.ts';
import { PROCESS_STEPS } from './src/data/process.ts';
import { MATERIALS } from './src/data/materials.ts';
import { TOOLS } from './src/data/tools.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

async function startServer() {
  const app = express();
  app.use(express.json());

  // Health check & status endpoint
  app.get('/api/status', (req, res) => {
    res.json({
      status: 'ok',
      hasApiKey: Boolean(process.env.GEMINI_API_KEY),
      recordsCount: MASTER_RECORDS.length,
      sourcesCount: SOURCES.length,
    });
  });

  // Server-side Gemini AI chat endpoint
  app.post('/api/chat', async (req, res) => {
    try {
      const { message } = req.body;
      if (!message || typeof message !== 'string' || !message.trim()) {
        return res.status(400).json({ error: 'Nội dung câu hỏi không được để trống.' });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(503).json({
          error: 'Khóa API Gemini chưa được cấu hình trong hệ thống (biến môi trường GEMINI_API_KEY). Vui lòng cấu hình khóa trong bảng điều khiển Secrets để sử dụng tính năng này.'
        });
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });

      // Construct system instruction with strict grounding on verified data
      const systemInstruction = `Bạn là Trợ lý AI nghiên cứu di sản "Quy Trình Nghề Thủ Công Từng Bước – Số hóa nghề thủ công truyền thống", chuyên trách tư liệu hóa Nghề làm tranh dân gian Đông Hồ.

NHIỆM VỤ VÀ NGUYÊN TẮC BẮT BUỘC (CỰC KỲ QUAN TRỌNG):
1. Bạn CHỈ ĐƯỢC PHÉP trả lời dựa trên kho dữ liệu đã được xác minh dưới đây.
2. Với MỖI thông tin đưa ra, bạn BẮT BUỘC phải dẫn rõ:
   - Tên bản ghi hoặc công đoạn/nguyên liệu/công cụ tương ứng.
   - Nguồn tư liệu (tên tài liệu, cơ quan ban hành, và URL đầy đủ).
3. NẾU câu hỏi của người dùng hỏi về thông tin, quy trình, nghệ nhân, làng nghề, niên đại, hoặc sự việc KHÔNG CÓ TRONG KHO DỮ LIỆU ĐÃ XÁC MINH DƯỚI ĐÂY (hoặc dữ liệu chưa đủ căn cứ), bạn BẮT BUỘC phải trả lời chính xác câu sau:
   "Hiện chưa có đủ tư liệu được xác minh để trả lời câu hỏi này."
   (Sau đó có thể giải thích ngắn gọn phạm vi dữ liệu hiện có trong ứng dụng).
4. TUYỆT ĐỐI KHÔNG tự suy đoán, bịa đặt số liệu, niên đại, kỹ thuật, nghệ nhân hay các câu chuyện truyền thuyết.
5. TUYỆT ĐỐI KHÔNG sử dụng suy đoán của AI làm sự thật lịch sử, không lấy AI làm nguồn tham khảo.
6. Luôn giao tiếp bằng tiếng Việt chuẩn mực, tôn trọng di sản và cộng đồng nghệ nhân Đông Hồ.

=== KHO DỮ LIỆU ĐÃ XÁC MINH CỦA ỨNG DỤNG ===

DANH SÁCH 7 NGUỒN TƯ LIỆU CHÍNH THỐNG:
${SOURCES.map(s => `- [${s.maNguon}] ${s.tenTaiLieu} (${s.coQuanBanHanh}) - Loại: ${s.loaiNguon} - URL: ${s.url} - Nội dung: ${s.noiDungSuDung}`).join('\n')}

QUY TRÌNH 6 CÔNG ĐOẠN ĐÃ XÁC MINH:
${PROCESS_STEPS.map(p => `- [${p.maCongDoan}] ${p.tenCongDoan}: ${p.moTa}. Kỹ thuật: ${p.kyThuatMoTa}. Nguồn: ${p.nguonThamKhao.tenNguon} (${p.nguonThamKhao.url})`).join('\n')}

DANH MỤC NGUYÊN LIỆU ĐÃ XÁC MINH:
${MATERIALS.map(m => `- [${m.maBanGhi}] ${m.tenGoi} (${m.phanLoai}): ${m.moTaKiemChung}. Vai trò: ${m.vaiTroTrongNghe}. Nguồn: ${m.nguonTuLieu.tenNguon} (${m.nguonTuLieu.url})`).join('\n')}

DANH MỤC CÔNG CỤ ĐÃ XÁC MINH:
${TOOLS.map(t => `- [${t.maBanGhi}] ${t.tenGoi} (${t.phanLoai}): ${t.dacDiemCauTao}. Vai trò: ${t.vaiTroTrongNghe}. Nguồn: ${t.nguonTuLieu.tenNguon} (${t.nguonTuLieu.url})`).join('\n')}

KHO 18 BẢN GHI DI SẢN KIỂM CHỨNG:
${MASTER_RECORDS.map(r => `- [${r.id}] ${r.ten} (Nhóm: ${r.nhomDuLieu}): ${r.noiDungChiTiet}. Địa điểm: ${r.diaDiem}. Nguồn: ${r.nguonTuLieu.tenNguon} (${r.nguonTuLieu.url})`).join('\n\n')}`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: message.trim(),
        config: {
          systemInstruction,
          thinkingConfig: {
            thinkingLevel: ThinkingLevel.LOW,
          },
        },
      });

      const reply = response.text || 'Hiện chưa có đủ tư liệu được xác minh để trả lời câu hỏi này.';

      res.json({
        reply,
      });
    } catch (err: any) {
      console.error('Lỗi chi tiết gọi Gemini API phía máy chủ:', err?.message || err, err?.stack);
      return res.status(500).json({
        error: `Đã xảy ra lỗi khi kết nối với mô hình AI phía máy chủ: ${err?.message || 'Không xác định'}. Vui lòng thử lại sau.`
      });
    }
  });

  // Dev server with Vite middleware, or production static server
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Ứng dụng "Quy Trình Nghề Thủ Công Từng Bước" đang chạy tại http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Không thể khởi động server:', err);
  process.exit(1);
});
