//all the js code is here

// status gif
let status_gif_ = document.getElementById('status_gif');
let status_gifs = [
    'assets/img/home/status/status_cook.gif',
    'assets/img/home/status/status_sleep.gif',
    'assets/img/home/status/status_idle.gif',
    'assets/img/home/status/status_dialogues.gif',
    'assets/img/home/status/status_idle_touch.gif',
    'assets/img/home/status/status_ramen.gif',
];
setInterval(function() {
    let random = Math.floor(Math.random() * status_gifs.length);
    status_gif_.src = status_gifs[random];
}, 6000);

// status progress bar
const totalIssues = 20;
const completedIssues = 2;
const percentage = totalIssues > 0 ? Math.round((completedIssues / totalIssues) * 100) : 0;
document.getElementById('progress-label').textContent = `${completedIssues}/${totalIssues}`;
document.getElementById('progress-percentage').textContent = `${percentage}%`;
const progressBar = document.getElementById('progress-bar');
progressBar.innerHTML = '';
for (let i = 0; i < totalIssues; i++) {
  const segment = document.createElement('div');
  segment.classList.add('progress-segment');
  if (i < completedIssues) { segment.classList.add('completed');}
  progressBar.appendChild(segment);
}

// status container parallax movement
const status_div = document.querySelector('.status_div');
document.addEventListener('mousemove', (event) => {
const x = (event.clientX / window.innerWidth) * 2;
const y = (event.clientY / window.innerHeight) * 2;
status_div.style.transform = `translate(${x - 1}%, ${y - 1}%)`;
});



// bluesky container parallax movement
const bluesky_embed = document.querySelector('.bluesky_embed');
document.addEventListener('mousemove', (event) => {
const x = (event.clientX / window.innerWidth) * 2;
const y = (event.clientY / window.innerHeight) * 2;
bluesky_embed.style.transform = `translate(${x - 1}%, ${y - 1}%)`;
});
const bluesky_tab = document.querySelector('.bluesky_tab');
document.addEventListener('mousemove', (event) => {
const x = (event.clientX / window.innerWidth) * 2;
const y = (event.clientY / window.innerHeight) * 2;
bluesky_tab.style.transform = `translate(${x - 1}%, ${y - 1}%)`;
});
const bluesky_tab_bg = document.querySelector('.bluesky_tab_bg');
document.addEventListener('mousemove', (event) => {
const x = (event.clientX / window.innerWidth) * 4;
const y = (event.clientY / window.innerHeight) * 4;
bluesky_tab_bg.style.transform = `translate(${x - 2}%, ${y - 2}%)`;
});
const steam_button = document.querySelector('.steam_button');
document.addEventListener('mousemove', (event) => {
const x = (event.clientX / window.innerWidth) * 4;
const y = (event.clientY / window.innerHeight) * 4;
steam_button.style.transform = `translate(${x - 2}%, ${y - 2}%)`;
});
const itchio_button = document.querySelector('.itchio_button');
document.addEventListener('mousemove', (event) => {
const x = (event.clientX / window.innerWidth) * 5;
const y = (event.clientY / window.innerHeight) * 5;
itchio_button.style.transform = `translate(${x - 2.5}%, ${y - 2.5}%)`;
});


// hands parallax movement
const hands_bottom = document.querySelector('.hands_bottom');
document.addEventListener('mousemove', (event) => {
const x = (event.clientX / window.innerWidth) * 1;
const y = (event.clientY / window.innerHeight) * 1;
hands_bottom.style.transform = `translate(${x - .5}%, ${y - .5}%)`;
});
const hands_middle = document.querySelector('.hands_middle');
document.addEventListener('mousemove', (event) => {
const x = (event.clientX / window.innerWidth) * 2;
const y = (event.clientY / window.innerHeight) * 2;
hands_middle.style.transform = `translate(${x - 1}%, ${y - 1}%)`;
});
const hands_top = document.querySelector('.hands_top');
document.addEventListener('mousemove', (event) => {
const x = (event.clientX / window.innerWidth) * 3;
const y = (event.clientY / window.innerHeight) * 3;
hands_top.style.transform = `translate(${x - 1.5}%, ${y - 1.5}%)`;
});


// background parallax movement
const body = document.body;
document.addEventListener('mousemove', (event) => {
const x = (event.clientX / window.innerWidth) * 50;
const y = (event.clientY / window.innerHeight) * 50;
body.style.backgroundPosition = `${30 - x}% ${30 - y}%`;
});
