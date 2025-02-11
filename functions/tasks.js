// 1. Сделайте функцию, выводящую в консоль ваше имя
function printMyName() {
    console.log("Yulia");
  }
  
  // 2. Функция, которая параметром принимает число и проверяет, положительное это число или отрицательное
  function checkNumber(num) {
    if (num > 0) {
      console.log("+++");
    } else if (num < 0) {
      console.log("---");
    }
  }
  
  // 3. Функция, которая параметрами принимает 3 числа и выводит в консоль сумму этих чисел
  function sumThreeNumbers(num1, num2, num3) {
    console.log(num1 + num2 + num3);
  }
  
  // 4. Функция, которая параметром принимает число, а возвращает квадратный корень из этого числа
  function getSquareRoot(num) {
    return Math.sqrt(num);
  }
  
  // 5. Функция, которая параметром будет принимать массив с числами, и проверять, что все элементы в этом массиве являются четными числами
  function areAllEven(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        return false; // Найдено нечетное число
      }
    }
    return true; // Все числа четные
  }
  
  // 6. Функция, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10. 
  function divideUntilLessThanTen(num) {
    let iterations = 0;
    while (num >= 10) {
      num /= 2;
      iterations++;
    }
    return iterations;
  }

  printMyName();
  
  checkNumber(5);
  checkNumber(-3);
  
  sumThreeNumbers(2, 4, 6);
  
  const root3 = getSquareRoot(3);
  const root4 = getSquareRoot(4);
  console.log(root3 + root4);
  
  console.log(areAllEven([2, 4, 6]));
  console.log(areAllEven([2, 3, 6]));
  
  console.log(divideUntilLessThanTen(100));
  
  