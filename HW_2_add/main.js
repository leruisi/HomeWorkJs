// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
    let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]

    if (friends.length>=3){
        alert("це великий масив, в якому  3 і більше елементи")
    }
    else {alert('це маленький масив, в якому менше 3-х елементів')}

// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.

    let a = 5
        let b = 6
        let c = 7

        let middleNumber;

    if ((a > b && a < c) || (a < b && a > c)) {
        middleNumber = a;
    } else if ((b > a && b < c) || (b < a && b > c)) {
        middleNumber = b;
    } else {
        middleNumber = c;
    }

    let isBetween = (a > b && a < c) || (a < b && a > c);

    console.log("Середнє число:", middleNumber);
    console.log("Перше число знаходиться між двома іншими:", isBetween);



// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }

let result = a + b < 4 ? 'Мало' : 'Багато';
console.log(result);



// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором


    let numbers = 4
    let results = numbers > 0 ? 'Позитивне' : numbers < 0 ? 'Негативне' : 'Нуль';

    console.log(results);

// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

    let test = true

    if (test === true){
        console.log('Вірно')
    }
    else {console.log('Неправильно')}



    let testTwo = false
    console.log(testTwo === true ? 'Вірно': 'Неправильно' )



// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

    let que = prompt('Яка «офіційна» назва JavaScript?')

    if (que  ===  "ECMAScript"){
        console.log('Правильно!')
    }
    else {console.log("Не знаєте? ECMAScript!")}



//     - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

    let flat = 33
     if (flat >=1 && flat<=20){
         console.log('1')
     }
     else
         if (flat >20 && flat<=48){
         console.log('2')
     }
       else
         if (flat >48 && flat<=90){
         console.log('3')
     }
         else {console.log('error')}


// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
    let number = 11
    if (number===10){
        console.log('ВІРНО')
    }
    else {console.log('НЕВІРНО')}


// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

    let okten = 11
      if( okten>=10 && okten<=22){
          alert('ВЧИТИСЯ')
      }
      else {alert('вчимося ОНЛАЙН')}



// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

// let game = +prompt('Введіть число від 1 до 5')
let game = 4
switch (game){
    case 1:
        console.log('Авто');
        break;

    case 2:
        console.log('Мото');
        break;

    case 3:
        console.log('Телефон');
        break;

    case 4:
        console.log('Airpods');
        break;


    case 5:
        console.log('IpaD');
        break

    default:
        console.log('Не в діапозоні від 1 до 5')
}