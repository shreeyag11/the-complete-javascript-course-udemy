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
}

class Streets extends Town {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    sizeClassification() {
        const sizeMap = new Map();
        sizeMap.set(1, 'tiny');
        sizeMap.set(2, 'small');
        sizeMap.set(3, 'normal');
        sizeMap.set(4, 'big');
        sizeMap.set(5, 'huge');
        console.log(`${this.name}, built in ${this.buildYear}, is a ${sizeMap.get(this.size)} street.`);
    }
}

const allParks = [
    new Parks('Green Park', 1996, 1000, 80),
    new Parks('National Park', 2001, 700, 60),
    new Parks('Oak Park', 1956, 800, 75),
];

const allStreets = [
    new Streets('Ocean Avenue', 1752, 1),
    new Streets('Evergreen Street', 1972, 5),
    new Streets('4th Street', 2010, 3),
    new Streets('Sunset Boulevard', 1945, 4),
];

function calcAvg(arr) {
    const sum = arr.reduce((prev, cur, index) =>
        prev + cur, 0);
    return [sum, sum / arr.length];
}

function reportParks(p) {
    console.log(`----------------PARKS REPORT----------------`);
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [total, avg] = calcAvg(ages);
    console.log(`Our ${p.length} parks have an average of ${avg}`);
    const i = p.map(el => el.numberOfTrees).findIndex(el => el >= 1000);
    p.forEach(el => el.calcTreeDensity());
    console.log(`${p[i].name} has more than 1000 trees`);
}

function reportStreets(s) {
    console.log(`----------------STREETS REPORT----------------`);
    const len = s.map(el => el.length);
    const [total, avg] = calcAvg(len);
    console.log(`Our ${s.length} streets have a total length of ${total} kms, with an average of ${avg} km.`);
    s.forEach(el => el.sizeClassification());
}

reportParks(allParks);
reportStreets(allStreets);

