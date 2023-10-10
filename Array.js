const data = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']
//Index          0     1  2  3  4    5    6     7     8      9        10      11  12  13 14   15   16   17    18       19   20   21   22  23    24    25    26  
//Slice (+)  0       1  2  3  4   5    6    7      8     9      10         11   12  13 14  15   16    17 18         19  20    21   22  23   24    25    26     27
//Slice (-) -26     -25-24-23-22 -21  -20  -19    -18   -17    -16        -15  -14 -13-12 -11  -10   -9 -8         -7   -6   -5   -4  -3    -2   -1    -0

//2.1
const slicedData1 = data.slice(0, 1)
console.log(slicedData1)

//2.2
const slicedData2 = data.slice(-1)
console.log(slicedData2)

//2.3
const slicedData3 = data.slice(1, 2)
console.log(slicedData3)

//2.4
const slicedData4 = data.slice(-2, -1)
console.log(slicedData4)

//2.5
const slicedData5 = data.slice(7, 8)
console.log(slicedData5)

//2.6
const slicedData6 = data.slice(-9, -8)
console.log(sliceData6)

//2.7
const middle = Math.floor(arr.length / 2)
const sliceData7 = data.slice(middle, middle +1)
console.log(sliceData7)

//2.8
const slicedData = data.slice(0, 3)
console.log(slicedData)

//2.9
const slicedData9 = data.slice(-3)
console.log(slicedData9)

//2.10
const slicedData10 = data.slice(0, 10)
console.log(slicedData10)

//2.11
const slicedData11 = data.slice(-10)
console.log(slicedData11)

//2.12
const slicedData12 = data.slice(2, 8)
console.log(slicedData12)

//2.13
const slicedData13 = data.slice(-9, -4)
console.log(slicedData13)

//2.14
const slicedData14 = data.slice(10, 19)
console.log(slicedData14)

//2.15
const slicedData15 = data.slice(-20, -8)
console.log(slicedData15)

//2.16
const slicedData16 = data.slice(1)
console.log(slicedData16)

//2.17
const slicedData17 = data.slice(0, -1)
console.log(slicedData17)

//2.18
const slicedData18 = data.slice(5)
console.log(slicedData18)

//2.19
const slicedData19 = data.slice(0, -5)
console.log(slicedData19)

//2.20
const slicedData20 = data.slice(0, Math.floor(data.length / 2))
console.log(slicedData20)

//2.21
const slicedData21 = data.slice(Math.ceil(data.length / 2))
console.log(slicedData21)

//2.22
const slicedData22 = data.slice(1, -1)
console.log(slicedData22)

//2.23
const slicedData23 = data.slice(5, -3)
console.log(slicedData23)

//2.24
const slicedData24 = data.slice(1, -8)
console.log(slicedData24)

//2.25
const slicedData25 = data.slice(7, -1)
console.log(slicedData25)

//2.26
const slicedData26 = data.slice(9, -12)
console.log(slicedData26)

//2.27
const slicedData27 = data.slice(10, 10 + 9)
console.log(slicedData27)

//2.28
const slicedData28 = data.slice(7, 7 + 12)
console.log(slicedData28)

//2.29
const task229first = data.slice(0, 5) 
console.log(task229first)
const task229last = data.slic(-6)
console.log(task229last)
const task229all = task229first.concat(task229last)
console.log(task229all)

//2.30
const task230first = arr.slice(2, 5)
console.log(task230first)
const task230last = arr.slice(14, 17)
console.log(task230last)
const task230all = task230first.concat(task230last)
console.log(task230all)