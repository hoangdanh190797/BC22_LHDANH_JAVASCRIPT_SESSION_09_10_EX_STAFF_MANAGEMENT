//Tương tự như DSSV, build từ từ ra, có điều chỉnh gì thì tính sau:

function ListStaff() {
  //DS Nhân viên
  this.arr = [];

  //Các phương thức trong DS
  //Để thực hiện khác thao tác CRUD trên LIST, phải có yếu tố dựa vào;
  //Tại bài này đang dựa vào Mã nhân viên;

  //0. Tìm vị trí nhân viên trong listStaff
  this.findIndexstaff = function (maNV) {
    //
    var index = -1;
    for (var i = 0; i < this.arr.length; i++) {
      var nhanVien = this.arr[i];
      if (nhanVien.maNV === maNV) {
        index = i;
        break;
      }
    }
    return index;
  };
  //1. Thêm nhân viên
  this.addStaff = function (staff) {
    this.arr.push(staff);
  };
  //2. Xoá nhân viên
  this.deleteStaff = function (maNV) {
    var index = this.findIndexstaff(maNV);
    if (index !== -1) {
      this.arr.splice(index, 1);
    }
  };

  //3. Sửa đổi thông tin nhân viên
  this.editStaff = function (maNV) {
    var index = this.findIndexstaff(maNV);
    if (index !== -1) {
      var nhanVien = this.arr[index];
      return nhanVien;
    }
    return null;
  };

  //4. Cập nhật thông tin nhân viên
  this.updateStaff = function (nhanVien) {
    var index = this.findIndexstaff(nhanVien.maNV);
    if (index !== -1) {
      this.arr[index] = nhanVien;
    }
  };

  //5. Tìm kiếm nhân viên theo Mã nhân viên
  this.findStaff = function (keyword) {
    var array = [];
    for(var i = 0; i < this.arr.length; i++)
    {
      var staffs = this.arr[i];
      if(staffs.loaiNV.toLowerCase().indexOf(keyword.toLowerCase()) !== -1)
      {
        array.push(staffs);
      }
    }
    return array;
  };
}
