document.addEventListener('mousemove', (event) => {
    const menu = document.querySelector('.menu');
    if (event.clientY < 250) {
        menu.style.top = '10px'; // 滑出顯示選單
    } else {
        menu.style.top = '-100px'; // 滑入隱藏選單
    }
});

function loadIframe(url) {
    const iframe = document.querySelector('iframe');
    iframe.src = url; // 設定iframe的來源網址
    iframe.style.display = 'block'; // 顯示iframe
}

setInterval(keepRunning, 200);

const img = document.getElementById("img");
let i=1;
function keepRunning() {
    i = (i % 8) + 1;
    img.src = `penguin_walk_0${i}.png`;
  }
