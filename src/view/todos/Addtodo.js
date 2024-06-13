import React from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";

class Addtodo extends React.Component {
  state = {
    // Khởi tạo state của component với title rỗng
    title: "",
  };

  // Hàm xử lý sự kiện để cập nhật state khi giá trị input thay đổi
  HandlerchangeTitle = (event) => {
    this.setState({
      title: event.target.value, // Cập nhật title trong state với giá trị từ input
    });
  };

  // Hàm xử lý sự kiện khi nút Add được nhấn
  Handleraddtodo = () => {
    // Kiểm tra nếu title rỗng
    if (!this.state.title) {
      // Hiển thị thông báo lỗi toast nếu thiếu title
      toast.error(`missing title`);
      return; // Thoát hàm sớm
    }

    // Tạo một đối tượng todo mới với id ngẫu nhiên và title hiện tại
    let todo = {
      id: Math.floor(Math.random() * 100000), // Tạo id ngẫu nhiên
      title: this.state.title, // Đặt title từ state
    };

    // Gọi hàm addNewtodo truyền từ props với đối tượng todo mới
    this.props.addNewtodo(todo);

    // Xóa title trong state sau khi thêm todo
    this.setState({
      title: "", // Đặt lại title thành chuỗi rỗng
    });

    // Hiển thị thông báo thành công bằng toast
    toast.success("Wow so easy!");
  };

  render() {
    // Lấy title từ state
    let { title } = this.state;

    return (
      <div>
        {/* Trường nhập liệu cho title của todo */}
        <input
          type="text"
          value={title} // Gán giá trị của input với state
          onChange={(event) => this.HandlerchangeTitle(event)} // Cập nhật state khi giá trị input thay đổi
        />

        {/* Nút Add */}
        <button
          type="button"
          className="add"
          onClick={() => this.Handleraddtodo()} // Gọi hàm xử lý thêm khi nhấn nút
        >
          Add
        </button>
      </div>
    );
  }
}

export default Addtodo;
