

import Image from 'next/image';

export default function StudentList({ students, onRemoveStudent }) {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>
        <Image src="/4ibok7a6T.png" alt="Icon" width={24} height={24} /> 
        Student List
        <Image src="/4ibok7a6T.png" alt="Icon" width={24} height={24} /> 
      </h2>
      <div style={tableContainerStyle}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>First Name</th>
              <th style={tableHeaderStyle}>Last Name</th>
              <th style={tableHeaderStyle}>Date of Birth</th>
              <th style={tableHeaderStyle}>Grade</th>
              <th style={tableHeaderStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.id} style={index % 2 === 0 ? tableRowEvenStyle : tableRowOddStyle}>
                <td style={tableCellStyle}>{student.firstName}</td>
                <td style={tableCellStyle}>{student.lastName}</td>
                <td style={tableCellStyle}>{student.dob}</td>
                <td style={tableCellStyle}>{student.grade}</td>
                <td style={tableCellStyle}>
                  <button style={removeButtonStyle} onClick={() => onRemoveStudent(student.id)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Styles
const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "1.5rem",
  marginBottom: "2rem",
  maxWidth: "90%",
  width: "100%",
};

const titleStyle = {
  marginBottom: "1rem",
  fontWeight: "bold",
  fontSize: "1.8rem",
  color: "#000080",
  textDecoration: "underline",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  backgroundColor: "#ffffff",
  padding: "0.5rem 1rem",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
};

const tableContainerStyle = {
  maxHeight: "400px",  // Adjust this value based on the desired max height
  overflowY: "auto",
  width: "100%",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  textAlign: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  marginTop: "1rem",
};

const tableHeaderStyle = {
  padding: "0.75rem",
  backgroundColor: "#000080",
  color: "#fff",
  fontWeight: "bold",
};

const tableRowEvenStyle = {
  backgroundColor: "#f9f9f9",
};

const tableRowOddStyle = {
  backgroundColor: "#fff",
};

const tableCellStyle = {
  padding: "0.75rem",
  borderBottom: "1px solid #e0e0e0",
  color: "#333",
};

const removeButtonStyle = {
  padding: "0.25rem 0.5rem",
  backgroundColor: "#000080",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "0.9rem",
};

// Responsive adjustments (can be added in CSS or as inline styles in JavaScript)
const responsiveTitleStyle = {
  fontSize: "1.5rem",  // Smaller font size for mobile
  padding: "0.25rem 0.5rem",
};
