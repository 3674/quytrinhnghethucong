import React from 'react';
import { Scroll, ShieldCheck, Heart, ExternalLink } from 'lucide-react';
import { ActiveScreen } from '../types';

interface FooterProps {
  onNavigate: (screen: ActiveScreen) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#241E1A] text-[#D8CEBC] pt-12 pb-8 border-t-4 border-[#C0392B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Col 1: About App */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-[#C0392B] flex items-center justify-center text-white">
                <Scroll className="w-4 h-4" />
              </div>
              <span className="font-['Playfair_Display',serif] font-bold text-base text-white">
                Quy Trình Nghề Thủ Công Từng Bước
              </span>
            </div>
            <p className="text-xs leading-relaxed text-[#B8AB98]">
              Nền tảng số hóa, lưu trữ và phổ biến tri thức nghề thủ công truyền thống Việt Nam.
              Tiêu điểm đợt 1: <strong className="text-white font-medium">Nghề làm tranh dân gian Đông Hồ</strong> (phường Song Hồ, TX Thuận Thành, Bắc Ninh).
            </p>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#332B25] text-amber-300 text-xs border border-amber-900/40">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Dự án xã hội phi lợi nhuận 100%</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#EAE2D5] mb-3 pb-1 border-b border-[#3D332D]">
              Điều hướng ứng dụng
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate('home')} 
                  className="hover:text-amber-300 transition-colors"
                >
                  Trang chủ & Tổng quan di sản
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('process')} 
                  className="hover:text-amber-300 transition-colors"
                >
                  Quy trình nghề thủ công từng bước (6 công đoạn)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('library')} 
                  className="hover:text-amber-300 transition-colors"
                >
                  Thư viện nguyên liệu & Công cụ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('repository')} 
                  className="hover:text-amber-300 transition-colors"
                >
                  Kho dữ liệu di sản (18 bản ghi)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('ai-assistant')} 
                  className="hover:text-amber-300 transition-colors flex items-center gap-1"
                >
                  <span>Trợ lý AI di sản (Gemini)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('sources')} 
                  className="hover:text-amber-300 transition-colors"
                >
                  Nguồn tư liệu đối chiếu (7 nguồn)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')} 
                  className="hover:text-amber-300 transition-colors"
                >
                  Giới thiệu & Báo cáo thực tập
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Reference & Authorities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#EAE2D5] mb-3 pb-1 border-b border-[#3D332D]">
              Nguồn tư liệu căn cứ
            </h4>
            <ul className="space-y-2 text-xs text-[#B8AB98]">
              <li>
                <a 
                  href="https://ich.unesco.org/en/USL/craft-of-making-ong-h-folk-woodblock-printings-01737?USL=01737" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1"
                >
                  <span>Hồ sơ UNESCO USL 01737</span>
                  <ExternalLink className="w-3 h-3 text-[#7A6E65]" />
                </a>
              </li>
              <li>
                <a 
                  href="https://dsvh.gov.vn/danh-muc-di-san-van-hoa-phi-vat-the-quoc-gia-1756" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1"
                >
                  <span>QĐ 5079/QĐ-BVHTTDL (Di sản QG)</span>
                  <ExternalLink className="w-3 h-3 text-[#7A6E65]" />
                </a>
              </li>
              <li>
                <a 
                  href="https://vanban.chinhphu.vn/?docid=212473&pageid=27160" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1"
                >
                  <span>Luật Di sản văn hóa số 45/2024/QH15</span>
                  <ExternalLink className="w-3 h-3 text-[#7A6E65]" />
                </a>
              </li>
              <li>
                <a 
                  href="https://bacninh.gov.vn/du-lich-bac-ninh/lang-tranh-dong-ho-di-san-van-hoa-dac-sac" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1"
                >
                  <span>Cổng TTĐT Tỉnh Bắc Ninh</span>
                  <ExternalLink className="w-3 h-3 text-[#7A6E65]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Project Info & Author */}
          <div className="bg-[#1C1714] p-4 rounded-lg border border-[#3D332D] space-y-2 text-xs">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
              Thông tin đề tài thực tập
            </h4>
            <p><span className="text-[#8C7E72]">Sinh viên:</span> <strong className="text-white">Trần Quang Đức</strong></p>
            <p><span className="text-[#8C7E72]">Mã sinh viên:</span> <span className="font-mono text-amber-300">PH58855</span></p>
            <p><span className="text-[#8C7E72]">Nhóm:</span> <span className="text-white">Nhóm 1</span></p>
            <p><span className="text-[#8C7E72]">Chương trình:</span> <span className="text-white">Thực tập sinh Đợt 15</span></p>
            <p><span className="text-[#8C7E72]">Đơn vị:</span> <span className="text-white">IMTA TECH × FPT Polytechnic</span></p>
            <p className="text-[11px] pt-1 text-[#8C7E72] border-t border-[#3D332D]">
              Ứng dụng không kinh doanh, không thu phí và không chứa quảng cáo.
            </p>
          </div>

        </div>

        {/* Bottom copyright and disclaimer */}
        <div className="pt-6 border-t border-[#3D332D] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8C7E72]">
          <p className="text-center md:text-left">
            © 2026 Quy Trình Nghề Thủ Công Từng Bước. Bản quyền nội dung di sản thuộc về cộng đồng chủ thể Làng tranh Đông Hồ (phường Song Hồ, Bắc Ninh).
          </p>
          <div className="flex items-center gap-1 text-center">
            <span>Dự án bảo tồn di sản vì cộng đồng</span>
            <Heart className="w-3.5 h-3.5 text-[#C0392B] fill-[#C0392B]" />
          </div>
        </div>
      </div>
    </footer>
  );
};
