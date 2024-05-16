function studyRecommendation(mathScore, physicsScore, englishScore) {
  if(mathScore < 80 && physicsScore < 75 && englishScore < 70) {
    return 'Maaf, tidak ada rekomendasi yang dapat kami berikan';
  }

  let recomendation = 'Rekomendasi jurusan yang bisa dipilih: '

  // Rekomendasi Teknik Infromatika
  if (mathScore >= 85 && physicsScore >= 85 && englishScore >= 85) {
    recomendation += 'Teknik Informatika;';
  }

  // Rekomendasi Teknik
  if(mathScore >= 80 && physicsScore >= 75){
    recomendation += 'Teknik;';
  }

  // Rekomendasi Ekonomi
  if(mathScore >= 80 && englishScore >= 70){
    recomendation += 'Ekonomi;';
  }

  // Rekomendasi Sastra Inggris
  if(englishScore >= 70){
    recomendation += 'Sastra Inggris;';
  }

  // Rekomendasi Matematika
  if(mathScore >= 80){
    recomendation += 'Matematika;';
  }

  // Rekomendasi Fisika
  if(physicsScore >= 75){
    recomendation += 'Fisika;';
  }

  return recomendation;
}


console.log(studyRecommendation(0, 0, 0));
console.log(studyRecommendation(80, 75, 70));
console.log(studyRecommendation(85, 85, 85));
console.log(studyRecommendation(80, 75, 85));
console.log(studyRecommendation(80, 85, 70));
console.log(studyRecommendation(85, 75, 70));
console.log(studyRecommendation(85, 85, 70));
console.log(studyRecommendation(80, 85, 85));
console.log(studyRecommendation(85, 75, 85));
console.log(studyRecommendation(85, 85, 85));

module.exports = studyRecommendation;
