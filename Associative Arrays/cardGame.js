function solve(arr = []) { 

    let myObj = {};
    let powerCard = { 
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        J: 11,
        Q: 12,
        K: 13,
        A: 14,
    }

    let types = { 
        S: 4,
        H: 3,
        D: 2,
        C: 1,
    }

    for (const element of arr) {
        let [player , cards] = element.split(': ');
        if(myObj.hasOwnProperty(player)) { 
            
            let oldCards = myObj[player];
            cards = cards.split(', ');
            cards.push(...oldCards);
            myObj[player] = cards;
        }else { 
            myObj[player] = cards.split(', ');
        }

      }

      let keys = Object.keys(myObj);

      for (const player of keys) {
          let deck = myObj[player].filter((x , i , arr) => !arr.slice((i + 1)).some(p => p === x));
          let points = 0;
          for (const card of deck) {
              let [a,b,c] = card.split('');
              if(c===undefined) { 
                  points += (powerCard[a] * types[b])
              }else { 
                  points += powerCard[a+b] * types[c];
              }
          } 

          myObj[player] = points;
      }

      let entries = Object.entries(myObj);

      for (const kvp of entries) {
          console.log(`${kvp[0]}: ${kvp[1]}`);
      }



}
