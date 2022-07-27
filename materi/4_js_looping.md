# Javascript Perulangan

[TOC]

## Perulangan While

Perulangan `while` memiliki sintaks berikut :

```js
while(kondisi){
    //kode
    //biasa disebut 'badan-perulangan'
}
```

Selama `kondisi` benar atau `true`, kode dari badan loop dieksekusi. 

Misalnya, perulangan di bawah ini menghasilkan `i` while `i < 3` :

```js
let i = 0;
while(i < 3){
    alert(i);
    i++;
}
```

Eksekusi tunggal dari badan perulangan disebut `iterasi`. Perulangan pada contoh di atas membuat tiga iterasi.

Jika `i++` hilang dari contoh di atas, perulangan akan berulang (secara teori) selamanya. Dalam praktiknya, browser menyediakan cara untuk menghentikan perulangan seperti itu dan dalam Javascript sisi server, kita dapat mematikan prosesnya.

Ekspresi atau variabel apa pun bisa menjadi kondisi perulangan, bukan hanya perbandingan : kondisi dievaluasi dan diubah menjadi boolean oleh `while`.

Misalnya, cara yang lebih singkat untuk menulis `while (i != 0)` adalah `while (i)` :

```js
let i = 3;
while(i){ // Ketika i menjadi 0 maka i menjadi falsy, karena 0 dalam boolean adalah bernilai false
    alert(i);
    i--;
}
```

## Perulangan Do...while

Pemerikasaan kondisi dapat  dipindahkan di bawah badan perulangan menggunakan sintaks do...while :

```js
do{
    //badan perulangan
    }
while(kondisi);
```

Perulangan pertama - tama akan mengeksekusi tubuh, kemudian memeriksa kondisinya dan ketika itu benar atau `true` maka jalankan lagi dan lagi.

Contohnya :

```js
let i = 0;
do{
    alert(i);
    i++;
}
while(i < 3);
```

Bentuk sintaksis ini hanya boleh digunakan ketika anda ingin badan perulangan dijalankan setidaknya sekali terlepas dari kondisinya yang benar atau `true`. Biasanya, bentuk lain lebih disukai: `while(){...}`

## Perulangan For

Perulangan for lebih kompleks, tetapi juga merupakan perulangan yang paling umum digunakan. Ini terlihat seperti ini :

```js
for(nilai-awal; kondisi-trminasi; increment/decrement){
    // badan perulangan
}
```

Mari kita pelajari arti dari bagian-bagian ini dengan contoh. Loop di bawah ini menjalankan `alert(i)` untuk `i` dari `0` hingga (tetapi tidak termasuk) `3` :

```js
for(let i = 0; i < 3; i++){ // menampilkan 0, lalu 1, lalu 2
    alert(i);
}
```







### <span style='color: blue;'>#</span>catatan

Pada contoh di atas,  anda dapat  menghindari penggunaan operator tanda tanya karena perbandingan itu sendiri mengembalikan `true`/`false` :

```js
// the same
let accessAllowed = age > 18;
```

## Task

**If (a string with zero)**

- Apakah `alert` akan ditampilkan ?

```js
if ("0") {
  alert( 'Hello' );
}
```

**nama dalam javascript**

- Dengan menggunakan konstruksi `if..else`, tulis kode yang menanyakan: 'Apa nama "resmi" JavaScript?'

  Jika pengunjung memasukkan “ECMAScript”, maka output “Benar!”, jika tidak – output: “Anda tidak tahu? Skrip ECMA!”

  ![image-20220726093351710](C:\Users\ficrihnp\Desktop\FE\pertemuan-2\materi\image\image-20220726093351710.png)

**Tunjukkan tandanya**

- Menggunakan `if...else`, tulis kode yang mendapat nomer melalui Prompt dan kemudian ditampilkan dalam alert :

  - `1,` jika nilainya lebih besar dari nol.
  - `-1, ` jika kurang dari nol,
  - `0`, jika sama dengan nol.

  Dalam tugas ini kami berasumsi input selalu berupa angka atau number.

**Menuliskan ulang dari `if` ke `?`**

- Menuliskan ulang dari kondisional `if` menggunakan kondisional operator `?` :

```js
let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
```

- Menuliskan ulang dari kondisional `if..else` menggunakan multiple ternary operator `?`. Untuk kemudahan membaca kode, direkomendasikan untuk meng-split kode menjadi multiple line.

```js
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
```

