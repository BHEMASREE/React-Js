import React from "react";

import axios from "axios";

class StudentInfoForm extends React.Component {
  state = {
    student: {
      UserName: "",
      Password: "",
      FirstName: "",
      LastName: "",
      Email: "",
      MobileNo: "",
      role: "",
    },
  };
  handleChange = (event) => {
    const student = { ...this.state.student }; // copying student object
    student[event.target.name] = event.target.value; // student[fullName] = "ab"
    //student.fullName = "ab";
    //student[fullName]="ab";
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ student: student });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    axios
      .post("http://localhost:8082/students", this.state.student)
      .then((res) => {
        this.props.history.push("/student");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h3>Registration Form</h3>
        <form className="w-50 mx-auto border p-3">
          <div className="mb-3">
            <label for="exampleInputUsername" className="form-label">
              Username
            </label>
            <input type="text" className="form-control" id="exampleInputUsername" />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputUsername" className="form-label">
              Firstname
            </label>
            <input type="text" className="form-control" id="exampleInputUsername" />
          </div>
          <div className="mb-3">
            <label for="exampleInputUsername" className="form-label">
              Lastname
            </label>
            <input type="text" className="form-control" id="exampleInputUsername" />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputMobileNo" className="form-label">
              MobileNo
            </label>
            <input
              type="tel"
              className="form-control"
              id="exampleInputContactNo"
              aria-describedby="emailHelp"
            />
          </div>
          
          <select
            className="form-select mb-3"
            aria-label="Default select example"
          >
            <option selected>Select Role</option>
            <option value="1">Student</option>
            <option value="2">Admin</option>
            <option value="3">Other</option>
          </select>
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default StudentInfoForm;