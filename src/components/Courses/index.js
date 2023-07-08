import React, { useContext, useState } from 'react';
import { StudentContext } from '../../context';
import StudentDetail from '../StudentDetail';

const Courses = () => {
  const { courses, addStudentToCourse, deleteStudentFromCourse, updateStudentInCourse } = useContext( StudentContext );
  const [newStudent, setNewStudent] = useState({ firstName: '', lastName: '', age: '', id: '', email: '', telephone: '' });

  const handleAddStudent = (courseCode) => {
    addStudentToCourse(courseCode, newStudent);
    setNewStudent({ firstName: '', lastName: '', age: '', id: '', email: '', telephone: '' });
  };

  const handleDeleteStudent = (courseCode, studentId) => {
    deleteStudentFromCourse(courseCode, studentId);
  };

  const handleUpdateStudent = (courseCode, updatedStudent) => {
    updateStudentInCourse(courseCode, updatedStudent);
  };

  return (
    <div>
      <h2>Courses</h2>
      {courses.map((course) => {
        const courseCode = course.code;
        return (
        <div key={courseCode}>
          <h3>Course: {courseCode}</h3>
          {course.students.length > 0 ? (
            course.students.map((student) => (
              <StudentDetail
                key={student.id}
                student={student}
                onDelete={() => handleDeleteStudent(course.code, student.id)}
                onUpdate={(updatedStudent) => handleUpdateStudent(course.code, updatedStudent)}
              />
            ))
          ) : (
            <p>No students registered for this course.</p>
          )}
          <button onClick={() => handleAddStudent(courseCode)}>Add Student</button>
        </div>
      );
          })}
      <div/>
      <h4>Add Student:</h4>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>First Name:</label>
        <input
          type="text"
          value={newStudent.firstName}
          onChange={(e) => setNewStudent({ ...newStudent, firstName: e.target.value })}
        />

        <label>Last Name:</label>
        <input
          type="text"
          value={newStudent.lastName}
          onChange={(e) => setNewStudent({ ...newStudent, lastName: e.target.value })}
        />

        <label>Age:</label>
        <input
          type="number"
          value={newStudent.age}
          onChange={(e) => setNewStudent({ ...newStudent, age: parseInt(e.target.value) })}
        />

        <label>ID:</label>
        <input
          type="text"
          value={newStudent.id}
          onChange={(e) => setNewStudent({ ...newStudent, id: e.target.value })}
        />

        <label>Email Address:</label>
        <input
          type="email"
          value={newStudent.email}
          onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
        />

        <label>Telephone:</label>
        <input
          type="tel"
          value={newStudent.telephone}
          onChange={(e) => setNewStudent({ ...newStudent, telephone: e.target.value })}
        />

        
      </form>
    </div>
  );
};

export default Courses;