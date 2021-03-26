function getSum(num1: Number, num2: Number): Number {
    return num1 + num2

}

console.log(getSum(2, 4))

function getSumOfAny(num1:any, num2:any):number {
    if (typeof num1 == 'string') {
        num1 = parseInt(num1)
    }
    if (typeof num2 == 'string') {
        num2 = parseInt(num2)
    }

    return num1 + num2
}

console.log(getSumOfAny('23', 2))

function getFullName(firstName: string, lastName: string): string {
    if (lastName == undefined) {
        return firstName
    }
    
    return firstName + ' ' + lastName
}

console.log(getFullName('Marlon', 'Nino'))

// Function returning void
function returnVoid(): void {
    return ;
}

console.log(returnVoid())
