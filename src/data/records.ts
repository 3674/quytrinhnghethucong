export type DataGroupType = 
  | 'ho-so-nghe' 
  | 'cong-doan' 
  | 'nguyen-lieu' 
  | 'cong-cu' 
  | 'ky-thuat' 
  | 'kien-thuc';

export interface HeritageRecord {
  id: string;
  ten: string;
  nhomDuLieu: DataGroupType;
  moTa: string;
  noiDungChiTiet: string;
  diaDiem: string;
  congDoanLienQuan: string[];
  nguyenLieu: string[];
  congCu: string[];
  anh: {
    url?: string;
    chuThich: string;
    nguonAnh: string;
    laAnhMinhHoaAI?: boolean;
  };
  nguonTuLieu: {
    maNguon: string;
    tenNguon: string;
    coQuan: string;
    url: string;
    trichDan: string;
  };
  trangThaiXacMinh: 'da-xac-minh' | 'cho-xac-minh' | 'chua-co-tu-lieu';
  ngayCapNhat: string;
}

export const GROUP_LABELS: Record<DataGroupType, string> = {
  'ho-so-nghe': 'Hồ sơ nghề & Bối cảnh',
  'cong-doan': 'Công đoạn làm tranh',
  'nguyen-lieu': 'Nguyên liệu tự nhiên',
  'cong-cu': 'Công cụ & Dụng cụ',
  'ky-thuat': 'Kỹ thuật mộc bản',
  'kien-thuc': 'Kiến thức di sản & Tác phẩm'
};

