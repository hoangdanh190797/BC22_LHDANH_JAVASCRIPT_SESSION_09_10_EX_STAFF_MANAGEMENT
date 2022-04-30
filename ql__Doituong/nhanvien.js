//Tạo lớp đối tượng nhân viên (Tương tự sinhViên)
function NhanVien(
  _maNV,
  _tenNV,
  _emailNV,
  _matkhauNV,
  _ngaylamNV,
  _luongcbNV,
  _chucvuNV,
  _giolamtrongthangNV
  //_tongluongNV,
  //_loaiNV
) {
  this.maNV = _maNV;
  this.tenNV = _tenNV;
  this.emailNV = _emailNV;
  this.matkhauNV = _matkhauNV;
  this.ngaylamNV = _ngaylamNV;
  this.luongcbNV = _luongcbNV;
  this.chucvuNV = _chucvuNV;
  this.giolamtrongthangNV = _giolamtrongthangNV;
  this.tongluongNV = 0;
  this.loaiNV = "";
  //---------------------------------------------------------------
  this.totalSalary = function () {
    if (this.chucvuNV == "Sếp") {
      this.tongluongNV = this.luongcbNV * 3;
    } else if (this.chucvuNV == "Trưởng phòng") {
      this.tongluongNV = this.luongcbNV * 2;
    } else if (this.chucvuNV == "Nhân viên") {
      this.tongluongNV = this.luongcbNV * 1;
    }
    return this.tongluongNV;
  };
  //---------------------------------------------------------------
  this.ratingStaff = () => {
    if (this.giolamtrongthangNV >= 192) {
      this.loaiNV = "Xuất sắc";
    } else if (this.giolamtrongthangNV >= 176) {
      this.loaiNV = "Giỏi";
    } else if (this.giolamtrongthangNV >= 160) {
      this.loaiNV = "Khá";
    } else if (this.giolamtrongthangNV < 160) {
      this.loaiNV = "Trung bình";
    }
    return this.loaiNV;
  };
  //this.tongluongNV = _tongluongNV;
  //this.loaiNV = _loaiNV;
  //---------------------------------------------------------------
  //Chưa chia methods hay props;
  //---------------------------------------------------------------
  //Bên QLSV có 2 phương thức (Methods)
  //1. Là Tính điểm trung bình
  //2. Xếp loại sinh viên (tb, khá, giỏi)
  //---------------------------------------------------------------
  //Nếu là BT1 thì có thể viết như vầy, nhưng đây là BT2;
  //---------------------------------------------------------------
  //Trước mắt chia những cái cơ bản có thể thấy tương tự như
  //QLSV ra trước, rồi phân loại props hay method sau:
  //---------------------------------------------------------------
  //Phân tích lại nè: Chỗ lưu dữ liệu tạm thời, ở LocalStorage, không
  //ảnh hưởng quá trình xử lý, cũng như in thông tin ra bên ngoài,
  //khả năng logic của mình chưa chính xác.
  //---------------------------------------------------------------
  //Giở xử lý Validation, cho từng cái! - Chắc chưa luôn, giờ Lưu tạm
  //nó vào LocalStorage
  //Tại đây có 2 việc cần phải xử lý: 1 là xử lý về lưu trữ, 2 là xử lý
  //về validation
  //OK - Xử lý - phần lưu trữ đã xong - Còn lại là Valition nữa là Nộp;
}
