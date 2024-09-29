// Оголоси функцію canRegisterOnSite(age, hasAcceptedTerms),
// яка перевіряє, чи може користувач зареєструватись на сайті.
// І повертає true - якщо може зареєструватись і false, якщо - ні.
// Користувач може зареєструватись, якщо йому виповнилося 13 років
// і він прийняв умови використання.
// Значення параметрів будуть задаватися під час виклику функції:
// age - вік користувача;
// hasAcceptedTerms - буль (вказує чи прийняв користувач умови використання);

function canRegisterOnSite(age, hasAcceptedTerms) {
  return age >= 13 && hasAcceptedTerms;
}

console.log(canRegisterOnSite(12, true));
console.log(canRegisterOnSite(13, false));
console.log(canRegisterOnSite(16, true));
