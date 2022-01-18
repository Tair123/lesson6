let i = 0;
while (i <3) {
    i += 1;
    let newStudent = prompt('Введите имя нового студента');
    newStudent = newStudent.trim();
    if (newStudent) {
        alert(`Добро пожаловать, ${newStudent}`);
    }
}

let i = 0;
do {
    i += 1;
} while (i < 3) {
    let newStudent = prompt('Введите имя нового студента');
    newStudent = newStudent.trim();
    if (newStudent) {
        alert(`Добро пожаловать, ${newStudent}`);
    }
}