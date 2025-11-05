// Teacher interface
interface Teacher {
  readonly firstName: string;  // only modifiable on initialization
  readonly lastName: string;   // only modifiable on initialization
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;  // optional
  location: string;
  [key: string]: any;          // allow any extra properties
}

// Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;     // mandatory property
}

// Example Teachers
const teacher1: Teacher = {
  firstName: "Alice",
  lastName: "Johnson",
  fullTimeEmployee: true,
  location: "New York",
  yearsOfExperience: 5,
};

const teacher2: Teacher = {
  firstName: "Bob",
  lastName: "Smith",
  fullTimeEmployee: false,
  location: "Paris",
};

// Teacher with an extra property
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,
};

// Example Director
const director1: Directors = {
  firstName: "Jane",
  lastName: "Williams",
  fullTimeEmployee: true,
  location: "London",
  numberOfReports: 17,
};

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);
console.log(director1);
