// You are given an array representing a series of financial records for a freelance worker.
// Each record is an array containing the record type ("income", "expense", "investment", or "refund") and the amount.
const financialRecords = [
  ["income", 1800],
  ["expense", 500],
  ["investment", 1000],
  ["income", 2400],
  ["refund", 200],
  ["expense", 800],
  ["income", 1500],
];

/*****************************************************************
Part 1: Record Categorization

Task 1) Create a new array containing only "income" and "refund" records.
       Output 1) [["income", 1800], ["income", 2400], ["refund", 200], ["income", 1500]]

Task 2) Create a new array containing only "expense" and "investment" records.
       Output 2) [["expense", 500], ["investment", 1000], ["expense", 800]]

******************************************************************/

const Task1 = financialRecords.filter((records) => {
  if (records[0] === "income") return true;
  else if (records[0] === "refund") {
    return true;
  } else {
    return false;
  }
});
console.log("Output 1:", Task1);

const Task2 = financialRecords.filter((records2) => {
  if (records2[0] === "expense") return true;
  else if (records2[0] === "investment") {
    return true;
  } else {
    return false;
  }
});
console.log("Output 2:", Task2);

/*****************************************************************
Part 2: Financial Calculations

Task 3) Calculate the total for "income" and "refund" records combined.
       Output 3) 5900

Task 4) Calculate the total for "expense" and "investment" records combined.
       Output 4) 2300

******************************************************************/

let sum = 0;
const sum1 = Task1.forEach((sum11) => {
  sum = sum + sum11[1];
});
console.log("total income and refund):", sum);

let sum2 = 0;
const sumtask4 = Task2.forEach((sum22) => {
  sum2 = sum2 + sum22[1];
});
console.log("total expense and investment):", sum2);

/*****************************************************************
Part 3: Detailed Analysis

Task 5) Determine the net financial impact (total for "income" and "refund" - total for "expense" and "investment").
       Output 5) 3600

Task 6) Identify and create a new array with records where the amount is greater than $800.
       Output 6) [["income", 1800], ["investment", 1000], ["income", 2400], ["income", 1500]]

******************************************************************/

// Use JavaScript array methods like filter and reduce to achieve the desired outputs for each task.

let total = sum - sum2;
console.log("net total:", total);

const greater = financialRecords.filter((financialRecord) => {
  if (financialRecord[1] > 800) {
    return true;
  } else {
    return false;
  }
});
console.log("output 6:", greater);
