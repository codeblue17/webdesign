jQuery(".rain").raindrops({
  color:"rgba(233, 240, 250, 1)",
  canvasHeight:50,
  rippleSpeed: 0.03,
  frequency: 3,
  density: 0
});


document.addEventListener('DOMContentLoaded', () => {
  // コンテナを指定
  const section = document.querySelector('.bubble-bg');

  // 泡を生成する関数
  const createBubble = () => {
    const bubbleEl = document.createElement('span');
    bubbleEl.className = 'bubble';
    const minSize = 10;
    const maxSize = 50;
    const size = Math.random() * (maxSize + 1 - minSize) + minSize;
    bubbleEl.style.width = `${size}px`;
    bubbleEl.style.height = `${size}px`;
    bubbleEl.style.left = Math.random() * (innerWidth-200) + 'px';
    bubbleEl.style.top = (innerWidth-300) + 'px';
    section.appendChild(bubbleEl);

    // 一定時間が経てば泡を消す
    setTimeout(() => {
      bubbleEl.remove();
    }, 8000);
  }

  // 泡の生成を開始するトリガー（初期値はOFF）
  let activeBubble = null;

  // 泡の生成をストップする関数
  const stopBubble = () => {
    clearInterval(activeBubble);
  };

  // Intersection observerに渡すコールバック関数
  const cb = (entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        activeBubble = setInterval(createBubble, 300);
      } else {
        stopBubble();
      }
    })
  };

  // Intersection observerに渡すオプション
  const options = {
    rootMargin: "100px 0px"
  }

  // Intersection observerの初期化
  const io = new IntersectionObserver(cb, options);
  io.POLL_INTERVAL = 100;
  io.observe(section);
});


/*
スライドメニュー
================================================ */
const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuPanel = document.querySelector('#menu-panel');
const menuItems = document.querySelectorAll('#menu-panel li');
const menuOptions = {
  duration: 1400,
  easing: 'ease',
  fill: 'forwards',
};

menuOpen.addEventListener('click', () => {
  menuPanel.animate([
    { transform: 'translateX(100vw)' },
    { transform: 'translateX(0)' }
  ], menuOptions);

  menuItems.forEach((menuItem, index) => {
    menuItem.animate(
      {
        opacity: [0, 1],
        translate: ['2rem', 0],
      },
      {
        duration: 2400,
        delay: 300 * index,
        easing: 'ease',
        fill: 'forwards',
      }
    );
  });

  menuOpen.animate([
    { opacity: 1, visibility: 'visible' },
    { opacity: 0, visibility: 'hidden' }
    ], {
    duration: 500,
    fill: 'forwards'
  });
});

menuClose.addEventListener('click', () => {
  menuPanel.animate([
    { transform: 'translateX(0)' },
    { transform: 'translateX(100vw)' }
  ], menuOptions);
  menuItems.forEach((menuItem) => {
    menuItem.animate({opacity: [1, 0]}, menuOptions);
  });

  menuOpen.animate([
    { opacity: 0, visibility: 'hidden' },
    { opacity: 1, visibility: 'visible' }
    ], {
    duration: 500,
    fill: 'forwards'
  });
});

/*
スクロールで要素を表示
================================================ */
// 監視対象が範囲内に現れたら実行する動作
const animateFade = (entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        {
          opacity: [0, 1],
          filter: ['blur(.4rem)', 'blur(0)'], 
          translate: ['0 4rem', 0],
        },
        {
          duration: 2000,
          easing: 'ease',
          fill: 'forwards',
        }
      );
      // 一度ふわっと表示されたら監視をやめる
      obs.unobserve(entry.target);
    }
  });
};

// 監視設定
const fadeObserver = new IntersectionObserver(animateFade);

// .fadeinを監視するよう指示
const fadeElements = document.querySelectorAll('.fadein');
fadeElements.forEach((fadeElement) => {
  fadeObserver.observe(fadeElement);
});


$(document).ready(function() {
	$('.ripple').ripples({ //波紋をつける要素を指定
		resolution: 300, //波紋が広がる速さ
		dropRadius: 20, //波紋の大きさ
		perturbance: 0.01 //波紋の揺れの量
	});
});