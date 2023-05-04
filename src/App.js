import React, { Component } from 'react';
import StudentCourses from "./components/student-courses/StudentCourses";
import StudentInfo from "./components/student-info/StudentInfo";
import StudentList from "./components/student-list/StudentList";
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Student-Courses Application
          </p>
        </header>
        <section>
          <StudentList />
          <StudentInfo />
          <StudentCourses />
        </section>
      </div>
    );
  }
}
export default App;
