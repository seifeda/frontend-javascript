// Teacher interface
interface Teacher {
  readonly firstName: string;  // only modifiable on initialization
  readonly lastName: string;   // only modifiable on initialization
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;  // optional
  location: string;
  [key: string]: any;          // allow any additional properties
}

// Example usage:
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

// Add a dynamic property
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,  // extra property
};

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);
