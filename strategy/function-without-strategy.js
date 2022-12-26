function getPriceTypeA(){
	return originalPrice * 0.9;
}
function getPriceTypeB(){
	return originalPrice * 0.8;
}
function getPrice(originalPrice, typePromotion='default'){

	if (typePromotion == 'A'){
  	return originalPrice * 0.9;
  }
	
  if (typePromotion == 'B'){
  	return originalPrice * 0.8;
  }
  
  //add more types
  //...
  
  if (typePromotion == 'default'){
  	return originalPrice;
  }
}

console.log(getPrice(100, 'A')); // 90
console.log(getPrice(100)); // 100
