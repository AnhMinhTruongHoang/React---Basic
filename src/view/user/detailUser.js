import React, { Fragment } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min"; // Nhập withRouter để có quyền truy cập vào đối tượng history
import axios from "axios"; // Nhập axios để thực hiện các yêu cầu HTTP

class Detailuser extends React.Component {
    
    state = {
        user: {} // Khởi tạo state với một đối tượng rỗng để lưu thông tin người dùng
    }

    // componentDidMount() là một phương thức vòng đời chạy sau khi component được gắn kết
    async componentDidMount() {
       
        if (this.props.match && this.props.match.params) { // Kiểm tra xem có tham số id trong URL không
            
            let id = this.props.match.params.id; // Lấy id từ tham số URL

            // Lấy dữ liệu người dùng từ API dựa trên id
           
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            
            // Cập nhật state với dữ liệu người dùng đã lấy được
            
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            });
        }
    }

    // Xử lý sự kiện khi nhấp vào nút "Back" để quay lại danh sách người dùng
    handleBack = () => {
        this.props.history.push('/Listuser');
    }

    render() {
        let { user } = this.state; // Lấy thông tin người dùng từ state
        let isEmptyObj = Object.keys(user).length === 0; // Kiểm tra xem đối tượng user có rỗng không

        return (
           
           <Fragment>
                
                <div> hello: {this.props.match.params.id}</div> {/* Hiển thị id người dùng từ URL */}
                
                {isEmptyObj === false && ( // Kiểm tra nếu đối tượng user không rỗng thì hiển thị thông tin người dùng
                    <>
                        <div> user name: {user.first_name} - {user.last_name}</div> {/* Hiển thị tên người dùng */}
                        <div> user email: {user.email} </div> {/* Hiển thị email người dùng */}
                        <div>
                            <img src={user.avatar} alt="no image"/> {/* Hiển thị ảnh đại diện người dùng */}
                        </div>
                        <div>
                            <button type="button" onClick={this.handleBack}>Back</button> {/* Nút "Back" để quay lại danh sách người dùng */}
                        </div>
                    </>
                )}
            
            </Fragment>
        );
    }
}

export default withRouter(Detailuser); // Xuất component với withRouter để có quyền truy cập vào đối tượng history
