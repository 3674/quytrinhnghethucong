import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Workflow, 
  Layers, 
  Database, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  BookOpen, 
  MapPin, 
  ExternalLink,
  ChevronRight,
  Filter
} from 'lucide-react';
import { HERITAGE_DATA } from '../data/heritage';
import { PROCESS_STEPS } from '../data/process';
import { MATERIALS } from '../data/materials';
import { TOOLS } from '../data/tools';
import { MASTER_RECORDS, HeritageRecord, DataGroupType } from '../data/records';
import { SOURCES } from '../data/sources';
import { ActiveScreen } from '../types';

interface HomeScreenProps {
  onNavigate: (screen: ActiveScreen) => void;
  onOpenRecord: (record: HeritageRecord) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate, onOpenRecord }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'cong-doan' | 'nguyen-lieu' | 'cong-cu' | 'kien-thuc'>('all');

  // Filtered list of master records from common database
  const filteredRecords = useMemo(() => {
    let list = MASTER_RECORDS;

    if (selectedFilter !== 'all') {
      list = list.filter(r => {
        if (selectedFilter === 'cong-doan') return r.nhomDuLieu === 'cong-doan';
        if (selectedFilter === 'nguyen-lieu') return r.nhomDuLieu === 'nguyen-lieu';
        if (selectedFilter === 'cong-cu') return r.nhomDuLieu === 'cong-cu';
        if (selectedFilter === 'kien-thuc') return r.nhomDuLieu === 'kien-thuc' || r.nhomDuLieu === 'ho-so-nghe';
        return true;
      });
    }

    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      list = list.filter(r => 
        r.ten.toLowerCase().includes(q) ||
        r.moTa.toLowerCase().includes(q) ||
        r.id.toLowerCase().includes(q) ||
        r.nguyenLieu.some(nl => nl.toLowerCase().includes(q)) ||
        r.congCu.some(cc => cc.toLowerCase().includes(q))
      );
    }

    return list;
  }, [searchTerm, selectedFilter]);

  return (
    <div className="space-y-12 pb-16">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F2EDE2] via-[#FAF7EE] to-[#FAF7EE] border-b border-[#E3DACB] pt-10 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          
          {/* Badge & Scope Notice */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-[#EAE2D5] text-[#5A4E45] text-xs font-medium border border-[#D9CEBF]">
            <span className="w-2 h-2 rounded-full bg-[#C0392B] animate-pulse"></span>
            <span>Dự án số hóa di sản văn hóa phi lợi nhuận</span>
            <span className="text-[#8C7E72]">•</span>
            <span className="text-[#8B5A2B] font-semibold">Phạm vi: Tranh dân gian Đông Hồ</span>
          </div>

          {/* Main Title */}
          <h1 className="font-['Playfair_Display',serif] text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#2C241E] tracking-tight leading-tight">
            Khám phá tinh hoa nghề thủ công Việt Nam
          </h1>

          {/* Subtitle & Introduction */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-[#5A4E45] leading-relaxed">
            Nền tảng số hóa, lưu trữ và tư liệu hóa từng công đoạn, nguyên liệu tự nhiên, công cụ mộc bản 
            và kỹ thuật cổ truyền của <strong>Nghề làm tranh dân gian Đông Hồ</strong> – Di sản văn hóa phi vật thể quốc gia 
            và hồ sơ đệ trình UNESCO cần bảo vệ khẩn cấp.
          </p>

          {/* Scope statement notice */}
          <div className="max-w-2xl mx-auto p-3.5 rounded-lg bg-[#FAF0E6] border border-[#ECD9C6] text-xs text-[#7A4B20] text-left sm:text-center">
            <strong>Ghi chú phạm vi nghiên cứu:</strong> Ứng dụng hiện tập trung tư liệu hóa chuyên sâu nghề làm tranh dân gian Đông Hồ (khu phố Đông Khê, phường Song Hồ, TX Thuận Thành, Bắc Ninh), không tuyên bố đã số hóa toàn bộ các nghề thủ công khác của Việt Nam.
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('process')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#C0392B] text-white font-medium text-sm sm:text-base shadow-md hover:bg-[#A93226] transition-all hover:scale-[1.02]"
            >
              <Workflow className="w-5 h-5" />
              <span>Quy Trình Nghề Thủ Công Từng Bước (6 bước)</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <button
              onClick={() => onNavigate('repository')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#2C241E] text-[#FAF7EE] font-medium text-sm sm:text-base hover:bg-[#443830] transition-colors"
            >
              <Database className="w-5 h-5" />
              <span>Kho dữ liệu (18 bản ghi)</span>
            </button>

            <button
              onClick={() => onNavigate('ai-assistant')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-amber-100 text-amber-900 border border-amber-300 font-medium text-sm sm:text-base hover:bg-amber-200 transition-colors"
            >
              <Sparkles className="w-5 h-5 text-amber-600" />
              <span>Hỏi đáp Trợ lý AI</span>
            </button>
          </div>

          {/* Key Metrics Counter */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 max-w-3xl mx-auto">
            <div className="p-3 bg-white/80 rounded-lg border border-[#E3DACB] shadow-sm">
              <div className="text-2xl font-bold font-['Playfair_Display',serif] text-[#C0392B]">
                {PROCESS_STEPS.length}
              </div>
              <div className="text-xs text-[#7A6E65]">Công đoạn chuẩn hóa</div>
            </div>
            <div className="p-3 bg-white/80 rounded-lg border border-[#E3DACB] shadow-sm">
              <div className="text-2xl font-bold font-['Playfair_Display',serif] text-[#8B5A2B]">
                {MATERIALS.length}
              </div>
              <div className="text-xs text-[#7A6E65]">Nguyên liệu tự nhiên</div>
            </div>
            <div className="p-3 bg-white/80 rounded-lg border border-[#E3DACB] shadow-sm">
              <div className="text-2xl font-bold font-['Playfair_Display',serif] text-[#2C241E]">
                {TOOLS.length}
              </div>
              <div className="text-xs text-[#7A6E65]">Công cụ mộc bản</div>
            </div>
            <div className="p-3 bg-white/80 rounded-lg border border-[#E3DACB] shadow-sm">
              <div className="text-2xl font-bold font-['Playfair_Display',serif] text-emerald-700">
                {SOURCES.length}
              </div>
              <div className="text-xs text-[#7A6E65]">Nguồn tư liệu kiểm chứng</div>
            </div>
          </div>

        </div>
      </section>

      {/* Heritage Context Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7EE] rounded-2xl border border-[#D9CEBF] p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C0392B]">
                <MapPin className="w-4 h-4" />
                <span>Không gian di sản Kinh Bắc • Làng Đông Hồ</span>
              </div>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#2C241E]">
                {HERITAGE_DATA.tenDiSan}
              </h2>
              <p className="text-xs font-mono text-[#7A6E65]">
                {HERITAGE_DATA.tenTiengAnh}
              </p>
              <p className="text-sm leading-relaxed text-[#5A4E45]">
                Hình thành từ thế kỷ 16 bên bờ nam sông Đuống (khu phố Đông Khê, phường Song Hồ, thị xã Thuận Thành, tỉnh Bắc Ninh), tranh dân gian Đông Hồ đại diện cho đỉnh cao nghệ thuật in mộc bản thủ công của người Việt. Mỗi bức tranh là một lời chúc cát tường, bình an, phản ánh phong tục tập quán và triết lý sống hòa hợp với thiên nhiên.
              </p>

              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold text-[#2C241E] uppercase tracking-wider">
                  Giá trị di sản đặc sắc:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#4A3E35]">
                  {HERITAGE_DATA.giaTriVanHoa.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-[#F5EFE3] p-2.5 rounded-md border border-[#E8E1D5]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C0392B] mt-1.5 shrink-0"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Legal Status & Verification Card */}
            <div className="bg-[#F2EDE2] p-5 rounded-xl border border-[#E3DACB] space-y-4">
              <div className="flex items-center gap-2 text-[#2C241E] font-bold text-sm pb-2 border-b border-[#D9CEBF]">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Tình trạng công nhận pháp lý</span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="font-semibold text-[#8B5A2B] block">Cấp quốc gia:</span>
                  <p className="text-[#4A3E35] mt-0.5">{HERITAGE_DATA.tinhTrangCongNhan.quocGia}</p>
                </div>
                <div>
                  <span className="font-semibold text-[#8B5A2B] block">Hồ sơ quốc tế UNESCO:</span>
                  <p className="text-[#4A3E35] mt-0.5">{HERITAGE_DATA.tinhTrangCongNhan.quocTe}</p>
                </div>
                <div className="p-2.5 rounded bg-amber-50 border border-amber-200 text-amber-900">
                  <span className="font-bold block mb-0.5">Thực trạng bảo vệ:</span>
                  <span>{HERITAGE_DATA.tinhTrangCongNhan.tinhTrangHienTai}</span>
                </div>
              </div>

              <button
                onClick={() => onNavigate('sources')}
                className="w-full mt-2 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded bg-[#2C241E] text-white text-xs font-medium hover:bg-[#443830] transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Xem đối chiếu 7 nguồn tư liệu</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Live Data Search & Filter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#E3DACB]">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#C0392B]">
              Tra cứu & Khám phá
            </span>
            <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#2C241E]">
              Hệ thống thẻ thông tin di sản
            </h2>
            <p className="text-xs sm:text-sm text-[#7A6E65] mt-1">
              Dữ liệu được nạp trực tiếp từ kho tư liệu kiểm chứng của ứng dụng.
            </p>
          </div>

          <button
            onClick={() => onNavigate('repository')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#C0392B] hover:text-[#962D22] transition-colors"
          >
            <span>Mở toàn bộ 18 bản ghi kho dữ liệu</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C7E72]" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm kiếm công đoạn, vỏ điệp, gỗ thị, than lá tre, ván khắc..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white border border-[#D9CEBF] text-sm text-[#2C241E] placeholder:text-[#9E9185] focus:outline-none focus:ring-2 focus:ring-[#C0392B]/30 focus:border-[#C0392B]"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            <span className="text-xs font-semibold text-[#8B5A2B] flex items-center gap-1 pl-1 pr-2">
              <Filter className="w-3.5 h-3.5" />
              <span>Lọc:</span>
            </span>
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                selectedFilter === 'all'
                  ? 'bg-[#2C241E] text-white'
                  : 'bg-[#F2EDE2] text-[#5A4E45] hover:bg-[#EAE2D5]'
              }`}
            >
              Tất cả ({MASTER_RECORDS.length})
            </button>
            <button
              onClick={() => setSelectedFilter('cong-doan')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                selectedFilter === 'cong-doan'
                  ? 'bg-[#2C241E] text-white'
                  : 'bg-[#F2EDE2] text-[#5A4E45] hover:bg-[#EAE2D5]'
              }`}
            >
              Công đoạn
            </button>
            <button
              onClick={() => setSelectedFilter('nguyen-lieu')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                selectedFilter === 'nguyen-lieu'
                  ? 'bg-[#2C241E] text-white'
                  : 'bg-[#F2EDE2] text-[#5A4E45] hover:bg-[#EAE2D5]'
              }`}
            >
              Nguyên liệu
            </button>
            <button
              onClick={() => setSelectedFilter('cong-cu')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                selectedFilter === 'cong-cu'
                  ? 'bg-[#2C241E] text-white'
                  : 'bg-[#F2EDE2] text-[#5A4E45] hover:bg-[#EAE2D5]'
              }`}
            >
              Công cụ
            </button>
            <button
              onClick={() => setSelectedFilter('kien-thuc')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                selectedFilter === 'kien-thuc'
                  ? 'bg-[#2C241E] text-white'
                  : 'bg-[#F2EDE2] text-[#5A4E45] hover:bg-[#EAE2D5]'
              }`}
            >
              Kiến thức & Tác phẩm
            </button>
          </div>
        </div>

        {/* Results Grid */}
        {filteredRecords.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredRecords.map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenRecord(item)}
                className="group p-5 rounded-xl bg-white border border-[#E3DACB] hover:border-[#C0392B] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#FAF7EE] text-[#8B5A2B] border border-[#E3DACB]">
                      {item.id}
                    </span>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                      Đã xác minh
                    </span>
                  </div>

                  <h3 className="font-['Playfair_Display',serif] text-base font-bold text-[#2C241E] group-hover:text-[#C0392B] transition-colors line-clamp-1">
                    {item.ten}
                  </h3>

                  <p className="text-xs text-[#5A4E45] line-clamp-2 leading-relaxed">
                    {item.moTa}
                  </p>

                  <div className="text-[11px] text-[#7A6E65] space-y-1 pt-2 border-t border-[#F2EDE2]">
                    <p className="truncate">
                      <strong>Nguồn:</strong> {item.nguonTuLieu.tenNguon}
                    </p>
                    <p className="truncate text-[#8C7E72]">
                      <strong>Địa bàn:</strong> {item.diaDiem}
                    </p>
                  </div>
                </div>

                <div className="pt-3 mt-3 flex items-center justify-between text-xs font-medium text-[#C0392B]">
                  <span>Xem chi tiết hồ sơ</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 px-4 rounded-xl bg-[#FAF7EE] border border-[#E3DACB]">
            <p className="text-sm font-medium text-[#7A6E65]">
              Không tìm thấy bản ghi nào phù hợp với từ khóa "{searchTerm}".
            </p>
            <p className="text-xs text-[#8C7E72] mt-1">
              Thử tìm kiếm với các từ khóa: giấy dó, vỏ điệp, ván gỗ thị, hoa hòe, xơ mướp...
            </p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedFilter('all'); }}
              className="mt-3 px-3 py-1.5 rounded bg-[#2C241E] text-white text-xs font-medium"
            >
              Đặt lại bộ lọc
            </button>
          </div>
        )}

      </section>

      {/* Featured Sources Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#241E1A] text-[#FAF7EE] rounded-2xl p-6 sm:p-8 space-y-6 border border-[#3D332D]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Căn cứ khoa học & Pháp lý
              </span>
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-white mt-1">
                7 Nguồn tư liệu kiểm chứng độc lập
              </h2>
              <p className="text-xs sm:text-sm text-[#C2B7A8] mt-1">
                Tất cả dữ liệu trong ứng dụng đều được đối chiếu từ hồ sơ quốc tế và văn bản quy phạm pháp luật nhà nước.
              </p>
            </div>

            <button
              onClick={() => onNavigate('sources')}
              className="self-start sm:self-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-400 text-[#241E1A] font-semibold text-xs sm:text-sm hover:bg-amber-300 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span>Xem toàn bộ 7 nguồn</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            {SOURCES.slice(0, 3).map((s) => (
              <div key={s.maNguon} className="p-4 rounded-xl bg-[#2D2622] border border-[#443831] space-y-2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-amber-400 font-mono font-bold text-[11px] mb-1">
                    <span>{s.maNguon}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                      {s.trangThaiKiemTra}
                    </span>
                  </div>
                  <h4 className="font-semibold text-white text-sm line-clamp-2">
                    {s.tenTaiLieu}
                  </h4>
                  <p className="text-[#A89C8B] text-[11px] mt-1 line-clamp-2">
                    {s.noiDungSuDung}
                  </p>
                </div>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-amber-300 hover:text-white pt-2 border-t border-[#3D332D]"
                >
                  <span>Mở tài liệu gốc</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