export const MASTER_RECORDS: HeritageRecord[] = [
  {
    id: 'BG-01',
    ten: 'Nghề làm tranh dân gian Đông Hồ (Di sản QG)',
    nhomDuLieu: 'ho-so-nghe',
    moTa: 'Nghề thủ công truyền thống khắc ván gỗ in tranh trên giấy dó quét điệp, được công nhận là Di sản văn hóa phi vật thể quốc gia năm 2012.',
    noiDungChiTiet: 'Nghề làm tranh dân gian Đông Hồ hình thành từ thế kỷ 16-17 tại làng Đông Hồ bên bờ sông Đuống. Đây là dòng tranh khắc gỗ dân gian tiêu biểu của Việt Nam, gắn bó mật thiết với đời sống tinh thần, phong tục đón Tết cổ truyền của người dân châu thổ Bắc Bộ. Năm 2012, Bộ VHTT&DL đã ban hành Quyết định số 5079/QĐ-BVHTTDL công nhận nghề là Di sản văn hóa phi vật thể quốc gia.',
    diaDiem: 'Làng Đông Hồ, phường Song Hồ, thị xã Thuận Thành, tỉnh Bắc Ninh',
    congDoanLienQuan: ['Toàn bộ quy trình từ chuẩn bị ván đến in và phơi tranh'],
    nguyenLieu: ['Giấy dó', 'Vỏ điệp', 'Màu thảo mộc tự nhiên'],
    congCu: ['Ván khắc gỗ thị', 'Bộ ve đục', 'Bàn in', 'Tay xoa xơ mướp'],
    anh: {
      chuThich: 'Không gian trưng bày tranh khắc gỗ dân gian tại Trung tâm bảo tồn tranh Đông Hồ, thị xã Thuận Thành, Bắc Ninh.',
      nguonAnh: 'Cổng TTĐT Tỉnh Bắc Ninh & Trung tâm bảo tồn tranh Đông Hồ'
    },
    nguonTuLieu: {
      maNguon: 'NGUON-05',
      tenNguon: 'Quyết định số 5079/QĐ-BVHTTDL ngày 27/12/2012 của Bộ VHTT&DL',
      coQuan: 'Bộ Văn hóa, Thể thao và Du lịch',
      url: 'https://dsvh.gov.vn/danh-muc-di-san-van-hoa-phi-vat-the-quoc-gia-1756',
      trichDan: 'Công nhận Nghề làm tranh dân gian Đông Hồ vào Danh mục di sản văn hóa phi vật thể quốc gia.'
    },
    trangThaiXacMinh: 'da-xac-minh',
    ngayCapNhat: '2026-10-30'
  },
  {
    id: 'BG-02',
    ten: 'Làng Đông Hồ và không gian văn hóa Nam sông Đuống',
    nhomDuLieu: 'ho-so-nghe',
    moTa: 'Bối cảnh địa lý nhân văn đặc thù ven sông Đuống (tỉnh Bắc Ninh), nơi nuôi dưỡng truyền thống làm tranh qua hàng thế kỷ.',
    noiDungChiTiet: 'Làng Đông Hồ (tên chữ là làng Mái, nay là khu phố Đông Khê thuộc phường Song Hồ) nằm dọc bờ nam triền đê sông Đuống. Vị trí địa lý thuận tiện đường thủy và bồi đắp phù sa phì nhiêu đã tạo điều kiện giao thương sầm uất với các chợ phiên kinh thành Thăng Long và các tỉnh đồng bằng Bắc Bộ.',
    diaDiem: 'Khu phố Đông Khê, phường Song Hồ, TX Thuận Thành, tỉnh Bắc Ninh',
    congDoanLienQuan: ['Lưu truyền bí quyết gia đình dòng họ', 'Chợ tranh tháng Chạp'],
    nguyenLieu: ['Tận dụng nguyên liệu nông nghiệp và lâm sản sông Hồng'],
    congCu: ['Hệ thống xưởng mộc gia đình truyền thống'],
    anh: {
      chuThich: 'Cổng làng Đông Hồ cổ kính bên triền đê sông Đuống hiền hòa.',
      nguonAnh: 'Cổng thông tin điện tử tỉnh Bắc Ninh'
    },
    nguonTuLieu: {
      maNguon: 'NGUON-06',
      tenNguon: 'Chuyên đề Di sản Làng tranh dân gian Đông Hồ',
      coQuan: 'Cổng TTĐT Tỉnh Bắc Ninh & Sở VHTT&DL Bắc Ninh',
      url: 'https://bacninh.gov.vn/du-lich-bac-ninh/lang-tranh-dong-ho-di-san-van-hoa-dac-sac',
      trichDan: 'Vị trí địa lý làng Đông Hồ ven bờ sông Đuống và di tích đình làng Đông Khê phụng thờ tổ nghề.'
    },
    trangThaiXacMinh: 'da-xac-minh',
    ngayCapNhat: '2026-10-30'
  },
  {
    id: 'BG-03',
    ten: 'Hồ sơ đề cử UNESCO di sản cần bảo vệ khẩn cấp',
    nhomDuLieu: 'ho-so-nghe',
    moTa: 'Tư liệu khoa học quốc gia đệ trình UNESCO số 01737 về nghề làm tranh mộc bản Đông Hồ nhằm bảo vệ khẩn cấp.',
    noiDungChiTiet: 'Hồ sơ mã số 01737 (Craft of making Đông Hồ folk woodblock printings) phân tích sâu sắc các yếu tố giá trị nhân văn, hệ thống tri thức dân gian truyền khẩu, đồng thời cảnh báo tình trạng già hóa nghệ nhân, sự suy giảm số hộ duy trì nghề và nguy cơ thất truyền kỹ thuật chế tác màu truyền thống.',
    diaDiem: 'Thị xã Thuận Thành, Bắc Ninh & Cơ quan UNESCO Paris',
    congDoanLienQuan: ['Kiểm kê di sản', 'Bảo tồn khẩn cấp tri thức nghề'],
    nguyenLieu: ['Toàn bộ danh mục 5 màu tự nhiên và giấy dó điệp'],
    congCu: ['Hệ thống ván khắc mộc cổ'],
    anh: {
      chuThich: 'Trang thông tin hồ sơ di sản Đông Hồ trên hệ thống chính thức của UNESCO.',
      nguonAnh: 'UNESCO Intangible Cultural Heritage Portal'
    },
    nguonTuLieu: {
      maNguon: 'NGUON-03',
      tenNguon: 'Craft of making Đông Hồ folk woodblock printings (Hồ sơ UNESCO số 01737)',
      coQuan: 'UNESCO - Di sản phi vật thể',
      url: 'https://ich.unesco.org/en/USL/craft-of-making-ong-h-folk-woodblock-printings-01737?USL=01737',
      trichDan: 'Mục phân tích nguy cơ mai một và kế hoạch hành động bảo vệ nghề làm tranh Đông Hồ.'
    },
    trangThaiXacMinh: 'da-xac-minh',
    ngayCapNhat: '2026-10-30'
  },
  {
    id: 'BG-04',
    ten: 'Chợ tranh Tết tháng Chạp truyền thống',
    nhomDuLieu: 'kien-thuc',
    moTa: 'Không gian văn hóa sinh hoạt dân gian họp theo phiên trong tháng 12 âm lịch, đưa tranh Đông Hồ về khắp nẻo đường quê.',
    noiDungChiTiet: 'Hàng năm vào tháng Chạp, chợ tranh Đông Hồ họp 5 phiên chính vào các ngày 6, 11, 16, 21 và 26 âm lịch. Khắp các ngõ làng tràn ngập sắc giấy điệp đỏ hồng, vàng óng. Lái buôn từ khắp các tỉnh Bắc Kỳ về lấy tranh, còn người dân thì náo nức mua tranh về dán trên vách đất, cửa nhà nghênh đón Tết Nguyên đán.',
    diaDiem: 'Đình làng Đông Hồ và ven triền đê làng Song Hồ',
    congDoanLienQuan: ['CD-06: Hoàn thiện tranh đóng gói đưa ra chợ'],
    nguyenLieu: ['Tranh thành phẩm trên giấy dó điệp'],
    congCu: ['Gánh hàng tranh nan tre', 'Chiếu hoa bày tranh'],
    anh: {
      chuThich: 'Tái hiện không gian chợ tranh Tết truyền thống tại lễ hội làng Đông Hồ hàng năm.',
      nguonAnh: 'Sở VHTT&DL tỉnh Bắc Ninh'
    },
    nguonTuLieu: {
      maNguon: 'NGUON-06',
      tenNguon: 'Chuyên đề Di sản Làng tranh dân gian Đông Hồ',
      coQuan: 'Cổng TTĐT Tỉnh Bắc Ninh',
      url: 'https://bacninh.gov.vn/du-lich-bac-ninh/lang-tranh-dong-ho-di-san-van-hoa-dac-sac',
      trichDan: 'Tư liệu về 5 phiên chợ tranh Tết tháng Chạp truyền thống nổi tiếng vùng Kinh Bắc.'
    },
    trangThaiXacMinh: 'da-xac-minh',
    ngayCapNhat: '2026-10-30'
  },
  {
    id: 'BG-05',
    ten: 'Công đoạn lựa chọn và xử lý gỗ thị làm ván mộc',
    nhomDuLieu: 'cong-doan',
    moTa: 'Chọn thớ gỗ dẻo mịn từ cây thị rừng, luộc ngâm phơi khô để triệt tiêu độ co ngót và nứt nẻ.',
    noiDungChiTiet: 'Gỗ thị có đặc tính dẻo dai, tom gỗ khít mịn, khi khắc không bị xơ xước và khi in thấm màu đều. Thân gỗ được cưa thành từng tấm dày khoảng 2.5 - 3cm, bào phẳng nhẵn và ngâm nước vôi rồi hong khô tự nhiên trong bóng mát nhiều tháng ròng.',
    diaDiem: 'Xưởng mộc gia đình nghệ nhân phường Song Hồ',
    congDoanLienQuan: ['CD-01'],
    nguyenLieu: ['Gỗ cây thị rừng', 'Nước vôi trong'],
    congCu: ['Cưa tay', 'Bào gỗ', 'Thước đo'],
    anh: {
      chuThich: 'Tấm ván gỗ thị đã được xẻ phẳng chuẩn bị cho công đoạn khắc nét.',
      nguonAnh: 'Viện Văn hóa Nghệ thuật Quốc gia Việt Nam'
    },
    nguonTuLieu: {
      maNguon: 'NGUON-03',
      tenNguon: 'Craft of making Đông Hồ folk woodblock printings (Hồ sơ UNESCO số 01737)',
      coQuan: 'UNESCO',
      url: 'https://ich.unesco.org/en/USL/craft-of-making-ong-h-folk-woodblock-printings-01737?USL=01737',
      trichDan: 'Kỹ thuật chọn gỗ thị Diospyros decandra cho ván in mộc bản cổ truyền.'
    },
    trangThaiXacMinh: 'da-xac-minh',
    ngayCapNhat: '2026-10-30'
  },
  {
    id: 'BG-06',
    ten: 'Công đoạn sáng tác mẫu vẽ và chạm khắc ván mộc',
    nhomDuLieu: 'cong-doan',
    moTa: 'Tạo hình bản thảo trên giấy dó, dán úp mặt gỗ và dùng bộ ve đục thủ công để chạm khắc nổi các chi tiết.',
    noiDungChiTiet: 'Mẫu tranh được vẽ nét thảo bằng mực nho trên giấy bản thật mỏng. Nghệ nhân bôi hồ nếp lỏng lên mặt ván gỗ thị rồi úp ngược tờ mẫu vẽ dán phẳng. Khi hồ se lại, dùng bộ đục ve sắc bén tỉa từng nét chữ, đường viền và bóc tách các mảng gỗ thừa. Bản nét đen đòi hỏi kỹ thuật cao nhất vì định hình toàn bộ thần thái bức tranh.',
    diaDiem: 'Phường Song Hồ, TX Thuận Thành, Bắc Ninh',
    congDoanLienQuan: ['CD-02'],
    nguyenLieu: ['Mực nho', 'Hồ nếp dán giấy', 'Mẫu phác thảo'],
    congCu: ['Bộ ve đục 20-30 mũi', 'Búa gỗ gõ đục', 'Đá mài'],
    anh: {
      chuThich: 'Nghệ nhân dùng ve dẹt khéo léo bóc tách các thớ gỗ thị tạo đường nét nổi.',
      nguonAnh: 'Hồ sơ khoa học di sản VICAS'
    },
    nguonTuLieu: {
      maNguon: 'NGUON-07',
      tenNguon: 'Hồ sơ khoa học và nghiên cứu bảo tồn Nghề làm tranh dân gian Đông Hồ',
      coQuan: 'Viện Văn hóa Nghệ thuật Quốc gia Việt Nam',
      url: 'https://vicas.org.vn/nghien-cuu/ho-so-di-san-nghe-lam-tranh-dan-gian-dong-ho',
      trichDan: 'Phương pháp dán mẫu vẽ úp ngược và kỹ thuật đi ve góc 45 độ giữ vững chân nét in.'
    },
    trangThaiXacMinh: 'da-xac-minh',
    ngayCapNhat: '2026-10-30'
  },
  {
    id: 'BG-07',
    ten: 'Công đoạn quét hồ điệp trên giấy dó (Chế tác giấy điệp)',
    nhomDuLieu: 'cong-doan',
    moTa: 'Nghiền vỏ sò điệp biển, pha với hồ nếp quấy chín rồi dùng chổi lá thông quét đều lên mặt giấy dó.',
    noiDungChiTiet: 'Vỏ sò điệp phơi khô giã nhỏ thành bột trắng mịn như tuyết. Bột điệp được trộn đều với hồ nếp cái hoa vàng đã nấu chín trong. Nghệ nhân nhúng chổi thét (bó lá thông già) vào bát hồ điệp rồi quét thoăn thoắt trên mặt giấy dó. Đường gân chổi thông tạo ra hiệu ứng sóng biển óng ánh xà cừ trắng sáng khi tranh được ngắm dưới ánh sáng tự nhiên.',
    diaDiem: 'Làng Đông Hồ, Bắc Ninh',
    congDoanLienQuan: ['CD-03'],
    nguyenLieu: ['Giấy dó Bắc Ninh', 'Bột vỏ sò điệp', 'Hồ nếp cái hoa vàng'],
    congCu: ['Chổi thét lá thông', 'Chậu sành quấy hồ', 'Cối đá giã điệp'],
    anh: {
      chuThich: 'Đôi bàn tay nghệ nhân quẹt chổi lá thông nhịp nhàng phủ lớp điệp óng ánh lên giấy dó.',
      nguonAnh: 'UNESCO USL 01737 Photo Archive'
    },
    nguonTuLieu: {
      maNguon: 'NGUON-03',
      tenNguon: 'Craft of making Đông Hồ folk woodblock printings (Hồ sơ UNESCO số 01737)',
      coQuan: 'UNESCO',
      url: 'https://ich.unesco.org/en/USL/craft-of-making-ong-h-folk-woodblock-printings-01737?USL=01737',
      trichDan: 'Kỹ thuật chế tác giấy điệp phủ xà cừ độc bản của văn hóa dân gian Việt Nam.'
    },
    trangThaiXacMinh: 'da-xac-minh',
    ngayCapNhat: '2026-10-30'
  },
  {
    id: 'BG-08',
    ten: 'Công đoạn tinh chế 5 hệ màu tự nhiên thảo mộc & khoáng thạch',
    nhomDuLieu: 'cong-doan',
    moTa: 'Chế tạo hoàn toàn từ nguyên liệu thiên nhiên: Vàng (hoa hòe), Đỏ (sỏi son), Đen (tro than tre), Xanh (gỉ đồng/chàm), Trắng (điệp).',
    noiDungChiTiet: 'Khác với tranh in công nghiệp, tranh Đông Hồ cổ truyền chỉ dùng 5 màu sắc lấy từ tự nhiên. Nụ hoa hòe sao vàng nấu nước cốt đặc; sỏi son khai thác vùng đồi núi tán trên cối đá mài nước; than lá tre hoặc than rơm nếp ủ kín khí; gỉ đồng ngâm nước chua lên men cho màu xanh dịu mát. Tất cả màu đều được hòa trộn với hồ nếp lỏng để giữ độ kết dính bền bỉ.',
    diaDiem: 'Làng Đông Hồ, Song Hồ, Thuận Thành',
    congDoanLienQuan: ['CD-04'],
    nguyenLieu: ['Nụ hoa hòe', 'Sỏi son đỏ', 'Lá tre than', 'Gỉ đồng', 'Vỏ điệp'],
    congCu: ['Cối đá tán màu', 'Nồi đun chiết thảo mộc', 'Bát đĩa sành'],
    anh: {
      chuThich: 'Bát màu tự nhiên nguyên chất: đỏ son, vàng hòe và đen than lá tre.',
      nguonAnh: 'Viện Văn hóa Nghệ thuật Quốc gia Việt Nam'
    },
    nguonTuLieu: {
      maNguon: 'NGUON-07',
      tenNguon: 'Hồ sơ khoa học và nghiên cứu bảo tồn Nghề làm tranh dân gian Đông Hồ',
      coQuan: 'Viện Văn hóa Nghệ thuật Quốc gia Việt Nam',
      url: 'https://vicas.org.vn/nghien-cuu/ho-so-di-san-nghe-lam-tranh-dan-gian-dong-ho',
      trichDan: 'Phân tích bảng thành phần hữu cơ và vô cơ tạo nên độ bền quang học của màu sắc dân gian Đông Hồ.'
    },
    trangThaiXacMinh: 'da-xac-minh',
    ngayCapNhat: '2026-10-30'
  },
  {
    id: 'BG-09',
    ten: 'Kỹ thuật in ngửa mộc bản truyền thống bằng xơ mướp',
    nhomDuLieu: 'ky-thuat',
    moTa: 'Ván in đặt ngửa, quét màu lên mặt khắc, đặt giấy dó điệp lên trên rồi dùng xơ mướp miết nhẹ lưng giấy.',
    noiDungChiTiet: 'Điểm đặc biệt nhất trong kỹ thuật đồ họa Đông Hồ là phương pháp in ngửa. Ván in gỗ thị được đặt cố định ngửa mặt lên bàn in. Nghệ nhân dùng chổi thét nhỏ quét lớp phẩm màu mỏng đều lên họa tiết nổi. Sau đó, đặt chính xác mép giấy dó điệp lên mặt ván, một tay giữ nếp, tay kia cầm miếng xơ mướp khô xoa đều theo vòng tròn khắp mặt lưng tờ giấy để màu ép sâu vào thớ sợi.',
    diaDiem: 'Bàn in tại nhà nghệ nhân Đông Hồ',
    congDoanLienQuan: ['CD-05'],
    nguyenLieu: ['Giấy điệp khô', 'Phẩm màu tự nhiên'],
    congCu: ['Ván in mộc bản', 'Xơ mướp khô làm mềm', 'Bàn in gỗ'],
    anh: {
      chuThich: 'Nghệ nhân dùng tay xoa xơ mướp miết đều trên lưng giấy đặt ngửa trên ván khắc.',
      nguonAnh: 'UNESCO USL 01737 Photo Archive'
    },
    nguonTuLieu: {
      maNguon: 'NGUON-03',
      tenNguon: 'Craft of making Đông Hồ folk woodblock printings (Hồ sơ UNESCO số 01737)',
      coQuan: 'UNESCO',
      url: 'https://ich.unesco.org/en/USL/craft-of-making-ong-h-folk-woodblock-printings-01737?USL=01737',
      trichDan: 'Kỹ thuật in ngửa ván mộc bản và nguyên lý xoa lực cơ học bằng xơ mướp khô.'
    },
    trangThaiXacMinh: 'da-xac-minh',
    ngayCapNhat: '2026-10-30'
  },
  {
    id: 'BG-10',
    ten: 'Quy tắc in phân tách lớp màu và bản nét đen định hình',
    nhomDuLieu: 'ky-thuat',
    moTa: 'In lần lượt từng màu sắc trước, mỗi lớp khô se mới in màu kế tiếp; ván nét đen in sau cùng hoàn tất bức tranh.',
    noiDungChiTiet: 'Trong tranh Đông Hồ, mỗi màu sắc tương ứng một bản khắc gỗ riêng biệt. Thứ tự in màu luôn tuân theo nguyên tắc: Màu vàng -> Màu đỏ son -> Màu xanh lục. Mỗi lần in một màu xong, tranh được rải trên nia tre để se khô mặt rồi mới tiến hành in lớp màu tiếp theo. Bản nét đen (ván nét) luôn được in sau cùng nhằm che đi các vết viền chườm và định hình toàn bộ chi tiết, tạo sự tương phản sống động.',
    diaDiem: 'Phường Song Hồ, Thuận Thành, Bắc Ninh',
    congDoanLienQuan: ['CD-02', 'CD-05'],
    nguyenLieu: ['5 hệ màu tự nhiên'],
    congCu: ['Hệ thống ván in tách màu', 'Xơ mướp'],
    anh: {
      chuThich: 'Các lớp màu được in chồng khớp chuẩn xác qua từng lượt mộc bản.',
      nguonAnh: 'Tư liệu nghiên cứu VICAS'
    },
    nguonTuLieu: {
      maNguon: 'NGUON-07',
      tenNguon: 'Hồ sơ khoa học và nghiên cứu bảo tồn Nghề làm tranh dân gian Đông Hồ',
      coQuan: 'Viện Văn hóa Nghệ thuật Quốc gia Việt Nam',
      url: 'https://vicas.org.vn/nghien-cuu/ho-so-di-san-nghe-lam-tranh-dan-gian-dong-ho',
      trichDan: 'Quy trình in phân màu đa mộc bản và vai trò tối thượng của ván nét đen định thần.'
    },
    trangThaiXacMinh: 'da-xac-minh',
    ngayCapNhat: '2026-10-30'
  },
  {
    id: 'BG-11',
    ten: 'Giấy Dó xén thủ công truyền thống',
    nhomDuLieu: 'nguyen-lieu',
    moTa: 'Giấy sản xuất từ vỏ cây Dó tự nhiên theo phương pháp ngâm ủ thủ công của cư dân đồng bằng châu thổ sông Hồng.',
    noiDungChiTiet: 'Giấy dó có đặc tính dai, xốp, chống mối mọt tự nhiên và không hút ẩm làm mốc nát. Khi xé thấy rõ các sợi tơ cellulose đan xen chằng chịt. Nhờ bề mặt có độ bám dính lý tưởng, giấy dó giữ chặt được lớp hồ điệp và các hạt màu thảo mộc thiên nhiên qua hàng thế kỷ mà không bị giòn rách.',
    diaDiem: 'Làng giấy Dó Phong Khê / Tiên Du và Đông Hồ (Bắc Ninh)',
    congDoanLienQuan: ['CD-03', 'CD-05', 'CD-06'],
    nguyenLieu: ['Vỏ cây dó rừng'],
    congCu: ['Khuôn seo giấy', 'Bàn ép nước'],
    anh: {
      chuThich: 'Xấp giấy dó mộc màu ngà vàng tự nhiên trước khi được quét phủ điệp.',
      nguonAnh: 'Cổng TTĐT Tỉnh Bắc Ninh'
    },
    nguonTuLieu: {
      maNguon: 'NGUON-03',
      tenNguon: 'Craft of making Đông Hồ folk woodblock printings (Hồ sơ UNESCO số 01737)',
      coQuan: 'UNESCO',
      url: 'https://ich.unesco.org/en/USL/craft-of-making-ong-h-folk-woodblock-printings-01737?USL=01737',
      trichDan: 'Mô tả cấu trúc sợi giấy dó (dó paper) trong hồ sơ đệ trình di sản phi vật thể.'
    },
    trangThaiXacMinh: 'da-xac-minh',
    ngayCapNhat: '2026-10-30'
  },
  {
    id: 'BG-12',
    ten: 'Vỏ sò điệp biển (Chất tạo nền xà cừ óng ánh)',
    nhomDuLieu: 'nguyen-lieu',
    moTa: 'Vỏ sò điệp biển tự nhiên nghiền nhỏ thành bột mịn, pha cùng hồ nếp tạo nên hiệu ứng bắt sáng độc nhất vô nhị.',
    noiDungChiTiet: 'Vỏ sò điệp biển được rửa sạch tạp chất muối, phơi nhiều nắng rồi cho vào cối đá giã nhỏ như phấn. Khi soi dưới kính hiển vi, bột điệp gồm vô số hạt tinh thể canxi cacbonat mỏng dẹt lấp lánh như xà cừ. Khi quét lên giấy dó, các hạt này xếp lớp phản quang, tạo cho tranh Đông Hồ nét rạng rỡ, sống động khác hẳn bất kỳ dòng tranh nào trên thế giới.',
    diaDiem: 'Vùng biển duyên hải Việt Nam đưa về làng Đông Hồ',
    congDoanLienQuan: ['CD-03', 'CD-04'],
    nguyenLieu: ['Vỏ sò điệp biển tự nhiên'],
    congCu: ['Cối đá giã vỏ điệp', 'Rây lọc vải mỏng'],
    anh: {
      chuThich: 'Vỏ sò điệp biển nguyên bản và bát bột điệp trắng tinh khôi.',
      nguonAnh: 'Hồ sơ khoa học di sản VICAS'
    },
    nguonTuLieu: {
      maNguon: 'NGUON-07',
      tenNguon: 'Hồ sơ khoa học và nghiên cứu bảo tồn Nghề làm tranh dân gian Đông Hồ',
      coQuan: 'Viện Văn hóa Nghệ thuật Quốc gia Việt Nam',
      url: 'https://vicas.org.vn/nghien-cuu/ho-so-di-san-nghe-lam-tranh-dan-gian-dong-ho',
      trichDan: 'Đặc tính quang học và kỹ thuật tán mịn bột vỏ sò điệp truyền thống.'
    },
    trangThaiXacMinh: 'da-xac-minh',
    ngayCapNhat: '2026-10-30'
  },
  {
    id: 'BG-13',
    ten: 'Hoa hòe, Than tre, Sỏi son (Hệ màu thiên nhiên Đông Hồ)',
    nhomDuLieu: 'nguyen-lieu',
    moTa: 'Tập hợp các nguồn thảo mộc và khoáng vật thuần Việt tạo nên gam màu ấm cúng, trường tồn cùng thời gian.',
    noiDungChiTiet: 'Màu vàng hoa hòe sao đậm mang hơi thở mùa màng no đủ. Màu đen than lá tre hoặc than rơm nếp ủ kín khí cho sắc đen thâm trầm, đôn hậu. Màu đỏ son từ sỏi quặng đồi Thiên Thai biểu trưng cho may mắn, phúc lộc đầu xuân. Tất cả tạo nên bảng màu ấm áp, thanh nhã, hài hòa với tâm thức thẩm mỹ của người Việt.',
    diaDiem: 'Vùng Kinh Bắc châu thổ sông Hồng',
    congDoanLienQuan: ['CD-04', 'CD-05'],
    nguyenLieu: ['Hoa hòe sao', 'Than lá tre rụng', 'Sỏi son Thiên Thai'],
    congCu: ['Cối đá', 'Nồi đun chiết xuất'],
    anh: {
      chuThich: 'Bảng mẫu 5 sắc màu tự nhiên nguyên bản của dòng tranh dân gian Đông Hồ.',
      nguonAnh: 'Cổng TTĐT Tỉnh Bắc Ninh'
    },
    nguonTuLieu: {
      maNguon: 'NGUON-06',
      tenNguon: 'Chuyên đề Di sản Làng tranh dân gian Đông Hồ',
      coQuan: 'Cổng TTĐT Tỉnh Bắc Ninh',
      url: 'https://bacninh.gov.vn/du-lich-bac-ninh/lang-tranh-dong-ho-di-san-van-hoa-dac-sac',
      trichDan: 'Tư liệu chi tiết về nguồn gốc thiên nhiên của từng gam màu tranh Đông Hồ.'
    },
    trangThaiXacMinh: 'da-xac-minh',
    ngayCapNhat: '2026-10-30'
  },
  {
    id: 'BG-14',
    ten: 'Bộ ve đục chuyên dụng khắc mộc bản tranh dân gian',
    nhomDuLieu: 'cong-cu',
    moTa: 'Hệ thống hàng chục mũi đục thép rèn thủ công giúp nghệ nhân điêu khắc đường nét và hoa văn tinh xảo trên gỗ thị.',
    noiDungChiTiet: 'Bộ ve đục gồm ve dẹt (dùng bóc nền phẳng), ve lòng máng (dùng móc rãnh sâu), ve cong và ve vát nhọn (dùng chạm tỉa chân tóc, râu mắt nhân vật). Mỗi nghệ nhân thường tự tay bảo quản và mài sắc lưỡi đục trên các loại đá mài bùn tự nhiên để mũi ve luôn ngọt và chuẩn xác tuyệt đối.',
    diaDiem: 'Phường Song Hồ, Thuận Thành, Bắc Ninh',
    congDoanLienQuan: ['CD-02: Khắc ván mộc bản'],
    nguyenLieu: ['Thép tốt rèn tay', 'Gỗ xoan làm chuôi cán'],
    congCu: ['Đá mài bùn tự nhiên', 'Dầu lau chống gỉ'],
    anh: {
      chuThich: 'Bộ ve đục cổ truyền của gia đình nghệ nhân gìn giữ qua nhiều thế hệ tại Đông Hồ.',
      nguonAnh: 'UNESCO USL 01737 Photo Archive'
    },
    nguonTuLieu: {
      maNguon: 'NGUON-03',
      tenNguon: 'Craft of making Đông Hồ folk woodblock printings (Hồ sơ UNESCO số 01737)',
      coQuan: 'UNESCO',
      url: 'https://ich.unesco.org/en/USL/craft-of-making-ong-h-folk-woodblock-printings-01737?USL=01737',
      trichDan: 'Danh mục công cụ chạm khắc mộc bản (wood carving chisels) trong hồ sơ quốc tế.'
    },
    trangThaiXacMinh: 'da-xac-minh',
    ngayCapNhat: '2026-10-30'
  },
  {
    id: 'BG-15',
    ten: 'Tay xoa xơ mướp khô miết màu mộc bản',
    nhomDuLieu: 'cong-cu',
    moTa: 'Dụng cụ ép giấy in tự nhiên bằng xơ quả mướp hương già, giúp tản đều lực ép mà không xước rách giấy dó.',
    noiDungChiTiet: 'Quả mướp hương già được ngâm nước cho rữa vỏ ngoài, rũ sạch hạt bên trong rồi phơi khô kiệt. Nghệ nhân dùng búa gỗ đập nhẹ cho các thớ sợi mềm mại, sau đó thoa một lớp sáp ong mỏng trên bề mặt chà. Khi in, xơ mướp tạo độ ma sát êm dịu, giúp màu in thấm đều mà lưng giấy dó không bị xơ mủn hay gãy nếp.',
    diaDiem: 'Làng Đông Hồ, Song Hồ, Thuận Thành',
    congDoanLienQuan: ['CD-05: In tranh mộc bản'],
    nguyenLieu: ['Quả mướp hương già phơi khô', 'Sáp ong tự nhiên'],
    congCu: ['Bàn in mộc bản'],
    anh: {
      chuThich: 'Tay xoa xơ mướp truyền thống nhẵn bóng vết màu qua hàng ngàn lượt in tranh.',
      nguonAnh: 'Viện Văn hóa Nghệ thuật Quốc gia Việt Nam'
    },
    nguonTuLieu: {
      maNguon: 'NGUON-07',
      tenNguon: 'Hồ sơ khoa học và nghiên cứu bảo tồn Nghề làm tranh dân gian Đông Hồ',
      coQuan: 'Viện Văn hóa Nghệ thuật Quốc gia Việt Nam',
      url: 'https://vicas.org.vn/nghien-cuu/ho-so-di-san-nghe-lam-tranh-dan-gian-dong-ho',
      trichDan: 'Khảo sát dụng cụ tay xoa truyền thống và vai trò cơ học trong kỹ thuật in tranh.'
    },
    trangThaiXacMinh: 'da-xac-minh',
    ngayCapNhat: '2026-10-30'
  },
  {
    id: 'BG-16',
    ten: 'Chổi thét lá thông già quét lớp điệp',
    nhomDuLieu: 'cong-cu',
    moTa: 'Bó lá thông kim già được cắt phẳng đầu để quét đều hồ điệp trên giấy dó, tạo gân sóng xà cừ óng ả.',
    noiDungChiTiet: 'Lá thông kim được thu hái từ các đồi thông vùng Lục Nam, Chí Linh hoặc Yên Dũng. Chọn lá thông già bánh tẻ bó chặt tròn đường kính khoảng 4-5cm, đầu cắt bằng phẳng. Khi quét trên giấy dó, các sợi lá thông phân bố hồ điệp thành những dải vân gợn sóng đều đặn, tạo nên nét đẹp hoa văn tự nhiên độc đáo.',
    diaDiem: 'Làng Đông Hồ, Bắc Ninh',
    congDoanLienQuan: ['CD-03: Chế tác giấy điệp'],
    nguyenLieu: ['Lá thông già bánh tẻ', 'Dây lạt tre buộc chặt'],
    congCu: ['Dao cắt gọt bằng phẳng đầu chổi'],
    anh: {
      chuThich: 'Bó chổi thét lá thông cầm tay đượm màu bột điệp trắng ngà.',
      nguonAnh: 'UNESCO USL 01737 Photo Archive'
    },
    nguonTuLieu: {
      maNguon: 'NGUON-03',
      tenNguon: 'Craft of making Đông Hồ folk woodblock printings (Hồ sơ UNESCO số 01737)',
      coQuan: 'UNESCO',
      url: 'https://ich.unesco.org/en/USL/craft-of-making-ong-h-folk-woodblock-printings-01737?USL=01737',
      trichDan: 'Tư liệu miêu tả cấu tạo chổi thét (pine needle brush) quét điệp.'
    },
    trangThaiXacMinh: 'da-xac-minh',
    ngayCapNhat: '2026-10-30'
  },
  {
    id: 'BG-17',
    ten: 'Bức tranh tiêu biểu "Đám cưới chuột" và ý nghĩa biểu tượng',
    nhomDuLieu: 'kien-thuc',
    moTa: 'Tác phẩm tranh dân gian Đông Hồ trứ danh phản ánh sinh động triết lý nhân sinh và nghệ thuật trào lộng dân gian Việt Nam.',
    noiDungChiTiet: 'Bức "Đám cưới chuột" (chuột rước dâu) miêu tả đoàn chuột đi đón dâu thổi kèn rước trống nhưng phải mang cá, chim dâng lễ vật cống nạp cho chú mèo béo hung dữ nhằm cầu mong sự yên ổn. Bức tranh vừa hóm hỉnh vừa hàm chứa triết lý hòa hiếu, ứng xử tế nhị của cư dân nông nghiệp và tiếng cười trào lộng châm biếm thói sách nhiễu của tầng lớp thống trị phong kiến.',
    diaDiem: 'Lưu giữ tại Làng Đông Hồ và Bảo tàng Mỹ thuật Việt Nam',
    congDoanLienQuan: ['Khắc 5 ván mộc bản', 'In 4 màu và bản nét đen'],
    nguyenLieu: ['Giấy điệp vàng hoặc hồng cánh sen', 'Đủ 5 sắc màu tự nhiên'],
    congCu: ['Bộ 5 ván in mộc bản nguyên tác'],
    anh: {
      chuThich: 'Bức tranh dân gian Đông Hồ "Đám cưới chuột" in mộc bản trên nền giấy điệp xà cừ.',
      nguonAnh: 'Cổng TTĐT Tỉnh Bắc Ninh & Trung tâm bảo tồn tranh Đông Hồ'
    },
    nguonTuLieu: {
      maNguon: 'NGUON-06',
      tenNguon: 'Chuyên đề Di sản Làng tranh dân gian Đông Hồ',
      coQuan: 'Cổng TTĐT Tỉnh Bắc Ninh',
      url: 'https://bacninh.gov.vn/du-lich-bac-ninh/lang-tranh-dong-ho-di-san-van-hoa-dac-sac',
      trichDan: 'Phân tích giá trị mỹ thuật và tư tưởng nhân sinh bức tranh Đám cưới chuột.'
    },
    trangThaiXacMinh: 'da-xac-minh',
    ngayCapNhat: '2026-10-30'
  },
  {
    id: 'BG-18',
    ten: 'Bức tranh "Hứng dừa" và ước nguyện gia đình sung túc',
    nhomDuLieu: 'kien-thuc',
    moTa: 'Bức tranh ca ngợi tình cảm gia đình, cảnh sinh hoạt thôn quê mộc mạc và ước vọng ấm no, con đàn cháu đống.',
    noiDungChiTiet: 'Bức tranh vẽ cảnh một người cha trèo lên cây dừa hái những quả dừa to tròn thả xuống cho người mẹ đứng dưới dang rộng vạt váy đón hứng, cạnh đó là những đứa trẻ tươi cười reo vui. Bức tranh toát lên bầu không khí vui tươi, gắn kết lứa đôi son sắt và khát vọng phồn vinh của làng quê Việt Nam.',
    diaDiem: 'Làng Đông Hồ, Song Hồ, Thuận Thành',
    congDoanLienQuan: ['Khắc 4 ván mộc', 'In màu vàng, đỏ, xanh và bản nét đen'],
    nguyenLieu: ['Giấy dó quét điệp trắng', 'Màu son, vàng hòe, chàm'],
    congCu: ['Ván in mộc bản Hứng dừa'],
    anh: {
      chuThich: 'Bức tranh "Hứng dừa" đậm tính nhân văn và không khí lễ hội dân gian.',
      nguonAnh: 'Hồ sơ khoa học di sản VICAS'
    },
    nguonTuLieu: {
      maNguon: 'NGUON-07',
      tenNguon: 'Hồ sơ khoa học và nghiên cứu bảo tồn Nghề làm tranh dân gian Đông Hồ',
      coQuan: 'Viện Văn hóa Nghệ thuật Quốc gia Việt Nam',
      url: 'https://vicas.org.vn/nghien-cuu/ho-so-di-san-nghe-lam-tranh-dan-gian-dong-ho',
      trichDan: 'Phân tích biểu tượng văn hóa phồn thực và tính hài hước dân gian trong bức tranh Hứng dừa.'
    },
    trangThaiXacMinh: 'da-xac-minh',
    ngayCapNhat: '2026-10-30'
  }
];
