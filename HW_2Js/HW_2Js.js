// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arrayTenElement = [10,13,true, false,'okten', 'js', "react",'redux',2,'Vinchi']
console.log(arrayTenElement)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

const objOneBook= {
    title: 'To Kill a Mockingbird',
    pageCount: 520,
    genre: 'Classic Fiction'
}
const objTwoBook= {
    title: 'The Great Gatsby',
    pageCount: 180,
    genre: 'Literary Fiction'
}
const objThreeBook= {
    title: 'Harry Potter and the Prisoner of Azkaban',
    pageCount:464 ,
    genre: 'Fantasy'
}

console.log(objOneBook)
console.log(objTwoBook)
console.log(objThreeBook)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
const objOneBooks= {
    title: 'To Kill a Mockingbird',
    pageCount: 520,
    genre: 'Classic Fiction',
    author :[{
        name:'Petya',
        age: 23
    }]
}
const objTwoBooks= {
    title: 'The Great Gatsby',
    pageCount: 180,
    genre: 'Literary Fiction',
    author :[{
        name:'Petya',
        age: 23
    }]

}
const objThreeBooks= {
    title: 'Harry Potter and the Prisoner of Azkaban',
    pageCount:464 ,
    genre: 'Fantasy',
    author: [{
        name:'Andrew',
        age: 232
    }]
}

console.log(objOneBooks)
console.log(objTwoBooks)
console.log(objThreeBooks)



// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
const users = [{
    name: 'Kolya',
    username:'Kolya',
    password :'qwwss'
},{
    name: 'Melisa',
    username:'Melisa',
    password :'asascc'
},{
    name: 'Serenay',
    username:'Serenay',
    password :'fgfgf'
},{
    name: 'Ozbek',
    username:'Ozbek',
    password :'ffgf'
},{
    name: 'Hafsa',
    username:'Hafsa',
    password :'fgfgfg'
},{
    name: 'Hande',
    username:'Hande',
    password :'fgfg11'
},{
    name: 'Kerem',
    username:'Kerem',
    password :'vffgg44'
},{
    name: 'Loloa',
    username:'Lola',
    password :'eeddrr55'
},{
    name: 'Vasya',
    username:'Vasya',
    password :'gfgfggfg333'
},{
    name: 'Lera',
    username:'Lera',
    password :'fefeff'
},]

console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)



// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
 let one = 1
if (one !== 0){
    console.log('Вірно')
}
else {
    console.log('Не вірно')
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 34
 if (time>=1 && time <=15){
     console.log('Число знаходиться в першій чверті')
 }
 else
 if (time>=16 && time <=30){
     console.log('Число знаходиться в другій чверті')
 }
 else
 if (time>=31 && time <=45){
     console.log('Число знаходиться в третій чверті')
 }
 else
 if (time>=46 && time <=60){
     console.log('Число знаходиться в четвертій чверті')
 }
 else {console.log('Число знаходиться не в діапазоні від 0 до 59')}



// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).


let num = 22
if (num>=1 && num<=10){
        console.log('Число знаходиться в першій декаді')
}
else
    if (num>=11 && num<=21){
        console.log('Число знаходиться в другій декаді')
    }
else
    if (num>=22 && num<=31){
        console.log('Число знаходиться в третій декаді')
    }
else {console.log('Error')}


// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).


// let day=+prompt("Введіть день тижня")
let day= 3;
switch (day){
      case 1:
          console.log( 'Monday')
          break;

      case 2:
          console.log('Tuesday');
          break
      case 3:
          console.log('Wednesday')
          break
      case 4:
          console.log('Thursday')
          break
      case 5:
          console.log('Friday');
          break
      case 6:
          console.log('Saturday')
          break
      case 7:
          console.log('Sunday')
          break
      default:
          console.log("Incorrect day");
          break
  }




//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
         let number= +prompt("Введіть перше число")
         let numberTwo= +prompt("Введіть друге число")

        if (number>numberTwo){
            console.log(number)
        }
        else
            if (number<numberTwo){
            console.log( numberTwo)
        }
        else
            if (number === numberTwo){
            console.log( " рівні числа ")
        }
        else {
            console.log("Ooops, error")
        }


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

        let x = 1
        if (  x === 'undefined' || x === 'null' || x === '' || x === 0 ){
            x = 'default'

        }
            console.log(x)


//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
        if (coursesAndDurationArray[0].monthDuration>=5) {
            console.log( coursesAndDurationArray[0].title , 'Cупер')
        }


            if (coursesAndDurationArray[1].monthDuration>=5) {
            console.log(coursesAndDurationArray[1].title ,'Супер')
        }

            if (coursesAndDurationArray[2].monthDuration>=5) {
            console.log(coursesAndDurationArray[2].title ,   'Супер')
        }

            if (coursesAndDurationArray[3].monthDuration>=5) {
            console.log(coursesAndDurationArray[3].title ,'Супер')
        }

            if (coursesAndDurationArray[4].monthDuration>=5) {
            console.log(coursesAndDurationArray[4].title ,'Супер')
        }

            if (coursesAndDurationArray[5].monthDuration>=5) {
            console.log(coursesAndDurationArray[5].title ,'Супер')
        }

