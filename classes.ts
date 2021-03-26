interface BasicInterface {
    name: string
    email: string
    age: number
    getName(): string
    attachRole(role: string)
}

class User implements BasicInterface{ 
    name: string
    email: string
    age: number

    constructor(name: string, email: string, age: number) {
        this.name = name
        this.email = email
        this.age = age
    }

    getName(): string { 
        return this.name
    }

    attachRole(role: string) {
        console.log(`This attach role method is from parent class which is User: ${role}`)
    }
}

class Member extends User {
    id: number

    constructor(id: number, name: string, email: string, age: number) {
        super(name, email, age)
        this.id = id
    }

    getAttachRole(role: string) {
        super.attachRole(role);
    }
}

// let john = new User('marlon', 'nimarsjkd@sjdk', 23)

// console.log(john.getName())

// Not working on accessing attach role
// let salesRep: User = new Member(3, 'Marlon Nino', 'mvnino.halcyondigital@gmail.com', 23)

// Working
let salesRep = new Member(3, 'Marlon Nino', 'mvnino.halcyondigital@gmail.com', 23)

salesRep.getAttachRole('Sale Representative')