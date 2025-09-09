//all the js code is here
if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
  window.location.href = "https://linktr.ee/haruto.fun";
}


//--------------------  BODY  --------------------//
applyParallaxEffect('.itchio-lic', 2, 1);
applyParallaxEffect('.itchio-ssmdemo', 2, 1);
applyParallaxEffect('.patreon_ad', 2, 1);



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