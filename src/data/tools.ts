export interface ToolItem {
  maBanGhi: string;
  tenGoi: string;
  phanLoai: 'Dụng cụ khắc ván' | 'Dụng cụ in ấn' | 'Dụng cụ gia công giấy & màu' | 'Dụng cụ phơi sấy';
  dacDiemCauTao: string;
  vaiTroTrongNghe: string;
  congDoanLienQuan: string[];
  nguonTuLieu: {
    maNguon: string;
    tenNguon: string;
    url: string;
  };
  ngayCapNhat: string;
  trangThaiXacMinh: 'Đã xác minh' | 'Đang kiểm tra';
}

export const TOOLS: ToolItem[] = [
  {
    maBanGhi: 'CC-01',
    tenGoi: 'Bộ ve đục khắc ván mộc',
    phanLoai: 'Dụng cụ khắc ván',
    dacDiemCauTao: 'Gồm 20 - 30 mũi đục bằng thép tốt rèn thủ công với đủ kích cỡ: ve dẹt (ve bằng), ve vát, ve lòng máng, ve móc nhỏ gắn với cán gỗ xoan chắc chắn.',
    vaiTroTrongNghe: 'Công cụ quyết định hình hài và linh hồn của mộc bản. Nghệ nhân dùng đục để bóc gọt các mảng gỗ thừa, tạo ra đường gân nét chữ và hình khối nổi sắc bén.',
    congDoanLienQuan: ['CD-02: Khắc ván mộc bản'],
    nguonTuLieu: {
      maNguon: 'NGUON-03',
      tenNguon: 'Craft of making Đông Hồ folk woodblock printings (Hồ sơ UNESCO số 01737)',
      url: 'https://ich.unesco.org/en/USL/craft-of-making-ong-h-folk-woodblock-printings-01737?USL=01737'
    },
    ngayCapNhat: '2026-10-30',
    trangThaiXacMinh: 'Đã xác minh'
  },
  {
    maBanGhi: 'CC-02',
    tenGoi: 'Ván khắc gỗ thị (Mộc bản)',
    phanLoai: 'Dụng cụ khắc ván',
    dacDiemCauTao: 'Tấm gỗ thị xẻ phẳng dày 2.5 - 3cm, mặt gỗ được bào nhẵn bóng, khắc nổi các họa tiết đảo ngược chiều so với bức tranh in thành phẩm.',
    vaiTroTrongNghe: 'Khuôn in truyền tải hình ảnh và màu sắc qua nhiều thế hệ. Một bộ tranh hoàn chỉnh gồm từ 4 đến 5 ván (ván nét đen và các ván màu đỏ, vàng, xanh, lục).',
    congDoanLienQuan: ['CD-01: Chuẩn bị gỗ thị', 'CD-02: Khắc ván mộc bản', 'CD-05: In tranh mộc bản'],
    nguonTuLieu: {
      maNguon: 'NGUON-07',
      tenNguon: 'Hồ sơ khoa học và nghiên cứu bảo tồn Nghề làm tranh dân gian Đông Hồ - VICAS',
      url: 'https://vicas.org.vn/nghien-cuu/ho-so-di-san-nghe-lam-tranh-dan-gian-dong-ho'
    },
    ngayCapNhat: '2026-10-30',
    trangThaiXacMinh: 'Đã xác minh'
  },
  {
    maBanGhi: 'CC-03',
    tenGoi: 'Chổi thét quét điệp (Lá thông già)',
    phanLoai: 'Dụng cụ gia công giấy & màu',
    dacDiemCauTao: 'Được bó chặt từ những chùm lá kim của cây thông già bánh tẻ phơi héo vừa độ, đầu chổi cắt bằng phẳng tạo độ đàn hồi dẻo dai.',
    vaiTroTrongNghe: 'Dùng để nhúng hồ điệp quét lên mặt giấy dó. Khi quét, các đầu sợi lá kim chải trên mặt giấy tạo ra những đường gân sóng xà cừ óng ánh đặc trưng của tranh Đông Hồ.',
    congDoanLienQuan: ['CD-03: Chế tác giấy điệp'],
    nguonTuLieu: {
      maNguon: 'NGUON-03',
      tenNguon: 'Craft of making Đông Hồ folk woodblock printings (Hồ sơ UNESCO số 01737)',
      url: 'https://ich.unesco.org/en/USL/craft-of-making-ong-h-folk-woodblock-printings-01737?USL=01737'
    },
    ngayCapNhat: '2026-10-30',
    trangThaiXacMinh: 'Đã xác minh'
  },
  {
    maBanGhi: 'CC-04',
    tenGoi: 'Tay xoa xơ mướp (Xơ mướp đập mềm)',
    phanLoai: 'Dụng cụ in ấn',
    dacDiemCauTao: 'Quả mướp hương già để rụng hạt, rửa sạch bóc vỏ phơi khô, được đập nhẹ và xoa sáp nến cho mềm mượt mà không làm trầy xước giấy dó.',
    vaiTroTrongNghe: 'Dùng tay cầm xơ mướp chà đều, miết nhẹ trên mặt sau của tờ giấy dó khi đặt ngửa trên ván in mộc bản để phẩm màu thấm đều, no mực vào từng sợi giấy.',
    congDoanLienQuan: ['CD-05: In tranh mộc bản'],
    nguonTuLieu: {
      maNguon: 'NGUON-07',
      tenNguon: 'Hồ sơ khoa học và nghiên cứu bảo tồn Nghề làm tranh dân gian Đông Hồ - VICAS',
      url: 'https://vicas.org.vn/nghien-cuu/ho-so-di-san-nghe-lam-tranh-dan-gian-dong-ho'
    },
    ngayCapNhat: '2026-10-30',
    trangThaiXacMinh: 'Đã xác minh'
  },
  {
    maBanGhi: 'CC-05',
    tenGoi: 'Bàn in truyền thống Đông Hồ',
    phanLoai: 'Dụng cụ in ấn',
    dacDiemCauTao: 'Bàn gỗ thấp đóng chắc chắn, có gờ cố định ván khắc và giá để giấy, bát màu ở tầm với của nghệ nhân khi ngồi làm việc.',
    vaiTroTrongNghe: 'Điểm tựa ổn định giúp thao tác in ấn liên tục hàng nghìn bản tranh mà không bị rung lắc hay xê dịch ván mộc.',
    congDoanLienQuan: ['CD-05: In tranh mộc bản'],
    nguonTuLieu: {
      maNguon: 'NGUON-06',
      tenNguon: 'Chuyên đề Di sản Làng tranh dân gian Đông Hồ - Cổng TTĐT Bắc Ninh',
      url: 'https://bacninh.gov.vn/du-lich-bac-ninh/lang-tranh-dong-ho-di-san-van-hoa-dac-sac'
    },
    ngayCapNhat: '2026-10-30',
    trangThaiXacMinh: 'Đã xác minh'
  },
  {
    maBanGhi: 'CC-06',
    tenGoi: 'Nong nia tre phơi sấy',
    phanLoai: 'Dụng cụ phơi sấy',
    dacDiemCauTao: 'Dụng cụ đan lát bằng cật tre nứa bánh tẻ đồng bằng, phẳng rộng, các mắt đan khít nhưng vẫn tạo độ thông khí từ phía dưới đáy.',
    vaiTroTrongNghe: 'Đỡ tranh khi phơi rải trong bóng râm hiên nhà, giữ cho giấy dó quét điệp và tranh vừa in không bị cong vênh mép hoặc dính bết bụi bẩn.',
    congDoanLienQuan: ['CD-03: Chế tác giấy điệp', 'CD-06: Phơi tranh & bảo quản'],
    nguonTuLieu: {
      maNguon: 'NGUON-06',
      tenNguon: 'Chuyên đề Di sản Làng tranh dân gian Đông Hồ - Cổng TTĐT Bắc Ninh',
      url: 'https://bacninh.gov.vn/du-lich-bac-ninh/lang-tranh-dong-ho-di-san-van-hoa-dac-sac'
    },
    ngayCapNhat: '2026-10-30',
    trangThaiXacMinh: 'Đã xác minh'
  }
];
