const fs = require('fs')

fs.readFile('./users.json', function(error, data) {
    if (error) {
throw error;
    }

    const actualObj = JSON.parse(data);
    console.log(actualObj)
})
// console.log(process.argv)

// {
//     "GET users" : [{
        
//     }

//     ]
// }


const postFriend = (parameters) => {
  const [stringI, name] = parameters;
  const i = Number(stringI);
  fs.readFile('./users.json', (error, data) => {
    if (error) {
      throw error;
    }

    const users = JSON.parse(data);
    const user = users.find((user) => user.index === i);
    const newFriend = {
      name,
      index: user.friends.length,
    }

    user.friends.push(newFriend);
    const updatedUsers = JSON.stringify(users, null, 2);
    fs.writeFile('./users.json', updatedUsers, (error) => {
      if (error) {
        throw error;
      }
    });
  });
}

