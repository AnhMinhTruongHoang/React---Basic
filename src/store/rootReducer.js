// Khởi tạo trạng thái ban đầu với danh sách người dùng và bài viết
const initState = {
    users: [
      { id: 1, name: "minh" },
      { id: 2, name: "nam" },
      { id: 3, name: "Eric" },
    ],
    posts: [],
  };
  
  // Định nghĩa rootReducer để quản lý các hành động thay đổi state
  const rootReducer = (state = initState, action) => {
    switch (action.type) {
      case "DELETE_USER":
        // Log hành động xóa người dùng để debug
        console.log("ok", action);
        // Lọc ra các người dùng không bị xóa
        let users = state.users.filter((item) => item.id !== action.payload.id);
        // Trả về state mới với danh sách người dùng đã cập nhật
        return {
          ...state,
          users,
        };
  
      case "CREATE_USER":
        // Tạo ID ngẫu nhiên cho người dùng mới
        let id = Math.floor(Math.random() * 10000);
        // Tạo người dùng mới với ID và tên ngẫu nhiên
        let user = { id: id, name: `random - ${id}` };
        // Trả về state mới với người dùng mới được thêm vào danh sách
        return {
          ...state,
          users: [...state.users, user],
        };
  
      default:
        // Trả về state hiện tại nếu không có hành động nào khớp
        return state;
    }
  };
  
  export default rootReducer;
  