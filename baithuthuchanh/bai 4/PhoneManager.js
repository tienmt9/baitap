class PhoneManager {
    constructor() {
        this.phones = [];
    };

    addPhone(phone) {
        this.phones.push(phone);
    }

    displayUnsortedPhones() {
        this.phones.forEach(phone => console.log(phone.toString()));
    }

    displaySortedPhones() {
        const sortedPhones = this.phones.slice().sort((a, b) => a.name.localeCompare(b.name));
        sortedPhones.forEach(phone => console.log(phone.toString()));
    }
}

export default PhoneManager;