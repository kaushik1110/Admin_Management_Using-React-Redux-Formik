const ADD_TODO = "ADD_TODO";
export const addTodo = (data) => ({
  type: ADD_TODO,
  data,
});
const DELETE_TODO = "DELETE_TODO";
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});
const UPDATE_TODO = "UPDATE_TODO";
export const updateTodo = (id) => ({
  type: UPDATE_TODO,
  id,
});
const UPDATE_DATA = "UPDATE_DATA";
export const updateData = (post) => {
  return { type: UPDATE_DATA, post };
};
