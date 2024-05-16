function zodiacSign(day, month) {
  if(day < 1 || day > 31){
    return 'Input tanggal salah';
  } else if (day === 31 && (month === 'April' || month === 'Juni' || month === 'September' || month === 'November')) {
    return 'Input tanggal salah';
  } else if (day > 29 && month === 'Februari') {
    return 'Input tanggal salah';
  }

  switch (month) {
    case 'Januari':
      if(day <= 19) {
        return 'Capricorn';
      } else {
        return 'Aquarius';
      }
    case 'Februari':
      if(day <= 18) {
        return 'Aquarius';
      } else {
        return 'Pisces';
      }
    case 'Maret':
      if(day <= 20) {
        return 'Pisces';
      } else {
        return 'Aries';
      }
    case 'April':
      if(day <= 19) {
        return 'Aries';
      } else {
        return 'Taurus';
      }
    case 'Mei':
      if(day <= 20) {
        return 'Taurus';
      } else {
        return 'Gemini';
      }
    case 'Juni':
      if(day <= 20) {
        return 'Gemini';
      } else {
        return 'Cancer';
      }
    case 'Juli':
      if(day <= 22) {
        return 'Cancer';
      } else {
        return 'Leo';
      }
    case 'Agustus':
      if(day <= 22) {
        return 'Leo';
      } else {
        return 'Virgo';
      }
    case 'September':
      if(day <= 22) {
        return 'Virgo';
      } else {
        return 'Libra';
      }
    case 'Oktober':
      if(day <= 22) {
        return 'Libra';
      } else {
        return 'Scorpio';
      }
    case 'November':
      if(day <= 21) {
        return 'Scorpio';
      } else {
        return 'Sagittarius';
      }
    case 'Desember':
      if(day <= 21) {
        return 'Sagittarius';
      } else {
        return 'Capricorn';
      }
    default:
      return 'Nama bulan salah';
  }
}


console.log(zodiacSign(30, 'Desember'));
console.log(zodiacSign(31, 'Desember'));
console.log(zodiacSign(41, 'Desember'));
console.log(zodiacSign(31, 'Februari'));
console.log(zodiacSign(29, 'Februari'));
console.log(zodiacSign(29, 'Januari'));


module.exports = zodiacSign;
