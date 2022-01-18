const existedUserLogin = 'the_best_user';
const existedUserPassword = '12345678';
const userLogin = prompt('Введите логин');
const userPassword = prompt('Введите пароль');
userLogin.trim();
userPassword.trim();
if (userLogin === existedUserLogin) {
    alert(`Добро пожаловать, ${userLogin}`);
} else if (userPassword === existedUserPassword) {
    alert(`Добро пожаловать, ${userLogin}`);
} else {
    alert('Логин и/или пароль введены неверно');
}