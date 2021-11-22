import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

class Exam extends React.Component {
  state = {
    exams: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:8080/student/getallExams")
      .then((response) => {
        console.log(response);
        this.setState({ exams: response.data });
      })
      .catch((error) => console.log(error));
  }
  
  
  render() {
    return (
      <div className="container">
        <Link
          to="/exam/add"
          className="btn btn-dark btn-large mb-1 float-end"
        >
          Add
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>ExamRollNo</th>
              <th>DateOfExam</th>
              <th>Status</th>
              <th>MaximumScore</th>
              <th>ActualScore</th>
              <th>ExamDuration</th>
              <th>IsAnnouncedToStudent</th>
            </tr>
          </thead>
          <tbody>
            {this.state.exams.map((exam) => (
              <tr>
                <td>{exam.examRollNo}</td>
                <td>{exam.dateOfExam}</td>
                <td>{exam.status}</td>
                <td>{exam.maximumScore}</td>
                <td>{exam.actualScore}</td>
                <td>{exam.examDuration}</td>
                <td>{exam.isAnnouncedToStudent}</td>

                <td>
                  <Link to={`/exams/update/${exam.examRollNo}`}>
                    <input
                      type="button"
                      value="Start Exam"
                      className="btn btn-secondary me-2"
                    />
                  </Link>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Exam;