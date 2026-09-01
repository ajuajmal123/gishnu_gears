const fs = require('fs');

let code = fs.readFileSync('src/app/products/ProductsClientPage.tsx', 'utf8');

if (code.includes('subProducts:')) {
  code = code.replace(/subProducts:/g, 'series:');
}
if (!code.includes('products: [],')) {
  code = code.replace(/image: "\/standard_gearbox.png",/g, 'image: "/standard_gearbox.png", products: [],');
  code = code.replace(/image: "\/custom_gearbox.png",/g, 'image: "/custom_gearbox.png", products: [],');
  code = code.replace(/image: "\/railway_gearbox.png",/g, 'image: "/railway_gearbox.png", products: [],');
  code = code.replace(/image: "\/defence_gearbox.png",/g, 'image: "/defence_gearbox.png", products: [],');
}

fs.writeFileSync('src/app/products/ProductsClientPage.tsx', code, 'utf8');
console.log('Fixed categories tree mapping! Success!');
