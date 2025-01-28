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

// tstaus progress bar
const totalIssues = 6;
const completedIssues = 1;
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
