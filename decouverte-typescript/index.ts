var message = "coucou";

let message2 = "coucou2";
//message2 = 1;

let message3: string;
let message4;

class Wookie {
    name: string;
    private _weight: number;

    constructor() {
    }

    //Ceci est une propriété, important
    get weight(): number {
        return this._weight;
    }
    set weight(value: number) {
        this._weight = value;
    }

}

const wookie = new Wookie();
wookie.name = "chewie";
wookie.weight = 12;
console.log(wookie.weight);