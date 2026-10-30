import React, { useState } from 'react';
import { X, ExternalLink, CheckCircle, Shield, MapPin, Tag, Code, FileText, Calendar } from 'lucide-react';
import { HeritageRecord, GROUP_LABELS } from '../data/records';

interface RecordModalProps {
  record: HeritageRecord | null;
  onClose: () => void;
}

export const RecordModal: React.FC<RecordModalProps> = ({ record, onClose }) => {
  const [activeTab, setActiveTab] = useState<'detail' | 'json'>('detail');

  if (!record) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="bg-[#FAF7EE] rounded-xl shadow-2xl border border-[#D9CEBF] max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden text-[#2C241E] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 py-4 bg-[#F2EDE2] border-b border-[#E3DACB] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#2C241E] text-white">
              {record.id}
            </span>
            <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-[#C0392B]/10 text-[#C0392B] border border-[#C0392B]/20">
              {GROUP_LABELS[record.nhomDuLieu]}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              <CheckCircle className="w-3 h-3 text-emerald-600" />
              <span>Đã xác minh</span>
            </span>
          </div>

          <button 
            onClick={onClose}
            className="p-1 rounded-md text-[#7A6E65] hover:text-[#2C241E] hover:bg-[#E4DCD0] transition-colors"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex border-b border-[#E3DACB] bg-[#EFE9DD] px-5">
          <button
            onClick={() => setActiveTab('detail')}
            className={`flex items-center gap-1.5 py-2.5 px-3 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'detail'
                ? 'border-[#C0392B] text-[#C0392B]'
                : 'border-transparent text-[#7A6E65] hover:text-[#2C241E]'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Hồ sơ chi tiết</span>
          </button>
          <button
            onClick={() => setActiveTab('json')}
            className={`flex items-center gap-1.5 py-2.5 px-3 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'json'
                ? 'border-[#C0392B] text-[#C0392B]'
                : 'border-transparent text-[#7A6E65] hover:text-[#2C241E]'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>Cấu trúc JSON</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-sm leading-relaxed">
          {activeTab === 'detail' ? (
            <>
              {/* Title & Short Description */}
              <div>
                <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#2C241E] mb-1.5">
                  {record.ten}
                </h3>
                <p className="text-sm text-[#5A4E45] italic bg-[#F5EFE3] p-3 rounded-lg border-l-4 border-[#C0392B]">
                  "{record.moTa}"
                </p>
              </div>

              {/* Full Detailed Content */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8B5A2B]">
                  Nội dung tư liệu hóa chi tiết:
                </h4>
                <p className="text-[#3C322A] whitespace-pre-line bg-white/70 p-3.5 rounded-lg border border-[#E8E1D5]">
                  {record.noiDungChiTiet}
                </p>
              </div>

              {/* Location & Metadata Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-[#F5EFE3] p-3 rounded-lg border border-[#E8E1D5]">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-[#8B5A2B] mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C0392B]" />
                    <span>Địa bàn di sản:</span>
                  </span>
                  <p className="text-xs text-[#2C241E]">{record.diaDiem}</p>
                </div>

                <div className="bg-[#F5EFE3] p-3 rounded-lg border border-[#E8E1D5]">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-[#8B5A2B] mb-1">
                    <Calendar className="w-3.5 h-3.5 text-[#C0392B]" />
                    <span>Ngày cập nhật dữ liệu:</span>
                  </span>
                  <p className="text-xs text-[#2C241E] font-mono">{record.ngayCapNhat}</p>
                </div>
              </div>

              {/* Related tags */}
              <div className="space-y-2 pt-1">
                {record.congDoanLienQuan.length > 0 && (
                  <div>
                    <span className="text-xs font-bold text-[#8B5A2B] flex items-center gap-1 mb-1">
                      <Tag className="w-3 h-3" />
                      <span>Công đoạn liên quan:</span>
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {record.congDoanLienQuan.map((cd, i) => (
                        <span key={i} className="text-xs px-2.5 py-0.5 rounded-full bg-[#EAE2D5] text-[#4A3E35]">
                          {cd}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {record.nguyenLieu.length > 0 && (
                  <div>
                    <span className="text-xs font-bold text-[#8B5A2B] flex items-center gap-1 mb-1">
                      <Tag className="w-3 h-3" />
                      <span>Nguyên liệu cấu thành:</span>
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {record.nguyenLieu.map((nl, i) => (
                        <span key={i} className="text-xs px-2.5 py-0.5 rounded-full bg-[#E2ECE9] text-[#1E4D40]">
                          {nl}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {record.congCu.length > 0 && (
                  <div>
                    <span className="text-xs font-bold text-[#8B5A2B] flex items-center gap-1 mb-1">
                      <Tag className="w-3 h-3" />
                      <span>Công cụ / Dụng cụ:</span>
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {record.congCu.map((cc, i) => (
                        <span key={i} className="text-xs px-2.5 py-0.5 rounded-full bg-[#F5E5D8] text-[#7A3E1E]">
                          {cc}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Photo Caption */}
              {record.anh && (
                <div className="p-3 rounded-lg bg-[#FAF7EE] border border-[#D9CEBF] text-xs space-y-1">
                  <span className="font-semibold text-[#8B5A2B]">Tư liệu hình ảnh & hiện vật:</span>
                  <p className="text-[#5A4E45]">{record.anh.chuThich}</p>
                  <p className="text-[11px] text-[#8C7E72]">
                    <span className="font-medium">Nguồn ảnh:</span> {record.anh.nguonAnh}
                  </p>
                </div>
              )}

              {/* Verified Source Reference Box */}
              <div className="p-3.5 rounded-lg bg-[#2C241E] text-[#EFE9DD] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Nguồn tư liệu đối chiếu: [{record.nguonTuLieu.maNguon}]</span>
                  </span>
                  <a
                    href={record.nguonTuLieu.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-amber-300 hover:text-white bg-white/10 hover:bg-white/20 px-2 py-1 rounded transition-colors"
                  >
                    <span>Mở nguồn gốc</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-xs font-semibold text-white">
                  {record.nguonTuLieu.tenNguon}
                </p>
                <p className="text-[11px] text-[#C2B7A8]">
                  Cơ quan: {record.nguonTuLieu.coQuan}
                </p>
                <p className="text-xs text-[#D8CEBC] italic border-t border-[#4A3E35] pt-1.5">
                  "{record.nguonTuLieu.trichDan}"
                </p>
              </div>
            </>
          ) : (
            <div className="space-y-2">
              <p className="text-xs text-[#7A6E65]">
                Dữ liệu chuẩn hóa theo định dạng JSON với đầy đủ 13 trường thông tin:
              </p>
              <pre className="bg-[#241E1A] text-amber-300 p-4 rounded-lg text-xs font-mono overflow-x-auto max-h-[50vh] border border-[#3D332D]">
                {JSON.stringify(record, null, 2)}
              </pre>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-[#F2EDE2] border-t border-[#E3DACB] flex items-center justify-between">
          <p className="text-xs text-[#7A6E65]">
            Dữ liệu đã qua đối chiếu tư liệu khoa học.
          </p>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-md bg-[#2C241E] text-white text-xs font-medium hover:bg-[#443830] transition-colors"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
