let obj = {x: 1, y: 2, z: 3};

for (let key in obj) {
  obj[key] = obj[key] * obj[key];
}

console.log(obj);