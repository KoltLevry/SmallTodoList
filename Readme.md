Ready to clean and use - шаблон Vite + React + Ts

*  Array & splice
```
const fruits = ['app', 'sw', "red"];
    console.log(fruits);
    const findRight = fruits.splice(1,1);
    console.log(findRight);
    console.log(fruits);
```

1. Ігнорування значення в методі map

```
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((_, i) => i * 2);
console.log(doubled); // [0, 2, 4, 6, 8]
```

2. Ігнорування значення в методі forEach
javascript


const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach((_, i) => {
  console.log(`Fruit index: ${i}`);
});
// Виведе:
// Fruit index: 0
// Fruit index: 1
// Fruit index: 2

3. Ігнорування значення в деструктуризації

```const person = { name: 'Alice', age: 30, city: 'Wonderland' };
const { name, ..._ } = person; // Ігноруємо інші властивості
console.log(name); // 'Alice'```
У цьому прикладі ми деструктуризуємо об'єкт, і _ використовується для позначення того, що ми ігноруємо інші властивості.

4. Ігнорування параметра в функції

```function logMessage(_, message) {
  console.log(message);
}
```
`logMessage('ignored', 'Hello, World!'); // 'Hello, World!'`
Тут _ використовується для позначення, що перший параметр функції не буде використовуватися, а другий параметр message буде виведено в консоль.