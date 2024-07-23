// Создайте класс Person, имеющий свойства name и age.
// Добавьте метод sayHello(), который выводит
// приветствие с именем персоны и ее возрастом.
class Pers {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    sayHello(){
        console.log(`My name is ${rhis.name} and ${this.age} year`)
    }
}
const per = new Pers('Dima', 35);

// Создайте класс Rectangle, который принимает в
// конструкторе два параметра: width и height. Добавьте
// метод getArea(), который возвращает площадь
// прямоугольника.

class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }
    getArea() {
        return this.width * this.height;
    }
}
const rectangle = new Rectangle(10, 5);
const area = rectangle.getArea();
console.log('Площадь прямоугольника:', area);

// .Реализуйте класс Circle, который принимает в
// конструкторе радиус. Добавьте методы getArea() для
// вычисления площади и getCircumference() для вычисления
// длины окружности.

class Circle {
    constructor(radius) {
        this.radius = radius
    }
    getA() {
        return Math.PI * this.radius * this.radius;
    }
    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

const circle = new Circle(4);
const a = circle.getA();
const circumference = circle.getCircumference();
console.log('Площадь круга:', a);
console.log('Длина окружности:', circumference);

// Создайте класс Animal, у которого есть свойство
// name и метод makeSound(), который выводит звук,
// издаваемый этим животным.
class Animal {
   constructor(name) {
    this.name = name;
   }
   makeSounds() {
    console.log(`${this.name} makes a sound`);
   } 
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
makeSounds(){
    super.makeSounds();
    console.log(`${this.name} barks: Woof!!!`)
}
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    makeSounds(){
        super.makeSounds();
        console.log(`${this.name} sounds like : meaw meaw`)
    }
}
const dog = new Dog('Sharick');
const cat = new Cat('Barsick');
cat.makeSounds();
dog.makeSounds();

// Напишите класс Car, у которого есть свойства make,
// model и year. Добавьте метод details(), который выводит
// полную информацию о машине.
class Car{
    constructor(make,model,year) {
        this.make = make
        this.model = model
        this.year = year
    }
    details() {
        console.log(`Car: ${this.make} ${this.model} (${this.year})`);
    }
}
const car1 = new Car('Toyota', 'Camry', 2020);
const car2 = new Car('Honda', 'Civic', 2018);
car1.details();
car2.details();

// Создайте класс BankAccount, у которого есть
// свойства balance и owner. Реализуйте методы
// deposit(amount) и withdraw(amount), которые изменяют
// баланс на указанную сумму.
class BankAccount{
    constructor(balanse, owner){
        this.balanse = balanse
        this.owner = owner
    }
    deposit(amount){
        this.balanse += amount;
        console.log(`${this.owner}, ваш депозит на ${amount} был заполнен.`);
    }
    withdraw(amount){
        this.balanse -= amount;
        console.log(`${this.owner}, ваш вывод на ${amount} был успешен.`);
    }
}
const account = new BankAccount(2000, 'Malik');
account.deposit(800);
account.deposit(400);

// Напишите класс Book, содержащий свойства title,
// author и year. Добавьте метод getSummary(), который
// выводит краткую информацию о книге.
class Book {
    constructor(title, author, year) {
        this.title = title
        this.author = author
        this.year = year  
    }
    getSummary(){
        console.log(`Information about book: ${this.title} ${this.author} ${this.year}`);
    }
}
const book = new Book('Как найти друзей', 'Дейл Карнеги', 1999);
book.getSummary();

// Реализуйте класс Calculator, который имеет методы
// add(), subtract(), multiply() и divide(). Каждый метод должен
// принимать два аргумента и выполнять
// соответствующую операцию.
class Calculator{
    add(num1, num2) {
        return num1 + num2;
    }
    subtract(num1, num2) {
        return num1 - num2;
    }
    multiply(num1, num2) {
        return num1 * num2;
    }
    divide(num1, num2) {
        return num1 / num2;
    }
}
const calculator = new Calculator();
const sum = calculator.add(4,2);
console.log(`4 + 2 = ${sum}`);
const difference = calculator.subtract(8,4);
console.log(`8 - 4 = ${difference}`);
const product = calculator.multiply(2,2);
console.log(`2 * 2 = ${product}`);
const quotient = calculator.divide(20,2);
console.log(`20 / 2 = ${quotient}`);

// Создайте класс Email, который принимает в
// конструкторе адрес электронной почты. Добавьте
// метод validate(), который проверяет, является ли адрес
// валидным.
class Email {
    constructor(address) {
      this.address = address;
  
      if (typeof address !== 'string') {
        throw new Error('Invalid input. Email address must be a string.');
      } else if (address.length > 20) {
        throw new Error('Invalid input. Email address length can must be less than 20.');
      } else if (address.length < 0 && address.length < 4) {
        throw new Error('Invalid input. Email address length can must be more than 4.');
      }
    }
  
    validate() {
      console.log(`${this.address} является валидным адресом электронной почты.`);
    }
  }
  
  const email = new Email('user@example.com');
  email.validate();

// Напишите класс Timer, который имеет методы start()
// и stop(). Метод start() должен начинать отсчет времени,
// а метод stop() - останавливать его и выводить
// количество прошедших секунд.
class Timer {
    constructor(){
        this.startTime = null;
        this.elapsedTime = 0;
        this.intervalId = null;
    }

