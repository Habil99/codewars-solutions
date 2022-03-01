class Human {
    constructor(human) {
        this.human = human;
    }
}

class Man extends Human {
  constructor(man) {
    super(man)
  }
}

class Woman extends Human {
    constructor(woman) {
        super(woman);
    }
}

class God {
  static create() {
    const man = new Man("Adam");
    const woman = new Woman("eve")

    return [man, woman];
  }
}

let humans = God.create();

console.log(humans[0] instanceof Man);

console.log(humans);
