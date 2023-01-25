class Leader{
    receiveOffer(offer){
        console.log(`Leader said OK with offer "${offer}"`);
    }
}

class Secretary{
    constructor(){
        this.leader = new Leader()
    }
    receiveOffer(offer){
        // do some work
        // arrange schedule, validate offer...
        this.leader.receiveOffer(offer)
    }
}

class Developer{
    applyFor(target, salary){
        target.receiveOffer(salary)
    }
}

const dev = new Developer()
dev.applyFor(new Secretary(), 'salary up to 3k!')
