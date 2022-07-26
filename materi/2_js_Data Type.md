# Javascript Tipe Data

[TOC]



## Tipe Data

Nilai dalam JavaScript selalu dari tipe tertentu. Contohnya, `string` atau `number`.

Terdapat 8 tipe data standar dalam javascript. Kita dapat memasukan tipe apapun ke dalam sebuah variabel. Misalnya, suatu variabel pada suatu saat dapat berupa string dan kemudian menyimpan angka :

```js
// Tidak akan error
let pesan = 'hello';
pesan = 1234;
alert(pesan)//output: 1234
```

Bahasa pemrograman yang memungkinkan hal-hal seperti itu, seperti javascript. disebut `dynamically typed`, yang berarti bahwa ada tipe data, tetapi variabel tidak terikat pada salah satu dari mereka.

## Number

```js
let n = 123;
n = 123.345;
```

Tipe `number` merepresentasikan dari `integer` dan `floating point number`.

Terdapat banyak `operator` untuk tipe data `number`, misalnya perkalian `*`, pembagian `/`, penambahan `+`, pengurangan `-`, dan lainnya.

Selain bilangan biasa, ada yang disebut `nilai numerik khusus` yang juga termasuk dalam tipe data ini : `infinity`, `-infinity` dan `NaN`.

- `Infinity` mewakili `infinity` matematis. Ini adalah nilai khusus yang lebih besar dari angka apapun. Kita bisa mendapatkanya sebagai hasil dari pembagian dengan nol :

```js
alert(1/0);//Infinity
```

Atau cukup referensi langsung :

```js
alert(infinity) // infinity, dalam console tidak bekerja
```

- `NaN` merepresentasikan kesalahan komputasi. Ini adalah hasil dari operasi matematika yang salah atau tidak terdefinisi, misalnya :

```js
alert('not a number'/1);// NaN
```

NaN sangat lekat. Setiap operasi matematika lebih lanjut pada `NaN` mengembailikan `NaN` :

```js
alert(NaN + 1);// NaN
alert(3 * NaN);// NaN
alert('NaN' + 1 / 0 + 2);// NaN
```

Jadi, jika ada `NaN` di suatu tempat dalam ekspresi matematika, itu menyebar ke seluruh hasil (hanya ada satu pengecualian untuk itu : `NaN ** 0` adalah `1`). Semua string bahkan numeric apabila diekponen kan 2 maka hasilnya akan true atau satu.

## BigInt

Didalam Javascript, tipe `number` tidak dapat dengan aman mewakili nilai bilangan bulat yang lebih besar dari 2<sup>53</sup>-1(yaitu : 900719254740991), atau kurang dari -(2<sup>53</sup>-1) untuk negatif.

Lebih tepatnya tipe `number` dapat menyimpan bilangan bulat yang lebih besar (hingga 1.7976931348623157 * 10<sup>10308</sup>), tetapi di luar kisaran bilangan bulat aman -+(2<sup>53</sup>-1) akan ada kesalahan presisi, karena tidak semua digit masuk ke dalam penyimpanan 64-bit tetap. Jadi nilai `perkiraan` dapat disimpan.

Misalnya, dua angka ini (tepat di atas kisaran aman) adalah sama :

```js
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992
```

Jadi bisa dikatakan semua bilangan bulat ganjil yang lebih besar dari (2<sup>53</sup> -1) tidak dapat disimpan sama sekali dalam tipe `number`. Untuk sebagian besar tujuan, rentang -+(2<sup>53</sup> -1) sudah cukup, tetapi terkadang kita membutuhkan seluruh rentang bilangan bulat yang sangat besar, misalnya untuk kriptografi atau timstamp presisi mikrodetik.

Jenis BigInt baru - baru ini ditambahkan ke bahasa untuk mewakili bilangan bulat dengan panjang sewenang-wenang.

Nilai BigInt dengan menambahkan n ke akhir bilangan bulat :

```js
// 'n' di akhir berarti BigInt
const bigInt = 1234567890123456789012345678901234567890n;
```

## String

Sebuah string dalam javascript harus diapit oleh tanda kutip (`""` atau `''`).

```js
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phase = `can embed another ${str}`;
```

Dalam javascript, ada 3 tipe tanda kutip.

1. Double Qoutes : `"Hello"`.
2. Single Quotes : `'Hello'`.
3. Backticks : `Hello`.

Double quotes dan single quotes adalah kutipan `sederhana`. Praktis tidak ada perbedaan di antara mereka dalam Javascript.

Backticks adalah kutipan `fungsionalitas yang diperluas`. Mereka memungkinkan kita untuk menyematkan variabel dan ekspresi ke dalam string dengan membungkusnya dalam `${...}` misalnya :

```js
let nama = "Jhon";
console.log(`Hello, ${nama}`);// Hello, Jhon!
console.log(`Hasilnya adalah ${1+2}`)// Hasilnya adalah 3
```

