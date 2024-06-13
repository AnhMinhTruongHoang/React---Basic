import React from "react";
import Addtodo from "./Addtodo";  // Import thành phần Addtodo
import { toast } from "react-toastify";  // Import thư viện thông báo toast
import Color from "../../unity/Color";

class Listtodo extends React.Component {
  state = {
    Listtodo: [  // Danh sách ban đầu của các công việc cần làm
      { id: "1", title: "homework" },
      { id: "2", title: "making video" },
      { id: "3", title: "fixing bugs" },
    ],
   
    edittodo: {}  // Đối tượng chứa công việc đang được chỉnh sửa
  
  };

  addNewtodo = (todo) => {  // Phương thức thêm công việc mới vào danh sách
    this.setState({
      Listtodo: [...this.state.Listtodo, todo]  // Thêm công việc mới vào danh sách hiện tại
    });
  }
  
  HandleDelete = (todo) => {  // Phương thức xóa công việc
    let currentTodo = this.state.Listtodo;
    currentTodo = currentTodo.filter(item => item.id !== todo.id);  // Lọc ra công việc cần xóa
    this.setState({
      Listtodo: currentTodo  // Cập nhật trạng thái với danh sách mới
    });
    toast.success("Xóa thành công");  // Hiển thị thông báo thành công
  }

  HandleEodo = (todo) => {  // Phương thức chỉnh sửa công việc

    let {edittodo ,Listtodo} = this.state
    let isEmptyObj = Object.keys(edittodo).length === 0;
    
    // Nếu không có công việc nào đang được chỉnh sửa và công việc hiện tại là công việc đang chỉnh sửa
    if (isEmptyObj=== false && edittodo.id === todo.id){
      
      let listtodoCopy = [...Listtodo];  // Tạo bản sao của danh sách công việc hiện tại
      
      let objIndex =  listtodoCopy.findIndex((item => item.id === todo.id));  // Tìm chỉ mục của công việc đang được chỉnh sửa
    
      listtodoCopy[objIndex].title = edittodo.title;  // Cập nhật tiêu đề của công việc

      this.setState({
        Listtodo: listtodoCopy,  // Cập nhật danh sách công việc
        edittodo: {},  // Đặt lại đối tượng chỉnh sửa thành rỗng
      })
      toast.success("Cập nhật thành công");  // Hiển thị thông báo thành công
      return;

    } 
    
    // Đặt công việc được chọn làm công việc đang chỉnh sửa
    this.setState({
      edittodo: todo  
    });
  }
  
  handleonchangefixtodo = (event) => {  // Phương thức xử lý thay đổi tiêu đề công việc khi chỉnh sửa
    let fixtodo2 = {...this.state.edittodo};  // Tạo bản sao của đối tượng công việc đang được chỉnh sửa
    fixtodo2.title = event.target.value;  // Cập nhật tiêu đề của công việc

    this.setState({
        edittodo: fixtodo2  // Cập nhật trạng thái với đối tượng công việc mới
    })
  }

  render() {
    let { Listtodo, edittodo } = this.state;  // Destructure các biến trạng thái
    let isEmptyObj = Object.keys(edittodo).length === 0;  // Kiểm tra xem có công việc nào đang được chỉnh sửa không

    return (
      <div className="Apptodo">
        <Addtodo addNewtodo={this.addNewtodo} />  {/* Hiển thị thành phần Addtodo và truyền phương thức addNewtodo làm prop */}

        <div className="list">
          {Listtodo && Listtodo.length > 0 && Listtodo.map((item, index) => {  // Lặp qua danh sách các công việc
            return (
              <div className="contenttodo" key={item.id}>                        
                {isEmptyObj ?  // Kiểm tra xem không có công việc nào đang được chỉnh sửa
                  <span> {index + 1} - {item.title} </span>  // Hiển thị công việc bình thường
                :
                  <> 
                    {edittodo.id === item.id ?  // Kiểm tra xem công việc hiện tại có đang được chỉnh sửa không
                      <span>
                        {index + 1} - <input value={edittodo.title} onChange={(event) => this.handleonchangefixtodo(event)}/>  
                        {/* Hiển thị ô nhập liệu với tiêu đề hiện tại */}
                      </span>
                    :
                      <span> {index + 1} - {item.title} </span>  // Hiển thị công việc bình thường
                    }
                  </>
                }
                <button className="edit" onClick={() => this.HandleEodo(item)}> 
                  {isEmptyObj === false && edittodo.id === item.id ? 'save' : 'edit'} 
                  {/* Nút chỉnh sửa để bật chế độ chỉnh sửa */}
                </button> 
                <button className="delete" onClick={() => this.HandleDelete(item)}> Xóa</button> 
                {/* Nút xóa để xóa công việc */}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Color(Listtodo);  // Xuất thành phần Listtodo