    start() {
        if (this.startTime === null) {
            this.startTime = Date.now();
            this.intervalId = setInterval(() => {
                this.elapsedTime = Math.floor((Date.now() - this.startTime) / 1000);
              }, 1000);
              console.log('Таймер запущен.')
    } else {
        console.error('Ефймер уже запущен')
    }
}

stop() {
    if(this.startTime !== null) {
        clearInterval(this.intervalId);
        this.intervalId = null;
        console.log(`Таймер остановлен. Прошло ${this.elapsedTime} секунд.`);
        this.startTime = null;
        this.elapsedTime = 0;
    } else {
        console.error('Ефймер не запущен.')
    }
}
}
const timer = new Timer();
timer.start();
setTimeout(() => {
    timer.stop();
}, 5000);

// Реализуйте класс Worker (Работник), который будет
// иметь следующие свойства: name (имя), surname
// (фамилия), rate (ставка за день работы), days
// (количество отработанных дней). Также класс
// должен иметь метод getSalary(), который будет
// выводить зарплату работника. Зарплата - это
// произведение (умножение) ставки rate на
// количество отработанных дней days.
class Worker {
    constructor(name, surname, rate, days){
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        const salary = this.rate * this.days;
        console.log(`Зарплата работника ${this.name} ${this.surname}: ${salary} рублей.`);
        return salary;
    }
}
const worker1 = new Worker('Max','Ivanov', 1200, 22);
const worker2 =new Worker('Kalima','Turarova',2000,30);

const worker1Salary = worker1.getSalary(); // 33000
const worker2Salary = worker2.getSalary(); // 60000

console.log(`Общий фонд оплаты труда: ${worker1Salary + worker2Salary} рублей.`);

// Модифицируйте класс Worker из предыдущей задачи
// следующим образом: для свойства rate и для
// свойства days сделайте еще и методы-сеттеры.
class Work{
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate; 
        this.days = days;
    }
    setRate(newRate) {
        if (typeof newRate !== 'number' || newRate <= 0) {
            throw new Error('Invalid input. Rate must be a positive number.');
          }
          this.rate = newRate;
    }
    setDays(newDays){
        if (typeof newDays !== 'number' || newDays <= 0) {
            throw new Error('Invalid input. Days must be a positive number.');
          }
          this.days = newDays;
    }
    getSalary2(){
    const salary = this.rate * this.days;
    console.log(`Зарплата работника ${this.name} ${this.surname}: ${salary} рублей.`);
    return salary;
}
}
const work = new Work('Katya',1300,12);
work.setRate(2000);
work.setDays(30);
const work1Salary = work.getSalary2();


// Реализуйте класс MyString, который будет иметь
// следующие методы: метод reverse(), который
// параметром принимает строку, а возвращает ее в
// перевернутом виде, метод ucFirst(), который
// параметром принимает строку, а возвращает эту
// же строку, сделав ее первую букву заглавной и
// метод ucWords, который принимает строку и
// делает заглавной первую букву каждого слова этой
// строки.
class MyString {
    constructor() {}
  
    // Перевернуть строку
    reverse(str) {
      let reversedStr = '';
      for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
      }
      return reversedStr;
    }
  
    // Сделать первую букву заглавной
    ucFirst(str) {
      return str[0].toUpperCase() + str.slice(1);
    }
  
    // Сделать первую букву каждого слова заглавной
    ucWords(str) {
      const words = str.split(' ');
      const ucWordsArr = [];
      for (let word of words) {
        ucWordsArr.push(this.ucFirst(word));
      }
      return ucWordsArr.join(' ');
    }
  }

const myString = new MyString();

const reversedStr = myString.reverse('Привет мир!');
console.log(reversedStr); // !рив мТеПривет

const ucFirstStr = myString.ucFirst('привет мир');
console.log(ucFirstStr); // Привет мир

const ucWordsStr = myString.ucWords('каждый день становится новым');
console.log(ucWordsStr); // Каждый День Становится Новым


// Реализуйте класс Student (Студент), который будет
// наследовать от класса User. Этот класс должен
// иметь следующие свойства: name (имя, наследуется
// от User), surname (фамилия, наследуется от User),
// year (год поступления в вуз). Класс должен иметь
//метод getFullName() (наследуется от User), с
//помощью которого можно вывести одновременно
// имя и фамилию студента. Также класс должен иметь
// метод getCourse(), который будет выводить
// текущий курс студента (от 1 до 5). Курс
// вычисляется так: нужно от текущего года отнять
// год поступления в вуз. Текущий год получите
// самостоятельно.
class User {
    constructor(name, surname) {
        this.name = name;
        this.surnname = surname;
    }
    getFullName() {
        return `${this.name} ${this.surname}`;
    }
}
class Student extends User {
      constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
      }
getCourse(){
    const currentYear = new Date().getFullYear();
    return currentYear = this.year;
}
}
const student = new Student('Иван', 'Иванов', 2020);

console.log(student.getFullName()); 
console.log(student.getCourse()); 

//  Реализуйте класс Rectangle. У него должны быть
// следующие свойства: ширина width, высота height.
// Также у него должны быть следующие методы:
// получить ширину getWidth, установить ширину
// setWidth, получить высоту getHeight, установить
// высоту setHeight.

class R {
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    // получить ширину
    getWidth(){
        return this.width;
    }
    // установить ширну
    setWidth(newWidth){
        this.width = newWidth;
    }
    getHeight(){
        return this.height;
    }
    setHeight(newHeight){
        this.height = newHeight;
    }
}
const r = new R(4,4);
console.log(r.getWidth());
console.log(r.getHeight());

r.setWidth(10);
console.log(r.getHeight());

r.setHeight(20); // изменение высоты
console.log(r.getHeight()); // вывод обновленной высоты