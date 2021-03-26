let myString: string
let myNum: number
let myBool: boolean
let anyVar: any


/**
 * var with Array
 */
// let stringArr: string[]
// let numArr: number[]
// let boolArr: boolean[]

/**
 * Alternative
 */
let stringArr: Array<string>
let numArr: Array<number>
let boolArr: Array<boolean>

myString = 'Traversy Media'
myNum = 22
myBool = false
anyVar = true

stringArr = ['Test 1', 'Test 2', 'Test 3'],
numArr = [421, 231, 111],
boolArr = [true, false, true, true],

console.log(stringArr, numArr, boolArr)

let strNumTuple: [string, number]

strNumTuple = ['Tuple String', 23]
console.log(strNumTuple)