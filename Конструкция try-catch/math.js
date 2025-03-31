function safeSqrt(number) {
    if (number < 0) {
      throw new Error("Нельзя извлечь корень из отрицательного числа");
}
    
    return Math.sqrt(number);
}

function testSafeSqrt() {
const numbers = [4, 9, -16, 25, -1];
    
    numbers.forEach(num => {
    try {
        const result = safeSqrt(num);
        console.log(`Корень из ${num} равен ${result}`);
    } catch (error) {
        console.error(`Ошибка для числа ${num}: ${error.message}`);
    }
});
}
testSafeSqrt();