const user = {
    name: 'May',
    surname: 'Coldheart',
    age: '21',


    userMensager(){
        console.log(`${this.name} ${this.surname} diz oi..`);
        console.log(`idade atual ${this.age}`)
    },

    incremAge(){
        this.age++;
    }

};

user.userMensager()
user.incremAge()
user.userMensager()
user.incremAge()
user.userMensager()
user.incremAge()
user.userMensager()