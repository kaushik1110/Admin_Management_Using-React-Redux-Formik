import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../Action/Action";
import moment from "moment";
const ShowData = (props) => {
  debugger
  return (
    <>
      
      <div className="tableset container">
        <h3>User Information</h3>
        <table className="table table-bordered">
          <thead>
            <tr className="fntsize">
              <th scope="col">Name</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Birthdate</th>
              <th scope="col">Gender</th>
              <th scope="col">Hobby</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {props.Singup.map((data, index) => (
              
              <>
              
                <tbody >
                  <tr className="textstyle" key={index}>
                    <th>{todo.name}</th>
                    {/* <th>{props.data.id}</th> */}
                    <th>{todo.email}</th>
                    <th>{todo.address}</th>
                    <th>{moment(todo.birthDate).format('L')}</th>
                    <th>{todo.genderOption}</th>
                    <th>{todo.hobbyOption}</th>
                    <th>
                      <button
                        className="btn btn-info btn-md"
                        onClick={() => props.dispatch(deleteTodo(todo.id))}
                        >
                        Delete
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
