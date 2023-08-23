// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
    let arrayN = [11,22,33,44,55, 'okten','car','react','js','ball', true,false,55,66,'dsd']
    console.log(arrayN)
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
    let emptyAr=[]
    emptyAr[0]=true;
    emptyAr[1]='true';
    emptyAr[2]=11;
    emptyAr[3]=false;
    console.log(emptyAr)

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
let arrayWhile = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;

while (i < arrayWhile.length) {
    document.write(`<div>${arrayWhile[i]}</div>`);
    i++;
}


document.write('<p>-------------------------------------------</p>')



//     2. перебрати його циклом for
for (let j = 0; j < arrayWhile.length; j++) {
    const arrayWhileElement = arrayWhile[j];
    document.write(`<div>${arrayWhileElement}</div>`)

}


document.write('<p>-------------------------------------------</p>')



//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let arrayWhilek = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let k = 0;

while (k < arrayWhilek.length) {
    if (arrayWhile[k] % 2 !== 0) {
        console.log(arrayWhilek[k]);
    }
    k++;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let j = 0; j < arrayWhilek.length; j++) {
    const arrayWhilekElement = arrayWhilek[j];
    if (arrayWhilekElement %2 !==0){
        console.log(arrayWhilekElement)
    }

}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
     let loopwhilej = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
  let  h = 0
    while (h<loopwhilej.length){
        if (loopwhilej[h] %2 ===0){
            console.log(loopwhilej[h])
        }
        h++
    }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
let loopwhile = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
for (let j = 0; j < loopwhile.length; j++) {
    const loopwhileElement = loopwhile[j];
    if(loopwhileElement % 2 === 0){
        console.log(loopwhileElement)
    }

}
let loopwhilel = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let l = 0;

while (l < loopwhilel.length) {
    if (loopwhilel[l] % 3 === 0) {
        loopwhilel[l] = 'okten';
    }
    console.log(loopwhilel[l]);
    l++;
}


// 8. вивести масив в зворотньому порядку.
let loopwhileP = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

    for (let j = loopwhileP.length - 1; j >= 0; j--) {
     const loopwhilePElement = loopwhileP[j];
            console.log(loopwhilePElement);
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
    let loopTen = [11,22,33,44,55,66,77,88,99,0]
        for (const number of loopTen) {
         console.log(number)
    }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
    let loopStr = ['qw','er','ty','ui','io','op','as','df','fg','gh']
        for (const string of loopStr) {
         console.log(string)

    }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
    let someEl = [11,22,true,false,'cat']
        for (const someElElement of someEl) {
            console.log(someElElement)
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
        let loopIf = [11,22,32,true,11,false,'srt','cat',true,'wqqw']
    for (const loopIfElement of loopIf) {
        if (typeof loopIfElement=== "boolean"){
            console.log(loopIfElement)
        }
    }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

for (const loopIfElement of loopIf) {
    if (typeof loopIfElement === 'number'){
        console.log(loopIfElement)
    }

}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (const loopIfElement of loopIf) {
    if (typeof loopIfElement === 'string'){
        console.log(loopIfElement)
    }

}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

    let empty = []
    empty[0]=1
    empty[1]=2
    empty[2]=1
    empty[3]=1
    empty[4]=true
    empty[5]='fgfg'
    empty[6]='aa'
    empty[7]='s'
    empty[8]=false
    empty[9]=true
for (const emptyElement of empty) {
    console.log(emptyElement)

}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
            for (let j = 0; j < 10; j++) {
                console.log(`Поточний номер кроку: ${j + 1}`);
                document.write(`Поточний номер кроку: ${j + 1}<br>`);
            }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
        for (let j = 0; j < 100; j++) {
            // console.log(`Поточний номер кроку: ${j + 1}`);
            // document.write(`Поточний номер кроку: ${j + 1}<br>`);

        }
             document.write('<p>-------------------------------------------</p>')


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
        for (let j = 0; j < 100; j+=2) {
            console.log(`Поточний номер кроку: ${j}`);
            document.write(`Поточний номер кроку: ${j}<br>`);
        }


             document.write('<p>-------------------------------------------</p>')

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

        for (let j = 0; j < 100; j++) {
            if(j % 2 === 0){
            console.log(`Поточний номер кроку: ${j}`);
            document.write(`Поточний номер кроку: ${j}<br>`);}
        }


          document.write('<p>-------------------------------------------</p>')


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

        for(let j = 1; j<100; j+=2 ){
            {
                console.log(`Поточний номер кроку: ${j}`);
                document.write(`Поточний номер кроку: ${j}<br>`);
            }
        }

        document.write('<p>-------------------------------------------</p>')


// стоврити масив книжок (назва, кількість сторінок, автори , жанри).

         const books = [
             { name:['To Kill a Mockingbird'],
               pageCount:[233],
               authors:['Harper Lee'],
               genre:['Novel']

         }  ,
             { name:['The Great Gatsby'],
               pageCount:[2333],
               authors:['F. Scott Fitzgerald', 'F. Scott Fitzgerald'],
               genre:['Novel, Fantasy'],

         } ,
             { name:['The Hobbit'],
               pageCount:[2323],
               authors:['J.R.R. Tolkien'],
               genre:['Fantasy']

         }]


// -знайти наібльшу книжку.

// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
for (const book of books) {
    if(book.name.length >book.name.length ){
        console.log(`Книгу писали два автори: ${book.name}`)
    }

}
// - знайти книжку/ки які писали 2 автори
    for (const book of books) {
        if(book.authors.length ===2 ){
            console.log(`Книгу писали два автори: ${book.name}`)
        }

    }
// - знайти книжку/ки які писав 1 автор
for (const book of books) {
    if(book.authors.length === 1 ){
        console.log(`Книгу писали 1 : ${book.name}`)
    }

}
            document.write('<p>-------------------------------------------</p>')

// Створити пустий масиі

let emptyArray = [];
// a заповнити його 50 парними числами за допомоги циклу.
let number = 0;

for (let m = 0; m < 50; m++) {
    emptyArray[m] = number;
    number += 2;
}

//     b. заповнити його 50 непарними числами за допомоги циклу.
let numbers = 1;
for (let m = 0; m < 50; m++) {
    emptyArray[m] = numbers;
    number += 2;
}

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)


// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// 2. Вивести за допомогою console.log кожен третій елемен
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
//
//
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
//
//
//
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
    let pair =[11,22,33,44,55,66,77,88,0]
for (const number of pair) {
    if ( number %2 ===0 ){
        console.log(number)
    }

}
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
        let pairE = [11, 22, 33, 44, 55, 66, 77, 88, 0];
        let emptyPair = [];

        for (let i = 0; i < pairE.length; i++) {
            emptyPair[i] = pairE[i];
        }

        console.log(emptyPair);
            console.log('-------------------------------------------')



// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
        let letters = [ 'a', 'b', 'c'];
        let word = '';

        for (let j = 0; j < letters.length; j++) {
            word += letters[j];
        }

        console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

let j = 0;

while (j < letters.length) {
    word += letters[j];
    j++;
}

console.log(word); // Виведе "abc"


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

for (let letter of letters) {
    word += letter;
    j++
}

console.log(word);
