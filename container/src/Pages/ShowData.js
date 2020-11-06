import React from "react";
import { connect } from "react-redux";
import { deleteTodo, updateTodo } from "../Action/Action";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const ShowData = (props) => {
  const history = useHistory();
  const clickHandler = () => {
history.push({
      pathname: "/singup",
    });
  }
  return (
    <>
      
      <div className="tableset container ">
        <div className="setAdduser d-flex justify-content-between my-3">
        <h3>User Information</h3>
        <button onClick={clickHandler} className="btn btn-info btn-md">Add User</button>
        </div>
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
                      <Link to="/singup">
                      <button
                        className="btn btn-info btn-md"
                        onClick={() => props.dispatch(updateTodo(todo.id))}
                        >
                        Update
                      </button>
                     </Link>
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
