// 共用函式，shop.html 和 collection.html 都會用到
// 不需要另外設定，保持原樣就好

function frondSVG(color){
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 92 C 50 70, 40 60, 30 45 C 22 33, 24 18, 34 8 C 30 22, 34 32, 42 40 C 40 26, 46 14, 58 6 C 52 20, 52 32, 58 42 C 66 30, 72 18, 70 6 C 76 20, 76 34, 66 46 C 76 40, 84 34, 90 22 C 86 36, 78 46, 66 52 C 60 58, 54 66, 50 92 Z"
      fill="${color}" opacity="0.88"/>
    <path d="M50 92 C 50 70, 40 60, 30 45" stroke="${color}" stroke-width="1" fill="none" opacity="0.4"/>
  </svg>`;
}

// 導覽列彈出選單（手機窄螢幕會變成漢堡選單）
function initNav(){
  const btn = document.getElementById('navToggle');
  const links = document.querySelector('.nav-links');
  if(!btn || !links) return;
  btn.addEventListener('click', ()=>{
    links.classList.toggle('open');
  });
  links.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=> links.classList.remove('open'));
  });
  document.addEventListener('click', (e)=>{
    if(!links.classList.contains('open')) return;
    if(!links.contains(e.target) && !btn.contains(e.target)){
      links.classList.remove('open');
    }
  });
}
document.addEventListener('DOMContentLoaded', initNav);
function initLightbox(){
  const overlay = document.getElementById('modalOverlay');
  const title = document.getElementById('modalTitle');
  const photosEl = document.getElementById('modalPhotos');
  const noteEl = document.getElementById('modalNote');
  const closeBtn = document.getElementById('modalClose');

  function open(data){
    title.textContent = data.name || data.label || '參考資料';
    photosEl.innerHTML = (data.photos && data.photos.length)
      ? data.photos.map(src => `<img src="${src}" alt="${data.name || data.label || '鹿角蕨'} 鹿角蕨孢子苗">`).join('')
  : `<div style="color:var(--moss);font-size:12.5px;">尚未上傳照片</div>`;
    noteEl.textContent = data.note || '';
    overlay.classList.add('open');
  }
  function close(){ overlay.classList.remove('open'); }

  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', (e)=>{ if(e.target === overlay) close(); });

  return { open, close };
}
