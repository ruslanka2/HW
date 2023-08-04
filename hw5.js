// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

// const arr = [4, 5, 7, 9, 2];
// console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter() {
    let count = 0;
    return {
        increment() { return count++ },

        decrement() { return --count },
        setcount() { return count },
    }
}
const counter = createCounter();
counter.increment();
counter.decrement();
counter.decrement();
counter.decrement();
console.log(counter.setcount());

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

function findElementByClass(item,className){
    if (item.classList && item.classList.contains(className)){
        return item;
    }
    for (let i = 0; i < item.children.length; i++) {
        const element = findElementByClass(item[i], className);
        if (element){
            return element;
        }
        
        
    }
    return null;
}
const rootElement = document.getElementsByTagName('item');
const element = findElementByClass(rootElement,'item_title');
console.log(element);



