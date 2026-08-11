/* =========================================================================
   HORTENSIA — PRICELIST DATA
   -------------------------------------------------------------------------
   This is the ONLY section you need to edit to update the site.
   Change brand info, prices, links, and socials here, then redeploy.
   Everything below the pricelist object is rendering logic — you
   shouldn't need to touch it for normal content updates.
   ========================================================================= */

const pricelist = {
    brandName: "Hortensia",
    tagline: "Music Production & Vocal Mixing",
    avatar: "assets/profile.jpg", // replace this file to change the photo

    mainServices: [
        {
            name: "Vocal Mix",
            type: "multi-tier",
            tiers: [
                { duration: "Under 1 minute", note: "YT Short", idr: "125k", international: "$12", level: 1 },
                { duration: "Under 2 minutes", note: "TV Ver", idr: "150k", international: "$17", level: 2 },
                { duration: "2–5 minutes", note: "Full Song", idr: "250k", international: "$25", level: 3 }
            ],
            detail: "Includes Tuning, Timing, Mixing and Mastering."
        },
        {
            name: "Artificial Harmony",
            type: "addon",
            idr: "+30k / Layer",
            international: "+$7 / Layer",
            detail: "Harmony created by pitch-shifting the lead vocal."
        },
        {
            name: "Recorded Harmony",
            type: "addon",
            idr: "+50k / Layer",
            international: "+$10 / Layer",
            detail: "Full processing (tuning, timing, & blending)."
        },
        {
            name: "Duets, Trios, Quartets, etc.",
            type: "addon",
            idr: "+90k / Vocalist",
            international: "+$15 / Vocalist",
            detail: "Full vocal processing for each additional singer."
        },
        {
            name: "Rush Order",
            type: "rush",
            idr: "+50% of Total Price",
            international: "+50% of Total Price",
            detail: "Your commission will be prioritized and may be moved ahead in the queue.",
            warning: "Only one Rush Order slot is available at any given time."
        }
    ],

    additionalServices: [
        {
            name: "Pitch Correction Only",
            idr: "70k / Layer",
            international: "$8 / Layer",
            detail: "Manual pitch correction only."
        },
        {
            name: "Timing Correction Only",
            idr: "70k / Layer",
            international: "$8 / Layer",
            detail: "Manual timing correction only."
        },
        {
            name: "Pitch and Timing Correction Only",
            idr: "120k / Layer",
            international: "$14 / Layer",
            detail: "Manual pitch correction and timing correction only."
        },
        {
            name: "Vocal Guides",
            idr: "50k–80k / Layer",
            international: "$8–12 / Layer",
            detail: "Receive a guide vocal recorded by me."
        },
        {
            name: "Instrumental Recreation",
            idr: "390k",
            international: "$50–70",
            detail: "A custom remake of an existing instrumental. Price varies depending on duration and complexity."
        }
    ],

    orderUrl: "https://discord.com/users/YOUR_USER_ID", // <-- replace with your WhatsApp number, digits only after wa.me/

    socials: [
        { name: "Instagram", url: "" },
        { name: "YouTube", url: "https://youtube.com/@hortensiav2" },
        { name: "TikTok", url: "" }, // leave url empty to hide a social link
        { name: "Discord", url: "" }, // profile link that opens a DM — see README for how to get your User ID
        { name: "X", url: "https://x.com/Hortensia_id" }
    ],

    // Demo videos, grouped into categories. Each category gets its own
    // heading and its own horizontally scrollable row of videos. Add,
    // remove, or rename categories and videos freely — a `watch`, `youtu.be`,
    // or Shorts url all work. Leave a category's `videos` array empty to
    // hide just that category, or leave `demoVideos` itself empty ([]) to
    // hide the whole Demo section.
    demoVideos: [
        {
            category: "Vocal Mix",
            videos: [
                { title: "Full Song Mix", url: "https://www.youtube.com/watch?v=SDZ9hL4vpD0" },
                { title: "Full Song Mix", url: "hhttps://youtu.be/K82VzErG8lQ?si=9t6FhmeBQG2PCia-" },
                { title: "YT Short Mix", url: "https://youtu.be/k8UL9TJdpsU?si=KF6I20vdI5iDXAV7" },
                { title: "YT Short Mix", url: "https://youtu.be/6qYKj-KzCRc?si=fPaxrw4LVJA0XAkG" }
            ]
        },
        {
            category: "Arrangement",
            videos: [
                { title: "Arrangement Example 1", url: "https://youtu.be/3Z2wxmhFT6Q?si=EzcJL6PW6sFXVKEE" },
                { title: "Arrangement Example 2", url: "https://www.youtube.com/watch?v=VIDEO_ID_5" }
            ]
        },
        {
            category: "Instrumental Recreation",
            videos: [
                { title: "Instrumental Recreation 1", url: "https://youtu.be/0XLgswOFi7s?si=AVLHeS6Xm8a99zHE" },
                { title: "Instrumental Recreation 2", url: "https://www.youtube.com/watch?v=VIDEO_ID_7" }
            ]
        }
    ],

    footer: "© 2026 Hortensia"
};

