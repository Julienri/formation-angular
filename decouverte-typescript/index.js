var message = "coucou";
let message2 = "coucou2";
//message2 = 1;
let message3;
let message4;
class Wookie {
    constructor() {
    }
    //Ceci est une propriété, important
    get weight() {
        return this._weight;
    }
    set weight(value) {
        this._weight = value;
    }
}
const wookie = new Wookie();
wookie.name = "chewie";
wookie.weight = 12;
console.log(wookie.weight);
