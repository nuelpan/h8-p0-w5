function changeVocals(str) {
  //code di sini
  let vocab = "aiueoAIUEO";
  let convert = "bjvfpBJVFP";
  let tempStr = "";

  // loop str dan bandingkan dengan tiap huruf di vocab
  // kalau ketemu yang sama dengan vocab[i], concate tempStr dengan convert[i],
  // kemudian stop pencarian
  // kalau setelah dicek sampai akhir, huruf tidak ada yang sama
  // concate tempStr dengan huruf asal
  for (i = 0; i < str.length; i++) {
    for (j = 0; j < vocab.length; j++) {
      if (str[i] === vocab[j]) {
        tempStr += convert[j];
        break;
      }
      if (str[i] !== vocab[j] && j === vocab.length - 1) {
        tempStr += str[i];
      }
    }
  }
  return tempStr;
}

function reverseWord(str) {
  //code di sini
  let hasil = "";
  for (let i = str.length - 1; i >= 0; i--) {
    hasil += str[i];
  }
  return hasil;
}

function setLowerUpperCase(str) {
  //code di sini
  let strLow = "abcdefghijklmnopqrstuvwxyz";
  let strUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let hasil = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < strLow.length; j++) {
      if (str[i] === strLow[j]) {
        hasil += strUp[j];
      }
      if (str[i] === strUp[j]) {
        hasil += strLow[j];
      }
      if (str[i] === " ") {
        hasil += " ";
      }
    }
  }
  return hasil;
}

function removeSpaces(str) {
  //code di sini
  hasil = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      hasil += "";
    } else {
      hasil += str[i];
    }
  }
  return hasil;
}

function passwordGenerator(name) {
  //code di sini
  let result = "";
  if (name.length <= 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  }
  result = changeVocals(name);
  result = reverseWord(result);
  result = setLowerUpperCase(result);
  result = removeSpaces(result);

  return result;
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
