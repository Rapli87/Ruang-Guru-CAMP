function removeLeftRight(arr, left, right) {
  if (left === "left") {
    arr.shift();
    return arr;
  }
}
console.log(removeLeftRight([1, 2, 3, 4, 5], "left")); // Output: [2, 3, 4, 5]
console.log(removeLeftRight([1, 2, 3, 4, 5], "right")); // Output: [1, 2, 3, 4]
console.log(removeLeftRight(["Edo", "Budi", "Joko", "Tono"], "left")); // Output: ["Budi", "Joko", "Tono"]
console.log(removeLeftRight(["Edo", "Budi", "Joko", "Tono"], "right")); // Output: ["Edo", "Budi", "Joko"]
