class Observer{
    
    constructor(name){
        this.namePick = name;
    }

    updateStatus(location){
        this.goToHelp(location);
    }

    goToHelp(location){
        console.log(`${this.namePick} --- ${JSON.stringify(location)}`);
    }
}

class Subject{

    constructor(){
        this.observerList = [];
    }

    addObserver(observer){
        this.observerList.push(observer);
    }

    notify(location){
        this.observerList.forEach(observer => observer.updateStatus(location));
    }
}

const subject = new Subject();

const nguyen = new Observer('Nguyen');
const tri = new Observer('Tri');
const bun = new Observer('Bun');
const bill = new Observer('Bill');

subject.addObserver(nguyen);
subject.addObserver(tri);
subject.addObserver(bun);
subject.addObserver(bill);

subject.notify({long: 1234, lat: 1234});
//Nguyen --- {"long":1234,"lat":1234}
//Tri --- {"long":1234,"lat":1234}
//Bun --- {"long":1234,"lat":1234}
//Bill --- {"long":1234,"lat":1234}