import React, { useContext } from 'react';
import { StudentContext } from '../../context';

const StudentDetail = ({ student }) => {
  const { firstName, lastName, age, grade, id, email, telephone, courseCode } = student;
  const { deleteStudent } = useContext({ StudentContext });

  const handleDelete = () => {
    deleteStudent(id);
  };

  return (
    <div>
      <h3>{firstName} {lastName}</h3>
      <p>ID: {id}</p>
      <p>Age: {age}</p>
      <p>Grade: {grade}</p>
      <p>Email: {email}</p>
      <p>Telephone: {telephone}</p>
      <p>Course Code: {courseCode}</p>
      
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default StudentDetail;