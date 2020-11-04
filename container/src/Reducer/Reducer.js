const initialState = {
    data: [
      {
        name: "kaushik",
        email: 21,
        address: "manager",
        birthDate: "3",
        genderOption:"male",
        hobbyOption:"option1"
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
        debugger
        return {
          data: [
            ...state.data,
            {
              data: action.data,
              id: action.id,
            },
          ],
          
          // localStorage.setItem('data',JSON.stringify(data)),
        };
      case "DELETE_TODO":
        const Reducer = state.data.filter((todo) => todo.id !== action.id);
        return {
          ...state,
          data: Reducer,
        };
      default:
        return state;
    }
  };
  export default Reducer;




  
  