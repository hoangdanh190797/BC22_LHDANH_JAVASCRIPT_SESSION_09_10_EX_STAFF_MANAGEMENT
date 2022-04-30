//Do nhân viên không phải một người nên phải tạo ra danh sách NV;
//---------------------------------------------------------------
//Tạo đối tượng DSNV từ lớp đối tượng danhsachnhanvien;
var liststaff = new ListStaff();
//---------------------------------------------------------------
//Phần validation chưa cần thiết;
//Giờ thì push vào được rồi;
var validation = new Validation();
//---------------------------------------------------------------
getLocalStorage();
//---------------------------------------------------------------
//fn DOM nhanh
function getEle(id) {
  return document.getElementById(id);
}
//---------------------------------------------------------------
//function getInfostaff() {}
//Viết hàm lấy thông tin người dùng cơ bản trước:
//Thực hiện thao tác click như vậy luôn thì không phải là hàm lấy
//thông tin.
function getInfoStaff() {
  var maNV = getEle("tknv").value;
  var tenNV = getEle("name").value;
  var emailNV = getEle("email").value;
  var matkhauNV = getEle("password").value;
  var ngaylamNV = getEle("datepicker").value;
  var luongcbNV = getEle("luongCB").value;
  var chucvuNV = getEle("chucvu").value;
  var giolamtrongthangNV = getEle("gioLam").value * 1;
  //---Trước khi push dữ liệu vào obj
  //Cho nó 1 cái cờ hiệu (Flag)
  var isValid = true;
  //---Validation cho -  Tài khoản:
  isValid &=
    validation.checkEmpty(maNV, "tbTKNV", "Don't BLANK") &&
    validation.checkStringLength(maNV, "tbTKNV", "4 - 6 characters", 4, 6);
  //---Validation cho -  Tên nhân viên:
  isValid &=
    validation.checkEmpty(tenNV, "tbTen", "Don't BLANK") &&
    validation.checkString(tenNV, "tbTen", "Name is string");
  //---Validation cho -  Email:
  isValid &=
    validation.checkEmpty(emailNV, "tbEmail", "Don't BLANK") &&
    validation.checkEmail(emailNV, "tbEmail", "Email is format");
  //---Validation cho -  Mật khẩu:
  isValid &=
    validation.checkEmpty(matkhauNV, "tbMatKhau", "Don't BLANK") &&
    validation.checkPassword(
      matkhauNV,
      "tbMatKhau",
      `6 - 10 characters, at least one uppercase letter, one 
      lowercase letter, one number and one special character`
    );
  //---Validation cho -  Ngày:
  isValid &= validation.checkEmpty(ngaylamNV, "tbNgay", "Don't BLANK");
  //---Validation cho -  Lương cơ bản:
  isValid &=
    validation.checkEmpty(luongcbNV, "tbLuongCB", "Don't BLANK") &&
    validation.checkSalary(
      luongcbNV,
      "tbLuongCB",
      "Salary: 1.000.000 - 20.000.000",
      1000000,
      20000000
    );
  //---Validation cho -  Chức vụ:
  isValid &= validation.checkEmpty(chucvuNV, "tbChucVu", "Don't BLANK");
  //---Validation cho -  Giờ làm:
  isValid &=
    validation.checkEmpty(giolamtrongthangNV, "tbGiolam", "Don't BLANK") &&
    validation.checkWorkingTime(
      giolamtrongthangNV,
      "tbGiolam",
      "Time: 80 - 200 hours",
      80,
      200
    );
  //Thieu dong nay no khong hieu
  if (!isValid) return null;
  //
  var nhanVIEN = new NhanVien(
    maNV,
    tenNV,
    emailNV,
    matkhauNV,
    ngaylamNV,
    luongcbNV,
    chucvuNV,
    giolamtrongthangNV
  );
  nhanVIEN.totalSalary();
  nhanVIEN.ratingStaff();
  return nhanVIEN;
}
//---
//Hàm lấy thông tin người dùng là khi lấy được giá trị, sau đó
//thực hiện kiểm tra dữ liệu đầu vào, kiểm tra xem dữ liệu truyền
//vào có trùng không ?hoặc có đúng yêu cầu không, nếu không đúng
//không thực hiện hành động lưu dữ liệu về database.
//---------------------------------------------------------------
getEle("btnThemNV").addEventListener("click", function () {
  //---------------------------------------------------------------
  var nhanVIENN = getInfoStaff();
  //---------------------------------------------------------------
  //if (nhanVIENN) {
  //---
  liststaff.addStaff(nhanVIENN);
  //---
  CreateTable(liststaff.arr);
  //---
  setLocalStorage();
  //}
  //Thêm staff vào liststaff được rồi

  //Log ra được info của staff rồi
  //console.log(nhanVIEN);
  //---------------------------------------------------------------
  //Thử log ra coi tính tổng lương coi đủ không?
  //var a = checkPosition(chucvuNV, luongcbNV);
  //console.log(a);
  //Ok Log ra được nha!
  //---------------------------------------------------------------
  //var b = checkRating(giolamtrongthangNV);
  //console.log(b);
  //---------------------------------------------------------------
  //***Sai chứ không phải thiếu, muốn render arr mà đi add obj
  //Check thử coi ra không? - Ra nha, tiếp tục render nó lên bảng
  //---------------------------------------------------------------
});
//---------------------------------------------------------------
//Đối với fn này là mình lầy được thông tin ra rồi!
// document.getElementById("btnThemNV").onclick = function () {
//   var tenNV = getEle("tknv").value;
//   console.log(tenNV);
// };

