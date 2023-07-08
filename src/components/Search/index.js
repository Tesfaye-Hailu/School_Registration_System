
import React, { useState, useContext } from 'react';
import { StudentContext } from '../../context';

const Search = () => {
  const { students } = useContext( StudentContext );
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const filteredStudents = students.filter((student) => {
      const { firstName, lastName, id, email, telephone, courseCode } = student;
      const searchValue = searchText.trim().toLowerCase();
      return (
        firstName.toLowerCase().includes(searchValue) ||
        lastName.toLowerCase().includes(searchValue) ||
        id.toLowerCase().includes(searchValue) ||
        email.toLowerCase().includes(searchValue) ||
        telephone.toLowerCase().includes(searchValue) ||
        courseCode.toLowerCase().includes(searchValue)
      );
    });

    setSearchResults(filteredStudents);
    setSearchText('');
  };

  return (
    <div>
      <h2>Search Component</h2>
      <div>
        <label>Search:</label>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Enter Last Name, First Name, ID, Email, Telephone, or Course Code"
        />
      </div>
      <button onClick={handleSearch}>Search</button>

      <h3>Search Results</h3>
      {searchResults.length > 0 ? (
        searchResults.map((student) => (
          <div key={student.id}>
            <p>Name: {student.firstName} {student.lastName}</p>
            <p>ID: {student.id}</p>
            <p>Email: {student.email}</p>
            <p>Telephone: {student.telephone}</p>
            <p>Course Code: {student.courseCode}</p>
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default Search;