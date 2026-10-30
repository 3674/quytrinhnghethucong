export interface HeritageOverview {
  tenDiSan: string;
  tenTiengAnh: string;
  loaiHinh: string;
  diaDiem: string;
  toaDoGoc: string;
  tinhTrangCongNhan: {
    quocGia: string;
    quocTe: string;
    tinhTrangHienTai: string;
  };
  phamViDeTai: string;
  giaTriVanHoa: string[];
  nguyCoMaiMot: string[];
  bienPhapBaoVe: string[];
  thongDiepBaoTon: string;
}

export const HERITAGE_DATA: HeritageOverview = {
  tenDiSan: 'Nghề làm tranh dân gian Đông Hồ',
  tenTiengAnh: 'Craft of making Đông Hồ folk woodblock printings',
  loaiHinh: 'Nghề thủ công truyền thống (Di sản văn hóa phi vật thể)',
  diaDiem: 'Làng Đông Hồ (nay là khu phố Đông Khê), phường Song Hồ, thị xã Thuận Thành, tỉnh Bắc Ninh, Việt Nam',
  toaDoGoc: 'Bên bờ nam sông Đuống, vùng Kinh Bắc giàu truyền thống văn hiến',
  tinhTrangCongNhan: {
    quocGia: 'Công nhận là Di sản văn hóa phi vật thể quốc gia theo Quyết định số 5079/QĐ-BVHTTDL ngày 27/12/2012 của Bộ VHTT&DL.',
    quocTe: 'Việt Nam đã đệ trình Hồ sơ khoa học quốc gia lên UNESCO (Hồ sơ số 01737) đề nghị ghi danh vào Danh mục Di sản văn hóa phi vật thể cần bảo vệ khẩn cấp.',
    tinhTrangHienTai: 'Cần bảo vệ khẩn cấp do số lượng nghệ nhân nắm giữ kỹ thuật truyền thống ngày càng ít và sức ép từ thị trường hiện đại.',
  },
  phamViDeTai: 'Tư liệu hóa và số hóa quy trình nghề làm tranh dân gian Đông Hồ (nguyên liệu tự nhiên, công cụ mộc bản, kỹ thuật in và hồ sơ dữ liệu kiểm chứng). Ứng dụng không khẳng định đã số hóa toàn bộ các nghề thủ công khác của Việt Nam.',
  giaTriVanHoa: [
    'Phản ánh sinh động đời sống tâm hồn, triết lý nhân sinh, ước nguyện thái bình, ấm no, thịnh vượng của cư dân nông nghiệp lúa nước đồng bằng Bắc Bộ.',
    'Sử dụng 100% nguyên liệu tự nhiên bản địa: giấy dó xén thủ công, màu vàng hoa hòe, đỏ sỏi son, đen than lá tre/rơm rạ nếp, trắng óng ánh vỏ điệp biển và xanh rỉ đồng/lá chàm.',
    'Kỹ thuật in ngửa ván mộc bản độc đáo: mỗi màu sắc tương ứng một bản gỗ khắc nổi riêng biệt, in lần lượt từng màu và kết thúc bằng bản nét đen định hình linh hồn bức tranh.',
    'Gắn liền với phiên chợ tranh Tết truyền thống tháng Chạp bên bờ sông Đuống - nét sinh hoạt lễ hội dân gian đặc sắc của văn hóa Kinh Bắc.'
  ],
  nguyCoMaiMot: [
    'Số lượng gia đình và nghệ nhân duy trì nghề truyền thống còn rất hạn chế tại làng Đông Hồ.',
    'Sự cạnh tranh từ công nghệ in công nghiệp hiện đại và hàng mã thương mại.',
    'Nguồn nguyên liệu tự nhiên truyền thống (như vỏ điệp tự nhiên, sỏi son chuẩn, giấy dó đập thủ công) ngày càng khó khăn và tốn nhiều công sức để thu thập và tinh chế.'
  ],
  bienPhapBaoVe: [
    'Tư liệu hóa chi tiết từng công đoạn kỹ thuật, nguyên liệu và dụng cụ bằng kho dữ liệu mở có kiểm chứng.',
    'Hỗ trợ giáo dục di sản cho thế hệ trẻ học sinh, sinh viên thông qua nền tảng số hóa trực quan, khoa học.',
    'Tôn trọng tuyệt đối quyền chủ thể của nghệ nhân và cộng đồng làm nghề tại phường Song Hồ, thị xã Thuận Thành, Bắc Ninh.'
  ],
  thongDiepBaoTon: 'Mỗi bản khắc gỗ thị, mỗi lớp quét chổi thông óng ánh điệp là kết tinh của hàng trăm năm trí tuệ dân gian Việt Nam. Bảo tồn di sản bắt đầu từ sự hiểu biết chân xác và tôn trọng tư liệu gốc.'
};
