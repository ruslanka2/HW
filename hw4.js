
// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число
for (let i = 0; i < 11; i++) {
    if (i ===0){
        console.log(`${i} - это ноль`);
        i++;
    }    
    (i%2 == 0) ? console.log(`${i} - четное число `) : console.log(`${i} - не четное число `);
}


// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]
function filteren(value) {
    return value !==4 && value!==5;
  }
const filtered = [1, 2, 3, 4, 5, 6, 7].filter(filteren);
  console.log(filtered);

//   Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3


const element= [];
    for (let i = 0; i < 5; i++) {
        element[i]=ь=Math.floor(Math.random()* (9));
        // console.log(element[i]);
    }
    

console.log(element);
function sum(){
    let result=0;
    for (let i = 0; i < element.length; i++) {
        result=result+element[i];
        
    }
    return result;
    
}
function min(){
    let min = element[0];
    for (let i = 0; i < element.length; i++) {
        if(min>element[i]){
            min = element[i];
           }      
    }
    return min;   
   }

function thri(){
    if(element.includes(3)===true){
        console.log('Число 3 найдено');
    }else console.log('Число 3 не найдено');    
   }
console.log(sum(element));
console.log(min(element));
console.log(thri(element));

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
const myarr=[];
for (let i = 0; i < 20; i++) {
   myarr[i]='*';
   console.log(myarr.toString(myarr));
    
}