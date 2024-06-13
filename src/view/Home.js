import React, { Fragment } from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Color from "../unity/Color";
import "../styles/Background.scss";
import { connect } from "react-redux";

// Định nghĩa component Home
class Home extends React.Component {
  // Hàm xử lý khi xóa người dùng
  handleDelete = (user) => {
    this.props.deleteUserRedux(user);
  };

  // Hàm xử lý khi tạo người dùng mới
  handleCreate = () => {
    this.props.createUserRedux();
  };

  // Hàm render để hiển thị giao diện
  render() {
    // Lấy danh sách người dùng từ props
    let listuser1 = this.props.dataRedux;

    return (
      <Fragment>
        <div>
          {listuser1 &&
            listuser1.length > 0 &&
            // Duyệt qua danh sách người dùng và hiển thị từng người
            listuser1.map((item, index) => {
              return (
                <section key={item.id}>
                  {index + 1} - {item.name}
                  <span>
                    {/* Nút xóa người dùng */}
                    <button onClick={() => this.handleDelete(item)}>X</button>
                  </span>
                </section>
              );
            })}
        </div>
        {/* Nút thêm người dùng ngẫu nhiên */}
        <button onClick={this.handleCreate}>Add Random User</button>
      </Fragment>
    );
  }
}

// Hàm mapStateToProps để lấy dữ liệu từ store Redux
const mapStateToProps = (state) => {
  return {
    dataRedux: state.users, // Đảm bảo khớp với state trong reducer
  };
};

// Hàm mapDispatchToProps để tạo các hàm dispatch hành động
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete }), // Dispatch hành động xóa người dùng
    createUserRedux: () => dispatch({ type: "CREATE_USER" }), // Dispatch hành động tạo người dùng mới
  };
};

// Kết nối component với Redux store và xuất component
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
