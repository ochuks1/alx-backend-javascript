// Define the MajorCredits interface
interface MajorCredits {
  credits: number;
  brand: 'MajorCredits';  // Unique brand property
}

// Define the MinorCredits interface
interface MinorCredits {
  credits: number;
  brand: 'MinorCredits';  // Unique brand property
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MajorCredits'
  };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MinorCredits'
  };
}

// Example usage
const major1: MajorCredits = { credits: 20, brand: 'MajorCredits' };
const major2: MajorCredits = { credits: 30, brand: 'MajorCredits' };

const minor1: MinorCredits = { credits: 10, brand: 'MinorCredits' };
const minor2: MinorCredits = { credits: 15, brand: 'MinorCredits' };

const totalMajor = sumMajorCredits(major1, major2);
const totalMinor = sumMinorCredits(minor1, minor2);

console.log('Total Major Credits:', totalMajor.credits);
console.log('Total Minor Credits:', totalMinor.credits);
