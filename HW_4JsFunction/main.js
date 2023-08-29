// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і b
    function squ(a,b) {
        return a*b
    }
    let result = squ(12,2)
    console.log(result)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
    function round(r) {
        return  2*r*Math.PI
    }
    let resultRound = round(11)
    console.log(resultRound)
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

    function cylinder(h,r){
    return 2*Math.PI*h*r
    }
    let resultCylinder = cylinder(4,10)
    console.log(resultCylinder)

// - створити функцію яка приймає масив та виводить кожен його елемент

    const arrayOne = [11, 31, 22, 33, true];
    function arrayElements(arr) {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    }
     arrayElements(arrayOne)


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
     function text (text){
            return `<p>${text}</p>`
    }

     let paragr = text('I am glad to see you')
    console.log(paragr)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

    function ulLii(text) {
            return document.write(`<ul>
    <li>${text}</li>
    <li>${text}</li>
    <li>${text}</li>
    
    </ul>`

            )}
    ulLii('Hello')

// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом,
// який є числовим (тут використовувати цикл)

    function liLoop(num, text) {
        let ulElement = '<ul>';
        for (let i = 0; i < num; i++) {
            ulElement += `<li>${text}</li>`;
        }
        ulElement += '</ul>';
        return ulElement;

    }
    
    let num = 3;
    let liText = 'Hello';
    
    let ulList = liLoop(num, liText);
    document.write(ulList);



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const arrays = [11, 22, 33, true, false, 'cat', 'school'];

function createList(arr) {
    let list = '<ol>';
    for (let item of arr) {
        list += `<li>${item}</li>`;
    }
    list += '</ol>';
    return list;
}

let myList = createList(arrays);
document.write(myList);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий
let users = [{id:1, name:'Lilya', age:22}, {id:2, name:'Lera', age:25}];
function displayUsers(arr) {
    let content = '';
    for (let user of arr) {
        content += `<div>ID: ${user.id}, Name: ${user.name}, Age: ${user.age}</div>`;
    }
    return content;
}

let usersContent = displayUsers(users);
document.write(usersContent);



// - створити функцію яка повертає найменьше число з масиву
const arrayMin = [11,1,22,3,44,0]
function min (arrayMin){
let min = arrayMin[0];
for (let i = 1; i < arrayMin.length; i++) {
    if (arrayMin[i] < min) {
        min = arrayMin[i];
    }
}
return min
}
console.log(min(arrayMin))


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
const sumM = [1, 2, 3, 10];

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let resultt = sumArray(sumM);
console.log(resultt);



// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
let fruits = ['home', 'index', 'school', 'peach'];
swap(fruits, 1, 2);
console.log(fruits);


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 25
function exchange(sumUAH, currencyValues, exchangeCurrency) {

    let exchangeRate = currencyValues[exchangeCurrency];
    let sumExchange = sumUAH / exchangeRate;
    return  sumExchange;
}
let currencyValues = {
    USD: 38,
    EUR: 40,
};

let sumUAH = 1000;
let exchangeCurrency = 'USD';

let sumExchange = exchange(sumUAH, currencyValues, exchangeCurrency);
console.log(sumExchange);


// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
    function nim(a,b,c) {
        let min = a
        if (b<min)
            min=b
        if (c<min)
            min = c

        return min
    }

console.log(nim(11,3,4))

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

    function most(a,b,c) {
            let max = a
        if (b>max)
            max=b
        if (c>max)
            max=c
        return max
    }
    console.log(most(11,2,0))

// - створити функцію яка повертає найбільше число з масиву
    let maxArray = [11, 22, 3, 4, 6];

    function findMaxz(arr) {
        let maxElement = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > maxElement) {
                maxElement = arr[i];
            }
        }
        return maxElement;
    }

    console.log(findMaxz(maxArray));
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
    function findAverage(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        let average = sum / arr.length;
        return average;
    }

    let numbers = [10, 20, 30, 40, 50];
    let avg = findAverage(numbers);
    console.log(avg);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

  function numbersd(...args) {
      let minn = [0]
      let maxx = [0]

      for (let num of args) {
          if (num < minn) {
              minn = num
          }

          if (num > maxx) {
              maxx = num
          }
      }
      console.log(maxx)

      return minn

  }
let minValue = numbersd(10, 5, 20, 3, 15);
console.log(`Найменше число: ${minValue}`);
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
function fillArrayWithRandomNumbers(limit) {
    let result = [];
    for (let i = 0; i < limit; i++) {
        let randomNum = Math.floor(Math.random() * (limit + 1));
        result.push(randomNum);
    }
    return result;
}

let filledArray = fillArrayWithRandomNumbers(10);
console.log(filledArray);


// - Функція приймає  масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].]
    let array = [1, 2, 3];
    let newcon = [];

    function reverseArray(arr) {
        for (let i = arr.length - 1; i >= 0; i--) {
            newcon .push (arr[i]);
        }
        return newcon;
    }

    console.log(reverseArray(array)); // Виведе [3, 2, 1]




// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
//
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

//
// ПРАВИЛА
// Якщо ви оголошуєте пустий масив всередині функції, то при кожному виклику функції цей масив буде створюватися заново, і до нього додаватимуться лише нові значення.
// При кожному новому виклику масив буде порожнім, і старі дані втрачатимуться.
//
//     Якщо ви оголошуєте масив ззовні функції, то він буде зберігати свій стан між викликами функції. Тобто, при кожному виклику функції ви будете працювати з масивом, в якому зберігаються старі дані плюс нові значення, які ви додаєте під час виклику функції.
//
//     Це механізм, який дозволяє зберігати і маніпулювати даними між різними викликами функції та між різними частинами програми.