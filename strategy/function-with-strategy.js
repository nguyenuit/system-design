function getPriceTypeA(originalPrice){
	return originalPrice * 0.9;
}
function getPriceTypeB(originalPrice){
	return originalPrice * 0.8;
}
function getPriceTypeC(originalPrice){
	return originalPrice * 0.7;
}
//add more functions
//...
function getPriceTypeDefault(originalPrice){
	return originalPrice;
}
const strategyPriceTypes = {
	'A': getPriceTypeA,
  'B': getPriceTypeB,
  'C': getPriceTypeC,
  //add more types
  //...
  'default': getPriceTypeDefault
}
function getPrice(originalPrice, typePromotion='default'){
	return strategyPriceTypes[typePromotion](originalPrice);
}

console.log(getPrice(100, 'A')); // 90
console.log(getPrice(100)); // 100
console.log(getPrice(100, 'C')); // 70
