import React from "react";
import axios from "axios"; // Nhập axios để thực hiện các yêu cầu HTTP
import './Listuser1.scss'; // Nhập file CSS/SCSS để tạo kiểu cho component
import { withRouter } from "react-router-dom/cjs/react-router-dom.min"; // Nhập withRouter để có quyền truy cập vào đối tượng history

class Listuser extends React.Component {
    state = {
        Listuser: [] // Khởi tạo state với một mảng rỗng để lưu dữ liệu người dùng
    }

    // componentDidMount() là một phương thức vòng đời chạy sau khi component được gắn kết
    async componentDidMount() {
        // Lấy dữ liệu người dùng từ API
        let res = await axios.get("https://reqres.in/api/users?page=1")
        
        // Cập nhật state với dữ liệu người dùng đã lấy được
        this.setState({
            Listuser: res && res.data && res.data.data ? res.data.data : []
        })
    }

    // Xử lý sự kiện khi nhấp vào người dùng để xem thông tin chi tiết
    handleViewUser = (user) => {
        this.props.history.push(`/user/${user.id}`) // Điều hướng đến trang chi tiết người dùng với id tương ứng
    }
   
    render() {
        let { Listuser } = this.state; // Lấy danh sách người dùng từ state
        
        return(
            <div className="list-user-container">
                <div className="title">
                      list user 
                </div>
                <div className="list-user-container">
                    {Listuser && Listuser.length > 0 &&
                        Listuser.map((item, index) => {
                            return(
                                <div className="child" key={item.id} 
                                    onClick={() => this.handleViewUser(item)}> 
                                    {index + 1} - {item.first_name}       
                                  
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(Listuser); // Xuất component với withRouter để có quyền truy cập vào đối tượng history
