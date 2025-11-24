// This function have the elements of array

function listOfNames() {
  const names = [
    "Ali",
    "Sara",
    "Omar",
    "Lina",
    "Mohammed",
    "Fatima",
    "Mais",
    "Aiman",
    "Mona",
    "Aziza",
    "Najah",
    "Noran",
    "Reem",
    "Amalid",
  ];
  return names;
}

// This function is used filter method to sum the array
function longNames(arrays) {
  const forthNumbers = arrays.filter((num) => num.length >= 4);
  return forthNumbers;
}

// Calling functions
const arrays1 = listOfNames();
const Names = longNames(arrays1);
console.log(table2);
console.log(Names);

// Filtter arrays table

// const table2 = document.getElementById("table2");
// for (let i = 0; i < Names.length; i++) {
//   const row2 = document.createElement("tr");
//   const cell5 = document.createElement("td");
//   cell5.textContent = Names[i];

//   row2.appendChild(cell5);
//   table2.appendChild(row2);
// }
