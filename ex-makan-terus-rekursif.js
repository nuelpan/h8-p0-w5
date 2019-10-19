function makanTerusRekursif(waktu) {
  // you can only write your code here!
  let makan = 0;
  if (waktu <= 0) {
    return makan; // return 0, jika waktu kurang atau sama dengan 0
  } else {
    makan++; // bertambah setiap kali mengambil makanan
    return makan + makanTerusRekursif(waktu - 15);
  }
}

/**
 * makanTerusRekursif(66)
 * 1 + makanTerusRekursif(51)
 * 1 + 1 + makanTerusRekursif(36)
 * 1 + 1 + 1 + makanTerusRekursif(21)
 * 1 + 1 + 1 + 1 + makanTerusRekursif(6)
 * 1 + 1 + 1 + 1 + 1 + makanTerusRekursif(-9)
 * 1 + 1 + 1 + 1 + 1 + 0 (0 adalah base case apabila waktu <= 0)
 * makan = 5;
 */

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0
