let mapurls = [];
var fs = require('fs');
let db = require('./dbINPUT.json')


  for (let [key, value] of Object.entries(db)) {
    if(key && value.brand && value.brand !== "home"){
      mapurls.push(`https://vue-integral-surface-designe-master.azurewebsites.net/brand/${value.brand}`)
      value.header.categories[2].subcategories.forEach(subcategory => {
        mapurls.push(`https://vue-integral-surface-designe-master.azurewebsites.net${subcategory.link}`)
        db.products.forEach((product)=>{
          if(product.brand == value.brand && product.cat === subcategory.name.toLowerCase().replace(/ /g , "-")){
            mapurls.push(`https://vue-integral-surface-designe-master.azurewebsites.net${subcategory.link}/productid/${product.id}`)
          }
        })
      });
    } else if(value.brand === 'home'){
      value.header.categories.forEach((category)=>{
        mapurls.push(`https://vue-integral-surface-designe-master.azurewebsites.net${category.link}`)
      })
    }
  }


  const data = JSON.stringify(Object.assign({}, mapurls));


// fs.writeFile('newfile.json', data, function (err) {
//   if (err) throw err;
//   console.log('File is created successfully.');
// });

mapurls.forEach((url)=>{
  db.urls.push(url)
})


const newDbData = JSON.stringify(db);

fs.writeFile('db.json', newDbData, function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
});