// 1. Напишите функцию,
// которая принимает строку в качестве параметра и находит самое длинное слово в строке.

function findBiggestWord(str) {
    return str.split(' ').reduce((a, b) => (b.length > a.length) ? b : a);
  };
  
  console.log(findBiggestWord('my city of Nikolaev'));
// 2. написать функцию которая принимает число и возвращает перевернутое число

function reverseNumber(n) {
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverseNumber(2346789)));

// 3.написать функцию которая будет принимать стринг значение 
// и возвращать новое стринг значение только с уникальными символами

// function unique(str)
const names = ['Valerii', 'Tatjana', 'Marija', 'Nikolai','Andrei'];

const unique = (names) => {
  return names.filter((el, ind) => ind === names.indexOf(el));
};

console.log(unique(names));

// 4.написать функцию которая принимает 3 аргумента,
// победы, ничьи и поражения и возвращает количество очков команды 
// ( победа 3 очка, ничья 1 очко, поражение 0 ) 

function footballPoints(wins, draws, losses){
    
};


console.log(footballPoints(3, 1, 0)); 

// 5.написать функцию которая принимает массив и возвращает объект с такими свойствами :
// максимальное значение, 
// минимальное значение, 
// количество элементов,
// среднее арифметическое.

function statisctics(arr) {
    const maxValue = arr.reduce((max, current) => {
      return Math.max(max, current);
    });
    const minValue = arr.reduce((min, current) => {
      return Math.min(min, current);
    });
}


// 6.Написать функцию которая принимает массив работников компании 

const workers = [
   { name: "Jimm", salary: 40000, department: "IT" },
   { name: "Bob", salary: 60300, department: "HR" },
   { name: "Stacy", salary: 15000, department: "IT" },
   { name: "Tom", salary: 55200, department: "DEVOPS" },
   { name: "Kate", salary: 25000, department: "IT" },
   { name: "John", salary: 40000, department: "HR" },
   { name: "Billy", salary: 60000, department: "DEVOPS" },
];

console.log(salaryByDepartment)
// Функция должна вернуть объект 

    

// В этом объекте будет department с самой большой стредней зарплатой из всех departments. 



