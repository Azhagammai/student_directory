import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  
 
  const students = [
    { id: 1, name: 'Priya', grade: 'A' },
    { id: 2, name: 'Karan', grade: 'B+' },
    { id: 3, name: 'Aliya', grade: 'A-' },
    { id: 4, name: 'Kaviya', grade: 'B' },
    { id: 5, name: 'Krishna', grade: 'A+' },
    { id: 6, name: 'murugan', grade: 'A' },
    { id: 7, name: 'Pavithra', grade: 'o' },
    { id: 8, name: 'liya', grade: 'c+' },
    { id: 9, name: 'kalyani', grade: 'A+' },
    { id: 10, name: 'baskar', grade: 'A+'},
    { id: 11, name: 'venki', grade: 'A+'},
    { id: 12, name: 'kavi', grade: 'B+'},
    { id: 13, name: 'dhruv', grade: 'A+'},
    { id: 14, name: 'vikram', grade: 'B'},
    { id: 15, name: 'arnav', grade: 'A+'},
    { id: 16, name: 'arun', grade: 'A+'},
  ];

  // Filter students based on search term
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Student Directory</h1>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="student-list">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map(student => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
