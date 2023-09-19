let obj = {x: 1, y: 2, z: 3};

obj.x = obj.x ** 2;
obj.y = obj.y ** 2;
obj.z = obj.z ** 2;

for (let key in obj) {
    console.log(obj[key]);
};

console.log(obj.x);
console.log(obj.y);
console.log(obj.z);