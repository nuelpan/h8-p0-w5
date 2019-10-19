function sorting(arrNumber) {
  // code di sini
  // sort descending dengan insertion sort
  for (var i = 0; i < arrNumber.length - 1; i++) {
    var temp = "";
    for (var j = 0; j < arrNumber.length - 1 - i; j++) {
      if (arrNumber[j] < arrNumber[j + 1]) {
        temp = arrNumber[j + 1];
        arrNumber[j + 1] = arrNumber[j];
        arrNumber[j] = temp;
      }
    }
  }
  return arrNumber;
}

function getTotal(arrNumber) {
  // code di sini
  if (arrNumber.length === 0) {
    return "";
  }

  let terbesar = arrNumber[0];
  for (let i = 0; i < arrNumber.length; i++) {
    // cari yang berbeda dengan angka terbesar, ambil index nya
    // jika angka sama semua sampai akhir, ambil index nya + 1
    if (terbesar !== arrNumber[i]) {
      console.log(i);
      return `angka paling besar adalah ${terbesar} dan jumlah kemunculan sebanyak ${i} kali`;
    } else if (terbesar === arrNumber[i] && i === arrNumber.length - 1) {
      return `angka paling besar adalah ${terbesar} dan jumlah kemunculan sebanyak ${i +
        1} kali`;
    }
  }
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(
  mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150])
);
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
