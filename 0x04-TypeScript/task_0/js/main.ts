// Define an interface for Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'London',
};

// Store students in an array
const studentsList: Student[] = [student1, student2];

// Render a simple HTML table
const table = document.createElement('table');
const header = document.createElement('tr');
header.innerHTML = '<th>First Name</th><th>Location</th>';
table.appendChild(header);

studentsList.forEach((student) => {
  const row = document.createElement('tr');
  row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
  table.appendChild(row);
});

document.body.appendChild(table);
