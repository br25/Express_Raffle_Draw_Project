// /test/test.js

const myDB = require('../db/db');
myDB.create('user 1', 10);
myDB.create('user 2', 10);
myDB.create('user 3', 10);
// myDB.create('user 4', 10);
// myDB.create('user 5', 10);
const bulk = myDB.bulkCreate('william', 10, 2);
// console.log('Bulk', bulk);
// const tickets = myDB.find();
// console.log('All Tickets', tickets);
const winners = myDB.draw(2);
console.log('Winners', winners);