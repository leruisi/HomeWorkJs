// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// Функция конструктора User
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.ten= function (){
        return (`ID- ${this.id}, Name - ${this.name}, Surname - ${this.surname} , Email - ${this.email}, Phone-${this.phone}`)
    }

}

let usersArray = [];

 let user1 = new User(1, 'Alex', 'Aswdf', 'thede.@gmail.com', 3456778999)
 let user2 = new User(2, 'Alex', 'Aswdf', 'thede.@gmail.com', 3456778999)
 let user3 = new User(3, 'Alex', 'Aswdf', 'thede.@gmail.com', 3456778999)
 let user4 = new User(4, 'Alex', 'Aswdf', 'thede.@gmail.com', 3456778999)
 let user5 = new User(5, 'Alex', 'Aswdf', 'thede.@gmail.com', 3456778999)
 let user6 = new User(6, 'Alex', 'Aswdf', 'thede.@gmail.com', 3456778999)
 let user7 = new User(7, 'Alex', 'Aswdf', 'thede.@gmail.com', 3456778999)
 let user8 = new User(8, 'Alex', 'Aswdf', 'thede.@gmail.com', 3456778999)
 let user9 = new User(9, 'Alex', 'Aswdf', 'thede.@gmail.com', 3456778999)
 let user10 = new User(10, 'Alex', 'Aswdf', 'thede.@gmail.com', 3456778999)

usersArray.push(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10)

console.log(usersArray);

for (const user of usersArray) {
    console.log(user.ten());
}



// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filteredUsers = usersArray.filter(user => user.id % 2 === 0);
console.log(filteredUsers);


//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortUsers = usersArray.sort((a, b) => b.id - a.id)
console.log(sortUsers)

console.log('------------------------------------------------------------------------------------------------')
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
 class Client {
    constructor(id, name, surname , email, phone, order=[]) {
        this.id= id;
        this.name= name;
        this.surname = surname;
        this.email= email;
        this.phone = phone;
        this.order = order;
        this.show = function (){
            return `ID - ${this.id}, Name-${this.name}, Surname - ${this.surname} , Email - ${this.email}, Phone-${this.phone}, Order -${this.order}`
        }

    }
 }

let emptyClient = []

let user11 = new Client(1, 'Alex', 'Aswdf', 'thede.@gmail.com', 3456778999, ['apple','car', 'flowers'])
let user22 = new Client(2, 'Alex', 'Aswdf', 'thede.@gmail.com', 3456778999,['apple','car'])
let user33 = new Client(3, 'Alex', 'Aswdf', 'thede.@gmail.com', 3456778999,['apple','car','flowers', 'cup'])
let user44 = new Client(4, 'Alex', 'Aswdf', 'thede.@gmail.com', 3456778999,['apple','car','dishes', 'house', 'towel'])
let user55 = new Client(5, 'Alex', 'Aswdf', 'thede.@gmail.com', 3456778999,['apple'])
let user66 = new Client(6, 'Alex', 'Aswdf', 'thede.@gmail.com', 3456778999,['apple','car','cat'])
let user77 = new Client(7, 'Alex', 'Aswdf', 'thede.@gmail.com', 3456778999,['apple','car', 'pizza','meat'])
let user88 = new Client(8, 'Alex', 'Aswdf', 'thede.@gmail.com', 3456778999,['apple','car','eggs','butter','bread','milk'])
let user99 = new Client(9, 'Alex', 'Aswdf', 'thede.@gmail.com', 3456778999,['apple','car','car','eggs','butter','bread','milk'])
let user100 = new Client(10, 'Alex', 'Aswdf', 'thede.@gmail.com', 3456778999,['apple','car','car','eggs','butter','bread','milk','car','eggs','butter','bread','milk'])

 emptyClient.push(user11,user22,user33,user44,user55,user66,user77,user88,user99,user100)

for (const client of emptyClient) {
    console.log(client.show());

}

let sortEmpty =emptyClient.sort((a, b) => a.order.length - b.order.length);
console.log(sortEmpty)

console.log('------------------------------------------------------------------------------------------------')


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.driver = null; // Початково водія не вказано

    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    this.info = function () {
        console.log(`Модель - ${this.model}`);
        console.log(`Виробник - ${this.manufacturer}`);
        console.log(`Рік випуску - ${this.year}`);
        console.log(`Максимальна швидкість - ${this.maxSpeed}`);
        console.log(`Об'єм двигуна - ${this.engineVolume}`);
        if (this.driver) {
            console.log(`Водій: ${this.driver.name}, Вік: ${this.driver.age}`);
        } else {
            console.log("Водія не вказано");
        }
    };

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`Максимальна швидкість підвищена до ${this.maxSpeed}`);
    };

    this.changeYear = function (newValue) {
        this.year = newValue;
        console.log(`Рік випуску змінено на ${this.year}`);
    };

    this.addDriver = function (driver) {
        this.driver = driver;
        console.log(`Водій ${driver.name} доданий до автомобіля`);
    };
}


let car1 = new Car("Civic", "Audi", 2020, 200, 1.8);


let driver = { name: "Lera", age: 22 };
car1.addDriver(driver);


car1.info();
car1.drive();
car1.increaseMaxSpeed(20);
car1.changeYear(2022);




// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car {
//     constructor(model, manufacturer, year, maxSpeed, engineVolume) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineVolume = engineVolume;
//         this.driver = null; // Початково водія не вказано
//     }
//
//     drive() {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     info() {
//         console.log(`Модель - ${this.model}`);
//         console.log(`Виробник - ${this.manufacturer}`);
//         console.log(`Рік випуску - ${this.year}`);
//         console.log(`Максимальна швидкість - ${this.maxSpeed}`);
//         console.log(`Об'єм двигуна - ${this.engineVolume}`);
//         if (this.driver) {
//             console.log(`Водій: ${this.driver.name}, Вік: ${this.driver.age}`);
//         } else {
//             console.log("Водія не вказано");
//         }
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed;
//         console.log(`Максимальна швидкість підвищена до ${this.maxSpeed}`);
//     }
//
//     changeYear(newValue) {
//         this.year = newValue;
//         console.log(`Рік випуску змінено на ${this.year}`);
//     }
//
//     addDriver(driver) {
//         this.driver = driver;
//         console.log(`Водій ${driver.name} доданий до автомобіля`);
//     }
// }
//
// let car1 = new Car("Civic", "Honda", 2020, 180, 1.8);
//
// // Встановлюємо водія
// let driver = { name: "Василь", age: 30 };
// car1.addDriver(driver);
//
//
// car1.info();
// car1.drive();
// car1.increaseMax

//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderellas = [
    new Cinderella("Girl1", 21, 35),
    new Cinderella("Girl2", 22, 36),
    new Cinderella("Girl3", 23, 37),
    new Cinderella("Girl4", 24, 38),
    new Cinderella("Girl5", 25, 39),
    new Cinderella("Girl6", 26, 40),

];
class Prince {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}

let prince = new Prince("Prince Charming", 29, 39);

let cinderellaAndPrince = cinderellas.find(function(cinderella) {
    return cinderella.footSize === prince.foundShoe;
});

console.log("Cinderella:", cinderellaAndPrince);