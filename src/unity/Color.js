import React from 'react'; // Import thư viện React.

function getRandomColor() { // Định nghĩa hàm getRandomColor để tạo ra một màu ngẫu nhiên.
  var letters = '0123456789ABCDEF'; // Khai báo chuỗi các ký tự có thể có trong mã màu hex.
  var color = '#'; // Khởi tạo mã màu với ký tự '#'.
  for (var i = 0; i < 6; i++) { // Vòng lặp để tạo ra 6 ký tự tiếp theo cho mã màu.
    color += letters[Math.floor(Math.random() * 16)]; // Chọn ngẫu nhiên một ký tự từ chuỗi letters và thêm vào mã màu.
  }
  return color; // Trả về mã màu ngẫu nhiên.
}

const Color = (WrappedComponents) => { // Định nghĩa một higher-order component (HOC) tên là Color.
  const colorRandom = getRandomColor(); // Gọi hàm getRandomColor để lấy một màu ngẫu nhiên.

  return (props) => ( // Trả về một component mới với các props đã truyền vào.
    <div style={{ color: colorRandom }}> {/* Đặt màu ngẫu nhiên cho style của div */}
     
      <WrappedComponents {...props}/> {/* Render WrappedComponents và truyền tất cả props vào */}
    
    </div>
  );
};

export default Color; // Xuất HOC Color làm xuất mặc định.
