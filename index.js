const args = process.argv;
const { fetchBreedDescription } = require('./breedFetcher');

const breedFromNode = args.splice(2)
let breed = breedFromNode[0]

  fetchBreedDescription(breed, (error, desc) => {
    if (error) {
      console.log('Error fetch details:', error);
    } else {
    console.log(desc);
    }

  });

