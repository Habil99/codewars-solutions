class List {
  constructor() {
    this.result = [];
  }

  countSpecDigits(integersList, digitsList) {
    const tuples = {};

    integersList.filter(int => digitsList)
  }
}

const l = new List();

integersList = [1, 1, 2, 3, 1, 2, 3, 4];
digitsList = [1, 3];
console.log(l.countSpecDigits(integersList, digitsList), [
  [1, 3],
  [3, 2],
]);

integersList = [-18, -31, 81, -19, 111, -888];
digitsList = [1, 8, 4];
console.log(l.countSpecDigits(integersList, digitsList), [
  [1, 7],
  [8, 5],
  [4, 0],
]);

integersList = [-77, -65, 56, -79, 6666, 222];
digitsList = [1, 8, 4];
console.log(l.countSpecDigits(integersList, digitsList), [
  [1, 0],
  [8, 0],
  [4, 0],
]);

integersList = [-77, -65, 56, -79, 6666, 222];
digitsList = [];
console.log(l.countSpecDigits(integersList, digitsList), []);

integersList = [];
digitsList = [1, 8, 4];
console.log(l.countSpecDigits(integersList, digitsList), [
  [1, 0],
  [8, 0],
  [4, 0],
]);
