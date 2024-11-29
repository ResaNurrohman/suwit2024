function getPilihanComputer() {
  const comp = Math.random();
  if (comp < 0.34) return '🖐️';
  if (comp >= 0.34 && comp < 0.67) return '✌️';
  return '✊';
}

function getHasil(comp, player) {
  if (player == comp) return 'SERi';
  if (player == '🖐️') return comp == '✊' ? 'MENANG' : 'KALAH';
  if (player == '✌️') return comp == '🖐️' ? 'MENANG' : 'KALAH';
  if (player == '✊') return comp == '✌️' ? 'MENANG' : 'KALAH';
}

function putar() {
  const pilcomp = document.querySelector('.pil-comp');
  const gambar = ['🖐️', '✌️', '✊'];
  const waktuMulai = new Date().getTime();
  let i = 0;
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    pilcomp.innerHTML = gambar[i++];
    if (i == gambar.length) {
      i = 0;
    }
  }, 100);
}

const pilihan = document.querySelectorAll('.pilihan-player div');
pilihan.forEach(function (pil) {
  // const pKertas = document.querySelector('.🖐️');
  pil.addEventListener('click', function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    putar();
    setTimeout(function () {
      const imgComputer = document.querySelector('.pil-comp');
      imgComputer.innerHTML = pilihanComputer;
      const info = document.querySelector('.info');
      info.innerHTML = hasil;
    }, 1000);
    const pilplay = document.querySelector('.pil-play');
    pilplay.innerHTML = pilihanPlayer;
  });
});

// var tanya = true;
// while (tanya) {
//   // menangkap pilihan player
//   var p = prompt('pilih : gajah, semut, orang');

//   // menangkap pilihan computer
//   // membangkitkan bilangan random
//   var comp = Math.random();

//   if (comp < 0.34) {
//     comp = 'gajah';
//   } else if (comp >= 0.34 && comp < 0.67) {
//     comp = 'orang';
//   } else {
//     comp = 'semut';
//   }

//   // menentukan rules
//   var hasil = '';
//   if (p == comp) {
//     hasil = 'SERI!';
//   } else if (p == 'gajah') {
//     hasil = comp == 'orang' ? 'MENANG!' : 'KALAH!';
//   } else if (p == 'orang') {
//     hasil = comp == 'gajah' ? 'KALAH!' : 'MENANG!';
//   } else if (p == 'semut') {
//     hasil = comp == 'orang' ? 'KALAH' : 'MENANG!';
//   } else {
//     hasil = 'memasukkan pilihan yang salah!';
//   }

//   // tampilkan hasilnya
//   alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);

//   tanya = confirm('lagi?');
// }

// alert('terimakasih sudah bermain.');
