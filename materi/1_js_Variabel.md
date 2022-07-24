[TOC]

# Javascript Variabel

Sebagian besar waktu, aplikasi JavaScript perlu bekerja dengan informasi. Berikut adalah dua contoh :

1. Toko Online - Informasinya mungkin termasuk barang yang dijual dan keranjang belanja.
2. Aplikasi Obrolan - Informasinya mungkin termasuk pengguna, pesan dan banyak lagi.

Variabel digunakan untuk menyimpan informasi ini.

## Variabel

Variabel adalah `penyimpanan bernama` untuk data. Kita dapat menggunakan variabel untuk menyimpan barang, pengunjung dan data lainnya.

Untuk membuat variabel dalam JavaScript, gunakan kata kunci `let`.

Pernyataan di bawah ini membuat (dengan kata lain : mendeklarasikan) variabel dengan nama `pesan` :

```js
let pesan;
```

Sekarang, ita dapat menambahkan sebuah data kedalamnya dengan menggunakan operator penugasan (assignment operator) `=` :

```js
let pesan;
pesan = 'Hello'; // Menyimpan string 'Hello ' kedalam variabel bernama pesan.
```

Sekarang string sudah tersimoan kedalam area memori yang terasosiasi dengan variabel. Kita dapat mengaksesnya menggunakan nama variabelnya :

```js
let pesan;
pesan = 'Hello';
alert(pesan);// Menampilkan konten dari variabel
```

Agar lebih ringnkas, kita dapat menggabungkan deklarasi variabel dan penugasan menjadi satu baris :

```js
let pesan = 'Hello';// Mendefinisikan variabel dan mengisi valuenya
alert(pesan);// Output alert : Hello
```

Kita juga dapat mendeklarasikan banyak variabel dalam 1 baris saja :

```js
let pengguna = 'Jhon', umur = 25, pesan = 'Hello';
```

## Analogi

Kita dapat dengan mudah  memahami konsep `variabel` jika kita membayangkannya sebagai `kotak` untuk data, dengan sticker bernama unik di atasnya.

Misalnya, variabel pesan dapat dibayangkan sebagai kotak berlabel `pesan` dengan nilai `Halo!` di dalamnya :

Kita dapat mengambil nilai di dalam kotak, Kita juga dapat mengubahnya beberapa kali dan kapan saja :

```js
let pesan = 'Hallo!';
pesan = 'World';// Nilai dirubah
alert(pesan);
```

Ketiaka nilainya berubah, nilai data lama dihapus dari variabel. Kita juga dapat mendeklarasikan 2 variabel dan menyalin data dari 1 ke 1nya lagi.

```js
let hello = 'Hello world!';

// Menyalin 'Hello world!' dari variabel hello ke variabel pesan
let pesan = hello;

//Sekarang 2 varibel memiliki data yang sama
alert(hello);
alert(pesan);
```

### <strong><span style="color:red;">#</span></strong> Mendeklarasikan dua kali memicu kesalahan

Variabel seharusnya di deklarasikan hanya sekali. Perulangan dekalarasi dalam variabel yang sama akan menampilkan sebuah error.

```js
let pesan = 'this';

//Perulangan 'let' mengarah ke kesalahan
let pesan = 'That';// SyntaxError: 'message' has already been declared
```

Jadi, kita seharusnya mendeklarasikan varibel sekali dan kemudian merujuknya dengan `let`.

### <strong><span style="color:blue;">#</span></strong> Functional Languages

Sangat menarik untuk dicatat bahwa ada bahasa pemrograman fungsional, seperti `Scala` dan `Erlang` yang melarang perubahan nilai variabel.

Dalam bahasa seperti itu, begitu disimpan `di dalam kotak`, nilainya akan tetap ada selamanya. Jika kita perlu menyimpan sesuatu yang lain, bahasa memaksa kita untuk membuat kotak baru (mendeklarasikan variabel baru). Kami tidak dapat menggunakan kembali yang lama.

Meskipun mungkin tampak sedikit aneh pada pandangan pertama, bahasa-bahasa ini cukup mampu berkembang secara serius. Lebih dari itu, ada area seperti komputasi pararel di mana keterbatasan ini memberikan manfaat tertentu. Mempelajari bahasa seperti itu (bahkan jika Anda tidak berencana untuk menggunakanya segera) disarankan untuk memperluas pikiran.

## Penamaan Variabel

Terdapat dua batasan dalam penamaan variabel javascript :

1. Penamaan hanya dapat mengandung huruf, angka atau simbol `$` dan `_`.
2. Penamaan karakter pertama tidak boleh mengandung angka.

Contoh penamaan yang benar :

```js
let userName;
let test1234;
```

Ketika penamaan variabel menganfung banyak kata, `camelCase` seringkali digunakan. Yaitu: kata pergi satu demi satu, setiap kata kecuali yang pertama dimulai dengan huruf kapita: `myVeryLongName`.

Apa yang menarik - tanda dolar `$` dan garis bawah `_`  juga dapat digunakan dalam nama. Mereka adalah simbol biasa, seperti huruf, tanpa arti khusus. 

Contoh penamaan yang benar :

```js
let $ = 1;
let _ = 2;
alert($ + _);
```



```javascript
for (variable of iterable) {
  // *code block to be executed*
 }
```



## Javascript – Iterasi

Iterasi mudah dimengerti, ini hanya mengulang urutan elemen. Berikut adalah beberapa contoh mudah :

- Iterasi pada sebuah `Sting`.
- Iterasi pada `Array`.



## Javascript – Perulangan pada sebuah String

Untuk membuat perulangan pada `string`, dapat menggunakan perulangan `for…of` untuk mengulangi elemen `string` :

Sintaksis :

```javascript
//Create a String
const name = "W3Schools";
 

//List all elements
let text = ‘’;
 for (const x of name) {
  text += `${x} <br/>`
 }

document.getElementById(‘demo’).innerHTML = text;

// Output :
 W
 3
 S
 c
 h
 o
 o
 l
 s


```



## Javascript – Perulangan Array

Anda dapat menggunakan perulangan  `for...of` untuk mengulangi elemen `Array` :

Sintaksis :

```javascript
// Create a array
const letters = ["a", "b", "c"];

// List all elements
let text = '';
for (const x of latters){
    text += `${x} <br/>`
};

document.getElementById('demo').innerHTML = text;

// Output :
 a
 b
 c
```


## Catatan :

`for..of` tidak dapat mengulang `object`.

## Latihan :

1. Buatlah perulangan `for...of` dengan memanfaatkan iterable :
   1. Nama anda. (string)
   2. Biodata anda. (object)
   3. Resolusi anda. (array)