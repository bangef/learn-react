/**
 * TASK :
 * 1. If(a string with zero)
 *      Apakah alert akan ditampilkan ?
 */
// Jawaban : Karena ini adalah string dan stringnya mempunyai nilai 0. Maka ini masuk kedalam nilai thruthy. Jadi 'Hello', akan ditampilkan di console.
if ('0') {
    console.log('Hello');
}

/**
 * TASK :
 * 2. nama dalam javascript
 *      Dengan menggunakan konstruksi if..else, tulis kode yang menanyakan: 'Apa nama "resmi" JavaScript?' Jika pengunjung memasukkan“ ECMAScript”, maka output“ Benar!”, jika tidak– output: “Anda tidak tahu ? Skrip ECMA!”
 */

const input = 'ECMAScript';

if (input == 'ECMAScript') {
    console.log('Benar!')
} else {
    console.log('Apakah anda tidak tahu ? jawabannya ECMAScript loh')
}

/**
 * TASK :
 * 3. Menggunakan if...else, tulis kode yang mendapat nomer melalui Prompt dan kemudian ditampilkan dalam alert:
 *      1, jika nilainya lebih besar dari nol.
 *      -1,jika kurang dari nol.
 *      0, jika sama dengan nol.
 */
const inputNumber = 12;

if (inputNumber > 0) {
    console.log('Nilainya lebih besar dari nol!');
} else if (inputNumber < 0) {
    console.log('Nilainya lebih kecil dari nol!');
} else {
    console.log('Nilainya sama dengan nol!');
}

/**
 * TASK :
 * 4. Menuliskan ulang dari if ke ?
 *      Menuliskan ulang dari kondisional if menggunakan kondisional operator ? :
 */

//SAMPLE CODE
let result, a, b;
a = 10;
b = 12;

if (a + b < 4) {
    result = 'Below';
} else {
    result = 'Over';
}

// JAWABAN
let hasil = (a + b < 4) ? 'Kurang' : 'Lebih';
console.log(hasil);

/**
 * TASK :
 *      Menuliskan ulang dari kondisional if..else menggunakan multiple ternary operator ? Untuk kemudahan membaca kode, direkomendasikan untuk meng - split kode menjadi multiple line.
 */

// SAMPLE
/*
let message;

if (login == 'Employee') {
    message = 'Hello';
} else if (login == 'Director') {
    message = 'Greetings';
} else if (login == '') {
    message = 'No login';
} else {
    message = '';
}
*/

const login = 'mhhj';
const message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
    (login == '') ? 'No login' :
    '';
console.log(message);