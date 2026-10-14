/* 全站共用：多語字典與切換（zh / en / ja）
   用法：HTML 元素加 data-i18n="key"（內容）、data-i18n-attr="alt:key;placeholder:key"（屬性）；
   頁面 JS 用 I18N.t("key",{變數}) 與 I18N.L({zh,en,ja})。新增頁面只需補字典。 */
(function(){
const LANGS={zh:{tag:"zh-Hant",label:"中文"},en:{tag:"en",label:"EN"},ja:{tag:"ja",label:"日本語"}};
const D={
zh:{
"title":"植蕨生活｜國姓、埔里鹿角蕨與民宿 ‧ 沃森 wow forest",
"nav.back":"← 回到 沃森 wow forest","nav.zone":"客座夥伴專區",
"brand.sub":"台灣 ‧ 南投國姓、埔里地區　鹿角蕨收藏與育種",
"hero.p1":"來自台灣的鹿角蕨收藏家與育種玩家，以自家栽培的鹿角蕨側芽與孢子苗為主。",
"hero.p2":"他同時在國姓、埔里地區經營民宿「植蕨行旅」：遠道而來的朋友可以有充裕的時間慢慢挑選，也能住進被鹿角蕨環繞的空間，把喜歡的植物看個夠。海外的朋友，另提供國際物流服務。",
"lnk.fb":"民宿介紹（Facebook）",
"alt.logo":"植蕨生活 Logo：戴著鹿角的安全帽","alt.photo":"民宿內被鹿角蕨環繞的空間",
"stay.title":"民宿住宿｜植蕨行旅","stay.intro":"在被鹿角蕨環繞的空間裡住下來，慢慢看、慢慢挑。",
"rate.wd":"平日","rate.we":"假日（週五、六過夜）","rate.unit":"／ 晚（2 人）","stay.addr":"地址",
"book.title":"使用本頁訂房，每晚折 NT${amt}",
"book.note":"填寫後產生訂房訊息，折扣碼 <b>{code}</b> 會自動帶入。訊息請<b>直接傳給夥伴</b>，房況、實際金額與付款方式由夥伴確認，訂房與下方植物購買分開處理。",
"f.in":"入住日","f.out":"退房日","f.ppl":"人數","f.name":"姓名","f.contact":"聯絡方式（LINE／Instagram／電話）","f.note":"備註（選填）",
"book.gen":"產生訂房訊息","err.dates":"退房日必須晚於入住日。",
"msg.note":"訊息以中文產生，方便夥伴處理，請直接傳送；你也可以在後面用自己的語言補充。",
"copy":"複製訊息","copied":"已複製",
"notice.title":"購買前請先閱讀：本區商品由夥伴自行出貨與結帳",
"notice.l1":"本區商品由<strong>夥伴本人</strong>負責報價、收款、包裝與出貨，<strong>無法與沃森 wow forest 的商品合併結帳或合併運費</strong>。",
"notice.l2":"在此選好商品後，按「產生訂單訊息」，把訊息<strong>直接傳給夥伴</strong>（Instagram／Facebook／LINE），後續付款與寄送方式由夥伴與你確認。",
"notice.l3":"訊息中的「介紹代碼」代表你是由沃森 wow forest 介紹而來，請保留，不需要另外說明。",
"notice.l4":"商品品質、現貨狀態與售後問題，由夥伴負責回覆。",
"notice.l5":"海外訂購請在訊息中註明寄送國家，運費與可寄送範圍由夥伴確認後報價。",
"shop.title":"夥伴的鹿角蕨","shop.sub":"價格皆為新台幣，實際數量以夥伴確認為準。",
"footer":"這是由沃森 wow forest 介紹的客座專區。商品資料由沃森 wow forest 代為上架維護，交易由夥伴負責。",
"bar":"採集清單：{n} 件｜{total}","bar.view":"查看清單","cart.title":"採集清單","close":"關閉","total":"合計",
"cart.warn":"此清單只傳給<b>夥伴</b>，不會和沃森 wow forest 的訂單一起結帳。",
"cart.gen":"產生訂單訊息","cart.ph":"按上方按鈕後，訊息會出現在這裡",
"cart.after":"複製後，請貼到夥伴的 Instagram／Facebook／LINE 私訊。",
"cart.empty":"還沒有選任何商品。","cart.addfirst":"請先加入商品。",
"add":"加入採集清單","sold":"已售完","nophoto":"照片準備中","tag.pup":"側芽","tag.spore":"孢子苗",
"c.ig":"Instagram 私訊","aria.dec":"減少","aria.inc":"增加","aria.photo":"第 {n} 張照片","aria.lang":"語言"
},
en:{
"title":"植蕨生活｜Staghorn Ferns & Guesthouse in Guoxing / Puli ‧ 沃森 wow forest",
"nav.back":"← Back to 沃森 wow forest","nav.zone":"Guest Partner",
"brand.sub":"Taiwan ‧ Guoxing & Puli, Nantou｜Staghorn fern collector & breeder",
"hero.p1":"A staghorn fern collector and breeder from Taiwan, specializing in home-grown pups (side shoots) and sporeling plants.",
"hero.p2":"The owner also runs a guesthouse, “植蕨行旅”, in the Guoxing and Puli area of Nantou. Visitors from afar can take their time choosing plants, or stay in a space surrounded by staghorn ferns. International shipping is available for overseas friends.",
"lnk.fb":"Guesthouse intro (Facebook)",
"alt.logo":"植蕨生活 logo: a helmet with antlers","alt.photo":"A guesthouse room surrounded by staghorn ferns",
"stay.title":"Guesthouse｜植蕨行旅","stay.intro":"Stay among the staghorn ferns and take your time choosing.",
"rate.wd":"Weekday","rate.we":"Weekend (Fri & Sat nights)","rate.unit":"/ night (2 guests)","stay.addr":"Address",
"book.title":"Book on this page and get NT${amt} off per night",
"book.note":"Fill in the form to generate a booking message; the discount code <b>{code}</b> is added automatically. Send the message <b>directly to the partner</b>. Availability, the final price and payment are confirmed by the partner. Bookings are handled separately from the plant purchases below.",
"f.in":"Check-in","f.out":"Check-out","f.ppl":"Guests","f.name":"Name","f.contact":"Contact (LINE / Instagram / phone)","f.note":"Notes (optional)",
"book.gen":"Generate booking message","err.dates":"Check-out must be after check-in.",
"msg.note":"The message is written in Chinese so the partner can process it. Please send it as is; you may add your own words in your language below it.",
"copy":"Copy message","copied":"Copied",
"notice.title":"Please read before buying: items here are shipped and billed by the partner",
"notice.l1":"Quotes, payment, packing and shipping for these items are handled by <strong>the partner</strong>. <strong>They cannot be combined with 沃森 wow forest orders or shipping.</strong>",
"notice.l2":"After choosing items, tap “Generate order message” and <strong>send it directly to the partner</strong> (Instagram / Facebook / LINE). Payment and shipping are arranged with the partner.",
"notice.l3":"The “referral code” in the message shows you came via 沃森 wow forest. Please keep it; no further explanation is needed.",
"notice.l4":"Product quality, stock and after-sales questions are answered by the partner.",
"notice.l5":"For overseas orders, please state the destination country in your message. Shipping cost and availability are confirmed by the partner.",
"shop.title":"Staghorn ferns from the partner","shop.sub":"Prices are in NT$ (New Taiwan Dollar). Final availability is confirmed by the partner.",
"footer":"This guest section is introduced by 沃森 wow forest, which lists and maintains the products on the partner's behalf. Transactions are handled by the partner.",
"bar":"Collection list: {n} item(s) | {total}","bar.view":"View list","cart.title":"Collection list","close":"Close","total":"Total",
"cart.warn":"This list goes to <b>the partner</b> only and is not billed together with 沃森 wow forest orders.",
"cart.gen":"Generate order message","cart.ph":"The message will appear here after you tap the button above",
"cart.after":"After copying, paste it into a direct message to the partner on Instagram / Facebook / LINE.",
"cart.empty":"No items selected yet.","cart.addfirst":"Please add items first.",
"add":"Add to collection list","sold":"Sold out","nophoto":"Photo coming soon","tag.pup":"Pup","tag.spore":"Sporeling",
"c.ig":"Message on Instagram","aria.dec":"Decrease","aria.inc":"Increase","aria.photo":"Photo {n}","aria.lang":"Language"
},
ja:{
"title":"植蕨生活｜国姓・埔里のビカクシダと民宿 ‧ 沃森 wow forest",
"nav.back":"← 沃森 wow forest に戻る","nav.zone":"ゲストパートナー",
"brand.sub":"台湾・南投 国姓、埔里エリア｜ビカクシダのコレクター兼ブリーダー",
"hero.p1":"台湾のビカクシダ愛好家でありブリーダー。自家栽培の子株と、胞子から育てた苗を中心に扱っています。",
"hero.p2":"オーナーは南投の国姓、埔里エリアで民宿「植蕨行旅」も営んでいます。遠方からのお客様もゆっくり選べるうえ、ビカクシダに囲まれた空間に宿泊することもできます。海外の方には国際発送にも対応しています。",
"lnk.fb":"民宿紹介（Facebook）",
"alt.logo":"植蕨生活のロゴ：鹿の角がついたヘルメット","alt.photo":"ビカクシダに囲まれた民宿の空間",
"stay.title":"民宿｜植蕨行旅","stay.intro":"ビカクシダに囲まれた空間に泊まって、ゆっくり選べます。",
"rate.wd":"平日","rate.we":"週末（金・土泊）","rate.unit":"／ 1泊（2名）","stay.addr":"住所",
"book.title":"このページから予約で、1泊ごとに NT${amt} 割引",
"book.note":"フォームに入力して予約メッセージを作成すると、割引コード <b>{code}</b> が自動で入ります。メッセージは<b>パートナーに直接</b>送ってください。空室状況・最終金額・お支払いはパートナーが確認します。予約は下の植物のご購入とは別に扱われます。",
"f.in":"チェックイン","f.out":"チェックアウト","f.ppl":"人数","f.name":"お名前","f.contact":"連絡先（LINE／Instagram／電話）","f.note":"備考（任意）",
"book.gen":"予約メッセージを作成","err.dates":"チェックアウトはチェックイン日より後にしてください。",
"msg.note":"メッセージはパートナーが処理しやすいよう中国語で作成されます。そのままお送りください。その後にご自身の言語で補足を加えても構いません。",
"copy":"メッセージをコピー","copied":"コピーしました",
"notice.title":"ご購入前にお読みください：この商品はパートナーが直接発送・精算します",
"notice.l1":"見積もり・決済・梱包・発送は<strong>パートナー本人</strong>が行います。<strong>沃森 wow forest の商品との同梱決済・送料の合算はできません。</strong>",
"notice.l2":"商品を選んだら「注文メッセージを作成」を押し、<strong>パートナーに直接</strong>（Instagram／Facebook／LINE）送ってください。お支払い・発送方法はパートナーと確認します。",
"notice.l3":"メッセージ内の「紹介コード」は、沃森 wow forest からのご紹介を示します。そのまま残してください。追加の説明は不要です。",
"notice.l4":"商品の品質・在庫・アフターサポートはパートナーが対応します。",
"notice.l5":"海外からのご注文は、メッセージに送付先の国をご記入ください。送料と配送可否はパートナーが確認のうえご案内します。",
"shop.title":"パートナーのビカクシダ","shop.sub":"価格はすべて台湾ドル（NT$）です。在庫状況はパートナーが確認します。",
"footer":"ここは沃森 wow forest が紹介するゲスト専用ページです。商品情報の掲載・管理は沃森 wow forest が代行し、取引はパートナーが行います。",
"bar":"採集リスト：{n} 点｜{total}","bar.view":"リストを見る","cart.title":"採集リスト","close":"閉じる","total":"合計",
"cart.warn":"このリストは<b>パートナー</b>にのみ送られ、沃森 wow forest の注文とは一緒に決済されません。",
"cart.gen":"注文メッセージを作成","cart.ph":"上のボタンを押すと、ここにメッセージが表示されます",
"cart.after":"コピーして、パートナーへの Instagram／Facebook／LINE のDMに貼り付けてください。",
"cart.empty":"まだ商品が選ばれていません。","cart.addfirst":"先に商品を追加してください。",
"add":"採集リストに追加","sold":"売り切れ","nophoto":"写真準備中","tag.pup":"子株","tag.spore":"胞子苗",
"c.ig":"Instagramでメッセージ","aria.dec":"減らす","aria.inc":"増やす","aria.photo":"写真 {n}","aria.lang":"言語"
}};
function pick(){
  let l=new URLSearchParams(location.search).get("lang");
  if(!LANGS[l]){try{l=localStorage.getItem("lang")}catch(_){l=null}}
  if(!LANGS[l]){const n=(navigator.language||"").toLowerCase();l=n.startsWith("ja")?"ja":n.startsWith("en")?"en":"zh"}
  return l;
}
const I={lang:pick(),vars:{},dict:D,names:{zh:"中文",en:"English",ja:"日本語"},
  t(k,v){const s=D[I.lang][k]??D.zh[k]??k;
    return s.replace(/\{(\w+)\}/g,(m,n)=>v&&n in v?v[n]:n in I.vars?I.vars[n]:m)},
  L(o){return o?(o[I.lang]??o.zh??""):""},
  set(l){if(!LANGS[l])return;I.lang=l;
    try{localStorage.setItem("lang",l)}catch(_){}
    try{const u=new URL(location.href);u.searchParams.set("lang",l);history.replaceState(null,"",u)}catch(_){}
    I.apply();document.dispatchEvent(new Event("langchange"))},
  apply(){
    document.documentElement.lang=LANGS[I.lang].tag;
    document.title=I.t("title");
    document.querySelectorAll("[data-i18n]").forEach(e=>{e.innerHTML=I.t(e.dataset.i18n)});
    document.querySelectorAll("[data-i18n-attr]").forEach(e=>{
      e.dataset.i18nAttr.split(";").forEach(p=>{const [a,k]=p.split(":");e.setAttribute(a.trim(),I.t(k.trim()))})});
    const sw=document.getElementById("langSwitch");
    if(sw){sw.setAttribute("aria-label",I.t("aria.lang"));
      sw.innerHTML=Object.keys(LANGS).map(k=>`<button type="button" data-lang="${k}" aria-pressed="${k===I.lang}">${LANGS[k].label}</button>`).join("")}
  }};
document.addEventListener("click",e=>{const b=e.target.closest("[data-lang]");if(b)I.set(b.dataset.lang)});
window.I18N=I;
})();