Ekspresi di dalam `${...}` dievaluasi dan hasilnya menjadi bagian dari string. Kita bisa memasukan apa saja di sana : variabel seperti `nama` atau ekspresi aritmatika seperti `1 + 2` atau sesuatu yang lebih kompleks.

Harap dicatat bahwa ini hanya dapat dilakukan di backticks. Kutipan lain tidak memiliki fungsi penyemetan ini!

## Boolean (tipe logika)

Tipe Boolean hanya memiliki 2 nilai : `true` dan `false`.

Tipe ini biasanya digunakan untuk menyimpan nilai ya/tidak: `true` berarti "ya, benar", dan `false` berarti "tidak, salah".

Contohnya :

```js
let nameFieldChecked = true;// yes, name field is checked
let ageFieldChecked = false;//no, age field is not checked
```

Nilai boolean juga datang sebagai hasil dari perbandingan :

```js
let isGreater = 4 > 1;
console.log(isGreater); // true
```

## null

Nilai `null` khusus bukan milik salah satu jenis yang dijelaskan di atas. Ini membentuk tipe terpisah sendiri yang hanya berisi nilai `null` :

```js
let age = null;
```

Dalam javascript `null` bukanlah "referensi ke objek yang tidak ada" atau "pointer null" seperti dalam beberapa bahasa lain.

Itu hanya nilai khusus yang mewakili "tidak ada", "kosong" atau "nilai tidak diketahui".

Kode di atas menyatakan bahwa `age` tidak diketahui.

## Undefined

Nilai khusus yang tidak ditentukan juga menonjol. Itu membuat tipenya sendiri, seperti null.

Arti dari undefined adalah "nilai tidak ditetapkan". Jika suatu variabel dideklarasikan, tetapi tidak ditetapkan, maka nilainya tidak terdefinisi :

```js
let age;

alert(age); // shows "undefined"
```

Secara teknis, dimungkinkan untuk secara eksplisit menetapkan variabel yang tidak ditentukan :

```js
let age = 100;

// change the value to undefined
age = undefined;

alert(age); // "undefined"
```

...Tapi kami tidak menyarankan melakukan itu. Biasanya, seseorang menggunakan `null` untuk menetapkan nilai `kosong` atau `tidak diketahui` ke variabel, sementara `undefined` dicadangkan sebagai nilai awal default untuk hal - hal yang tidak ditetapkan.

## Object dan Simbol

Jenis `objek` khusus.

Semua tipe lain disebut "primitif" karena nilainya hanya dapat berisi satu hal (baik itu string atau angka atau apa pun). Sebaliknya, objek digunakan untuk menyimpan kumpulan data dan entitas yang lebih kompleks.

Jenis `simbol` digunakan untuk membuat pengidentifikasi unik untuk objek. Kami harus menyebutkannya di sini demi kelengkapan, tetapi juga menunda detailnya sampai kami mengetahui objeknya.

## Typeof Operator

Operator `typeof` mengembalikan tipe argumen. Ini berguna ketika kita ingin memproses nilai dari tipe yang berbeda secara berbeda atau hanya ingin melakukan pemeriksaan secara cepat.

Panggilan ke `typeof x` mengembalikan string dengan nama tipe :

```js
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)
```


## Rangkuman

Ada 8 tipe data dasar dalam JavaScript.

- Tujuh tipe data primitif:
  - `number` untuk bilangan apapun: integer atau floating-point, integer dibatasi oleh ±(253-1).
  - `bigint` untuk bilangan bulat dengan panjang sembarang.
  - `string` untuk string. Sebuah string mungkin memiliki nol atau lebih karakter, tidak ada tipe karakter tunggal yang terpisah.
  - `boolean` untuk benar/salah.
  - `null` untuk nilai yang tidak diketahui – tipe mandiri yang memiliki nilai tunggal null.
  - `undefined` untuk nilai yang belum ditetapkan – tipe mandiri yang memiliki nilai tunggal yang tidak ditentukan.
  - `simbol` untuk pengidentifikasi unik.
- Dan satu tipe data non-primitif:
  - `objek` untuk struktur data yang lebih kompleks.

Operator `typeof` memungkinkan kita untuk melihat tipe mana yang disimpan dalam sebuah variabel.

- Biasanya digunakan sebagai `typeof x`, tetapi `typeof(x)` juga memungkinkan.
- Mengembalikan string dengan nama jenisnya, seperti `"string"`.
- Untuk `null` pengembalian  `"objek"` - ini adalah kesalahan dalam bahasa, itu sebenarnya bukan objek.

## Latihan

1. String Quotes
   1. Apa output dari skrip ini ?

```js
let name = "Ilya";

alert( `hello ${1}` ); // ?

alert( `hello ${"name"}` ); // ?

alert( `hello ${name}` ); // ?
```

