function causeLocalStorageOverflow() {
    try {
        let data = '';
        for (let i = 0; i < 1000000; i++) {
        data += 'Это строка, которая будет повторяться много раз, чтобы заполнить localStorage. ';
    } 
        localStorage.setItem('overflow', data);
    }
    catch (error) {
        console.error('Произошла ошибка:');
        console.log('Имя ошибки:', error.name);
        console.log('Текст ошибки:', error.message);
        console.log('Полный объект ошибки:', error);
    }
  }
causeLocalStorageOverflow();