/* =========================================================================
   RENDERING LOGIC — no pricing values below this line
   ========================================================================= */

const ICONS = {
    Instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg>',
    YouTube: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10.5 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none"/></svg>',
    TikTok: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14 3v10.6a3.4 3.4 0 1 1-3-3.37"/><path d="M14 3a5 5 0 0 0 5 5"/></svg>',
    Discord: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8 5.5C6.5 5.9 5.3 6.5 4.3 7.3 2.8 10.6 2.3 13.9 2.5 17.1c1.4 1 3 1.7 4.7 2.1l.9-1.5"/><path d="M16 5.5c1.5.4 2.7 1 3.7 1.8 1.5 3.3 2 6.6 1.8 9.8-1.4 1-3 1.7-4.7 2.1l-.9-1.5"/><ellipse cx="9" cy="13" rx="1.3" ry="1.5" fill="currentColor" stroke="none"/><ellipse cx="15" cy="13" rx="1.3" ry="1.5" fill="currentColor" stroke="none"/></svg>',
    X: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 4l16 16M20 4L4 20"/></svg>'
};

function levelMeter(level) {
    // small studio-meter flourish next to multi-tier prices (1–3 bars)
    let bars = "";
    for (let i = 1; i <= 3; i++) {
        bars += `<span class="meter-bar${i <= level ? " is-lit" : ""}"></span>`;
    }
    return `<span class="meter" aria-hidden="true">${bars}</span>`;
}

function renderTierCard(tier) {
    return `
    <div class="tier">
      <div class="tier-top">
        <span class="tier-duration">${tier.duration}</span>
        ${tier.note ? `<span class="tier-note">${tier.note}</span>` : ""}
      </div>
      <div class="tier-prices">
        <div class="price-block">
          <span class="price-label">IDR</span>
          <span class="price-value">${keepUnitTogether("Rp" + tier.idr)}</span>
        </div>
        <div class="price-block price-block--intl">
          <span class="price-label">International</span>
          <span class="price-value">${keepUnitTogether(tier.international)}</span>
        </div>
        ${levelMeter(tier.level)}
      </div>
    </div>`;
}

function renderMultiTierService(service) {
    return `
    <article class="service service--multi fade-in">
      <header class="service-header">
        <h3 class="service-name">${service.name}</h3>
        <p class="service-detail">${service.detail}</p>
      </header>
      <div class="tier-list">
        ${service.tiers.map(renderTierCard).join("")}
      </div>
    </article>`;
}

function renderSimpleService(service, isAddon) {
    return `
    <article class="service service--simple${isAddon ? " service--addon" : ""} fade-in">
      <header class="service-header">
        <h3 class="service-name">${service.name}</h3>
        <p class="service-detail">${service.detail}</p>
      </header>
      <div class="simple-prices">
        <div class="price-block">
          <span class="price-label">IDR</span>
          <span class="price-value">${keepUnitTogether(service.idr)}</span>
        </div>
        <div class="price-block price-block--intl">
          <span class="price-label">International</span>
          <span class="price-value">${keepUnitTogether(service.international)}</span>
        </div>
      </div>
    </article>`;
}

function renderRushCard(service) {
    return `
    <article class="service service--rush fade-in">
      <div class="rush-tag">
        <span class="rush-dot" aria-hidden="true"></span>
        Limited availability
      </div>
      <header class="service-header">
        <h3 class="service-name">${service.name}</h3>
      </header>
      <div class="simple-prices">
        <div class="price-block">
          <span class="price-label">IDR</span>
          <span class="price-value">${keepUnitTogether(service.idr)}</span>
        </div>
        <div class="price-block price-block--intl">
          <span class="price-label">International</span>
          <span class="price-value">${keepUnitTogether(service.international)}</span>
        </div>
      </div>
      <p class="service-detail">${service.detail}</p>
      <p class="rush-warning">${service.warning}</p>
    </article>`;
}

function fixIdrPrefix(str) {
    // Adds "Rp" in front of plain numeric IDR values, leaves +/ranges untouched visually via CSS ordering
    if (/^\d/.test(str)) return "Rp" + str;
    return str; // already has +, or a range starting with a currency-neutral char
}

function keepUnitTogether(str) {
    // On narrow screens a price like "50k–80k / Layer" can wrap right after
    // the "/", stranding the unit word alone on its own line. A non-breaking
    // space between "/" and the word keeps them together, so if it wraps at
    // all it wraps as a clean "50k–80k" / "/ Layer" pair instead.
    return str.replace(/\/ /g, "/\u00A0");
}

