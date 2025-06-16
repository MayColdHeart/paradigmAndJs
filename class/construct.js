class User {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }


    talk() {
        console.log(`${this.name} talk here`);
    }
}

const u1 = new User('Maya', 'Coldheart');
console.log(u1);
