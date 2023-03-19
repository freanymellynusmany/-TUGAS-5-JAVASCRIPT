let angka1 = document.getElementById("angka1");
let angka2 = document.getElementById("angka2");
let hasil = document.getElementById("hasil");

let tambah = document.getElementById("tambah");
let kurang = document.getElementById("kurang");
let kali = document.getElementById("kali");
let bagi = document.getElementById("bagi");
let pangkat = document.getElementById("pangkat");
let akar = document.getElementById("akar");

tambah.addEventListener("click", function() {
  if (isNaN(angka1.value) || isNaN(angka2.value)) {
    alert("Maaf yang Anda Input bukan Angka");
  } else {
    hasil.value = parseFloat(angka1.value) + parseFloat(angka2.value);
  }
});

kurang.addEventListener("click", function() {
  if (isNaN(angka1.value) || isNaN(angka2.value)) {
    alert("Maaf yang Anda Input bukan Angka");
  } else {
    hasil.value = parseFloat(angka1.value) - parseFloat(angka2.value);
  }
});

kali.addEventListener("click", function() {
  if (isNaN(angka1.value) || isNaN(angka2.value)) {
    alert("Maaf yang Anda Input bukan Angka");
  } else {
    hasil.value = parseFloat(angka1.value) * parseFloat(angka2.value);
  }
});

bagi.addEventListener("click", function() {
  if (isNaN(angka1.value) || isNaN(angka2.value)) {
    alert("Maaf yang Anda Input bukan Angka");
  } else if (angka2.value == 0) {
    alert("Maaf, tidak bisa membagi dengan angka 0");
  } else {
    hasil.value = parseFloat(angka1.value) / parseFloat(angka2.value);
  }
});

pangkat.addEventListener("click", function() {
  if (isNaN(angka1.value) || isNaN(angka2.value)) {
    alert("Maaf yang Anda Input bukan Angka");
  } else {
    hasil.value = Math.pow(parseFloat(angka1.value), parseFloat(angka2.value));
}
});