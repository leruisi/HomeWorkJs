// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let squ = (a,b) => a*b
let result = squ(12,2)
console.log(result)
// - створити функцію яка обчислює та повертає площу кола з радіусом r

let round = (r)=> 2*r*Math.PI
let resultRound = round(11)
console.log(resultRound)
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinder = (h,r)=> 2*Math.PI*h*r
let resultCylinder = cylinder(4,10)
console.log(resultCylinder)
// - створити функцію яка приймає масив та виводить кожен його елемент
let arrayElements = arr => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

let arrayOne = [11, 31, 22, 33, true];
arrayElements(arrayOne);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let  text=  (text) => `<p>${text}</p>`;
let paragr = text('I am glad to see you');
console.log(paragr);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let ulLii = (text) => document.write(`<ul>
    <li>${text}</li>
    <li>${text}</li>
    <li>${text}</li>
    
    </ul>`

)
ulLii('Hello')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let ulElement = '';

let liLoop = (num, text) => {
    ulElement = '<ul>';
    for (let i = 0; i < num; i++) {
        ulElement += `<li>${text}</li>`;
    }
    ulElement += '</ul>';
};

let num = 3;
let liText = 'Hello';

liLoop(num, liText);
document.write(ulElement);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let list = '';

let createList = arr => {
    list = '<ol>';
    for (let item of arr) {
        list += `<li>${item}</li>`;
    }
    list += '</ol>';
};

let arrays = [11, 22, 33, true, false, 'cat', 'school'];

createList(arrays);
document.write(list);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [{id:1, name:'Lilyaf', age:22}, {id:2, name:'Lera', age:25}];
let content = ''
let  displayUsers = (arr)=> {
    // let content = '';
    for (let user of arr) {
        content += `<div>ID: ${user.id}, Name: ${user.name}, Age: ${user.age}</div>`;
    }
}

 displayUsers(users);
document.write(content);

// - створити функцію яка повертає найменьше число з масиву
const arrayMin = [11, 1, 22, 3, 44];
let globalMin = arrayMin[0];

let min = arr => {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < globalMin) {
            globalMin = arr[i];
        }
    }
}

min(arrayMin);
console.log(globalMin);


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const sumM = [1, 2, 3, 10];
let sum = 0;
let  sumArray= (arr) => {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

}
 sumArray(sumM);
console.log(sum);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let  swap = (arr, index1, index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
let fruits = ['home', 'index', 'school', 'peach'];
swap(fruits, 1, 2);
console.log(fruits);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250







// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let nim = (a, b, c) => {
    let min = a;
    if (b < min)
        min = b;
    if (c < min)
        min = c;

    console.log(min);
}

nim(13, 3, 4);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let  most= (a,b,c) => {
    let max = a
    if (b>max)
        max=b
    if (c>max)
        max=c
    return max
}
console.log(most(1,2,0))


// - створити функцію яка повертає найбільше число з масиву

let maxArray = [11, 22, 3, 4, 6];
let maxElement = maxArray[0];

let findMax = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }
    return maxElement;
}

console.log(findMax(maxArray));


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let  findAverage = (arr)=>  {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let average = sum / arr.length;
 console.log(average)
}

let numbers = [10, 20, 30, 40, 50];
findAverage(numbers);

// Вивести всі числа від 1 до n:

let numbersN = n => {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

numbersN(22);
// Вивести числа від A до B в зростаючому або спадаючому порядку:

let random = (a, b) => {
    if (a < b) {
        for (let i = a; i <= b; i++) {
            console.log(i);
        }
    } else {
        for (let i = a; i >= b; i--) {
            console.log(i);
        }
    }
}
random(1, 11);
random(11, 1);

// Змінити місцями об'єкт із індексом "i" і "i+1":

let foo = (arr, i) => {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
    return arr;
}

console.log(foo([9, 8, 0, 4], 0));
console.log(foo([9, 8, 0, 4], 1));
console.log(foo([9, 8, 0, 4], 2));



