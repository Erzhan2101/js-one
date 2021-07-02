// // .task-1
// let num = 20
// console.log(num)

// // task-2
// let a = 10
// let b = 2
// let c = 5
// console.log(a + b + c)

// // task-3
// let a = 100
// console.log(a * 2)

// // task-4
// let a = 67
// console.log(a % 7)

// task-5
// let a = 10
// let b = 2
// console.log(a + b) сложит
// console.log(a - b) отнят
// console.log(a * b)
// console.log(a / b)

// task-6
// let a = 15
// let b = 2
// let result = a + b
// console.log(result)

// task-7
// let a = 30
// let b = 15
// let c = a + b сложит
// console.log(c % 4) деление (остаток "4")

// task 8
// let a = 17
// let b = 10
// console.log(a - b) отнят
// let c = 7
// let d = 5
// let result = c + d  сложит
// console.log(result)

// task-9
// let a = '10'
// let b = '99'
// let result = a + b
// console.log(result)

// task-10
// let name = "Askar"
// let number = 10
// let result = name + number
// console.log(result)


// task-11
// let a = 20
// let b = 10
// a = a + b
// console.log(a)

// task-12
// let a = 90
// let b = 2
// b = a - b
// console.log(b)

// task 13
// let a = 90
// a = a + 2
// console.log(a)

// task 14
// let a = 50
// a = a * 5
// console.log(a)

// task 15
// let a = 660
// a = a / 2
// console.log(a)

// task-16
// let a = 20
// let b = 2
// console.log(a % b)

// task-17
// let a = 28
// let b = 6
// console.log(a % b)

// task-18
// let a = 28
// let b = 5
// console.log(a % b) деление

// task-19
// let a = 20
// let b = 21
// console.log(a > b)

// task-20
// let a = 20
// let b = 21
// console.log(a < b)

// task-21
// let name = "Erzhan"
// console.log(name)

// task-22
// let age = 23
// console.log(age)

// task-23
// let str = "Привет, Мир!"
// console.log(str)

// task-24
// let str1 = "Приве, "
// let str2 = "Мир!"
// // console.log(str1 + str2)
// console.log(`${str1} ${str2}`) лучше делать так

// task-25
// let name = "Erzhan"
// let result =(`"Hello " + ${name}`) лучше делать так
// console.log(result)

// task-26
// let age = 30
// let result =(`I'm ${age} years old`)
// console.log(result)

// task-27
// let days = 365
// let planet = "Земля"
// let num = "7 млрд"
// let sun = "Солнце"
// let result = `В нашем году ${days} дней. Днём у нас светит ${sun}. Население планеты ${planet} составляет примерно ${num} человек`
// console.log(result)

// task-28
// let greeting = "Welcome, "
// let name = "Ivan"
// let result = greeting + name
// console.log(result)

// task-29
// let word = "информатика"
// console.log(word.length)

// task-30
// let word = "программирование"
// console.log(word.IndexOf("е")) ищеть первый
// console.log(word.lastIndexOf("е")) ищеть последный

// task-31
// let sentences = "Мы выполняем домашнее задание."
// console.log(sentences.split( ` `)[2].length)
//split - применяется только к строкаб, рабивая строку на массив


// task-32
// let a = 50
// console.log(typeof a)

// task-33
// let a = 10
// let b = 35
// let result = a + b + ` `
// console.log(result)
// console.log(typeof result)

// task-34
// let a = 10
// a = a + " "
// console.log(typeof a)

// task-35
// let string = " "
// console.log(typeof string)

// task-36
// let number = 88
// console.log(typeof number)

// task-37
// let boolean = false
// console.log(boolean)

// ?-если (if) (выполняется когда условие true)
// :-ести (else) (выполняется когда условие false)

// && - логическое И (конъюнкция - логическое умножение)
// || - логическое ИЛИ (дизъюнкция - логическое сложение)

// && - если левая часть false то он  покажет левую часть
// если левая часть true то он покажет левую часть.

// || - если левая часть false то он  покажет правую часть
// если левая часть true то он покажет левую часть

// // ! - озночает НЕ
// //
// let age = 1  // 1 - это
// //
// // if (!age) { // true
// //     console.log(123)
// // }

let time = 120
if (time > 0 && time <= 30){
    console.log("первый")
}else if (time > 31 && time <= 60){
    console.log("второй")
}else  if (time > 61 && time <= 90){
    console.log("третий")
}else if (time > 91 && time <=120){
    console.log("четвертый")
}else {
    console.log("неверно")
}

