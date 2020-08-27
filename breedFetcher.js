
const request = require('request');
const args = process.argv;
const breedFromNode = args.splice(2)

for (let breed of breedFromNode){

    request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error !== null)  {
    console.log ('error:',error)}
      const data = JSON.parse(body);
     
        if (breed === data[0].id) {
          console.log(data[0].id + " is available");
      
        } else console.log("try again")
      
    });
  } 
  

