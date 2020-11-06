import React from "react";
import { connect } from "react-redux";
import { deleteTodo, updateTodo } from "../Action/Action";
import moment from "moment";
const ShowData = (props) => {
  return (
    <>
      
      <div className="tableset container">
        <h3>User Information</h3>
        <table className="table table-bordered">
          <thead>
            <tr className="fntsize">
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Birthdate</th>
              <th scope="col">Gender</th>
              <th scope="col">Hobby</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {props.Singup.map((todo, index) => (
              
              <>
              
                <tbody >
                  <tr className="textstyle" key={index}>
                    <th>{todo.id}</th>
                    <th>{todo.name}</th>
                    <th>{todo.email}</th>
                    <th>{todo.address}</th>
                    <th>{todo.birthDate}</th>
                    <th>{todo.genderOption}</th>
                    <th>{todo.hobbyOption}</th>
                    <th className="btnsett">
                      <button
                        className="btn btn-info btn-md"
                        onClick={() => props.dispatch(deleteTodo(todo.id))}
                        >
                        Delete
                      </button>
                      <button
                        className="btn btn-info btn-md"
                        onClick={() => props.dispatch(updateTodo(todo.id))}
                        >
                        Update
                      </button>
                    </th>
                  </tr>
                </tbody>
            </>
          ))}
          
        </table>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
    Singup: state.Reducer.data,
});
export default connect(mapStateToProps)(ShowData);
