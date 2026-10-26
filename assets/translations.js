/* 翻譯放這裡。中文原文直接寫在各個 html 頁面裡，不用放進來。
   這裡的 key 對應 html 裡的 data-i18n="key"。
   某個 key 沒翻譯時，會自動顯示中文原文，頁面不會壞掉。
   之後要加日文：複製整個 en 區塊，改名成 ja，把內容翻成日文，
   切換按鈕就會自動多出「日本語」。 */
const TRANSLATIONS = {
  en: {
    /* ---- 全站共用：導覽列、頁尾 ---- */
    "nav.about": "About",
    "nav.collection": "Collection",
    "nav.shop": "Shop",
    "nav.guest": "Guest Partner",
    "nav.care": "Care Guide",
    "nav.blog": "Articles",
    "nav.contact": "Contact",
    "nav.menu": "Open menu",
    "alt.brand": "Zhibodiantai brand logo",
    "footer": "© 植播電台 Zhibodiantai · Personal cultivation journal and sales",

    /* ---- 關於我（index.html） ---- */
    "about.title": "About Me | Zhibodiantai",
    "about.desc": "Wow Forest is a greenhouse in Taoyuan, Taiwan dedicated to growing staghorn ferns, focusing on rare varieties, breeding research and staghorn fern cultivation know-how.",
    "alt.logo": "Wow Forest logo: a whale carrying a forest on its back",
    "about.h1": "About Wow Forest / Zhibodiantai",

    "about.intro.h": "About Me",
    "about.intro.p": "A plant enthusiast focused on the morphology and breeding of staghorn ferns (Platycerium). I sell staghorn fern sporelings, with domestic and international trade, wholesale and retail. I grow only for my own passion, and fellow plant lovers are always welcome to exchange ideas.",

    "about.brands.h": "The Story Behind the Two Brands",
    "about.brands.p": "Zhibodiantai (植播電台) is how I got hooked on plants: a place to share what I observe about them. Wow Forest (沃森) is my sales brand, where those observations accumulate into products. The logo is a whale carrying a forest on its back, symbolizing Taiwan's rich forest resources and the hope of setting out from here to the whole world.",

    "about.breeding.h": "Breeding Philosophy",
    "about.breeding.p": "The form of a staghorn fern is built on its genes. Through breeding, I observe how stable a variety's traits are and what new possibilities genetic recombination can produce, in an effort to break away from the sameness found in today's market.",

    "about.env.h": "Growing Environment",
    "about.env.p": "Plants bought here need no special acclimatization once you take them home. The greenhouse is in Luzhu District, Taoyuan, Taiwan (across from No. 240, Lane 937, Daxin Road), with about 70% shade and fully automatic irrigation. Temperatures range from 12°C to 41°C over the year, and humidity fluctuates between 50% and 95%. There are positive-pressure fans but no air conditioning.<br><br>To visit, please contact me first and book a time. Pets are welcome, but please let me know in advance.",

    "about.guest.h": "Guest Partner",
    "about.guest.p": "I work with 植蕨生活, a staghorn fern grower in Nantou, Taiwan. This section showcases the sporelings and pups he grows himself, and you can also book his guesthouse, 植蕨行旅. Items in this section are checked out and shipped by the partner and cannot be combined with orders from this site.",
    "about.guest.btn": "Visit the Guest Zone →",

    /* ---- 聯絡資訊（contact.html） ---- */
    "footer.sales": "© 植播電台 Zhibodiantai · Wow Forest (沃森) sales brand",
    "contact.title": "Contact | Zhibodiantai",
    "contact.desc": "Wow Forest greenhouse in Taoyuan, Taiwan. Visits by appointment; follow us on Facebook and Instagram.",
    "contact.h1": "Contact",
    "contact.sub": "When you find a plant you like, add it to your collection list in the Shop, copy the list, and contact me using the links below. I'll help confirm stock, payment and shipping.",
    "contact.social.h": "Get in Touch",
    "contact.pay.h": "Payment",
    "contact.ship.h": "Shipping",
    "contact.dt.tw": "Taiwan (domestic)",
    "contact.dt.intl": "International",
    "contact.pay.tw": "Bank transfer",
    "contact.pay.intl": "Payment via Wise",
    "contact.ship.tw.lead": "You can choose one of the following:",
    "contact.ship.post": "Chunghwa Post (registered mail / parcel)",
    "contact.ship.711": "7-ELEVEN store pickup (交貨便)",
    "contact.ship.fm": "FamilyMart store pickup (店到店)",
    "contact.ship.tw.fee": "Shipping is generally NT$80; anything above that depends on parcel size and region, and will be confirmed together with your order.",
    "contact.ship.intl": "International shipping must be discussed by direct message first. Shipment is arranged only after the destination, plant quarantine rules and shipping cost are confirmed and quoted separately.",
    "contact.flow.h": "How to Order",
    "contact.flow.tag": "For first-time buyers",
    "contact.flow.1": "Browse the Shop and add the plants you like to your collection list",
    "contact.flow.2": "When your list is ready, copy it and send it to me as an Instagram direct message",
    "contact.flow.3": "I'll confirm that the plants are still in stock and reply with the available payment methods",
    "contact.flow.4": "After payment, we'll arrange the shipping method and timing, depending on whether the order is domestic or international",

    /* ---- 栽培知識（care.html） ---- */
    "care.title": "Care Guide | Zhibodiantai",
    "care.desc": "A quick staghorn fern care guide: light, watering, humidity, mounting, fertilizing and pest control, from the Wow Forest greenhouse in Taoyuan, Taiwan.",
    "care.h1": "Staghorn Fern Care Basics",
    "care.sub": "Some basic growing concepts for newcomers and anyone who wants to understand staghorn ferns better. Every environment is different, so adjust to your own conditions.",
    "care.light.h": "Light",
    "care.light.p": "Staghorn ferns like bright, diffused light and dislike direct summer midday sun, which can scorch the fronds. Indoors, place them by a bright window without direct sun. Outdoors, use shade cloth and aim for roughly 50–70% shading; adjust to the variety's light tolerance and your own environment.",
    "care.water.h": "Watering",
    "care.water.p": "Staghorn ferns dislike staying constantly wet and also dislike drying out completely; the rule of thumb is to water when slightly moist. Judge by the weight and dryness of the moss or board rather than a fixed “every few days” schedule. In enclosed or high-humidity settings, water less often to avoid root rot.",
    "care.humid.h": "Humidity",
    "care.humid.p": "Their native habitats are mostly humid, and keeping ambient humidity at around 70–90% generally keeps plants stable. Too little humidity can dry out the edges of the fertile (antler) fronds; too much humidity with poor airflow invites stuffy-heat diseases. Indoors, a humidifier can add local humidity.",
    "care.mount.h": "Mounting / Planting Methods",
    "care.mount.p": "The two common methods are mounting on a board and potting. Mounting is closest to the plant's natural epiphytic habit, with good airflow and healthy roots, and it makes shaping the plant easier, though it needs closer attention to watering. Potting holds water better and suits busy growers or those who cannot hang plants. When mounting, wrap moss between the plant and the board (some varieties are better not fully wrapped in moss), secure it with fishing line or cotton thread, and wait for new roots to grip the board.",
    "care.fert.h": "Fertilizing",
    "care.fert.p": "During the growing season (usually autumn–winter and the transitions between spring and summer) you can apply diluted liquid fertilizer or slow-release granules. Dilute more than the package suggests; small, frequent doses are safer than one strong dose. Reduce or stop feeding in winter, for freshly transplanted small plants, or whenever the plant is dormant or growing slowly, to avoid fertilizer burn.",
    "care.pest.h": "Common Pests and Diseases",
    "care.pest.p": "Common problems include scale insects, spider mites, and fungal or bacterial diseases caused by stuffy, damp conditions (such as black rot). Good airflow and avoiding long-standing water on the fronds are the first steps in prevention. Inspect your plants often, especially newly bought ones. If you find scale or lesions, isolate the affected plant early and treat it according to the situation so it doesn't spread to others.",
    "care.home.h": "After You Bring Plants Home",
    "care.home.p": "Let newly arrived plants settle in first; there's no need to repot or mount them right away. Give them some time (usually about a week) to adjust to the light and humidity before making further changes. If you have any questions about growing, feel free to reach me through the Contact page.",

    /* ---- 園區收藏（collection.html）；每株的英文名稱與說明寫在 collection.html 的 en:{} 裡 ---- */
    "collection.title": "Collection | Zhibodiantai",
    "collection.desc": "Wow Forest greenhouse in Taoyuan, Taiwan, specializing in staghorn fern sporelings: collection, breeding and sales.",
    "collection.h1": "Collection",
    "collection.sub": "The mother plants and outstanding individuals shown here are not for sale. To buy, please see the Shop.",
    "modal.close": "Close ✕",

    /* ---- 販售目錄（shop.html）；每項商品的英文名稱寫在 shop.html 的 en:{} ，特徵對照表在 shop.html 的 TRAITS ---- */
    "shop.title": "Shop | Wow Forest (沃森) Staghorn Fern Sporelings",
    "shop.desc": "Wow Forest greenhouse in Taoyuan, Taiwan. Staghorn fern sporelings, pups and plants, each listed and photographed individually, plus supplies. Wholesale and import, domestic and international.",
    "shop.h1": "Staghorn Fern Sporelings for Sale",
    "shop.sub": "Every sporeling is a one-of-a-kind individual. Even plants from the same batch of spores can differ in form and traits, so each plant is photographed and listed individually (“one item, one photo”). When you find one you like, add it to the “Collection List” below. There's no need to check out right away: once you've chosen, send me your list in one go and I'll help confirm availability, payment and the next steps.",
    "shop.fab": "Collection List",
    "shop.cart.h": "Collection List",
    "shop.subtotal": "Subtotal",
    "shop.copy": "Copy list text to send me",
    "shop.note": "This copies your list to the clipboard; paste it into an Instagram direct message to me. The copied message is in Chinese so I can process it quickly, and you're welcome to add your own words below it.<br>An order is only confirmed after stock and payment have been confirmed; nothing is charged automatically. See the Contact page for payment and shipping.",
    "shop.toast": "List copied. Paste it into a message to send.",
    "footer.shop": "© 沃森 wow forest · 植播電台 Zhibodiantai cultivation and sales · For payment and shipping, see <a href='contact.html' style='color:var(--rust);'>Contact</a>",
    "shop.reserved": "Reserved",
    "shop.ref": "Reference",
    "shop.add": "Add to list",
    "shop.added": "Added ✓",
    "shop.empty": "Your list is empty.<br>Add any plant you like. There's no rush to check out.",
    "shop.remove": "Remove"
  }
  // ,ja: { ... }   ← 之後加日文就從這裡開始
};