function renderAdditionalService(service) {
    return `
    <article class="service service--simple fade-in">
      <header class="service-header">
        <h3 class="service-name">${service.name}</h3>
        <p class="service-detail">${service.detail}</p>
      </header>
      <div class="simple-prices">
        <div class="price-block">
          <span class="price-label">IDR</span>
          <span class="price-value">${keepUnitTogether(fixIdrPrefix(service.idr))}</span>
        </div>
        <div class="price-block price-block--intl">
          <span class="price-label">International</span>
          <span class="price-value">${keepUnitTogether(service.international)}</span>
        </div>
      </div>
    </article>`;
}

function renderHero() {
    document.getElementById("brand-name").textContent = pricelist.brandName;
    document.getElementById("brand-tagline").textContent = pricelist.tagline;
    const avatar = document.getElementById("brand-avatar");
    avatar.src = pricelist.avatar;
    avatar.alt = pricelist.brandName + " — profile photo";
    avatar.onerror = () => {
        avatar.replaceWith(makePlaceholderAvatar());
    };
}

function makePlaceholderAvatar() {
    const div = document.createElement("div");
    div.className = "avatar avatar--placeholder";
    div.setAttribute("role", "img");
    div.setAttribute("aria-label", pricelist.brandName + " — profile photo placeholder");
    div.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="8.5" r="3.4"/><path d="M5 20c1.2-3.8 4-5.8 7-5.8s5.8 2 7 5.8"/></svg>`;
    return div;
}

function renderMainServices() {
    const container = document.getElementById("main-services");
    container.innerHTML = pricelist.mainServices.map(s => {
        if (s.type === "multi-tier") return renderMultiTierService(s);
        if (s.type === "rush") return renderRushCard(s);
        return renderSimpleService(s, s.type === "addon");
    }).join("");
}

function renderAdditionalServices() {
    const container = document.getElementById("additional-services");
    container.innerHTML = pricelist.additionalServices.map(renderAdditionalService).join("");
}

function renderOrderButton() {
    const btn = document.getElementById("order-button");
    btn.href = pricelist.orderUrl;
    btn.target = "_blank";
    btn.rel = "noopener noreferrer";
}

function renderSocials() {
    const container = document.getElementById("socials");
    const active = pricelist.socials.filter(s => s.url && s.url.trim().length > 0);
    if (active.length === 0) {
        container.style.display = "none";
        return;
    }
    container.innerHTML = active.map(s => `
      <a class="social-link" href="${s.url}" target="_blank" rel="noopener noreferrer" aria-label="${s.name}">
        ${ICONS[s.name] || ""}
        <span>${s.name}</span>
      </a>
    `).join("");
}

function extractYouTubeId(url) {
    if (!url) return null;
    const patterns = [
        /youtu\.be\/([\w-]{11})/,
        /youtube\.com\/watch\?v=([\w-]{11})/,
        /youtube\.com\/shorts\/([\w-]{11})/,
        /youtube\.com\/embed\/([\w-]{11})/
    ];
    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match) return match[1];
    }
    return null;
}

function renderVideoCard(video) {
    const id = extractYouTubeId(video.url);
    if (!id) return "";
    return `
      <div class="video-card">
        <div class="video-frame">
          <iframe
            src="https://www.youtube-nocookie.com/embed/${id}"
            title="${video.title || pricelist.brandName + " demo"}"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
        ${video.title ? `<p class="video-title">${video.title}</p>` : ""}
      </div>`;
}

function renderVideo() {
    const section = document.querySelector(".section--video");
    const container = document.getElementById("video-embed");

    const categories = (pricelist.demoVideos || [])
        .map(cat => ({ category: cat.category, cards: (cat.videos || []).map(renderVideoCard).filter(Boolean) }))
        .filter(cat => cat.cards.length > 0);

    if (categories.length === 0) {
        section.style.display = "none";
        return;
    }

    container.innerHTML = categories.map(cat => `
      <div class="video-category">
        <h3 class="video-category-heading">${cat.category}</h3>
        <div class="video-scroll">
          ${cat.cards.join("")}
        </div>
      </div>
    `).join("");
}

function renderFooter() {
    document.getElementById("footer-text").textContent = pricelist.footer;
}

function renderMeta() {
    document.title = `${pricelist.brandName} — ${pricelist.tagline}`;
}

function initFadeInObserver() {
    const items = document.querySelectorAll(".fade-in");
    if (!("IntersectionObserver" in window)) {
        items.forEach(el => el.classList.add("is-visible"));
        return;
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach(el => observer.observe(el));

    // Safety net: guarantee every card is visible even if an observer
    // callback is ever missed (e.g. very fast programmatic scrolls).
    window.setTimeout(() => {
        items.forEach(el => el.classList.add("is-visible"));
    }, 2500);
}

function init() {
    renderMeta();
    renderHero();
    renderMainServices();
    renderAdditionalServices();
    renderOrderButton();
    renderSocials();
    renderVideo();
    renderFooter();
    initFadeInObserver();
}

document.addEventListener("DOMContentLoaded", init);