//---------------------------------------------------------------
//Giờ lấy được thông tin rồi, cố gắng đem nó in ra ngoài cái bảng
//---------------------------------------------------------------
//IN RA THÌ CHẮC KHÔNG VẤN ĐỀ, VẤN ĐỀ Ở CHỖ LÀ IN CẢ MẢNG RA THÌ KHÓ
function CreateTable(arr) {
  var content = "";
  for (var i = 0; i < arr.length; i++) {
    //Để mà có thông tin như:
    //  Tổng lương
    //  Xếp loại
    //  Khả năng cao là phải chuyển tụi nó sang
    //  methods của object
    //  haha đối phó chút, có gì optimal lại sau.
    var nhanVIEN = arr[i];
    content += `
        <tr>
            <td>${nhanVIEN.maNV}</td>
            <td>${nhanVIEN.tenNV}</td>
            <td>${nhanVIEN.emailNV}</td>
            <td>${nhanVIEN.ngaylamNV}</td>
            <td>${nhanVIEN.chucvuNV}</td>
            <td>${nhanVIEN.tongluongNV}</td>
            <td>${nhanVIEN.loaiNV}</td>
            <td>
            <button 
              class="btn btn-info" 
              onclick="_editStaff('${nhanVIEN.maNV}')"
              data-toggle="modal"
              data-target="#myModal"
              >Edit</button>
            <button 
              class="btn btn-danger" 
              onclick="_deleteStaff('${nhanVIEN.maNV}')"
              >
              Del</button>
            </td>
        </tr>
        `;
  }
  getEle("tableDanhSach").innerHTML = content;
}
//---------------------------------------------------------------
//Khi người dùng nhập chức vụ vào, tại đó xét fn Chức vụ luôn;
// function checkPosition(__position, __salary) {
//   var totalSalary = 0;
//   if (__position == "Sếp") {
//     totalSalary = __salary * 3;
//   } else if (__position == "Trưởng phòng") {
//     totalSalary = __salary * 2;
//   } else if (__position == "Nhân viên") {
//     totalSalary = __salary * 1;
//   }
//   return totalSalary;
// }
//---------------------------------------------------------------
// function checkRating(__workingTime) {
//   var rating = "";
//   if (__workingTime >= 192) {
//     rating = "Xuất sắc";
//   } else if (__workingTime >= 176) {
//     rating = "Giỏi";
//   } else if (__workingTime >= 160) {
//     rating = "Khá";
//   } else if (__workingTime < 160) {
//     rating = "Trung bình";
//   }
//   return rating;
// }
//---------------------------------------------------------------
//HÀM CHO NÚT CẬP NHẬT NHÂN VIÊN
function _editStaff(maNV) {
  getEle("btnCapNhat").style.display = "inline-block";
  var Staffs = liststaff.editStaff(maNV);
  if (Staffs) {
    getEle("tknv").value = Staffs.maNV;
    getEle("name").value = Staffs.tenNV;
    getEle("email").value = Staffs.emailNV;
    getEle("password").value = Staffs.matkhauNV;
    getEle("datepicker").value = Staffs.ngaylamNV;
    getEle("luongCB").value = Staffs.luongcbNV;
    getEle("chucvu").value = Staffs.chucvuNV;
    getEle("gioLam").value = Staffs.giolamtrongthangNV;
  }
}
//---------------------------------------------------------------
//HÀM CẬP NHẬT THÔNG TIN NHÂN VIÊN:
getEle("btnCapNhat").addEventListener("click", function () {
  //Lấy lại những thông tin mới nhất từ các thẻ input
  var staff = getInfoStaff();
  liststaff.updateStaff(staff);
  CreateTable(liststaff.arr);
  setLocalStorage();
});

//---------------------------------------------------------------
//HÀM CHO NÚT XOÁ NHÂN VIÊN:
function _deleteStaff(maNV) {
  liststaff.deleteStaff(maNV);
  CreateTable(liststaff.arr);
  setLocalStorage();
}
//---------------------------------------------------------------
getEle("searchName").addEventListener("keyup", function () {
  var keyword = getEle("searchName").value;
  var array = liststaff.findStaff(keyword);
  CreateTable(array);
});
//---------------------------------------------------------------
//Xử lý lưu trữ dữ liệu - tạm thời:
function setLocalStorage() {
  var dataString = JSON.stringify(liststaff.arr);
  localStorage.setItem("LISTSTAFF", dataString);
}
//---
function getLocalStorage() {
  var data = localStorage.getItem("LISTSTAFF");
  if (data) {
    var dataJson = JSON.parse(data);
    liststaff.arr = dataJson;
    CreateTable(liststaff.arr);
  }
}
