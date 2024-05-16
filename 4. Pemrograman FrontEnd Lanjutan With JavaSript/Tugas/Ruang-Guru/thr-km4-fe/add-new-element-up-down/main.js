function addNewElementUpDown(array, element, position) {
  if (position === "up") {
    return [element, ...array];
  } else if (position === "down") {
    return [...array, element];
  } else {
    return array;
  }
}

// contoh penggunaan
console.log(addNewElementUpDown([1, 2, 3, 4, 5], 6, "up"));
console.log(addNewElementUpDown([1, 2, 3, 4, 5], 6, "down"));
console.log(addNewElementUpDown(["Edo", "Budi", "Joko", "Tono"], "Rudi", "up"));
console.log(
  addNewElementUpDown(["Edo", "Budi", "Joko", "Tono"], "Rudi", "down")
);
