import React from 'react';
import { 
  Info, 
  GraduationCap, 
  User, 
  ShieldCheck, 
  AlertCircle, 
  Workflow, 
  Layers, 
  Database, 
  Sparkles, 
  BookOpen, 
  CheckCircle2,
  HeartHandshake
} from 'lucide-react';
import { ActiveScreen } from '../types';

interface AboutScreenProps {
  onNavigate: (screen: ActiveScreen) => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="border-b border-[#E3DACB] pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#C0392B]/10 text-[#C0392B] text-xs font-semibold">
          <Info className="w-3.5 h-3.5" />
          <span>HỒ SƠ ĐỀ TÀI & BÁO CÁO THỰC TẬP</span>
        </div>
        <h1 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl font-bold text-[#2C241E]">
          Giới thiệu dự án & Tác giả
        </h1>
        <p className="text-sm text-[#5A4E45] max-w-3xl">
          Công bố minh bạch thông tin sinh viên thực hiện, bối cảnh thực tập sinh, mục tiêu bảo tồn văn hóa xã hội và các giới hạn thực tế của phiên bản hiện tại.
        </p>
      </div>

      {/* Main Author & Internship Credentials Card */}
      <div className="bg-white rounded-2xl border-2 border-[#E3DACB] p-6 sm:p-8 shadow-sm space-y-6">
        
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#8B5A2B] pb-3 border-b border-[#F2EDE2]">
          <GraduationCap className="w-5 h-5 text-[#C0392B]" />
          <span>Thông tin hồ sơ sinh viên & Chương trình thực tập</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
          
          <div className="space-y-3 bg-[#FAF7EE] p-5 rounded-xl border border-[#E8E1D5]">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#2C241E] text-white flex items-center justify-center font-bold text-lg">
                <User className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-[#8C7E72] block">Sinh viên thực hiện:</span>
                <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#2C241E]">
                  Trần Quang Đức
                </h3>
              </div>
            </div>

            <div className="pt-2 border-t border-[#E3DACB] space-y-1.5 text-xs text-[#4A3E35]">
              <p><strong className="text-[#2C241E]">Mã sinh viên:</strong> <span className="font-mono text-sm font-bold text-[#C0392B]">PH58855</span></p>
              <p><strong className="text-[#2C241E]">Nhóm:</strong> <span className="font-medium text-[#2C241E]">Nhóm 1</span></p>
              <p><strong className="text-[#2C241E]">Chương trình:</strong> <span className="font-medium text-[#2C241E]">Chương trình Thực tập sinh Đợt 15</span></p>
              <p><strong className="text-[#2C241E]">Đơn vị phối hợp:</strong> <span className="font-semibold text-[#8B5A2B]">IMTA TECH × FPT Polytechnic</span></p>
            </div>
          </div>

          <div className="space-y-3 bg-[#FAF7EE] p-5 rounded-xl border border-[#E8E1D5]">
            <div className="flex items-center gap-2 text-[#C0392B] font-bold text-sm">
              <HeartHandshake className="w-5 h-5" />
              <span>Định hướng & Tính chất dự án</span>
            </div>

            <div className="space-y-2 text-xs text-[#4A3E35]">
              <p>
                <strong className="text-[#2C241E]">Tên ứng dụng:</strong><br />
                <span className="font-semibold text-sm text-[#2C241E]">“Quy Trình Nghề Thủ Công Từng Bước – Số hóa nghề thủ công truyền thống”</span>
              </p>
              <p>
                <strong className="text-[#2C241E]">Loại dự án:</strong><br />
                <span className="inline-block px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-900 font-semibold border border-emerald-300 mt-0.5">
                  Dự án xã hội phi lợi nhuận
                </span>
              </p>
              <p className="text-[#7A6E65] text-[11px] leading-relaxed">
                Ứng dụng <strong>không kinh doanh, không thu phí và không chứa bất kỳ hình thức quảng cáo nào</strong>. Toàn bộ tài nguyên hướng tới phục vụ học tập, nghiên cứu và giáo dục di sản cho cộng đồng.
              </p>
            </div>
          </div>

        </div>

        {/* Project Scope & Objectives */}
        <div className="p-4 rounded-xl bg-[#F5EFE3] border border-[#E3DACB] space-y-2 text-xs text-[#4A3E35]">
          <span className="font-bold text-[#2C241E] uppercase text-xs">
            Phạm vi đề tài trong phiên bản hiện tại:
          </span>
          <p className="leading-relaxed">
            Tư liệu hóa và giới thiệu quy trình <strong>Nghề làm tranh dân gian Đông Hồ</strong> (phường Song Hồ, thị xã Thuận Thành, tỉnh Bắc Ninh). Ứng dụng không khẳng định đã số hóa toàn bộ nghề thủ công Việt Nam, mà tập trung làm sâu sắc, chuẩn xác một làng nghề đại diện trước khi mở rộng.
          </p>
        </div>

      </div>

      {/* Main Core Features Showcase */}
      <div className="bg-white rounded-2xl border border-[#E3DACB] p-6 sm:p-8 space-y-4 shadow-sm">
        <h2 className="font-['Playfair_Display',serif] text-2xl font-bold text-[#2C241E]">
          Các chức năng chính đã hoàn thiện thực tế
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          
          <div 
            onClick={() => onNavigate('process')}
            className="p-4 rounded-xl bg-[#FAF7EE] border border-[#E3DACB] hover:border-[#C0392B] cursor-pointer transition-all space-y-1.5"
          >
            <div className="flex items-center gap-1.5 text-[#C0392B] font-bold">
              <Workflow className="w-4 h-4" />
              <span>Quy trình nghề thủ công từng bước</span>
            </div>
            <p className="text-[#5A4E45]">
              6 công đoạn chuẩn hóa theo dòng thời gian với chi tiết kỹ thuật, công cụ và lưu ý bí truyền.
            </p>
          </div>

          <div 
            onClick={() => onNavigate('library')}
            className="p-4 rounded-xl bg-[#FAF7EE] border border-[#E3DACB] hover:border-[#C0392B] cursor-pointer transition-all space-y-1.5"
          >
            <div className="flex items-center gap-1.5 text-emerald-800 font-bold">
              <Layers className="w-4 h-4" />
              <span>Thư viện nguyên liệu & công cụ</span>
            </div>
            <p className="text-[#5A4E45]">
              Danh mục 7 nguyên liệu và 6 công cụ mộc bản có phân loại, tìm kiếm và liên kết công đoạn.
            </p>
          </div>

          <div 
            onClick={() => onNavigate('repository')}
            className="p-4 rounded-xl bg-[#FAF7EE] border border-[#E3DACB] hover:border-[#C0392B] cursor-pointer transition-all space-y-1.5"
          >
            <div className="flex items-center gap-1.5 text-[#8B5A2B] font-bold">
              <Database className="w-4 h-4" />
              <span>Kho dữ liệu di sản</span>
            </div>
            <p className="text-[#5A4E45]">
              18 bản ghi dữ liệu thực tế phân theo 6 nhóm, hỗ trợ tìm kiếm, lọc và xuất tệp JSON cấu trúc.
            </p>
          </div>

          <div 
            onClick={() => onNavigate('ai-assistant')}
            className="p-4 rounded-xl bg-[#FAF7EE] border border-[#E3DACB] hover:border-[#C0392B] cursor-pointer transition-all space-y-1.5"
          >
            <div className="flex items-center gap-1.5 text-amber-600 font-bold">
              <Sparkles className="w-4 h-4" />
              <span>Trợ lý AI Gemini</span>
            </div>
            <p className="text-[#5A4E45]">
              Gọi mô hình phía máy chủ, trả lời bám sát dữ liệu kiểm chứng và từ chối suy đoán ngoài phạm vi.
            </p>
          </div>

          <div 
            onClick={() => onNavigate('sources')}
            className="p-4 rounded-xl bg-[#FAF7EE] border border-[#E3DACB] hover:border-[#C0392B] cursor-pointer transition-all space-y-1.5"
          >
            <div className="flex items-center gap-1.5 text-[#2C241E] font-bold">
              <BookOpen className="w-4 h-4" />
              <span>Thư viện nguồn tư liệu</span>
            </div>
            <p className="text-[#5A4E45]">
              7 nguồn tham khảo độc lập (5 nguồn chính thống nhà nước và UNESCO) kèm URL mở trực tiếp.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#FAF7EE] border border-[#E3DACB] space-y-1.5">
            <div className="flex items-center gap-1.5 text-blue-800 font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Bảo mật khóa API</span>
            </div>
            <p className="text-[#5A4E45]">
              Khóa API Gemini lưu trong biến môi trường máy chủ, tuyệt đối không lộ ở mã nguồn trình duyệt.
            </p>
          </div>

        </div>
      </div>

      {/* Honest Limitations & Future Work Section */}
      <div className="bg-[#FAF0E6] rounded-2xl border-2 border-[#ECD9C6] p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-[#C0392B] font-bold text-base">
          <AlertCircle className="w-5 h-5" />
          <span>Những gì chưa làm được (Báo cáo trung thực các hạn chế thực tế)</span>
        </div>

        <p className="text-xs text-[#7A4B20]">
          Tuân thủ nguyên tắc liêm chính học thuật và đạo đức bảo tồn di sản văn hóa, ứng dụng xin nêu rõ các điểm còn hạn chế trong phiên bản này:
        </p>

        <div className="space-y-3 text-xs text-[#4A3E35]">
          <div className="p-3 bg-white/80 rounded-lg border border-[#ECD9C6] space-y-1">
            <strong className="text-[#2C241E]">1. Phạm vi dữ liệu chưa mở rộng toàn diện:</strong>
            <p>
              Ứng dụng hiện chỉ tập trung số hóa nghề làm tranh dân gian Đông Hồ (Song Hồ, Thuận Thành, Bắc Ninh). Các dòng tranh dân gian tiêu biểu khác của Việt Nam (tranh Hàng Trống, tranh Kim Hoàng, tranh Nam Hoành, tranh làng Sình) và các làng nghề thủ công nổi tiếng khác (gốm Bát Tràng, chạm bạc Đồng Xâm, dệt lụa Vạn Phúc...) chưa được đưa vào kho dữ liệu.
            </p>
          </div>

          <div className="p-3 bg-white/80 rounded-lg border border-[#ECD9C6] space-y-1">
            <strong className="text-[#2C241E]">2. Bản quyền hình ảnh tư liệu di sản:</strong>
            <p>
              Các hình ảnh hiện tại được trích dẫn tư liệu nghiên cứu từ các cổng thông tin công khai (Cổng TTĐT Bắc Ninh, hồ sơ UNESCO, VICAS) nhằm mục đích giáo dục phi lợi nhuận. Tác giả <strong>chưa tiến hành điền dã chụp ảnh thực địa độc quyền với giấy cấp phép thương mại</strong> của các nghệ nhân.
            </p>
          </div>

          <div className="p-3 bg-white/80 rounded-lg border border-[#ECD9C6] space-y-1">
            <strong className="text-[#2C241E]">3. Không tự nhận đã phỏng vấn nghệ nhân:</strong>
            <p>
              Ứng dụng ghi nhận trung thực: <strong>Tác giả chưa trực tiếp điền dã phỏng vấn tất cả các nghệ nhân cao niên tại khu phố Đông Khê</strong>. Toàn bộ thông tin quy trình, dụng cụ và màu sắc đều được tổng hợp và đối chiếu từ các văn bản khoa học, công trình nghiên cứu đã được các cơ quan chuyên môn công bố chính thức.
            </p>
          </div>

          <div className="p-3 bg-white/80 rounded-lg border border-[#ECD9C6] space-y-1">
            <strong className="text-[#2C241E]">4. Các chi tiết kỹ thuật bí truyền gia đình chưa có tài liệu định lượng:</strong>
            <p>
              Một số công đoạn phụ (như tỉ lệ chính xác nước chua lên men ngâm gỉ đồng, thời gian ngâm bùn gỗ thị theo các tháng trong năm) là bí quyết gia truyền truyền miệng của từng dòng họ nghệ nhân, chưa có tài liệu khoa học định lượng công khai nên ứng dụng không tự suy đoán bổ sung.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
