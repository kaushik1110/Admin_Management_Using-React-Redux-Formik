import { toast } from "react-toastify";
const initialState = {
  // data: [
  //   {
  //     id: 1234,
  //     name: "kaushik",
  //     email: "k@gmail.com",
  //     address: "surat",
  //     birthDate: "3/10/1999",
  //     genderOption: "Male",
  //     hobbyOption: "Cricket",
  //   },
  // ],
  data: JSON.parse(localStorage.getItem("testObject")),
  Update: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      initialState.posts = [...state.data, action.data];
      localStorage.setItem("testObject", JSON.stringify(initialState.posts));
      return {
        data: initialState.posts,
      };

    case "DELETE_TODO":
      if (window.confirm("Are you sure delete the record ?")) {
        const Reducer = state.data.filter((todo) => todo.id !== action.id);
        localStorage.setItem("testObject", JSON.stringify(Reducer));
        toast.success(
          "Delete Successfully",
          { position: toast.POSITION.TOP_CENTER },
          { autoClose: 15000 }
        );
        return {
          data: Reducer,
        };
      } else {
        return {
          data: state.data,
        };
      }

    case "UPDATE_TODO":
      const Reducer2 = state.data.filter((todo) => todo.id === action.id);
      return {
        data: state.data,
        Update: Reducer2 ? Reducer2 : state.data.Update,
      };

    case "UPDATE_DATA":
      const modifiedData = state;
      modifiedData.posts.map((item, index) => {
        if (item.id == action.post.id) {
          item.name = action.post.name;
          item.address = action.post.address;
          item.birthDate = action.post.birthDate;
          item.email = action.post.email;
          item.genderOption = action.post.genderOption;
          item.hobbyOption = action.post.hobbyOption;
        }
      });
      localStorage.setItem('testObject', JSON.stringify(modifiedData.posts))
      return {
        posts: modifiedData.posts,
      };
    default:
      return state;
  }
};
export default Reducer;
