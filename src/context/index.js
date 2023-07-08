// import React, { createContext, useState } from 'react';

// export const StudentContext = createContext();

// export const StudentProvider = ({ children }) => {
//   const [courses, setCourses] = useState([]);

//   const addStudentToCourse = (courseCode, newStudent) => {
//     const updatedCourses = courses.map((course) => {
//       if (course.code === courseCode) {
//         // Create a new array with the updated list of students for the course
//         const updatedStudents = [...course.students, newStudent];
//         return { ...course, students: updatedStudents };
//       }
//       return course;
//     });

//     setCourses(updatedCourses);
//   };

//   const updateStudentInCourse = (courseCode, updatedStudent) => {
//     const updatedCourses = courses.map((course) => {
//       if (course.code === courseCode) {
//         const updatedStudents = course.students.map((student) => {
//           if (student.id === updatedStudent.id) {
//             return { ...student, ...updatedStudent };
//           }
//           return student;
//         });
//         return { ...course, students: updatedStudents };
//       }
//       return course;
//     });

//     setCourses(updatedCourses);
//   };

//   const deleteStudentFromCourse = (courseCode, studentId) => {
//     const updatedCourses = courses.map((course) => {
//       if (course.code === courseCode) {
//         const updatedStudents = course.students.filter(
//           (student) => student.id !== studentId
//         );
//         return { ...course, students: updatedStudents };
//       }
//       return course;
//     });

//     setCourses(updatedCourses);
//   };

//   const contextValue = {
//     courses,
//     addStudentToCourse,
//     updateStudentInCourse,
//     deleteStudentFromCourse,
//   };

//   return (
//     <StudentContext.Provider value={contextValue}>
//       {children}
//     </StudentContext.Provider>
//   );
// };

// export default StudentProvider;



import React, { createContext, useState } from 'react';
export const StudentContext = createContext();
export const StudentProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
 const [students, setStudents] = useState([]);

 
 const enrollStudent = (newStudent) => {
  setStudents((prevStudents) => [...prevStudents, newStudent]);
};

const updateStudent = (updatedStudent) => {
  setStudents((prevStudents) => {
    return prevStudents.map((student) => {
      if (student.id === updatedStudent.id) {
        return { ...student, ...updatedStudent };
      }
      return student;
    });
  });
};

const deleteStudent = (studentId) => {
  setStudents((prevStudents) =>
    prevStudents.filter((student) => student.id !== studentId)
  );
};


  const addStudentToCourse = (courseCode, newStudent) => {
    const updatedCourses = courses.map((course) => {
      if (course.code === courseCode) {
        // Create a new array with the updated list of students for the course
        const updatedStudents = [...course.students, newStudent];
        return { ...course, students: updatedStudents };
      }
      return course;
    });

    setCourses(updatedCourses);
  };

  const updateStudentInCourse = (courseCode, updatedStudent) => {
    const updatedCourses = courses.map((course) => {
      if (course.code === courseCode) {
        const updatedStudents = course.students.map((student) => {
          if (student.id === updatedStudent.id) {
            return { ...student, ...updatedStudent };
          }
          return student;
        });
        return { ...course, students: updatedStudents };
      }
      return course;
    });

    setCourses(updatedCourses);
  };

  const deleteStudentFromCourse = (courseCode, studentId) => {
    const updatedCourses = courses.map((course) => {
      if (course.code === courseCode) {
        const updatedStudents = course.students.filter(
          (student) => student.id !== studentId
        );
        return { ...course, students: updatedStudents };
      }
      return course;
    });

    setCourses(updatedCourses);
  };

  const contextValue = {
    courses,
    students,
    enrollStudent,
    updateStudent,
    deleteStudent,
    addStudentToCourse,
    updateStudentInCourse,
    deleteStudentFromCourse,
  };

  return (
    <StudentContext.Provider value={contextValue}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;