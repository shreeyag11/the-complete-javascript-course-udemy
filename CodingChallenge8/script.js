class Town {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Parks extends Town {
    constructor(name, buildYear, numberOfTrees, area) {
        super(name, buildYear);
        this.numberOfTrees = numberOfTrees;
        this.area = area;
    }
    calcTreeDensity() {
        const density = this.numberOfTrees / this.area;
        console.log(`${this.name} has the density of ${density} trees per sq km.`);
    }
    calcAvgAge() {
    }
    calcAge() {
        let date = new Date();
        return date.getFullYear() - this.buildYear;
    }
}

class Streets extends Town {
    constructor(name, buildYear, size) {
        size === undefined ? size = 'normal' : size = size;
        super(name, buildYear);
        this.size = size;
    }

    sizeClassification() {
        const sizeMap = new Map();
        sizeMap.set('tiny', `${this.name}, built in ${this.buildYear}, is a tiny street`);
        sizeMap.set('small', `${this.name}, built in ${this.buildYear}, is a small street`);
        sizeMap.set('normal', `${this.name}, built in ${this.buildYear}, is a normal street`);
        sizeMap.set('huge', `${this.name}, built in ${this.buildYear}, is a huge street`);
        sizeMap.set('big', `${this.name}, built in ${this.buildYear}, is a big street`);
        console.log(sizeMap.get(this.size));
    }
}


const greenPark = new Parks('Green Park', 1996, 1000, 80);
const nationalPark = new Parks('National Park', 2001, 700, 60);
const oakPark = new Parks('Oak Park', 1956, 2000, 75);

const oceanAvenue = new Streets('Ocean Avenue', 1752, 'tiny');
const evergreenSt = new Streets('Evergreen Street', 1752, 'huge');
const fourthSt = new Streets('4th Street', 1752);
const sunsetBlvd = new Streets('Sunset Boulevard', 1752, 'big');

console.log(`----------------PARKS REPORT----------------`);
greenPark.calcTreeDensity();
nationalPark.calcTreeDensity();
oakPark.calcTreeDensity();
console.log(`----------------STREETS REPORT----------------`);
oceanAvenue.sizeClassification();
evergreenSt.sizeClassification();
fourthSt.sizeClassification();
sunsetBlvd.sizeClassification();
