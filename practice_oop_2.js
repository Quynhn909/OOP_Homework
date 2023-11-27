/**
 * Sở giao thông cần theo dõi việc đăng ký xe của người dân.
 * Dựa vào dung tích xylanh của xe, sở giao thông sẽ tính
 * mức thuế phải đóng trước bạ khi mua xe như sau:
 * 
 * - Dưới 100cc, 1% giá trị của xe
 * - Từ 100 đến 200 cc, 3% giá trị của xe
 * - Trên 20cc, 5% giá trị của xe
 * 
 * Hãy thiết kế class `Vehicle` với các thông tin như sau:
 * - Thuộc tính: tên chủ xe, loại xe, dung tích, trị giá
 * - Constructor khởi tạo các thuộc tính thông qua params
 * - Hàm tính giá trị thuế trước bạ dựa vào dung tích xylanh
 * - Hàm showInfo in ra các thông tin của xe: tên chủ xe,
 * loại xe, dung tích, trị giá, thuế phải nộp
 * 
 * Khởi tạo các đối tượng Vehicle và in ra các thông tin
 * tương ứng của các đội tượng được khởi tạo
 */

class Vehicle {
    carName = "Tesla";
    ownerName =  "Tim";
    carColor = "black";
    dungTich = "50"
    price = "100000"
    showInfo() {
        console.log(this.carName, this.ownerName, this.carColor);
    }
}

Tax() {
    if( dungTich < 100){
        Tax = 1% * price;    
    }else if ( 100 < dungTich < 200){
        Tax = 3% * price; 
    }else if ( 20 < dungTich){
        Tax = 5% * price; 
}


