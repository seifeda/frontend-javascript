// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};

// Create an array containing the students
const studentsList: Student[] = [student1, student2];

// Function to render table
function renderTable(students: Student[]): void {
  // Create table element
  const table: HTMLTableElement = document.createElement("table");
  table.style.borderCollapse = "collapse";
  table.style.width = "50%";

  // Create table header
  const header: HTMLTableRowElement = document.createElement("tr");
  const th1 = document.createElement("th");
  th1.textContent = "First Name";
  th1.style.border = "1px solid black";
  const th2 = document.createElement("th");
  th2.textContent = "Location";
  th2.style.border = "1px solid black";
  header.appendChild(th1);
  header.appendChild(th2);
  table.appendChild(header);

  // Append rows for each student
  students.forEach((student) => {
    const row: HTMLTableRowElement = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    firstNameCell.style.border = "1px solid black";

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    locationCell.style.border = "1px solid black";

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
  });

  // Append the table to the body
  document.body.appendChild(table);
}

// Render the table
renderTable(studentsList);
