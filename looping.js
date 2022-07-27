/**
 * TASK :
 * Last Loop Value
 * Apa nilai terakhir yang diperingatkan oleh kode ini ? mengapa ?
 */
// SAMPLE CODE
let i = 3; // Deklarasi, inisialisasi, assignment variabel i = 3

while (i) { // Masih bernilai true apabila i != 0 dan i < 3, akan bernilai falsy apabila i = 0. Dan perulangan akan berhenti.
    console.log(i); // Menampilkan nilai variabel i
    i--; // Decrement, mengurangi niali i setiap iterasi sebanyak 1 nilai
}
console.log('--------------');

/**
 * TASK :
 * Which values does the while loop show ?
 *      Untuk setiap iterasi perulangan, tuliskan nilai yang dihasilkannya lalu bandingkan dengan solusinya. Kedua loop memberi tahu nilai yang sama, atau tidak ?
 */
// SAMPLE CODE
//++i2
let i2 = 0; // Deklarasi, inisialisasi, assignment variabel i2 = 0

while (++i2 < 5) console.log(i2); // Perulangan while dengan i2 ditambahkan terlebih dahulu diawal jadi nilai i2 didalam kondisi while pada saat iterasi pertama adalah 1. 1 < 5, jadi akan mengulang sebanyak 4 kali.
console.log('--------------');
//SAMPLE CODE
//i3++
let i3 = 0; // Deklarasi, inisialisasi, assignment variabel i3 = 0
while (i3++ < 5) console.log(i3); // Perulangan while dengan i3 tidak akan ditambahkan terlebih dahulu diawal jadi nilai i3 didalam kondisi while pada saat iterasi pertama adalah 0. 0 < 5, jadi akan mengulang sebanyak 5 kali.

console.log('--------------');
/**
 * TASK :
 * Output Even Numbers in the loop
 * Gunakan perulangan for untuk menampilkan angka ganjil diantara 2 sampai dengan 10.
 */
let i4 = 2;
for (; i4 <= 10; i4++) {
    if (i4 % 2 != 0) {
        console.log(i4);
    }
}

console.log('--------------');
/**
 * TASK :
 * Tuliskan ulang kode dan gantungkan dari perulangan for ke perulangan while tanpa mengubah perilakunya(output harus tetap sama)
 */
// SAMPLE CODE FOR LOOP
// for (let i5 = 0; i5 < 3; i5++) {
//     console.log(`number ${i5}!`);
// }

// console.log('--------------');
let i5 = 0;
while (i5 < 3) {
    console.log(`number ${i5}!`);
    i5++;
};

console.log('--------------');
/**
 * TASK :
 * Tuliskan perulangan yang meminta angka lebih besar dari `100`.Jika pengunjung memasukkan angka lain - minta mereka untuk memasukkan lagi.Perulangan harus meminta nomor sampai pengunjung memasukkan angka yang lebih besar dari `100` atau membantalkan input / memasuki baris kosong.Di sini kita dapat mengasumsikan bahwa pengunjung hanya memasukan angka.Tidak perlu menerapkan validasi khusus untuk input non - numerik dalam tugas ini.
 */

// while (true) {
//     let value = +prompt('Masukan angka lebih besar dari 100!', '');

//     if (value > 100) {
//         alert(`Angka > 100 *emotjempol!`);
//         break;
//     };
// }

/**
 * TASK :
 *  - Bilangan bulat yang lebih besar dari 1 disebut bilangan prima jika tidak dapat dibagi tanpa sisa oleh apapun kecuali 1 dan dirinya sendiri
 *  - Dengan kata lain, n > 1 adalah bilangan prima jika tidak dapat dibagi rata oleh apapun kecuali 1 dan n.
 *  - Misalnya, 5 adalah bilangan prima, karena tidak dapat dibagi tanpa sisa dengan 2, 3, 4.
 *  - Tuliskan kode yang menghasilkan bilangan prima dalam interval dari 2 hingga n.
 *  - Untuk n = 10 hasilnya adalah 2, 3, 5, 7.
 *  - P.S.Kode harus berfungsi untuk n apa pun, tidak untuk nilai tetap apa pun.
 */

// let n = +prompt('Masukan rantang batas bilangan :', '');
// if (n > 1) {
//     let status = [];
//     let output = [];
//     for (let i = 1; i <= n; i++) {
//         for (let j = i; j > 1; j--) {
//             if (i % j == 0) {
//                 status.push(j);
//                 if (status.length > 1) break;
//             };
//         }
//         if (status.length == 1) {
//             output.push(i);
//         }
//         status = [];
//     }
//     alert(`${output}`);
// }

// program to print prime numbers between the two numbers

// take input from the user
// const lowerNumber = parseInt(prompt('Enter lower number: '));
// const higherNumber = parseInt(prompt('Enter higher number: '));

// console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// looping from lowerNumber to higherNumber
for (let i = 2; i <= 100; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}