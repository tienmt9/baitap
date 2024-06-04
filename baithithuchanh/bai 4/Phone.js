class Phone {
    constructor(code, name, manufacturer, price) {
        this._code = code;
        this._name = name;
        this._manufacturer = manufacturer;
        this._price = price;
    }

    get code() {
        return this._code;
    }
    set code(newCode) {
        this._code = newCode;
    }

    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }

    get manufacturer() {
        return this._manufacturer;
    }
    set manufacturer(newManufacturer) {
        this._manufacturer = newManufacturer;
    }

    get price() {
        return this._price;
    }
    set price(newPrice) {
        this._price = newPrice;
    }

    toString() {
        return `Phone: ${this._name}, Code: ${this._code}, Manufacturer: ${this._manufacturer}, Price: ${this._price}`;
    }
}