const map = new Map();

map.set('name', 'ulbi tv');
console.log(map.get('name'));

const objKey = {id: 5}
map.set(objKey, 'ulbi tv');
console.log(map.get(objKey));

// =========================== //

const set = new Set();

set.add(5);
set.add(5);
set.add(5);
set.add(5);
set.add(5);
set.add(5);
set.add(4);
set.add(3);

console.log(set); // {5, 4, 3} - только уникальные значения