import React, { useState, useMemo } from 'react';
import { 
  Layers, 
  Wrench, 
  Search, 
  Filter, 
  ShieldCheck, 
  ExternalLink, 
  Calendar, 
  Tag, 
  ArrowRight,
  Info,
  X
} from 'lucide-react';
import { MATERIALS, MaterialItem } from '../data/materials';
import { TOOLS, ToolItem } from '../data/tools';

export const LibraryScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'materials' | 'tools'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [subCategoryFilter, setSubCategoryFilter] = useState<string>('all');
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialItem | null>(null);
  const [selectedTool, setSelectedTool] = useState<ToolItem | null>(null);

  // Filter materials
  const filteredMaterials = useMemo(() => {
    let list = MATERIALS;
    if (activeTab === 'tools') return [];
    
    if (subCategoryFilter !== 'all' && activeTab === 'materials') {
      list = list.filter(m => m.phanLoai === subCategoryFilter);
    }

    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      list = list.filter(m => 
        m.tenGoi.toLowerCase().includes(q) ||
        m.moTaKiemChung.toLowerCase().includes(q) ||
        m.vaiTroTrongNghe.toLowerCase().includes(q) ||
        m.maBanGhi.toLowerCase().includes(q) ||
        m.nguonGoc.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeTab, subCategoryFilter, searchTerm]);

  // Filter tools
  const filteredTools = useMemo(() => {
    let list = TOOLS;
    if (activeTab === 'materials') return [];

    if (subCategoryFilter !== 'all' && activeTab === 'tools') {
      list = list.filter(t => t.phanLoai === subCategoryFilter);
    }

    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      list = list.filter(t => 
        t.tenGoi.toLowerCase().includes(q) ||
        t.dacDiemCauTao.toLowerCase().includes(q) ||
        t.vaiTroTrongNghe.toLowerCase().includes(q) ||
        t.maBanGhi.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeTab, subCategoryFilter, searchTerm]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="border-b border-[#E3DACB] pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#8B5A2B]/10 text-[#8B5A2B] text-xs font-semibold">
          <Layers className="w-3.5 h-3.5" />
          <span>THƯ VIỆN HIỆN VẬT TƯ LIỆU HÓA</span>
        </div>
        <h1 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl font-bold text-[#2C241E]">
          Thư viện nguyên liệu và công cụ mộc bản
        </h1>
        <p className="text-sm text-[#5A4E45] max-w-3xl">
          Tổng hợp toàn bộ danh mục nguyên liệu thiên nhiên (vỏ điệp, giấy dó, hoa hòe, tro lá tre, sỏi son) và công cụ mộc bản (ve đục, ván gỗ thị, chổi thét, tay xoa xơ mướp) của làng Đông Hồ. Tất cả bản ghi đều đã được đối chiếu tài liệu khoa học.
        </p>
      </div>

      {/* Main Tab Controls & Search */}
      <div className="bg-white rounded-xl border border-[#E3DACB] p-4 sm:p-5 shadow-sm space-y-4">
        
        {/* Top filter row: Tab Switcher & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          
          {/* Main Category Tabs */}
          <div className="inline-flex rounded-lg bg-[#F2EDE2] p-1 border border-[#E3DACB] shrink-0">
            <button
              onClick={() => { setActiveTab('all'); setSubCategoryFilter('all'); }}
              className={`px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-[#2C241E] text-white shadow-sm'
                  : 'text-[#5A4E45] hover:text-[#2C241E]'
              }`}
            >
              Tất cả ({MATERIALS.length + TOOLS.length})
            </button>
            <button
              onClick={() => { setActiveTab('materials'); setSubCategoryFilter('all'); }}
              className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'materials'
                  ? 'bg-[#2C241E] text-white shadow-sm'
                  : 'text-[#5A4E45] hover:text-[#2C241E]'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-emerald-500" />
              <span>Nguyên liệu ({MATERIALS.length})</span>
            </button>
            <button
              onClick={() => { setActiveTab('tools'); setSubCategoryFilter('all'); }}
              className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'tools'
                  ? 'bg-[#2C241E] text-white shadow-sm'
                  : 'text-[#5A4E45] hover:text-[#2C241E]'
              }`}
            >
              <Wrench className="w-3.5 h-3.5 text-[#C0392B]" />
              <span>Công cụ ({TOOLS.length})</span>
            </button>
          </div>

          {/* Search box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#8C7E72]" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm theo tên (vỏ điệp, giấy dó, ve đục, gỗ thị...)"
              className="w-full pl-9 pr-3 py-2 rounded-lg bg-[#FAF7EE] border border-[#D9CEBF] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#C0392B]/30 focus:border-[#C0392B]"
            />
          </div>

        </div>

        {/* Sub-category Pill Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-[#F2EDE2]">
          <span className="text-xs font-semibold text-[#8B5A2B] shrink-0">
            Phân loại con:
          </span>
          <button
            onClick={() => setSubCategoryFilter('all')}
            className={`px-2.5 py-1 rounded text-xs font-medium whitespace-nowrap transition-colors ${
              subCategoryFilter === 'all'
                ? 'bg-[#8B5A2B] text-white'
                : 'bg-[#F2EDE2] text-[#5A4E45] hover:bg-[#EAE2D5]'
            }`}
          >
            Tất cả
          </button>

          {activeTab !== 'tools' && (
            <>
              {['Vật liệu nền', 'Chất tạo màu', 'Chất kết dính', 'Chất tạo hiệu ứng'].map(cat => (
                <button
                  key={cat}
                  onClick={() => { setActiveTab('materials'); setSubCategoryFilter(cat); }}
                  className={`px-2.5 py-1 rounded text-xs font-medium whitespace-nowrap transition-colors ${
                    subCategoryFilter === cat && activeTab === 'materials'
                      ? 'bg-emerald-800 text-white'
                      : 'bg-emerald-50 text-emerald-900 border border-emerald-200 hover:bg-emerald-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </>
          )}

          {activeTab !== 'materials' && (
            <>
              {['Dụng cụ khắc ván', 'Dụng cụ in ấn', 'Dụng cụ gia công giấy & màu', 'Dụng cụ phơi sấy'].map(cat => (
                <button
                  key={cat}
                  onClick={() => { setActiveTab('tools'); setSubCategoryFilter(cat); }}
                  className={`px-2.5 py-1 rounded text-xs font-medium whitespace-nowrap transition-colors ${
                    subCategoryFilter === cat && activeTab === 'tools'
                      ? 'bg-[#C0392B] text-white'
                      : 'bg-red-50 text-red-900 border border-red-200 hover:bg-red-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </>
          )}
        </div>

      </div>

      {/* Grid of Materials */}
      {filteredMaterials.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold text-[#2C241E]">
            <Layers className="w-4 h-4 text-emerald-700" />
            <span>DANH MỤC NGUYÊN LIỆU TỰ NHIÊN ({filteredMaterials.length})</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredMaterials.map((item) => (
              <div 
                key={item.maBanGhi}
                className="bg-white rounded-xl border border-[#E3DACB] hover:border-emerald-600 hover:shadow-md transition-all p-5 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {item.maBanGhi}
                    </span>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-[#FAF7EE] text-[#5A4E45] border border-[#E3DACB]">
                      {item.phanLoai}
                    </span>
                  </div>

                  <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#2C241E]">
                    {item.tenGoi}
                  </h3>

                  <p className="text-xs text-[#5A4E45] line-clamp-2 leading-relaxed">
                    {item.moTaKiemChung}
                  </p>

                  <div className="text-xs bg-[#F5EFE3] p-2.5 rounded-lg border border-[#E8E1D5] space-y-1">
                    <p className="text-[#8B5A2B] font-semibold">Vai trò trong nghề:</p>
                    <p className="text-[#3C322A] line-clamp-2">{item.vaiTroTrongNghe}</p>
                  </div>

                  <div className="space-y-1 pt-1">
                    <span className="text-[11px] font-bold text-[#7A6E65] flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      <span>Công đoạn áp dụng:</span>
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {item.congDoanLienQuan.map((cd, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-[#FAF7EE] text-[#4A3E35] border border-[#E3DACB]">
                          {cd}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F2EDE2] flex items-center justify-between text-xs">
                  <span className="text-[11px] text-[#8C7E72] font-mono">
                    Cập nhật: {item.ngayCapNhat}
                  </span>
                  <button
                    onClick={() => setSelectedMaterial(item)}
                    className="inline-flex items-center gap-1 font-semibold text-emerald-800 hover:text-emerald-950"
                  >
                    <span>Xem chi tiết</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Grid of Tools */}
      {filteredTools.length > 0 && (
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-2 text-sm font-bold text-[#2C241E]">
            <Wrench className="w-4 h-4 text-[#C0392B]" />
            <span>DANH MỤC CÔNG CỤ MỘC BẢN ({filteredTools.length})</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredTools.map((tool) => (
              <div 
                key={tool.maBanGhi}
                className="bg-white rounded-xl border border-[#E3DACB] hover:border-[#C0392B] hover:shadow-md transition-all p-5 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-red-50 text-red-800 border border-red-200">
                      {tool.maBanGhi}
                    </span>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-[#FAF7EE] text-[#5A4E45] border border-[#E3DACB]">
                      {tool.phanLoai}
                    </span>
                  </div>

                  <h3 className="font-['Playfair_Display',serif] text-lg font-bold text-[#2C241E]">
                    {tool.tenGoi}
                  </h3>

                  <p className="text-xs text-[#5A4E45] line-clamp-2 leading-relaxed">
                    {tool.dacDiemCauTao}
                  </p>

                  <div className="text-xs bg-[#F5EFE3] p-2.5 rounded-lg border border-[#E8E1D5] space-y-1">
                    <p className="text-[#8B5A2B] font-semibold">Vai trò trong nghề:</p>
                    <p className="text-[#3C322A] line-clamp-2">{tool.vaiTroTrongNghe}</p>
                  </div>

                  <div className="space-y-1 pt-1">
                    <span className="text-[11px] font-bold text-[#7A6E65] flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      <span>Công đoạn áp dụng:</span>
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {tool.congDoanLienQuan.map((cd, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-[#FAF7EE] text-[#4A3E35] border border-[#E3DACB]">
                          {cd}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F2EDE2] flex items-center justify-between text-xs">
                  <span className="text-[11px] text-[#8C7E72] font-mono">
                    Cập nhật: {tool.ngayCapNhat}
                  </span>
                  <button
                    onClick={() => setSelectedTool(tool)}
                    className="inline-flex items-center gap-1 font-semibold text-[#C0392B] hover:text-[#962D22]"
                  >
                    <span>Xem chi tiết</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {filteredMaterials.length === 0 && filteredTools.length === 0 && (
        <div className="text-center py-16 bg-white rounded-xl border border-[#E3DACB] space-y-2">
          <Info className="w-8 h-8 text-[#8C7E72] mx-auto" />
          <p className="text-sm font-semibold text-[#2C241E]">Không tìm thấy nguyên liệu hoặc công cụ nào</p>
          <p className="text-xs text-[#7A6E65]">Thử xóa bộ lọc hoặc tìm từ khóa khác</p>
          <button
            onClick={() => { setSearchTerm(''); setSubCategoryFilter('all'); setActiveTab('all'); }}
            className="mt-2 px-3 py-1.5 rounded bg-[#2C241E] text-white text-xs"
          >
            Đặt lại tất cả
          </button>
        </div>
      )}

      {/* Material Detail Modal */}
      {selectedMaterial && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedMaterial(null)}
        >
          <div 
            className="bg-[#FAF7EE] rounded-xl shadow-2xl border border-[#D9CEBF] max-w-lg w-full p-6 space-y-4 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#E3DACB]">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-emerald-800 text-white">
                  {selectedMaterial.maBanGhi}
                </span>
                <span className="text-xs font-medium text-emerald-800">
                  {selectedMaterial.phanLoai}
                </span>
              </div>
              <button 
                onClick={() => setSelectedMaterial(null)}
                className="p-1 rounded text-[#7A6E65] hover:bg-[#EAE2D5]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#2C241E]">
              {selectedMaterial.tenGoi}
            </h3>

            <div className="text-xs text-[#4A3E35] space-y-2 leading-relaxed">
              <p><strong>Nguồn gốc tự nhiên:</strong> {selectedMaterial.nguonGoc}</p>
              <p><strong>Mô tả đã kiểm chứng:</strong> {selectedMaterial.moTaKiemChung}</p>
              <p><strong>Vai trò trong nghề:</strong> {selectedMaterial.vaiTroTrongNghe}</p>
              
              <div className="p-3 rounded bg-white border border-[#E3DACB] space-y-1">
                <span className="font-bold text-[#8B5A2B]">Nguồn tư liệu kiểm chứng:</span>
                <p>{selectedMaterial.nguonTuLieu.tenNguon}</p>
                <a
                  href={selectedMaterial.nguonTuLieu.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-emerald-700 font-semibold mt-1"
                >
                  <span>Mở tài liệu nguồn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tool Detail Modal */}
      {selectedTool && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedTool(null)}
        >
          <div 
            className="bg-[#FAF7EE] rounded-xl shadow-2xl border border-[#D9CEBF] max-w-lg w-full p-6 space-y-4 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#E3DACB]">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#C0392B] text-white">
                  {selectedTool.maBanGhi}
                </span>
                <span className="text-xs font-medium text-[#C0392B]">
                  {selectedTool.phanLoai}
                </span>
              </div>
              <button 
                onClick={() => setSelectedTool(null)}
                className="p-1 rounded text-[#7A6E65] hover:bg-[#EAE2D5]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <h3 className="font-['Playfair_Display',serif] text-xl font-bold text-[#2C241E]">
              {selectedTool.tenGoi}
            </h3>

            <div className="text-xs text-[#4A3E35] space-y-2 leading-relaxed">
              <p><strong>Đặc điểm cấu tạo:</strong> {selectedTool.dacDiemCauTao}</p>
              <p><strong>Vai trò trong nghề:</strong> {selectedTool.vaiTroTrongNghe}</p>
              
              <div className="p-3 rounded bg-white border border-[#E3DACB] space-y-1">
                <span className="font-bold text-[#8B5A2B]">Nguồn tư liệu kiểm chứng:</span>
                <p>{selectedTool.nguonTuLieu.tenNguon}</p>
                <a
                  href={selectedTool.nguonTuLieu.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#C0392B] font-semibold mt-1"
                >
                  <span>Mở tài liệu nguồn</span>
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
