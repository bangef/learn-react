# Javascript Kondisional If...else

[TOC]

## Kondisional Cabang if, '?'

Terkadang, kita perlu untuk menunjukkan aksi yang berbeda dalam kondisi yang berbeda pula. Untuk melakukannya, kita dapat menggunakan statement `if` dan kondisional operator `?` atau `ternary`, itu juga disebut operator `tanda tanya`.

## statement If

statement `if(...)` mengevaluasi kondisi dalam tanda kurung , dan jika hasilnya `true`, mengeksekusi blok kode. Contohnya :

```js
let year = prompt('Pada tahun berapa spesifikasi ECMAScript-2015 diterbitkan?', '');

if (year == 2015) alert( 'Anda benar!' );
//Jika 2015, maka akan menampilkan alert 'Anda benar!'. Jika selain dari 2015, maka tidak akan menghasilkan alert;
```

Pada contoh di atas, kondisinya adalah pemeriksaan kesetaraan sederhana ( `tahun == 2015` ), tetapi bisa jauh lebih kompleks. Jika kita ingin mengeksekusi lebih dari satu pernyataan, kita harus membungkus blok kode kita di dalam kurung kurawal :

```js
if (year == 2015) {
  alert( "Itu benar!" );
  alert( "Kamu sangat pintar!" );
}
```

Kami menyarankan untuk membungkus blok kode anda dengan kurung kurawal `{}` setiap kali anda menggunakan pernyataan `if`, meskipun hanya ada satu pernyataan yang harus dieksekusi. Melakukannya memudahkan dalam membaca kodenya.

## Konversi Boolean

Pernyataan `if(...)` mengevaluasi ekspresi dalam tanda kurung dan mengubah hasilnya menjadi boolean.

Mari kita ingat aturan konversi dari bab Jenis Konversi :

- Angka `0`, string kosong `' '`, `null`, `undefined`, dan `NaN` semuanya menjadi salah atau `false`. Karena itu mereka disebut nilai - nilai `falsy`.
- Nilai - nilai lain menjadi benar atau true, sehingga disebut `truthy`.

Jadi, kode dalam kondisi ini tidak akan pernah dieksekusi :

```js
if (0) { // 0 is falsy
  ...
}
```

…dan di dalam kondisi ini – akan selalu :

```js
if (1) { // 1 is truthy
  ...
}
```

Kami juga dapat meneruskan nilai boolean yang telah dievaluasi sebelumnya ke `if`, seperti ini :

```js
let cond = (year == 2015); // equality evaluates to true or false

if (cond) {
  ...
}
```

## Klausa `Else`

Pernyataan `if` mungkin berisi opsional blok `else`. Ini dijalankan ketika kondisinya salah. Contohnya :

```js
let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // any value except 2015
}
```

## Beberapa Kondisi : `else if`

Terkadang, kami ingin menguji beberapa varian kondisi. Klausa `else if` memungkinkan kita melakukan itu. Contohnya :

```js
let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}
```

Pada kode di atas, javascript pertama kali memeriksa `year < 2015`. Jika salah maka akan menuju ke kondisi berikutnya `year > 2015`. Jika salah juga, ini menunjukkan `alert()` terakhir.

Bisa ada lebih banyak blok `else if`. `else` terakhir adalah opsional.

## Kondisional Operator `?`

Terkadang, kita perlu menetapkan variabel tegantung pada suatu kondisi.

Contohnya :

```js
let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);
```

Operator yang disebut 'kondisional' atau 'tanda tanya' memungkinkan kita melakukannya dengan cara yang lebih singkat dan sederhana.

Operator dilambangkan dengan tanda tanya ?. Kadang disebut `ternary`, karena operator memiliki tiga operand. Ini sebenarnya satu - satunya operator di Javascript yang memiliki banyak operand. 

Syntaxnya adalah :

```js
let result = condition ? value1 : value2;
```

Kondisi dievaluasi : jika benar maka `value1` dikembalikan, jika tidak `value2` dikembalikan.

Sebagai contohnya :

```js
let accessAllowed = (age > 18) ? true : false;
```

Secara teknis, kita dapat menghilangkan tanda kurung di sekitar `age > 18`. Operator tanda tanya memiliki prioritas rendah, sehingga dijalankan setelah perbandingan `>`.

Contoh ini akan melakukan hal yang sama seperti yang sebelumnya :

```js
// Operator perbandingan 'age > 18' tetap dijalankan terlebih dahulu
// (tidak perlu dimasukkan ke dalam tanda kurung) biarkan accessAllowed = age > 18 ? benar salah; 
```

Tetapi tanda kurung membuat kode lebih mudah dibaca, jadi kami sarankan untuk menggunakannya.

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

