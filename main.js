const fs = require('fs')

fs.readFile('./users.json', function(error, data) {
    if (error) {
throw error;
    }

    const actualObj = JSON.parse(data);
    console.log(actualObj)
})
// console.log(process.argv)

{
    "GET users" : [{
        
    }

    ]
}