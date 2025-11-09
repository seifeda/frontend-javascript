// Interfaces with brand properties to ensure nominal typing
interface MajorCredits {
  credits: number;
  _brand: "MajorCredits"; // unique identifier
}

interface MinorCredits {
  credits: number;
  _brand: "MinorCredits"; // unique identifier
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, _brand: "MajorCredits" };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, _brand: "MinorCredits" };
}

// Example usage
const math: MajorCredits = { credits: 3, _brand: "MajorCredits" };
const physics: MajorCredits = { credits: 4, _brand: "MajorCredits" };
const art: MinorCredits = { credits: 2, _brand: "MinorCredits" };
const music: MinorCredits = { credits: 1, _brand: "MinorCredits" };

const totalMajor = sumMajorCredits(math, physics); // {credits: 7, _brand: "MajorCredits"}
const totalMinor = sumMinorC
