function getSum(num1, num2) {
    return num1 + num2;
}
console.log(getSum(2, 4));
function getSumOfAny(num1, num2) {
    if (typeof num1 == 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 == 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
}
console.log(getSumOfAny('23', 2));
function getFullName(firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + ' ' + lastName;
}
console.log(getFullName('Marlon', 'Nino'));
// Function returning void
function returnVoid() {
    return;
}
console.log(returnVoid());
