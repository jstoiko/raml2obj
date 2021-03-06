const parser = require('./parser');
const raml2obj = require('..');
const fs = require('fs');

// const apiUrl = 'test/address-1.0.0-raml-fragment/address.raml';
// const apiUrl = 'test/employment-1.0.0-raml-fragment/employment.raml';
// const apiUrl = 'test/raml-example-api-master/api.raml';
// const apiUrl = 'test/array-of-foo.raml';
const apiUrl = 'test/indexof.raml';
parser(apiUrl)
.then(result => {
  debugger;
  return raml2obj.parse({json: result});
})
.then(result => {
  const jsonString = JSON.stringify(result.json, null, 2);
  const filename = 'test/indexof.json';
  fs.writeFileSync(filename, jsonString);
})
.catch((data) => {
  console.error(data);
});
