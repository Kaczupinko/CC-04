//Day 04
/*
table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
function sumofarray(table) {
    var sum = 0;
    for (var i = 0; i < table.length; i++) {
        sum += table[i];
    }
    return sum;
}

console.log(sumofarray(table));



function firstLetterMakeWord(table1) {
    var word = '';
    for (var i = 0; i < table1.length; i++) {
        word += table1[i][0];
    }
    return word;
}
table1 = ['banana', 'apple', 'orange', 'strawberry', 'kiwi', 'pear', 'peach'];
console.log(firstLetterMakeWord(table1));

const obiekt = { name: 'Jadwiga', age: 25, email: 'jadwiga@gmail.com' };

function getUserInfo(obiekt) {
    return obiekt.name + ' (' + obiekt.age + ') - ' + obiekt.email
}
console.log(getUserInfo(obiekt));

const author = { title: 'Harry Potter', author: 'J.K. Rowling', year: 1997 };

function getBookInfor(author) {
    return author.title + ' - ' + author.author + ' (' + author.year + ').';
}
console.log(getBookInfor(author));

table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

function moreThan5(table) {
    let more = [];
    for (let i = 0; i < table.length; i++) {
        if (table[i] > 5) {
            more.push(table[i]);
        }
    }
    return more;
}
console.log(moreThan5(table));

order = [{ product: 'book', quantity: 5, price: 13.5 }]

function getTotalOrderValue(order) {
    return order[0].quantity * order[0].price;
}
console.log(getTotalOrderValue(order));

let courseParticipants = [
    { name: 'Jan Kowalski', grades: [4, 5, 3, 2, 5] },
    { name: 'Maria Nowak', grades: [3, 3, 4, 5, 4] },
    { name: 'Adam Wiśniewski', grades: [2, 2, 2, 3, 2] },
];

function getAverageGrade(courseParticipants) {
    let sum = 0;
    let participantCount = courseParticipants.length;
    let participantGradeCount = 0;

    for (let i = 0; i < participantCount; i++) {
        let grades = courseParticipants[i].grades;
        let gradeCount = grades.length;
        participantGradeCount += gradeCount;

        for (let j = 0; j < gradeCount; j++) {
            sum += grades[j];
        }
    }

    return sum / participantGradeCount;
}

console.log(getAverageGrade(courseParticipants));
Try to solve errors in the code below.
*/
function generateSquare(n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < n; i++) {
            row += result[j] + ' ';
        }
        result.push(row);
    }
    return result.join('\n');
}

console.log(generateSquare(3));

function generateSquare(n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < n; j++) { // zmienione i na j w drugiej pętli
            row += i * n + j + 1; // dodane + 1, aby liczby były od 1 do n^2
            if (j < n - 1) row += ' ';
        }
        result.push(row);
    }
    return result.join('\n');
}

console.log(generateSquare(3));