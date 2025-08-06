(function () {
  const scriptUrl = 'https://pxi-fusion-menu.pages.dev/main/menu.js';
  fetch(scriptUrl).then(r => r.text()).then(code => {
    const s = document.createElement('script');
    s.textContent = code;
    document.body.appendChild(s);
    const style = document.createElement('style');
    style.textContent = `
      @keyframes rainbow { 0%,100%{background-position:0% 50%}50%{background-position:100% 50%} }
      .rainbow-box { padding:5px 10px; font-weight:bold; color:white; border-radius:5px;
        background:linear-gradient(270deg,red,orange,yellow,green,blue,indigo,violet);
        background-size:400% 400%; animation: rainbow 5s ease infinite;
        margin-left:20px; display:inline-block; }
    `;
    document.head.appendChild(style);

    const observer = new MutationObserver((mut, obs) => {
      for (let m of mut) {
        m.addedNodes.forEach(node => {
          if (node.nodeType === 1) {
            const title = node.querySelector('div, h1, h2, h3, span');
            if (title && /pxi fusion/i.test(title.textContent)) {
              console.log('Menu loaded:', title.textContent);

              title.textContent = 'XPI CORTEX CHEAT MENU';
              title.style.color = 'red';

              const ann = document.createElement('span');
              ann.className = 'rainbow-box';
              ann.textContent = 'ANNOUNCEMENTS';
              title.parentNode.insertBefore(ann, title.nextSibling);

              const menuEl = node.closest('div');
              if (menuEl) {
                menuEl.style.backgroundColor = 'black';
                menuEl.style.border = '8px solid red';
                menuEl.style.color = 'white';
              }

              node.querySelectorAll('*').forEach(el => {
                const text = el.textContent.trim();
                if (text) console.log('found:', text);
                if (/support|https?:\/\//i.test(text)) el.remove();
                if (/player|inventory|pet|battle|utility|minigame|beta|hacks/i.test(text)) {
                  console.log('Styling label:', text);
                  el.style.color = 'red';
                  el.style.fontWeight = 'bold';
                }
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                  console.log('Styling hack input box');
                  el.style.backgroundColor = 'red';
                  el.style.color = 'white';
                  el.style.border = '1px solid white';
                }
              });

              obs.disconnect();
            }
          }
        });
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }).catch(err => console.error(err));
})();



