import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import  { StudentContext }  from '../../context';

const RegistrationForm = () => {
  const history = useNavigate();
  const { updateStudents } = useContext( StudentContext );

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');
  const [id, setID] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !age || !grade || !id || !email || !telephone) {
      setError('Please fill out all fields');
      return;
    }

    if (isNaN(parseInt(age))) {
      setError('Please enter a valid age');
      return;
    }

    const newStudent = {
      firstName,
      lastName,
      age,
      grade,
      id,
      email,
      telephone,
    };

    // Update the list of students using the context function
    updateStudents((students) => [...students, newStudent]);

    // Clear the form inputs and error message
    setFirstName('');
    setLastName('');
    setAge('');
    setGrade('');
    setID('');
    setEmail('');
    setTelephone('');
    setError('');

    // Redirect to the student list page
    history.push('/student-list');
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />

        <label>Last Name:</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />

        <label>Age:</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />

        <label>Grade:</label>
        <input type="text" value={grade} onChange={(e) => setGrade(e.target.value)} required />

        <label>ID:</label>
        <input type="text" value={id} onChange={(e) => setID(e.target.value)} required />

        <label>Email Address:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Telephone:</label>
        <input type="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)} required />

        {error && <p className="error">{error}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;