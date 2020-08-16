const values : number[] = [];

// insertions + write\update O(1)
values[0] = 1;
values[1] = 2;
values[2] = 3;
values.push(4);

// O(n)
values.unshift(0);
values.unshift(-1);
console.log(values);


// Delete O(n)
values.splice(2,1);
console.log(values);
