/* 語言切換。中文原文留在 html 裡，其他語言從 site-translations.js 讀取。
   html 寫法：
     <p data-i18n="key">中文原文</p>
     <img alt="中文" data-i18n-attr="alt:key">        （多個屬性用 ; 隔開）
     <html data-i18n-title="key" data-i18n-desc="key">  （分頁標題與說明文字）
     <div id="langSwitch"></div>                        （語言按鈕會自動長在這裡）
   預設永遠是中文；網址後面加 ?lang=en 可以直接開英文版。 */
(function () {
  const DEFAULT = "zh", STORE = "lang";
  const LABEL = { zh: "中文", en: "EN", ja: "日本語" };
  const HTML_LANG = { zh: "zh-Hant", en: "en", ja: "ja" };
  const T = typeof TRANSLATIONS !== "undefined" ? TRANSLATIONS : {};
  const langs = [DEFAULT, ...Object.keys(T)];
  const root = document.documentElement;
  const metaDesc = document.querySelector('meta[name="description"]');
  const zh = { title: document.title, desc: metaDesc ? metaDesc.content : "" };
  const saved = new WeakMap();
  let current = DEFAULT;

  const pairs = s => s.split(";").map(p => {
    const i = p.indexOf(":");
    return [p.slice(0, i).trim(), p.slice(i + 1).trim()];
  });
  const tr = key => (current === DEFAULT || !T[current] || T[current][key] == null) ? null : T[current][key];

  function drawSwitch() {
    const box = document.getElementById("langSwitch");
    if (!box) return;
    box.innerHTML = langs.length < 2 ? "" : langs.map(l =>
      `<button type="button" data-lang="${l}" lang="${HTML_LANG[l] || l}" aria-pressed="${l === current}">${LABEL[l] || l}</button>`
    ).join("");
  }

  function apply() {
    root.lang = HTML_LANG[current] || current;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const v = tr(el.dataset.i18n);
      if (v == null && current !== DEFAULT) console.warn("[i18n] 缺少翻譯：", current, el.dataset.i18n);
      el.innerHTML = v != null ? v : saved.get(el).html;
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(el => {
      const o = saved.get(el);
      pairs(el.dataset.i18nAttr).forEach(([name, key]) => {
        const v = tr(key);
        el.setAttribute(name, v != null ? v : o.attrs[name]);
      });
    });
    document.title = (root.dataset.i18nTitle && tr(root.dataset.i18nTitle)) || zh.title;
    if (metaDesc) metaDesc.content = (root.dataset.i18nDesc && tr(root.dataset.i18nDesc)) || zh.desc;
    drawSwitch();
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: current } }));
  }

  function set(lang) {
    if (!langs.includes(lang)) return;
    current = lang;
    try { localStorage.setItem(STORE, lang); } catch (e) {}
    try { const u = new URL(location.href); u.searchParams.set("lang", lang); history.replaceState(null, "", u); } catch (e) {}
    apply();
  }

  function start() {
    // 先記下每個元素的中文原文
    document.querySelectorAll("[data-i18n],[data-i18n-attr]").forEach(el => {
      const o = {};
      if (el.hasAttribute("data-i18n")) o.html = el.innerHTML;
      if (el.hasAttribute("data-i18n-attr")) {
        o.attrs = {};
        pairs(el.dataset.i18nAttr).forEach(([name]) => { o.attrs[name] = el.getAttribute(name); });
      }
      saved.set(el, o);
    });
    const box = document.getElementById("langSwitch");
    if (box) box.addEventListener("click", e => {
      const b = e.target.closest("[data-lang]");
      if (b) set(b.dataset.lang);
    });
    const q = new URLSearchParams(location.search).get("lang");
    let s = null;
    try { s = localStorage.getItem(STORE); } catch (e) {}
    const want = [q, s].find(l => l && langs.includes(l)) || DEFAULT;
    if (want !== DEFAULT) set(want); else apply();
  }

  // I18N.L({zh:"…", en:"…"}) 之後給商品名稱這類動態內容用
  window.I18N = {
    get lang() { return current; },
    set,
    t: (key, zhText) => { const v = tr(key); return v != null ? v : zhText; },
    L: o => (o && (o[current] != null ? o[current] : o[DEFAULT]))
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
