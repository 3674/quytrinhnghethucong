import React, { useState } from 'react';
import { 
  Workflow, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  ExternalLink, 
  Layers, 
  Wrench, 
  AlertCircle,
  Lightbulb,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { PROCESS_STEPS, ProcessStep } from '../data/process';

interface ProcessScreenProps {
  onOpenStepDetail?: (step: ProcessStep) => void;
}

export const ProcessScreen: React.FC<ProcessScreenProps> = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [detailModalStep, setDetailModalStep] = useState<ProcessStep | null>(null);

  const step = PROCESS_STEPS[currentStepIndex];

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentStepIndex < PROCESS_STEPS.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="border-b border-[#E3DACB] pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#C0392B]/10 text-[#C0392B] text-xs font-semibold">
          <Workflow className="w-3.5 h-3.5" />
          <span>CHỨC NĂNG TRỌNG TÂM CỦA ỨNG DỤNG</span>
        </div>
        <h1 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl font-bold text-[#2C241E]">
          Quy Trình Nghề Thủ Công Từng Bước
        </h1>
        <p className="text-xs font-semibold text-[#8B5A2B] uppercase tracking-wider">
          Tiêu điểm: Nghề làm tranh dân gian Đông Hồ (6 công đoạn mộc bản truyền thống)
        </p>
        <p className="text-sm text-[#5A4E45] max-w-3xl">
          Trình bày quy trình 6 công đoạn mộc bản truyền thống được tư liệu hóa từ <strong>Hồ sơ UNESCO số 01737</strong> và <strong>Hồ sơ khoa học di sản quốc gia VICAS</strong>. Chỉ các công đoạn có căn cứ chứng minh mới được đưa vào hệ thống.
        </p>
      </div>

      {/* Step Indicator Navigation */}
      <div className="bg-white rounded-xl border border-[#E3DACB] p-4 shadow-sm">
        <div className="flex items-center justify-between mb-3 text-xs text-[#7A6E65]">
          <span className="font-semibold text-[#8B5A2B]">
            DÒNG THỜI GIAN CÔNG ĐOẠN ({currentStepIndex + 1} / {PROCESS_STEPS.length})
          </span>
          <span className="font-mono text-[11px]">
            {step.trangThaiXacMinh === 'Đã xác minh' ? (
              <span className="text-emerald-700 font-medium">✓ Dữ liệu đã xác minh</span>
            ) : (
              <span className="text-amber-700">Chưa có đủ tư liệu xác minh</span>
            )}
          </span>
        </div>

        {/* Steps buttons bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {PROCESS_STEPS.map((s, idx) => {
            const isCurrent = idx === currentStepIndex;
            const isPassed = idx < currentStepIndex;
            return (
              <button
                key={s.maCongDoan}
                onClick={() => setCurrentStepIndex(idx)}
                className={`p-2.5 rounded-lg text-left transition-all border ${
                  isCurrent
                    ? 'bg-[#2C241E] text-white border-[#2C241E] shadow-sm'
                    : isPassed
                    ? 'bg-[#F5EFE3] text-[#4A3E35] border-[#E3DACB] hover:bg-[#EAE2D5]'
                    : 'bg-white text-[#7A6E65] border-[#E8E1D5] hover:bg-[#FAF7EE]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-mono font-bold ${isCurrent ? 'text-amber-300' : 'text-[#8B5A2B]'}`}>
                    {s.maCongDoan}
                  </span>
                  {isPassed && <CheckCircle2 className="w-3 h-3 text-emerald-600" />}
                </div>
                <div className="text-xs font-semibold line-clamp-1">
                  {s.tenCongDoan}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Active Step Showcase Card */}
      <div className="bg-white rounded-2xl border-2 border-[#E3DACB] p-6 sm:p-8 shadow-md space-y-6">
        
        {/* Top bar of step card */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#F2EDE2]">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm font-extrabold px-3 py-1 rounded bg-[#C0392B] text-white">
              {step.maCongDoan}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#8B5A2B]">
              Bước {step.thuTu} trong 6 công đoạn
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>{step.trangThaiXacMinh}</span>
            </span>
            <button
              onClick={() => setDetailModalStep(step)}
              className="inline-flex items-center gap-1 px-3 py-1 rounded bg-[#F2EDE2] text-[#2C241E] hover:bg-[#EAE2D5] text-xs font-medium transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Xem chi tiết</span>
            </button>
          </div>
        </div>

        {/* Step Name & Description */}
        <div className="space-y-3">
          <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#2C241E]">
            {step.tenCongDoan}
          </h2>
          <p className="text-base text-[#4A3E35] leading-relaxed bg-[#FAF7EE] p-4 rounded-xl border border-[#E8E1D5]">
            {step.moTa}
          </p>
        </div>

        {/* Technical description from verified dossier */}
        <div className="space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#8B5A2B] flex items-center gap-1.5">
            <Workflow className="w-4 h-4 text-[#C0392B]" />
            <span>Kỹ thuật được mô tả trong nguồn tư liệu:</span>
          </h3>
          <p className="text-sm text-[#3C322A] leading-relaxed p-4 rounded-xl bg-white border border-[#E3DACB] whitespace-pre-line">
            {step.kyThuatMoTa}
          </p>
        </div>

        {/* Materials & Tools Connected */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="p-4 rounded-xl bg-[#F5EFE3] border border-[#E8E1D5] space-y-2">
            <span className="flex items-center gap-1.5 text-xs font-bold text-[#8B5A2B]">
              <Layers className="w-4 h-4 text-emerald-700" />
              <span>Nguyên liệu liên quan ({step.nguyenLieuLienQuan.length}):</span>
            </span>
            <div className="flex flex-wrap gap-1.5">
              {step.nguyenLieuLienQuan.map((nl, i) => (
                <span key={i} className="text-xs px-2.5 py-1 rounded bg-white text-[#2C241E] border border-[#E3DACB] shadow-2xl">
                  {nl}
                </span>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#F5EFE3] border border-[#E8E1D5] space-y-2">
            <span className="flex items-center gap-1.5 text-xs font-bold text-[#8B5A2B]">
              <Wrench className="w-4 h-4 text-[#C0392B]" />
              <span>Công cụ liên quan ({step.congCuLienQuan.length}):</span>
            </span>
            <div className="flex flex-wrap gap-1.5">
              {step.congCuLienQuan.map((cc, i) => (
                <span key={i} className="text-xs px-2.5 py-1 rounded bg-white text-[#2C241E] border border-[#E3DACB] shadow-2xl">
                  {cc}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Technical Caveat Box */}
        <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 flex items-start gap-2.5">
          <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold block mb-0.5">Lưu ý kỹ thuật bí truyền:</strong>
            <span>{step.luuYKyThuat}</span>
          </div>
        </div>

        {/* Photo Caption Documentation */}
        {step.chuThichAnh && (
          <div className="p-3.5 rounded-lg bg-[#FAF7EE] border border-[#D9CEBF] text-xs text-[#5A4E45] space-y-1">
            <span className="font-bold text-[#8B5A2B]">Chú thích tư liệu hiện vật:</span>
            <p>{step.chuThichAnh}</p>
          </div>
        )}

        {/* Specific Reference Source Box */}
        <div className="p-4 rounded-xl bg-[#2C241E] text-[#EFE9DD] space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
              <ShieldCheck className="w-4 h-4" />
              <span>Nguồn tham khảo cụ thể: [{step.nguonThamKhao.maNguon}]</span>
            </span>
            <a
              href={step.nguonThamKhao.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-amber-300 hover:text-white bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded transition-colors"
            >
              <span>Đối chiếu văn bản gốc</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <p className="text-sm font-semibold text-white">
            {step.nguonThamKhao.tenNguon}
          </p>
          <p className="text-xs text-[#C2B7A8] italic border-t border-[#4A3E35] pt-1.5">
            "{step.nguonThamKhao.trichDan}"
          </p>
        </div>

        {/* Prev / Next Navigation Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-[#F2EDE2]">
          <button
            onClick={handlePrev}
            disabled={currentStepIndex === 0}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              currentStepIndex === 0
                ? 'opacity-40 cursor-not-allowed bg-[#F2EDE2] text-[#8C7E72]'
                : 'bg-[#2C241E] text-white hover:bg-[#443830]'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Công đoạn trước</span>
          </button>

          <span className="text-xs font-mono text-[#7A6E65]">
            Bước {currentStepIndex + 1} / {PROCESS_STEPS.length}
          </span>

          <button
            onClick={handleNext}
            disabled={currentStepIndex === PROCESS_STEPS.length - 1}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              currentStepIndex === PROCESS_STEPS.length - 1
                ? 'opacity-40 cursor-not-allowed bg-[#F2EDE2] text-[#8C7E72]'
                : 'bg-[#C0392B] text-white hover:bg-[#A93226]'
            }`}
          >
            <span>Công đoạn tiếp theo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Step Detail Modal */}
      {detailModalStep && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setDetailModalStep(null)}
        >
          <div 
            className="bg-[#FAF7EE] rounded-xl shadow-2xl border border-[#D9CEBF] max-w-xl w-full p-6 space-y-4 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#E3DACB]">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#C0392B] text-white">
                  {detailModalStep.maCongDoan}
                </span>
                <span className="text-xs font-bold text-[#8B5A2B]">Hồ sơ công đoạn</span>
              </div>
              <button 
                onClick={() => setDetailModalStep(null)}
                className="text-xs px-2.5 py-1 rounded bg-[#EAE2D5] text-[#2C241E] hover:bg-[#D9CEBF]"
              >
                Đóng
              </button>
            </div>

            <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#2C241E]">
              {detailModalStep.tenCongDoan}
            </h3>

            <div className="text-xs text-[#4A3E35] space-y-2 leading-relaxed">
              <p><strong>Mô tả:</strong> {detailModalStep.moTa}</p>
              <p><strong>Kỹ thuật tư liệu:</strong> {detailModalStep.kyThuatMoTa}</p>
              <p><strong>Lưu ý:</strong> {detailModalStep.luuYKyThuat}</p>
              <div className="p-3 rounded bg-white border border-[#E3DACB]">
                <p><strong>Nguồn:</strong> {detailModalStep.nguonThamKhao.tenNguon}</p>
                <p className="italic text-[#7A6E65]">"{detailModalStep.nguonThamKhao.trichDan}"</p>
                <a 
                  href={detailModalStep.nguonThamKhao.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#C0392B] font-semibold mt-1"
                >
                  <span>Mở tài liệu đối chiếu</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
