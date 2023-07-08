import React, { useContext, useState } from 'react';
import StudentDetail from '../StudentDetail';
import { StudentContext } from '../../context';

const StudentList = () => {
  const { courses, updateStudentInCourse, deleteStudentFromCourse } = useContext( StudentContext );
  const [editingStudent, setEditingStudent] = useState(null);

  const handleEdit = (student) => {
    setEditingStudent(student);
  };

  
  const handleUpdate = (updatedStudent) => {
    // Find the course containing the updated student
    const courseCode = courses.find((course) =>
      course.students.some((student) => student.id === updatedStudent.id)
    ).code;

    // Call the updateStudentInCourse function from the context to update the student
    updateStudentInCourse(courseCode, updatedStudent);

    setEditingStudent(null);
  };

  const handleDelete = (id) => {
    // Find the course containing the student to be deleted
    const courseCode = courses.find((course) =>
      course.students.some((student) => student.id === id)
    ).code;

    // Call the deleteStudentFromCourse function from the context to delete the student
    deleteStudentFromCourse(courseCode, id);
  };

  return (
    <div>
      <h2>Student List</h2>
      {courses.map((course) => (
        <div key={course.code}>
          <h3>Course: {course.code}</h3>
          {course.students.map((student) => (
            <StudentDetail
              key={student.id}
              student={student}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      ))}

      {editingStudent && (
        <div>
          <h3>Edit Student</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <label>First Name:</label>
            <input
              type="text"
              value={editingStudent.firstName}
              onChange={(e) =>
                setEditingStudent({ ...editingStudent, firstName: e.target.value })
              }
            />

            <label>Last Name:</label>
            <input
              type="text"
              value={editingStudent.lastName}
              onChange={(e) =>
                setEditingStudent({ ...editingStudent, lastName: e.target.value })
              }
            />

            <label>Age:</label>
            <input
              type="number"
              value={editingStudent.age}
              onChange={(e) =>
                setEditingStudent({ ...editingStudent, age: parseInt(e.target.value) })
              }
            />

            <label>Grade:</label>
            <input
              type="text"
              value={editingStudent.grade}
              onChange={(e) =>
                setEditingStudent({ ...editingStudent, grade: e.target.value })
              }
            />

            <button onClick={() => handleUpdate(editingStudent)}>Save</button>
            <button onClick={() => setEditingStudent(null)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default StudentList;
