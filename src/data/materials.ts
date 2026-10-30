export interface MaterialItem {
  maBanGhi: string;
  tenGoi: string;
  phanLoai: 'Vật liệu nền' | 'Chất tạo màu' | 'Chất kết dính' | 'Chất tạo hiệu ứng';
  nguonGoc: string;
  moTaKiemChung: string;
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

export const MATERIALS: MaterialItem[] = [
  {
    maBanGhi: 'NL-01',
    tenGoi: 'Giấy Dó truyền thống',
    phanLoai: 'Vật liệu nền',
    nguonGoc: 'Vỏ cây Dó tự nhiên (Rhamnoneuron balansae) từ vùng trung du Bắc Bộ, chế tác thủ công qua nhiều khâu đập, ngâm vôi và seo giấy.',
    moTaKiemChung: 'Giấy có cấu trúc sợi dài, dai, mềm xốp, có độ hút ẩm vừa phải, không bị mủn mục hay giòn gãy khi gặp ẩm ướt và có tuổi thọ hàng trăm năm.',
    vaiTroTrongNghe: 'Là chất liệu nền tảng nhận màu và hứng mực in. Sợi giấy dó đan quyện giữ chặt các hạt điệp và phẩm màu thiên nhiên qua các tầng lớp in.',
    congDoanLienQuan: ['CD-03: Chế tác giấy điệp', 'CD-05: In tranh mộc bản', 'CD-06: Phơi tranh & bảo quản'],
    nguonTuLieu: {
      maNguon: 'NGUON-03',
      tenNguon: 'Craft of making Đông Hồ folk woodblock printings (Hồ sơ UNESCO số 01737)',
      url: 'https://ich.unesco.org/en/USL/craft-of-making-ong-h-folk-woodblock-printings-01737?USL=01737'
    },
    ngayCapNhat: '2026-10-30',
    trangThaiXacMinh: 'Đã xác minh'
  },
  {
    maBanGhi: 'NL-02',
    tenGoi: 'Vỏ sò điệp biển (Bột điệp)',
    phanLoai: 'Chất tạo hiệu ứng',
    nguonGoc: 'Vỏ loài sò điệp biển tự nhiên thu mua từ các vùng ven biển miền Trung và vịnh Bắc Bộ.',
    moTaKiemChung: 'Vỏ điệp được rửa sạch mặn, phơi khô rồi cho vào cối đá giã nhỏ như bột phấn lụa, rây qua lưới mỏng để loại bỏ mảnh dăm cứng.',
    vaiTroTrongNghe: 'Tạo lớp áo nền óng ánh xà cừ trắng sáng tự nhiên chỉ có ở tranh Đông Hồ, giúp tranh phản chiếu ánh sáng lấp lánh và tôn vinh các lớp màu rực rỡ bên trên.',
    congDoanLienQuan: ['CD-03: Chế tác giấy điệp', 'CD-04: Pha chế phẩm màu'],
    nguonTuLieu: {
      maNguon: 'NGUON-07',
      tenNguon: 'Hồ sơ khoa học và nghiên cứu bảo tồn Nghề làm tranh dân gian Đông Hồ - VICAS',
      url: 'https://vicas.org.vn/nghien-cuu/ho-so-di-san-nghe-lam-tranh-dan-gian-dong-ho'
    },
    ngayCapNhat: '2026-10-30',
    trangThaiXacMinh: 'Đã xác minh'
  },
  {
    maBanGhi: 'NL-03',
    tenGoi: 'Hồ nếp cái hoa vàng',
    phanLoai: 'Chất kết dính',
    nguonGoc: 'Bột gạo nếp cái hoa vàng trồng tại đồng bằng châu thổ sông Hồng.',
    moTaKiemChung: 'Gạo nếp ngâm xay thành bột nước, quấy kỹ trên lửa nhỏ cho đến khi chín dẻo trong suốt, để nguội và pha loãng thành hồ lỏng quánh vừa độ.',
    vaiTroTrongNghe: 'Đóng vai trò là chất kết dính tự nhiên giữa bột điệp và giấy dó, đồng thời là môi chất hòa tan các phẩm màu tự nhiên giúp màu gắn chặt vào thớ giấy mà không phai màu.',
    congDoanLienQuan: ['CD-02: Dán mẫu khắc ván', 'CD-03: Chế tác giấy điệp', 'CD-04: Pha chế phẩm màu'],
    nguonTuLieu: {
      maNguon: 'NGUON-07',
      tenNguon: 'Hồ sơ khoa học và nghiên cứu bảo tồn Nghề làm tranh dân gian Đông Hồ - VICAS',
      url: 'https://vicas.org.vn/nghien-cuu/ho-so-di-san-nghe-lam-tranh-dan-gian-dong-ho'
    },
    ngayCapNhat: '2026-10-30',
    trangThaiXacMinh: 'Đã xác minh'
  },
  {
    maBanGhi: 'NL-04',
    tenGoi: 'Hoa hòe sao vàng (Màu vàng thảo mộc)',
    phanLoai: 'Chất tạo màu',
    nguonGoc: 'Nụ hoa của cây hòe (Styphnolobium japonicum) thu hái vào mùa hè, phơi khô.',
    moTaKiemChung: 'Nụ hòe được sao trên chảo gang đến khi ngả màu cánh gián thơm rồi cho vào nồi đun sôi kỹ lấy nước cốt màu vàng đậm sóng sánh.',
    vaiTroTrongNghe: 'Cung cấp gam màu vàng ấm áp, tươi tắn như nắng thu, dùng in hoa sen, áo quan họ, lông gà hay các họa tiết phúc lộc sum vầy.',
    congDoanLienQuan: ['CD-04: Pha chế phẩm màu', 'CD-05: In tranh mộc bản'],
    nguonTuLieu: {
      maNguon: 'NGUON-03',
      tenNguon: 'Craft of making Đông Hồ folk woodblock printings (Hồ sơ UNESCO số 01737)',
      url: 'https://ich.unesco.org/en/USL/craft-of-making-ong-h-folk-woodblock-printings-01737?USL=01737'
    },
    ngayCapNhat: '2026-10-30',
    trangThaiXacMinh: 'Đã xác minh'
  },
  {
    maBanGhi: 'NL-05',
    tenGoi: 'Tro than lá tre / Than rơm nếp (Màu đen trầm)',
    phanLoai: 'Chất tạo màu',
    nguonGoc: 'Lá tre khô già rụng tự nhiên hoặc rơm rạ cây lúa nếp mùa thu hoạch.',
    moTaKiemChung: 'Ủ than trong chum sành kín khí để cháy âm ỉ thành than mịn, sau đó ngâm nước lắng gạn và tán nhuyễn trên cối đá nhiều giờ.',
    vaiTroTrongNghe: 'Tạo nên màu đen đặc thù của tranh Đông Hồ: không gắt như mực hóa học mà óng mềm, sâu thẳm, dùng cho bản nét định hình và các chi tiết tương phản mạnh.',
    congDoanLienQuan: ['CD-04: Pha chế phẩm màu', 'CD-05: In tranh mộc bản'],
    nguonTuLieu: {
      maNguon: 'NGUON-07',
      tenNguon: 'Hồ sơ khoa học và nghiên cứu bảo tồn Nghề làm tranh dân gian Đông Hồ - VICAS',
      url: 'https://vicas.org.vn/nghien-cuu/ho-so-di-san-nghe-lam-tranh-dan-gian-dong-ho'
    },
    ngayCapNhat: '2026-10-30',
    trangThaiXacMinh: 'Đã xác minh'
  },
  {
    maBanGhi: 'NL-06',
    tenGoi: 'Sỏi son đỏ núi Thiên Thai (Màu đỏ khoáng chất)',
    phanLoai: 'Chất tạo màu',
    nguonGoc: 'Khai thác từ các tầng quặng sỏi son giàu oxit sắt tại vùng đồi núi Thiên Thai (Gia Bình - Thuận Thành, Bắc Ninh).',
    moTaKiemChung: 'Sỏi đá son được chọn lọc cục đặc, đập vụn rồi tán thật kiệt trên cối đá mài nhiều ngày với nước để lấy lớp bột đỏ son mịn màng nhất.',
    vaiTroTrongNghe: 'Mang đến sắc đỏ son thắm, trang trọng, ấm cúng và bền màu vĩnh cửu theo thời gian, tượng trưng cho hạnh phúc, may mắn và thịnh vượng ngày Tết.',
    congDoanLienQuan: ['CD-04: Pha chế phẩm màu', 'CD-05: In tranh mộc bản'],
    nguonTuLieu: {
      maNguon: 'NGUON-06',
      tenNguon: 'Chuyên đề Di sản Làng tranh dân gian Đông Hồ - Cổng TTĐT Bắc Ninh',
      url: 'https://bacninh.gov.vn/du-lich-bac-ninh/lang-tranh-dong-ho-di-san-van-hoa-dac-sac'
    },
    ngayCapNhat: '2026-10-30',
    trangThaiXacMinh: 'Đã xác minh'
  },
  {
    maBanGhi: 'NL-07',
    tenGoi: 'Gỉ đồng chua & Bột lá chàm (Màu xanh lục/chàm tự nhiên)',
    phanLoai: 'Chất tạo màu',
    nguonGoc: 'Gỉ đồng hun ngâm trong nước chua quả nhót/khế hoặc lá cây chàm rừng thu hái chế biến dịch lên men.',
    moTaKiemChung: 'Tạo nên sắc xanh lục dịu mắt (xanh gỉ đồng) hoặc xanh chàm cổ kính, hoàn toàn không chứa hóa chất tổng hợp độc hại.',
    vaiTroTrongNghe: 'Tô điểm màu xanh của tán lá cây, tàu lá chuối, vạt váy áo và mặt đất bình yên chốn thôn dã.',
    congDoanLienQuan: ['CD-04: Pha chế phẩm màu', 'CD-05: In tranh mộc bản'],
    nguonTuLieu: {
      maNguon: 'NGUON-03',
      tenNguon: 'Craft of making Đông Hồ folk woodblock printings (Hồ sơ UNESCO số 01737)',
      url: 'https://ich.unesco.org/en/USL/craft-of-making-ong-h-folk-woodblock-printings-01737?USL=01737'
    },
    ngayCapNhat: '2026-10-30',
    trangThaiXacMinh: 'Đã xác minh'
  }
];
