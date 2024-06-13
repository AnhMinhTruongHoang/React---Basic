import MyComponents from "../components/MyComponents"; // Import một component tên MyComponents từ đường dẫn cụ thể.
import Listtodo from "./todos/Listtodo"; // Import một component tên Listtodo từ đường dẫn cụ thể.
// import "./App.scss"; //30 // Import một tệp SCSS để sử dụng cho việc định kiểu (hiện đang bị comment).
import { Bounce, ToastContainer, toast } from "react-toastify"; // Import các hàm và component cụ thể từ thư viện react-toastify để sử dụng thông báo.
import "react-toastify/dist/ReactToastify.css"; // Import CSS cho react-toastify để định kiểu thông báo.
import Nav from "./nav"; // Import một component tên Nav từ đường dẫn cụ thể.
import Home from "./Home"; // Import một component tên Home từ đường dẫn cụ thể.
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"; // Import các component từ react-router-dom để định tuyến trong ứng dụng.
import Listuser from "./user/Listuser";
import Detailuser from "./user/detailUser";




function App() { // Định nghĩa component chính App.
  return (
    <BrowserRouter> {/* Bao bọc ứng dụng trong BrowserRouter để kích hoạt định tuyến */}
      <div className="test"> {/* Định nghĩa một div với tên lớp 'test' */}
        <Nav /> {/* Bao gồm component Nav */}

        <h2 className="App"> Simple to do apps</h2> {/* Tiêu đề của ứng dụng với tên lớp 'App' */}

        <header className="App-header"> {/* Định nghĩa một phần header với tên lớp 'App-header' */}
          <ToastContainer
            position="top-center" // Định vị thông báo toast ở phía trên trung tâm của màn hình.
            autoClose={5000} // Thiết lập thông báo tự động đóng sau 5000 mili giây (5 giây).
            hideProgressBar={false} // Hiển thị thanh tiến trình trong thông báo toast.
            newestOnTop={false} // Không đặt các thông báo mới nhất lên trên cùng.
            closeOnClick // Kích hoạt tính năng đóng khi nhấp chuột.
            rtl={false} // Thiết lập hướng văn bản từ trái sang phải.
            pauseOnFocusLoss // Tạm dừng bộ đếm thời gian của thông báo khi cửa sổ mất tiêu điểm.
            draggable // Cho phép kéo thông báo.
            pauseOnHover // Tạm dừng bộ đếm thời gian của thông báo khi di chuột qua.
            theme="light" // Thiết lập chủ đề của thông báo là sáng.
            transition={Bounce} // Thiết lập hiệu ứng chuyển đổi là Bounce.
          />

          <Switch> {/* Sử dụng Switch để chỉ render route đầu tiên khớp */}
            
            <Route path="/" exact> {/* Định nghĩa route cho đường dẫn gốc '/' để render component Home */}
              <Home /> {/* Bao gồm component Home */}
            </Route>
            
            <Route path="/todo"> {/* Định nghĩa route cho đường dẫn '/todo' để render component Listtodo */}
              <Listtodo /> {/* Bao gồm component Listtodo */}
            </Route>
            
            <Route path="/about"> {/* Định nghĩa route cho đường dẫn '/about' để render component MyComponents */}
              <MyComponents /> {/* Bao gồm component MyComponents */}
            </Route>
           
            <Route path="/Listuser" exact>
              <Listuser/>
            </Route>
            
            <Route path="/user/:id">
              <Detailuser/>
            </Route>

          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App; // Xuất component App làm xuất mặc định.
