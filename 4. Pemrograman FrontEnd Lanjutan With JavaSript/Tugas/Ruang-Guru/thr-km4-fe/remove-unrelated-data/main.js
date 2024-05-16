function removeUnrelated(object, key) {
  for (let i = 0; i < key.length; i++) {
    delete object[key[i]];
  }
  return object;
}

//test
console.log(
  removeUnrelated(
    {
      name: "Edo",
      age: 20,
      address: "Jakarta",
      hobbies: ["coding", "reading"],
    },
    ["address"]
  )
);
// Output: { name: 'Edo', age: 20, hobbies: ['coding', 'reading'] }

console.log(
  removeUnrelated(
    {
      name: "Edo",
      age: 20,
      address: "Jakarta",
      hobbies: ["coding", "reading"],
    },
    ["hobbies"]
  )
);
// Output: { name: 'Edo', age: 20, address: 'Jakarta' }

console.log(
  removeUnrelated(
    {
      name: "Edo",
      age: 20,
      address: "Jakarta",
      hobbies: ["coding", "reading"],
    },
    ["name"]
  )
);
// Output: { age: 20, address: 'Jakarta', hobbies: ['coding', 'reading'] }
