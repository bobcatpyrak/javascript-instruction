// this is notes on classes

class User
{
    uname;
    constructor()
    {
        this.uname = "";
    }
    print()
    {
        console.log(`${this.uname}`);
    }
}

class Car
{
    constructor()
    {
        this.mfg = "Ford";
        this.type = "Truck";
        this.model = "F100";
    }
    // classes have getters and setters
    getMfg() { return this.mfg;}
    setMfg(mfg) { this.mfg = mfg;}
}
// creating instances with new classname
let aCar = new Car();
let bCar = new Car("Ford");

// declaring methods - public by default
class newCar
{
    print()
    {
        let msg = `${this.mfg}${this.type}${this.model}`;
        return msg;
    }
}