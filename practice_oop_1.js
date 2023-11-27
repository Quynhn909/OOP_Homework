/**
 * Hãy tạo một lớp `Rectangle` gồm có:
 * - Thuộc tính: chiều dài, chiều rộng hình chữ nhật
 * - Constructor nhận vào các thông tin khởi tạo thuộc tính
 * - Phương thức tính diện tích, chu vi
 * - Phương thức showInfo() log ra các thông tin dài, rộng,
 * diện tích, chu vi
 * 
 * Tạo ra các object hình chữ nhật từ Class Rectangle và
 * in ra thông tin của các object vừa tạo
 */


class Rectangle {
    height = "5";
    width =  "3";
    chuVi = (5+3) * 2;
    dienTich = 5 * 3;
    
    showInfo() {
        console.log(this.height, this.width, this.chuVi, this.dienTich);
    }
}

Rectangle1 = new Rectangle("5", "3");
console.log(Rectangle1.height);
console.log(Rectangle1.width);
console.log(Rectangle1.chuVi);
console.log(Rectangle1.dienTich);
Rectangle1.Constructor();
