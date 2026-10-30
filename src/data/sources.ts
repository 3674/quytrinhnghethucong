export interface SourceItem {
  stt: number;
  maNguon: string;
  tenTaiLieu: string;
  coQuanBanHanh: string;
  loaiNguon: 'Chính thống - Nhà nước' | 'Chính thống - Quốc tế' | 'Nghiên cứu khoa học' | 'Địa phương - Quản lý';
  noiDungSuDung: string;
  url: string;
  ngayTruyCap: string;
  trangThaiKiemTra: 'Đã xác minh chính thống' | 'Đã xác minh nghiên cứu' | 'Đang kiểm tra';
  ghiChuKiemChung: string;
}

export const SOURCES: SourceItem[] = [
  {
    stt: 1,
    maNguon: 'NGUON-01',
    tenTaiLieu: 'Luật Di sản văn hóa số 45/2024/QH15',
    coQuanBanHanh: 'Quốc hội nước CHXHCN Việt Nam (Đăng tải trên Cổng TTĐT Chính phủ)',
    loaiNguon: 'Chính thống - Nhà nước',
    noiDungSuDung: 'Căn cứ pháp lý cao nhất về bảo vệ, trao truyền và số hóa di sản văn hóa phi vật thể, nghề thủ công truyền thống tại Việt Nam.',
    url: 'https://vanban.chinhphu.vn/?docid=212473&pageid=27160',
    ngayTruyCap: '2026-10-30',
    trangThaiKiemTra: 'Đã xác minh chính thống',
    ghiChuKiemChung: 'Văn bản quy phạm pháp luật chính thức của nước CHXHCN Việt Nam, có hiệu lực thi hành.',
  },
  {
    stt: 2,
    maNguon: 'NGUON-02',
    tenTaiLieu: 'Hệ thống pháp luật về Di sản văn hóa Việt Nam',
    coQuanBanHanh: 'Cục Di sản văn hóa – Bộ Văn hóa, Thể thao và Du lịch',
    loaiNguon: 'Chính thống - Nhà nước',
    noiDungSuDung: 'Hướng dẫn quản lý nhà nước, tiêu chí kiểm kê, tư liệu hóa và biện pháp bảo vệ khẩn cấp nghề thủ công truyền thống.',
    url: 'https://dsvh.gov.vn/luat-di-san-van-hoa-22239',
    ngayTruyCap: '2026-10-30',
    trangThaiKiemTra: 'Đã xác minh chính thống',
    ghiChuKiemChung: 'Trang thông tin chuyên ngành của cơ quan quản lý nhà nước về di sản văn hóa tại Việt Nam.',
  },
  {
    stt: 3,
    maNguon: 'NGUON-03',
    tenTaiLieu: 'Craft of making Đông Hồ folk woodblock printings (Hồ sơ đệ trình UNESCO số 01737)',
    coQuanBanHanh: 'UNESCO - Danh mục Di sản văn hóa phi vật thể cần bảo vệ khẩn cấp (USL)',
    loaiNguon: 'Chính thống - Quốc tế',
    noiDungSuDung: 'Tư liệu khoa học quốc tế đầy đủ về bối cảnh di sản, nguy cơ mai một, cộng đồng chủ thể phường Song Hồ, quy trình kỹ thuật và cam kết bảo tồn.',
    url: 'https://ich.unesco.org/en/USL/craft-of-making-ong-h-folk-woodblock-printings-01737?USL=01737',
    ngayTruyCap: '2026-10-30',
    trangThaiKiemTra: 'Đã xác minh chính thống',
    ghiChuKiemChung: 'Hồ sơ quốc gia Việt Nam đệ trình tổ chức Giáo dục, Khoa học và Văn hóa của Liên Hợp Quốc (UNESCO).',
  },
  {
    stt: 4,
    maNguon: 'NGUON-04',
    tenTaiLieu: 'Danh mục Di sản văn hóa phi vật thể của Việt Nam trên UNESCO',
    coQuanBanHanh: 'UNESCO - Ban Thư ký Công ước Bảo vệ Di sản Văn hóa Phi vật thể',
    loaiNguon: 'Chính thống - Quốc tế',
    noiDungSuDung: 'Đối chiếu vị thế và tình trạng các di sản văn hóa phi vật thể của Việt Nam trong danh sách đại diện và cần bảo vệ khẩn cấp.',
    url: 'https://ich.unesco.org/en/state/viet-nam-VN?cp=VN&topic=es-estado',
    ngayTruyCap: '2026-10-30',
    trangThaiKiemTra: 'Đã xác minh chính thống',
    ghiChuKiemChung: 'Trang cơ sở dữ liệu chính thức các di sản được công nhận của quốc gia thành viên Việt Nam trên cổng UNESCO.',
  },
  {
    stt: 5,
    maNguon: 'NGUON-05',
    tenTaiLieu: 'Quyết định số 5079/QĐ-BVHTTDL ngày 27/12/2012 công nhận Nghề làm tranh dân gian Đông Hồ là Di sản văn hóa phi vật thể quốc gia',
    coQuanBanHanh: 'Bộ Văn hóa, Thể thao và Du lịch Việt Nam',
    loaiNguon: 'Chính thống - Nhà nước',
    noiDungSuDung: 'Văn bản pháp lý cấp quốc gia công nhận Nghề làm tranh dân gian Đông Hồ thuộc loại hình Nghề thủ công truyền thống vào Danh mục di sản văn hóa phi vật thể quốc gia (Đợt 1).',
    url: 'https://dsvh.gov.vn/danh-muc-di-san-van-hoa-phi-vat-the-quoc-gia-1756',
    ngayTruyCap: '2026-10-30',
    trangThaiKiemTra: 'Đã xác minh chính thống',
    ghiChuKiemChung: 'Danh mục công bố chính thức trên Cổng thông tin Cục Di sản văn hóa.',
  },
  {
    stt: 6,
    maNguon: 'NGUON-06',
    tenTaiLieu: 'Chuyên đề Di sản Làng tranh dân gian Đông Hồ',
    coQuanBanHanh: 'Cổng thông tin điện tử Tỉnh Bắc Ninh & Sở Văn hóa, Thể thao và Du lịch tỉnh Bắc Ninh',
    loaiNguon: 'Địa phương - Quản lý',
    noiDungSuDung: 'Thông tin địa lý, phân bố nghệ nhân tại khu phố Đông Khê, phường Song Hồ, thị xã Thuận Thành; hoạt động của Trung tâm bảo tồn tranh dân gian Đông Hồ.',
    url: 'https://bacninh.gov.vn/du-lich-bac-ninh/lang-tranh-dong-ho-di-san-van-hoa-dac-sac',
    ngayTruyCap: '2026-10-30',
    trangThaiKiemTra: 'Đã xác minh chính thống',
    ghiChuKiemChung: 'Cổng thông tin quản lý hành chính địa phương nơi lưu giữ gốc gác di sản làng nghề.',
  },
  {
    stt: 7,
    maNguon: 'NGUON-07',
    tenTaiLieu: 'Hồ sơ khoa học và nghiên cứu bảo tồn Nghề làm tranh dân gian Đông Hồ',
    coQuanBanHanh: 'Viện Văn hóa Nghệ thuật Quốc gia Việt Nam (VICAS)',
    loaiNguon: 'Nghiên cứu khoa học',
    noiDungSuDung: 'Báo cáo điều tra thực địa về phương pháp chế tác màu tự nhiên từ thực vật, khoáng chất, kỹ thuật khắc ván mộc thị và phương pháp in ngửa tay truyền thống.',
    url: 'https://vicas.org.vn/nghien-cuu/ho-so-di-san-nghe-lam-tranh-dan-gian-dong-ho',
    ngayTruyCap: '2026-10-30',
    trangThaiKiemTra: 'Đã xác minh nghiên cứu',
    ghiChuKiemChung: 'Cơ quan nghiên cứu khoa học đầu ngành chủ trì soạn thảo hồ sơ khoa học di sản văn hóa phi vật thể.',
  },
];
