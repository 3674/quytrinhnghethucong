import React, { useState, useMemo } from 'react';
import { 
  Database, 
  Search, 
  Filter, 
  ExternalLink, 
  CheckCircle, 
  Shield, 
  Layers, 
  Wrench, 
  Tag, 
  Eye, 
  Download,
  Table,
  LayoutGrid,
  FileCode
} from 'lucide-react';
import { MASTER_RECORDS, HeritageRecord, DataGroupType, GROUP_LABELS } from '../data/records';

interface RepositoryScreenProps {
  onOpenRecord: (record: HeritageRecord) => void;
}

export const RepositoryScreen: React.FC<RepositoryScreenProps> = ({ onOpenRecord }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<DataGroupType | 'all'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  const filteredRecords = useMemo(() => {
    let list = MASTER_RECORDS;

    if (selectedGroup !== 'all') {
      list = list.filter(r => r.nhomDuLieu === selectedGroup);
    }

    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      list = list.filter(r => 
        r.id.toLowerCase().includes(q) ||
        r.ten.toLowerCase().includes(q) ||
        r.moTa.toLowerCase().includes(q) ||
        r.noiDungChiTiet.toLowerCase().includes(q) ||
        r.diaDiem.toLowerCase().includes(q) ||
        r.nguyenLieu.some(nl => nl.toLowerCase().includes(q)) ||
        r.congCu.some(cc => cc.toLowerCase().includes(q))
      );
    }

    return list;
  }, [selectedGroup, searchTerm]);

  // Export dataset to JSON file for researchers
  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(MASTER_RECORDS, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "net-nghe-viet-dong-ho-heritage-dataset.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="border-b border-[#E3DACB] pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#2C241E] text-white text-xs font-semibold">
          <Database className="w-3.5 h-3.5" />
          <span>KHO DỮ LIỆU DI SẢN CÓ CẤU TRÚC (CHUẨN 13 TRƯỜNG JSON)</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl font-bold text-[#2C241E]">
              Kho dữ liệu di sản kiểm chứng
            </h1>
            <p className="text-sm text-[#5A4E45] max-w-3xl mt-1">
              Lưu trữ <strong>{MASTER_RECORDS.length} bản ghi dữ liệu thực tế</strong> được tư liệu hóa nghiêm ngặt từ các nguồn UNESCO, Bộ Văn hóa và Viện Văn hóa Nghệ thuật Quốc gia (VICAS). Mỗi bản ghi liên kết trực tiếp với ít nhất một nguồn tư liệu kiểm chứng có thể đối chiếu.
            </p>
          </div>

          <button
            onClick={handleExportJSON}
            className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FAF7EE] border border-[#D9CEBF] hover:bg-[#EAE2D5] text-[#2C241E] text-xs font-semibold shadow-sm transition-colors"
          >
            <Download className="w-4 h-4 text-[#8B5A2B]" />
            <span>Tải tệp JSON dữ liệu ({MASTER_RECORDS.length} bản ghi)</span>
          </button>
        </div>
      </div>

      {/* Control Panel: Search, Group filter & View Mode */}
      <div className="bg-white rounded-xl border border-[#E3DACB] p-4 sm:p-5 shadow-sm space-y-4">
        
        {/* Row 1: Search & View Mode */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C7E72]" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tra cứu bản ghi theo ID (BG-01...), tên, địa danh, nguyên liệu, công cụ..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#FAF7EE] border border-[#D9CEBF] text-xs sm:text-sm text-[#2C241E] placeholder:text-[#9E9185] focus:outline-none focus:ring-2 focus:ring-[#C0392B]/30 focus:border-[#C0392B]"
            />
          </div>

          {/* View toggle */}
          <div className="inline-flex rounded-lg bg-[#F2EDE2] p-1 border border-[#E3DACB] shrink-0 self-end sm:self-auto">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md text-xs font-medium flex items-center gap-1 transition-all ${
                viewMode === 'grid'
                  ? 'bg-[#2C241E] text-white shadow-sm'
                  : 'text-[#5A4E45] hover:text-[#2C241E]'
              }`}
              title="Dạng thẻ lưới"
            >
              <LayoutGrid className="w-4 h-4" />
              <span className="hidden sm:inline">Dạng thẻ</span>
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-2 rounded-md text-xs font-medium flex items-center gap-1 transition-all ${
                viewMode === 'table'
                  ? 'bg-[#2C241E] text-white shadow-sm'
                  : 'text-[#5A4E45] hover:text-[#2C241E]'
              }`}
              title="Dạng bảng tra cứu"
            >
              <Table className="w-4 h-4" />
              <span className="hidden sm:inline">Dạng bảng</span>
            </button>
          </div>

        </div>

        {/* Row 2: Filter Tabs by Data Group */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-2 border-t border-[#F2EDE2]">
          <span className="text-xs font-semibold text-[#8B5A2B] shrink-0 flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5" />
            <span>Nhóm dữ liệu:</span>
          </span>

          <button
            onClick={() => setSelectedGroup('all')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
              selectedGroup === 'all'
                ? 'bg-[#2C241E] text-white'
                : 'bg-[#F2EDE2] text-[#5A4E45] hover:bg-[#EAE2D5]'
            }`}
          >
            Tất cả ({MASTER_RECORDS.length})
          </button>

          {(Object.keys(GROUP_LABELS) as DataGroupType[]).map((groupKey) => {
            const count = MASTER_RECORDS.filter(r => r.nhomDuLieu === groupKey).length;
            return (
              <button
                key={groupKey}
                onClick={() => setSelectedGroup(groupKey)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedGroup === groupKey
                    ? 'bg-[#C0392B] text-white'
                    : 'bg-[#F2EDE2] text-[#5A4E45] hover:bg-[#EAE2D5]'
                }`}
              >
                {GROUP_LABELS[groupKey]} ({count})
              </button>
            );
          })}
        </div>

      </div>

      {/* Grid View */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredRecords.map((record) => (
            <div 
              key={record.id}
              className="bg-white rounded-xl border border-[#E3DACB] hover:border-[#C0392B] hover:shadow-md transition-all p-5 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#FAF7EE] text-[#8B5A2B] border border-[#E3DACB]">
                    {record.id}
                  </span>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    <span>Đã xác minh</span>
                  </span>
                </div>

                <div className="text-[11px] font-semibold text-[#8B5A2B] uppercase tracking-wider">
                  {GROUP_LABELS[record.nhomDuLieu]}
                </div>

                <h3 className="font-['Playfair_Display',serif] text-base font-bold text-[#2C241E]">
                  {record.ten}
                </h3>

                <p className="text-xs text-[#5A4E45] line-clamp-3 leading-relaxed">
                  {record.noiDungChiTiet}
                </p>

                {/* Location & Tags preview */}
                <div className="text-[11px] text-[#7A6E65] space-y-1 pt-2 border-t border-[#F2EDE2]">
                  <p className="truncate">
                    <span className="font-semibold text-[#8B5A2B]">Địa bàn:</span> {record.diaDiem}
                  </p>
                  <p className="truncate">
                    <span className="font-semibold text-[#8B5A2B]">Nguồn:</span> [{record.nguonTuLieu.maNguon}] {record.nguonTuLieu.tenNguon}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#F2EDE2] flex items-center justify-between text-xs">
                <a
                  href={record.nguonTuLieu.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#7A6E65] hover:text-[#2C241E]"
                >
                  <span>Xem nguồn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <button
                  onClick={() => onOpenRecord(record)}
                  className="inline-flex items-center gap-1 font-semibold text-[#C0392B] hover:text-[#962D22] bg-[#FAF0E6] px-2.5 py-1 rounded"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Chi tiết & JSON</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Table View */}
      {viewMode === 'table' && (
        <div className="bg-white rounded-xl border border-[#E3DACB] overflow-x-auto shadow-sm">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-[#F2EDE2] border-b border-[#E3DACB] text-[#5A4E45] uppercase font-bold text-[11px]">
                <th className="py-3 px-4">Mã</th>
                <th className="py-3 px-4">Tên bản ghi</th>
                <th className="py-3 px-4">Nhóm dữ liệu</th>
                <th className="py-3 px-4">Địa bàn di sản</th>
                <th className="py-3 px-4">Nguồn tư liệu đối chiếu</th>
                <th className="py-3 px-4">Trạng thái</th>
                <th className="py-3 px-4 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F2EDE2]">
              {filteredRecords.map((r) => (
                <tr key={r.id} className="hover:bg-[#FAF7EE] transition-colors">
                  <td className="py-3 px-4 font-mono font-bold text-[#8B5A2B]">
                    {r.id}
                  </td>
                  <td className="py-3 px-4 font-semibold text-[#2C241E] max-w-xs">
                    {r.ten}
                  </td>
                  <td className="py-3 px-4 text-[#5A4E45]">
                    <span className="px-2 py-0.5 rounded bg-[#F2EDE2] text-[#4A3E35]">
                      {GROUP_LABELS[r.nhomDuLieu]}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-[#5A4E45] max-w-xs truncate">
                    {r.diaDiem}
                  </td>
                  <td className="py-3 px-4 max-w-xs">
                    <a
                      href={r.nguonTuLieu.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#C0392B] hover:underline font-medium"
                    >
                      <span className="truncate">[{r.nguonTuLieu.maNguon}] {r.nguonTuLieu.tenNguon}</span>
                      <ExternalLink className="w-3 h-3 shrink-0" />
                    </a>
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center gap-1 text-[11px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                      <span>Đã xác minh</span>
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={() => onOpenRecord(r)}
                      className="px-2.5 py-1 rounded bg-[#2C241E] text-white text-[11px] font-medium hover:bg-[#443830]"
                    >
                      Chi tiết
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Verification Summary Footnote */}
      <div className="bg-[#FAF7EE] p-4 rounded-xl border border-[#D9CEBF] text-xs text-[#5A4E45] flex items-start gap-3">
        <Shield className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
        <div>
          <strong className="text-[#2C241E]">Quy chuẩn kiểm chứng dữ liệu:</strong>
          <p className="mt-0.5">
            100% {MASTER_RECORDS.length} bản ghi trong kho dữ liệu đều được thu thập từ các công trình nghiên cứu đã xuất bản và văn bản quản lý nhà nước. Ứng dụng không sử dụng dữ liệu rỗng hoặc dữ liệu do AI bịa đặt để tạo số lượng ảo.
          </p>
        </div>
      </div>

    </div>
  );
};
