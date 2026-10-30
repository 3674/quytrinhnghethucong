export interface ProcessStep {
  maCongDoan: string;
  thuTu: number;
  tenCongDoan: string;
  moTa: string;
  nguyenLieuLienQuan: string[];
  congCuLienQuan: string[];
  kyThuatMoTa: string;
  nguonThamKhao: {
    maNguon: string;
    tenNguon: string;
    url: string;
    trichDan: string;
  };
  trangThaiXacMinh: 'Đã xác minh' | 'Đang chờ xác minh' | 'Chưa có đủ tư liệu xác minh';
  chuThichAnh?: string;
  anhUrl?: string;
  luuYKyThuat: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    maCongDoan: 'CD-01',
    thuTu: 1,
    tenCongDoan: 'Lựa chọn và xử lý gỗ khắc ván (Gỗ thị)',
    moTa: 'Tuyển chọn loại gỗ đặc thù cho mộc bản tranh Đông Hồ. Nghệ nhân chọn gỗ thị - loại gỗ có thớ mịn màng, dẻo dai, không cong vênh, ít mắt gỗ và giữ được đường nét khắc sắc sảo lâu năm.',
    nguyenLieuLienQuan: ['Gỗ cây thị rừng', 'Nước ngâm tự nhiên', 'Vôi bột xử lý mối mọt'],
    congCuLienQuan: ['Cưa tay', 'Bào gỗ', 'Thước đo mộc', 'Đá mài mịn'],
    kyThuatMoTa: 'Gỗ thị xẻ theo thớ dọc bề mặt phẳng dày khoảng 2 - 3 cm, ngâm bùn hoặc luộc kỹ rồi phơi khô tự nhiên trong bóng râm hàng tháng để triệt tiêu độ co ngót trước khi bào nhẵn bóng như gương.',
    nguonThamKhao: {
      maNguon: 'NGUON-03',
      tenNguon: 'Craft of making Đông Hồ folk woodblock printings (Hồ sơ UNESCO số 01737)',
      url: 'https://ich.unesco.org/en/USL/craft-of-making-ong-h-folk-woodblock-printings-01737?USL=01737',
      trichDan: 'Phần tư liệu kỹ thuật mộc bản gỗ thị (Diospyros decandra) trong hồ sơ UNESCO 01737 mô tả tiêu chuẩn chọn thớ gỗ dẻo không nứt vỡ khi khắc nét siêu nhỏ.'
    },
    trangThaiXacMinh: 'Đã xác minh',
    chuThichAnh: 'Tư liệu gỗ thị mộc bản truyền thống được xẻ nhẵn phẳng tại phường Song Hồ, thị xã Thuận Thành.',
    luuYKyThuat: 'Không được dùng gỗ giòn hoặc gỗ có nhiều giác mềm vì khi dập lực in hàng ngàn lần ván sẽ bị nát góc và biến dạng nét vẽ.'
  },
  {
    maCongDoan: 'CD-02',
    thuTu: 2,
    tenCongDoan: 'Sáng tác mẫu vẽ & Khắc ván mộc bản nét và màu',
    moTa: 'Tạo hình bố cục tranh trên giấy bản mỏng rồi dán úp ngược lên mặt ván gỗ thị. Nghệ nhân dùng bộ ve đục thủ công để chạm khắc bóc tách phần thừa, giữ lại đường nét nổi và các mảng màu.',
    nguyenLieuLienQuan: ['Mực nho tàu', 'Hồ nếp dán giấy', 'Giấy dó vẽ mẫu thảo'],
    congCuLienQuan: ['Bộ đục ve chuyên dụng (ve bằng, ve máng, đục cong)', 'Búa gõ cán gỗ', 'Đá mài bùn'],
    kyThuatMoTa: 'Quy trình khắc tách rời: Bản nét đen (ván nét) đòi hỏi tay nghề điêu luyện nhất để giữ độ sống động của thần thái nhân vật. Mỗi màu sắc phụ (đỏ, vàng, xanh) lại được khắc trên một bản ván màu riêng biệt.',
    nguonThamKhao: {
      maNguon: 'NGUON-07',
      tenNguon: 'Hồ sơ khoa học và nghiên cứu bảo tồn Nghề làm tranh dân gian Đông Hồ - VICAS',
      url: 'https://vicas.org.vn/nghien-cuu/ho-so-di-san-nghe-lam-tranh-dan-gian-dong-ho',
      trichDan: 'Kỹ thuật phân màu bản khắc mộc: Một bức tranh Đông Hồ 4 màu cần tối thiểu 5 bản ván gỗ khắc thủ công độc lập.'
    },
    trangThaiXacMinh: 'Đã xác minh',
    chuThichAnh: 'Nghệ nhân Đông Hồ sử dụng bộ ve mũi thép sắc gọt ván gỗ thị theo nét mực lọng.',
    luuYKyThuat: 'Khi khắc phải nghiêng lưỡi ve một góc 45 độ hướng ra ngoài để chân nét có độ choãi hình thang cân, giúp nét chữ và nét khắc chịu được lực ép khi in mà không gãy rụng.'
  },
  {
    maCongDoan: 'CD-03',
    thuTu: 3,
    tenCongDoan: 'Chế tác giấy điệp truyền thống trên nền giấy Dó',
    moTa: 'Công đoạn tạo nên vẻ đẹp lấp lánh đặc trưng duy nhất của tranh Đông Hồ. Vỏ sò điệp biển được nghiền thành bột mịn, trộn cùng hồ nếp nấu lỏng rồi dùng chổi lá thông quét đều lên mặt giấy dó.',
    nguyenLieuLienQuan: ['Giấy dó Bắc Ninh / Tiên Du', 'Vỏ sò điệp tự nhiên (sò biển)', 'Gạo nếp cái hoa vàng nấu hồ'],
    congCuLienQuan: ['Cối giã vỏ điệp', 'Rây lọc bột mịn', 'Chổi thét (chổi lá thông bánh tẻ)', 'Chậu sành quấy hồ'],
    kyThuatMoTa: 'Dùng chổi thét nhúng hồ điệp quét đều tay theo chiều ngang hoặc dọc giấy dó. Vệt chổi quét lá thông tạo nên những đường gân sóng sánh và ánh xà cừ trắng sáng khi bắt ánh sáng tự nhiên.',
    nguonThamKhao: {
      maNguon: 'NGUON-03',
      tenNguon: 'Craft of making Đông Hồ folk woodblock printings (Hồ sơ UNESCO số 01737)',
      url: 'https://ich.unesco.org/en/USL/craft-of-making-ong-h-folk-woodblock-printings-01737?USL=01737',
      trichDan: 'Mô tả kỹ thuật quét điệp (Scallop shell powder and dó paper coating): Điệp được giã nhỏ như phấn, lọc qua vải mỏng rồi hòa quyện với hồ bột nếp.'
    },
    trangThaiXacMinh: 'Đã xác minh',
    chuThichAnh: 'Bề mặt giấy dó quét điệp lấp lánh ánh xà cừ tự nhiên dưới ánh sáng ban ngày.',
    luuYKyThuat: 'Hồ nếp phải được quấy đều tay, không quá đặc làm cộm giấy và không quá loãng làm rách giấy dó khi phơi khô.'
  },
  {
    maCongDoan: 'CD-04',
    thuTu: 4,
    tenCongDoan: 'Chiết xuất và pha chế phẩm màu tự nhiên thảo mộc & khoáng thạch',
    moTa: 'Chế biến toàn bộ 5 hệ màu nguyên bản của tranh Đông Hồ từ cây cỏ, khoáng sản thiên nhiên: Vàng (hoa hòe), Đỏ (sỏi son/đá son), Đen (tro lá tre/than rơm nếp), Xanh (gỉ đồng/lá chàm), Trắng (bột điệp).',
    nguyenLieuLienQuan: ['Nụ hoa hòe sao vàng', 'Sỏi đá son núi Thiên Thai', 'Tro than lá tre thu hái tự nhiên', 'Rỉ đồng ngâm nước chua / lá chàm', 'Nước hồ nếp lỏng làm chất kết dính'],
    congCuLienQuan: ['Cối đá nghiền sỏi', 'Nồi đun chiết xuất thảo mộc', 'Bát đĩa gốm sành đựng màu', 'Vải lọc cặn'],
    kyThuatMoTa: 'Màu đỏ sỏi son được tán trên cối đá nhiều ngày thành hạt siêu mịn. Màu vàng hoa hòe sao cháy cạnh sắc nước để lấy sắc vàng ấm. Tro than lá tre cho màu đen tuyền trầm ấm mà không bị bóng nhờn.',
    nguonThamKhao: {
      maNguon: 'NGUON-07',
      tenNguon: 'Hồ sơ khoa học và nghiên cứu bảo tồn Nghề làm tranh dân gian Đông Hồ - VICAS',
      url: 'https://vicas.org.vn/nghien-cuu/ho-so-di-san-nghe-lam-tranh-dan-gian-dong-ho',
      trichDan: 'Bảng phân tích hóa học và nguồn gốc thực vật - khoáng vật học của hệ màu nguyên bản Đông Hồ.'
    },
    trangThaiXacMinh: 'Đã xác minh',
    chuThichAnh: 'Bát màu tự nhiên: Vàng hoa hòe, đỏ sỏi son và đen tro than tre được pha chế thủ công.',
    luuYKyThuat: 'Tất cả các màu khi pha đều dùng hồ nếp lỏng làm chất dẫn keo kết dính, giúp màu bám chặt vào thớ giấy dó quét điệp mà không bị bong tróc theo năm tháng.'
  },
  {
    maCongDoan: 'CD-05',
    thuTu: 5,
    tenCongDoan: 'In tranh bằng kỹ thuật in ngửa ván mộc bản thủ công',
    moTa: 'Đây là kỹ thuật in độc bản đặc sắc: Bản ván in màu được đặt ngửa trên bàn in, nghệ nhân dùng chổi nhúng màu quét đều lên mặt ván, sau đó áp tờ giấy điệp lên mặt ván gỗ và dùng xơ mướp xoa đều lưng giấy.',
    nguyenLieuLienQuan: ['Giấy dó đã quét lớp điệp khô ráo', 'Các bát phẩm màu tự nhiên', 'Nến sáp bôi trơn xơ mướp'],
    congCuLienQuan: ['Bàn in thấp kiểu truyền thống', 'Ván in mộc bản (khắc nổi)', 'Chổi quét màu (chổi thét nhỏ)', 'Xơ mướp khô già đã làm mềm (tay xoa)'],
    kyThuatMoTa: 'Quy trình in theo thứ tự nghiêm ngặt: In lần lượt các màu nền và màu phụ (vàng -> đỏ -> xanh lục), mỗi màu in xong phải để se mặt trước khi in màu tiếp theo. Bản ván nét đen luôn được in sau cùng để định hình toàn bộ chi tiết bức tranh.',
    nguonThamKhao: {
      maNguon: 'NGUON-03',
      tenNguon: 'Craft of making Đông Hồ folk woodblock printings (Hồ sơ UNESCO số 01737)',
      url: 'https://ich.unesco.org/en/USL/craft-of-making-ong-h-folk-woodblock-printings-01737?USL=01737',
      trichDan: 'Woodblock printing technique: Ván in đặt ngửa, giấy đặt lên trên, tay xoa bằng xơ mướp khô xoa đều để màu thẩm thấu đều vào thớ giấy.'
    },
    trangThaiXacMinh: 'Đã xác minh',
    chuThichAnh: 'Thao tác tay xoa xơ mướp lướt đều trên lưng giấy dó đặt ngửa trên ván khắc mộc.',
    luuYKyThuat: 'Độ chuẩn xác của góc kê giấy và ngón tay nghệ nhân quyết định việc các mảng màu không bị lệch nét hoặc đè chồm lên nhau.'
  },
  {
    maCongDoan: 'CD-06',
    thuTu: 6,
    tenCongDoan: 'Phơi tranh tự nhiên trong bóng râm và bảo quản đóng gói',
    moTa: 'Tranh in xong được rải đều trên nong nia đan bằng tre nứa, đặt ở nơi thoáng khí, râm mát, tránh ánh nắng mặt trời chiếu trực tiếp để tranh khô từ từ mà không bị co nhăn hoặc bay màu sắc tự nhiên.',
    nguyenLieuLienQuan: ['Khí trời tự nhiên thoáng đãng', 'Dây buộc rơm truyền thống'],
    congCuLienQuan: ['Nong tre', 'Nia tre', 'Kệ phơi nhiều tầng bằng tre', 'Bàn ép phẳng tranh'],
    kyThuatMoTa: 'Phơi trong hiên nhà hướng gió Đông Nam hoặc bóng râm. Tuyệt đối không phơi tranh dưới nắng gắt vì nhiệt độ cao làm hồ nếp bị giòn, cong mép giấy và bột điệp bị rạn nứt vỡ chân.',
    nguonThamKhao: {
      maNguon: 'NGUON-06',
      tenNguon: 'Chuyên đề Di sản Làng tranh dân gian Đông Hồ - Cổng TTĐT Bắc Ninh',
      url: 'https://bacninh.gov.vn/du-lich-bac-ninh/lang-tranh-dong-ho-di-san-van-hoa-dac-sac',
      trichDan: 'Tập quán phơi tranh trên nong nia truyền thống trước ngày chợ tranh Tết tháng Chạp.'
    },
    trangThaiXacMinh: 'Đã xác minh',
    chuThichAnh: 'Những nong tre trải đầy tranh dân gian khô dần dưới bóng hiên nhà cổ làng Đông Hồ.',
    luuYKyThuat: 'Sau khi khô ráo, tranh được xếp lớp và ép phẳng bằng các tấm gỗ nặng trước khi phân loại đưa ra chợ tranh Tết truyền thống.'
  }
];
