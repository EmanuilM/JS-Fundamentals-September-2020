function login(input = []) {
    let username = input.shift();
    let reverserName = "";
    let count = 0;
    for (let i = username.length - 1; i >= 0; i--) {
      reverserName += username[i];
    }
  
    for (let times of input) {
      if (times === reverserName) {
        console.log(`User ${username} logged in.`);
      } else if (count === 3) {
        console.log(`User ${username} blocked!`);
        return;
      } else if (times !== reverserName) {
        console.log(`Incorrect password. Try again.`);
        count++;
      }
    }
  }
login(['Acer','login','go','let me in','recA'])