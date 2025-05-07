let count = 0;
const salawatTexts = [
  "اللهم صل وسلم على نبينا محمد 🌹",
  "اللهم صل على سيدنا محمد عدد ما ذكره الذاكرون ✨",
  "اللهم صل على محمد وعلى آل محمد كما صليت على إبراهيم 🙏",
  "صلى الله عليه وسلم ❤️",
  "اللهم صل وسلم وبارك على سيد الخلق 🌟"
];

function sendSalawat() {
  count++;
  document.getElementById("counter").innerText = count;
  const randomText = salawatTexts[Math.floor(Math.random() * salawatTexts.length)];
  document.getElementById("salawat").innerText = randomText;
}

function toggleMode() {
  document.body.classList.toggle("dark-mode");
}
