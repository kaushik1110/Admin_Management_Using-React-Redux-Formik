const initialState = {
    data: [
      {
        id:1234,
        name: "kaushik",
        email: "k@gmail.com",
        address: "surat",
        birthDate: "03/10/1999",
        genderOption:"male",
        hobbyOption:"dancing"
      },
      // {
      //   name: "vmn",
      //   age: 22,
      //   type: "employee",
      //   id: "4",
      // },
    ],
  };
  
  const Reducer = (state = initialState, action) => {
    
    switch (action.type) {
      case "ADD_TODO":
        
        return {
          
          data: [
            ...state.data,
            action.data,
            // action.id,
          ],
          // localStorage.setItem('data',JSON.stringify(data)),
          // {console.log(data)}
        };
        case "DELETE_TODO":
        const Reducer = state.data.filter((todo) => todo.id !== action.id);
        return {
          ...state,
          data: Reducer,
        };
        case "UPDATE_TODO":
        const Reducer2 = state.data.filter((todo) => todo.id === action.id);
        console.log(Reducer2);
        return {
          ...state,
          // data: Reducer,
        };
      default:
        return state;
    }
  };
  export default Reducer;




  
  