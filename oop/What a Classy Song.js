class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.listeners = [];
    this.newUsers = 0;
  }

  howMany(users) {
    this.resetNewUsers();

    users.forEach((user) => {
      if (!this.listeners.map(listener => listener.toLowerCase()).includes(user.toLowerCase())) {
        // return;
        this.newUsers += 1;
        this.listeners.push(user);
      } 
    });

    return this.newUsers;
  }

  resetNewUsers() {
    this.newUsers = 0;
  }
}

const mountMoose = new Song("Mount Moose", "The Snazzy Moose");

console.log(mountMoose.title, "Mount Moose");
console.log(mountMoose.artist, "The Snazzy Moose");
console.log(mountMoose.howMany(["John", "Fred", "Bob", "Carl", "RyAn"]), 5);
console.log(mountMoose.howMany(["JoHn", "Luke", "AmAndA"]), 2);
console.log(mountMoose.howMany(["Amanda", "CalEb", "CarL", "Furgus"]), 2);
console.log(
  mountMoose.howMany(["JOHN", "FRED", "BOB", "CARL", "RYAN", "KATE"]),
  1
);
console.log(mountMoose.howMany(["Jack", "jacK"]), 1);

/**
 * [] [1,2,3,4,5]
 * [1,2,3,4,5] [1,3,4]
 *
 */
