class Discount {
    calc(value){
        return value *  0.9;
    }
}

class ShippingFee{
    calc(value){
        return value + 9;
    }
}

// implement Facade design pattern

function buy(price){
    // process price logic by Facade design pattern
    return price;
}

buy(50)
