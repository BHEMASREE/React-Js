import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

class Student extends React.Component {
  state = {
    studentinfo: [],
    
  };
  componentDidMount() {
    axios
      .post("http://localhost:8080/student/login",this.state.studentinfo)
      .then((response) => {
        console.log(response);
        this.setState({ student: response.data });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div className="container">
        <Link
          to="/student/add"
          className="btn btn-primary btn-large mb-1 float-end"
        >
          Add
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>StudentID</th>
              <th>Username</th>
              <th>Password</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Gender</th>
              <th>Email</th>
              <th>MobileNo</th>
            </tr>
          </thead>
          <tbody>
            {this.state.studentinfo.map((student) => (
              <tr>
                <td>{student.studentId}</td>
                <td>{student.username}</td>
                <td>{student.password}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.gender}</td>
                <td>{student.email}</td>
                <td>{student.mobileNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Student;