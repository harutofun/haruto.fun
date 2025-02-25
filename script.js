//all the js code is here
if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
  window.location.href = "https://linktr.ee/haruto.fun";
}


//--------------------  BODY  --------------------//
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
applyParallaxEffect('.status_div', 2, 1);


// bluesky container parallax movement
applyParallaxEffect('.bluesky_embed', 2, 1);
applyParallaxEffect('.bluesky_tab', 2, 1);
applyParallaxEffect('.bluesky_tab_bg', 4, 2);
applyParallaxEffect('.steam_button', 4, 2);
applyParallaxEffect('.itchio_button', 5, 2.5);
applyParallaxEffect('.spotify_app', 2, 1);


// hands parallax movement
applyParallaxEffect('.hands_bottom', 1, .5);
applyParallaxEffect('.hands_middle', 2, 1);
applyParallaxEffect('.hands_top', 3, 1.5);



// background parallax movement
const body = document.body;
document.addEventListener('mousemove', (event) => {
const x = (event.clientX / window.innerWidth) * 50;
const y = (event.clientY / window.innerHeight) * 50;
body.style.backgroundPosition = `${30 - x}% ${30 - y}%`;
});