/**
 * CENOVA MARINE — MED10 Architecture Interactive Script
 * Sticky Header, Swiper Sliders, Certificate PDF Viewer, EN/TR Switcher & RFQ
 */

const translations = {
  en: {
    topFollow: "Follow Us & 24/7 Desk",
    navHome: "Home",
    navServices: "Services",
    megaAll: "All 360° Maritime Services",
    navCerts: "Class Approvals",
    navOps: "Operations & Ports",
    navDivisions: "Service Scopes",
    navContact: "Contact",
    navQuoteBtn: "Request Vessel Quote",
    heroEyebrow: "SHIP SUPPLY <span>•</span> IN-WATER SERVICES <span>•</span> MARINE SALVAGE",
    heroTitle: "360° Class-Approved<br /><span>Maritime Solutions</span>",
    heroDesc: "From IACS class-approved In-Water Surveys (UWILD), hull cleaning, and propeller polishing to IMPA-standard ship supply and 24/7 emergency salvage—we manage all your vessel requirements across the Turkish Straits and ports from a single point.",
    ben1: "In-Water Class Survey (UWILD)",
    ben2: "Hull Cleaning & Propeller Polishing",
    ben3: "Underwater Welding & Cutting",
    ben4: "IMPA / ISSA Ship Supply",
    ben5: "24/7 Straits Transit Delivery",
    ben6: "Emergency Salvage & Refloating",
    heroBtn1: "Request Vessel Quote",
    heroBtn2: "8x Class Certificates",
    certsKicker: "OFFICIAL CLASS APPROVALS",
    certsTitle: "Approved by 8 Leading Classification Societies",
    certsDesc: "Click on any classification society card below to inspect or download our official In-Water Survey approval certificate (PDF).",
    servKicker: "OUR CORE CAPABILITIES",
    servTitle: "All Maritime Solutions Under One Roof",
    servDesc: "Combining class-approved underwater engineering, general ship supply, and 24/7 emergency salvage response.",
    featBadge: "8x IACS Class Approved Division",
    featTitle: "In-Water Survey (UWILD) & Underwater Engineering",
    featDesc: "We conduct class-approved In-Water Surveys (UWILD), pre-purchase & intermediate surveys, shaft deep gauge & rudder clearance measurements, ultrasonic NDT inspections, and underwater wet welding/cutting with twin-channel HD CCTV video reporting.",
    featCta: "Book Diving & Survey Team",
    hCard1Title: "Ship Hull Cleaning & Propeller Super-Polishing",
    hCard1Desc: "Full flat bottom & vertical side hull cleaning, Rubert Grade-A propeller polishing (3–8% fuel savings), sea chest grids, and box cooler cleaning.",
    hCard2Title: "Ship Supply, Technical Stores & Transit Provisions",
    hCard2Desc: "24/7 IMPA/ISSA deck & engine stores, OEM spare parts, SOLAS safety gear, and fresh/frozen provisions delivered via fast launch in Turkish Straits.",
    hCard3Title: "Marine Salvage, Refloating & Wreck Removal",
    hCard3Desc: "24/7 emergency casualty response, grounded vessel refloating, underwater collision patching, high-capacity dewatering, and anchor/wreck recovery.",
    opsKicker: "OPERATIONS & PORT COVERAGE",
    opsTitle: "24/7 Operations Across Turkish Straits & Ports",
    opsDesc: "Rapid mobilization from our Istanbul HQ to all anchorages, shipyards, and international waters.",
    pkgKicker: "COMPLETE TECHNICAL SCOPE",
    pkgTitle: "Three Core Maritime Divisions",
    pkgDesc: "Detailed breakdown of our In-Water Services, Ship Supply, and Marine Salvage capabilities."
  },
  tr: {
    topFollow: "Bizi Takip Edin & 7/24 Hat",
    navHome: "Anasayfa",
    navServices: "Hizmetler",
    megaAll: "Tüm 360° Denizcilik Hizmetleri",
    navCerts: "Klas Sertifikaları",
    navOps: "Operasyon & Limanlar",
    navDivisions: "Hizmet Paketleri",
    navContact: "İletişim",
    navQuoteBtn: "Hızlı Teklif Al",
    heroEyebrow: "GEMİ TEDARİK <span>•</span> SUALTI HİZMETLERİ <span>•</span> GEMİ KURTARMA",
    heroTitle: "Denizcilikte 360°<br /><span>Klas Onaylı Çözümler</span>",
    heroDesc: "8 büyük Klas Kuruluşu onaylı Sualtı Sörveyleri (UWILD), karina temizliği ve pervane polisajından IMPA standartlarında gemi tedariği ve 7/24 acil gemi kurtarma operasyonlarına kadar tüm ihtiyaçlarınızı tek noktadan yönetiyoruz.",
    ben1: "Klas Onaylı Sualtı Sörveyi (UWILD)",
    ben2: "Karina Temizliği & Pervane Polisajı",
    ben3: "Sualtı Kaynak & Kesim Onarımı",
    ben4: "IMPA / ISSA Gemi Tedarik",
    ben5: "7/24 Boğaz Transit İkmal",
    ben6: "Acil Gemi Kurtarma & Yüzdürme",
    heroBtn1: "Ücretsiz Teklif Al",
    heroBtn2: "8x Klas Sertifikası",
    certsKicker: "RESMİ KLAS ONAYLARIMIZ",
    certsTitle: "8 Uluslararası Klas Kuruluşu Tarafından Onaylı",
    certsDesc: "Resmi Sualtı Sörvey ve Dalgıçlık onay sertifikalarımızı (PDF) görüntülemek için ilgili klas kuruluşuna tıklayın.",
    servKicker: "HİZMETLERİMİZ",
    servTitle: "Filonuz İçin Tüm Denizcilik Çözümleri",
    servDesc: "Klas onaylı sualtı mühendisliği, genel gemi tedariği ve 7/24 acil kurtarma hizmetleri tek çatı altında.",
    featBadge: "8x IACS Klas Onaylı Bölüm",
    featTitle: "In-Water Survey (UWILD) & Sualtı Mühendisliği",
    featDesc: "Çift kanallı HD CCTV video raporlama ile klas onaylı UWILD sörveyleri, satın alma öncesi (pre-purchase) ve ara sörveyler, şaft ve dümen boşluk ölçümleri, NDT muayene ve sualtı kaynak/kesim operasyonları.",
    featCta: "Dalgıç & Sörvey Ekibi Talep Et",
    hCard1Title: "Gemi Karina Temizliği & Pervane Polisajı",
    hCard1Desc: "Karina ve borda temizliği, %3–8 yakıt tasarrufu sağlayan Rubert Grade-A pervane polisajı, kinistin ızgarası ve box cooler temizliği.",
    hCard2Title: "Ship Supply, Teknik Malzeme & Transit Kumanya",
    hCard2Desc: "İstanbul ve Çanakkale Boğazı transit geçişlerinde hızlı ikmal botlarımızla 7/24 IMPA/ISSA teknik malzeme, yedek parça, SOLAS ve kumanya.",
    hCard3Title: "Gemi Kurtarma (Salvage), Yüzdürme & Batık Çıkarma",
    hCard3Desc: "7/24 acil kaza müdahalesi, karaya oturan gemi yüzdürme, sualtı çarpışma yaması, yüksek kapasiteli su tahliyesi ve çapa/batık çıkarma.",
    opsKicker: "OPERASYON & LİMAN AĞIMIZ",
    opsTitle: "Türk Boğazları, Tersaneler ve Limanlarda 7/24 Operasyon",
    opsDesc: "İstanbul merkezimizden tüm demir yerlerine, Tuzla/Yalova tersanelerine ve uluslararası sulara hızlı mobilizasyon.",
    pkgKicker: "TEKNİK HİZMET KAPSAMI",
    pkgTitle: "Üç Ana Faaliyet Alanımız",
    pkgDesc: "Sualtı Hizmetleri, Gemi Tedarik (Ship Supply) ve Gemi Kurtarma (Salvage) bölümlerimizin detaylı hizmet listesi."
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // 1. Sticky Navbar (.med-sticky)
  const navbar = document.getElementById("medNavbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 45) {
      navbar.classList.add("med-sticky");
    } else {
      navbar.classList.remove("med-sticky");
    }
  });

  // 2. Continuous Swiper Brand / Class Certificate Slider
  if (typeof Swiper !== "undefined") {
    new Swiper(".med-brand-slider", {
      slidesPerView: 2,
      spaceBetween: 16,
      loop: true,
      speed: 3500,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
      breakpoints: {
        576: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        992: { slidesPerView: 5 },
        1200: { slidesPerView: 6 }
      }
    });

    // 3. Operations & Ports Swiper Slider
    new Swiper(".med-project-slider", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: ".med-project-next",
        prevEl: ".med-project-prev"
      },
      breakpoints: {
        576: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
        1200: { slidesPerView: 4 }
      }
    });
  }

  // 4. Language Switcher (EN / TR)
  const langBtns = document.querySelectorAll(".lang-btn");
  function setLanguage(lang) {
    const dict = translations[lang] || translations.en;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });
    langBtns.forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
  }

  langBtns.forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.getAttribute("data-lang")));
  });

  // 5. Certificate PDF Modal Viewer
  const certModalBackdrop = document.getElementById("certModalBackdrop");
  const certModalTitle = document.getElementById("certModalTitle");
  const certModalFrame = document.getElementById("certModalFrame");
  const certModalDownload = document.getElementById("certModalDownload");
  const certModalClose = document.getElementById("certModalClose");

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest(".cert-trigger");
    if (trigger && certModalBackdrop) {
      const pdfUrl = trigger.getAttribute("data-pdf");
      const title = trigger.getAttribute("data-title");
      certModalTitle.textContent = title + " — Approval Certificate";
      certModalFrame.src = pdfUrl;
      certModalDownload.href = pdfUrl;
      certModalBackdrop.classList.add("open");
    }
  });

  function closeCertModal() {
    if (certModalBackdrop) {
      certModalBackdrop.classList.remove("open");
      certModalFrame.src = "";
    }
  }

  if (certModalClose) certModalClose.addEventListener("click", closeCertModal);
  if (certModalBackdrop) {
    certModalBackdrop.addEventListener("click", (e) => {
      if (e.target === certModalBackdrop) closeCertModal();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeCertModal();
  });

  // 6. Select Service Package -> Pre-fill RFQ Form
  const rfqService = document.getElementById("rfqService");
  document.querySelectorAll(".quote-select-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const val = btn.getAttribute("data-service");
      if (rfqService && val) {
        rfqService.value = val;
      }
    });
  });

  // 7. Vessel RFQ Dispatch (WhatsApp & Email)
  const rfqForm = document.getElementById("vesselRfqForm");
  const btnEmail = document.getElementById("btnDispatchEmail");

  function getRfqData() {
    const vessel = document.getElementById("rfqVessel")?.value.trim() || "TBN";
    const port = document.getElementById("rfqPort")?.value.trim() || "Turkish Straits / Port";
    const eta = document.getElementById("rfqEta")?.value.trim() || "Prompt";
    const contact = document.getElementById("rfqContact")?.value.trim() || "";
    const service = document.getElementById("rfqService")?.value || "Maritime Service";
    const notes = document.getElementById("rfqNotes")?.value.trim() || "";

    return {
      vessel,
      port,
      service,
      text:
        `CENOVA MARINE — VESSEL INQUIRY\n` +
        `--------------------------------\n` +
        `Vessel / IMO: ${vessel}\n` +
        `Port / Anchorage: ${port}\n` +
        `ETA: ${eta}\n` +
        `Service: ${service}\n` +
        `Contact: ${contact}\n` +
        (notes ? `Notes: ${notes}\n` : "")
    };
  }

  if (rfqForm) {
    rfqForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const d = getRfqData();
      window.open(`https://wa.me/905321604351?text=${encodeURIComponent(d.text)}`, "_blank", "noopener");
    });
  }

  if (btnEmail) {
    btnEmail.addEventListener("click", () => {
      const d = getRfqData();
      const subject = `Vessel Inquiry: ${d.vessel} at ${d.port} (${d.service})`;
      window.location.href = `mailto:info@cenovamarine.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(d.text)}`;
    });
  }
});
