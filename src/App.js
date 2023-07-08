import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  StudentProvider  from './context';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Courses from './components/Courses';
import StudentList from './components/StudentList';
import StudentDetail from './components/StudentDetail';
import About from './components/About';
import Search from './components/Search'

const App = () => {
  return (
    <StudentProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/courses" element={<Courses />} /> 
          <Route path="/students/:id" element={<StudentDetail />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/search" element={<Search/>} />
          <Route exact path="/studentList" element={<StudentList />} />
        </Routes>
      </Router>
    </StudentProvider>
  );
};

export default App;