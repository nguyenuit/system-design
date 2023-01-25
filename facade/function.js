class Discount {
    calc(value){
        return value *  0.9;
    }
}

class ShippingFee{
    calc(){
        return 9;
    }
}

// implement Facade design pattern
class FacadePattern{
    constructor(){
        this.discount = new Discount();
        this.shippingFee = new ShippingFee();
    }
    calc(price){
        // Facade: logic COMBINED together
        // Strategy: logic SEPERATED, listed in the actions list
        price = this.discount.calc(price);
        console.log(`Price with discount::`, price);
        price += this.shippingFee.calc();
        console.log(`Price with discount and shipping fee::`, price);

        return price;
    }
}

function buy(price){
    // process price logic by Facade design pattern
    const facadePattern = new FacadePattern();
    price = facadePattern.calc(price);

    return price;
}

const price = buy(50)
console.log(`Final price::`, price);
