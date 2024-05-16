function addMoreData(object, key, value) {
  return Object.assign({}, object, {
    [key]: value,
  });
}

// contoh penggunaan
console.log(
  addMoreData(
    {
      name: "Edo",
      age: 20,
    },
    "address",
    "Jakarta"
  )
);
console.log(
  addMoreData(
    {
      name: "Edo",
      age: 20,
    },
    "hobbies",
    ["coding", "reading"]
  )
);
console.log(
  addMoreData(
    {
      name: "Edo",
      age: 20,
    },
    "isMarried",
    false
  )
);
