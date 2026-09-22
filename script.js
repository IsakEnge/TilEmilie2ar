// ===== KONFIGURERBART INNHOLD =====

// ===== VÅR TIDSLINJE =====
const timeline = [
    {
      date: "02.09.2024",
      title: "Første gang vi møttes",
      text: "Jeg kommer aldri til å glemme den dagen",
      image: "images/timeline/01.png"
    },
    {
        date: "08.09.2024",
        title: "Festen hos basse",
        text: "Dette var en opplevelse... Det var da vi ble orndeltig kjent!",
        image: "images/timeline/02.png"
    },
    {
        date: "16.09.2024",
        title: "Første gang du var her",
        text: "Dette var første gang du var hjemme hos meg!",
        image: "images/timeline/03.png"
    },
    {
        date: "20.09.2024",
        title: "Den berømte spillkvelden...",
        text: "Dette ar første gang vi holdt hender og da folk begynte å skjønne det godt...",
        image: "images/timeline/04.png"
    },
    {
      date: "22.09.2024",
      title: "Dagen vi ble sammen",
      text: "Dette var en innteresant kveld... Men veldig romantisk! Og the notebook hehe...",
      image: "images/timeline/05.png"
    },
    {
        date: "22.09.2024",
        title: "Dagen derpå",
        text: "Kamp for basse og hurramegrundt! Første gang du fortalte det til moren din også...",
        image: "images/timeline/06.png"
    },
    {
        date: "29.09.2024",
        title: "Første overnatting",
        text: "Her var vi innom mange forskjellige temaer... Flørste og siste gang vi har hatt overnatting sammen med basse...",
        image: "images/timeline/07.png"
    },
    {
        date: "Uke 40 2024",
        title: "Vår første uke 40",
        text: "Har var det mange fine sanger! Og veldig mye tid med hveradre og kosing! Vi hadde noen fine overnattinger også...",
        image: "images/timeline/08.png"
    },
    {
      date: "Desember 2024",
      title: "Vår første juleperiode sammen",
      text: "Masse godteri, pynt og julekos!",
      image: "images/timeline/09.png"
    },
    {
      date: "15.12.2024",
      title: "Jul i vinterland",
      text: "Veldig koselig oslotur og tur til jul i vinterland!",
      image: "images/timeline/10.png"
    },
    {
        date: "22.01.2025",
        title: "4 måneder sammen",
        text: "Det var en veldig god gulerotkake med veldig fin pynt!!",
        image: "images/timeline/11.png"
    },
    {
        date: "Uke 7 2025",
        title: "Våres første uke 7 sammen",
        text: "Whitches of Eastwick! Har hadde vi mange koselge overnattinger!!!",
        image: "images/timeline/12.png"
    },
    {
        date: "Vinterferie 2025",
        title: "Vinterferien 2025!",
        text: "Vi sto masse på slalom og var å vrådal! Vi lkte i snø og var kjempesøte!",
        image: "images/timeline/13.png"
    },    
    {
        date: "22.03.2025",
        title: "6 måneder sammen",
        text: "Dette var først eordentlige daten vår! Litt kleint da...",
        image: "images/timeline/14.png"
    },    
    {
        date: "19.04.25",
        title: "Påska 2025",
        text: "Vi var på hytta til sunniva! Masse godeteri og masse kos!",
        image: "images/timeline/15.png"
    },    
    {
        date: "17.05.25",
        title: "17 mai 2025!",
        text: "Vår første 17 mai sammen!!!",
        image: "images/timeline/16.png"
    },    
    {
        date: "20-23.06.2025",
        title: "Omlidstranda 2025",
        text: "Masse bading og fine turer! Velldig koselig bobiltur!",
        image: "images/timeline/17.png"
    },    
    {
        date: "17-18.07.2025",
        title: "Båt/telturen 2025!",
        text: "Har var vi for første gang på hellesøya! Din førts båttur, min første overnating, vår første tur på hellesøya.",
        image: "images/timeline/18.png"
    },
    {
        date: "22.08.2025",
        title: "11 måneder + fyrverkerikonsert!",
        text: "Her sang vi bde konsert og vi hadde 11 mpneders jubeleum!",
        image: "images/timeline/19.png"
    },
    {
        date: "13-14.09.2025",
        title: "Dyrskun 2025",
        text: "Dette var vår første dyrskun sammen! Vi spiste masse thaimat og så i veldig mange boder!",
        image: "images/timeline/20.png"
    },
    {
        date: "27.09.2025",
        title: "Feiringen av 1 års jubeleum!",
        text: "itt skuffet gjeng etter at vi ikke fikk spist på pir 4! Men velid hyggelig for det! og som alltid... Litt kleint...",
        image: "images/timeline/21.png"
    },
    {
        date: "Uke 40 2025",
        title: "Vår 2 Uke 40",
        text: "Dette var vår vandre uke 40 sammen! OG var ganske annerledes enn den første!! Men den var veldig veldig cozy!!",
        image: "images/timeline/22.png"
    },
    {
        date: "21.11.2025",
        title: "Emilie 18år!",
        text: "Dette var DIN 18 års dag!! Det var en veldig koselig dag og vi feiret og koste masse!",
        image: "images/timeline/23.png"
    },
    {
        date: "29.11.2025",
        title: "Emilie slipp!",
        text: "MICDROP BACK IT UP BACK IT UP!",
        image: "images/timeline/24.png"
    },
    {
        date: "Desember 2025",
        title: "Juletiden 2025",
        text: "Fortsatt masse kos og godteri! Vi er så søt!",
        image: "images/timeline/25.png"
    },
    {
        date: "Uke 7 2026",
        title: "Vår 2 uke 7",
        text: "Veldig koselig!! Denne gangen var det duket for Edvardt Grieg",
        image: "images/timeline/26.png"
    },
    {
        date: "Vinterferien 2026",
        title: "Slalom Og vinterferie",
        text: "Vi har stått masse på slalom og kost på vrådal i år igjen",
        image: "images/timeline/27.png"
    },
    {
        date: "17.05.2026",
        title: "17. mai 2026",
        text: "Dette var vår 2 17 mai sammen! Veldig koseilg som russ for din del og feiring!",
        image: "images/timeline/28.png"
    },
    {
        date: "18.06.2026",
        title: "Vitnemålsutdeling Emilie",
        text: "Tenk! Endleig er du ferdig på skolen!",
        image: "images/timeline/29.png"
    },
    {
        date: "03.07.2026",
        title: "Båttur med birk",
        text: "Dette er 2 overnattingsturen vår! Vi var med brk og det var vedlig koselig!",
        image: "images/timeline/30.png"
    },
    {
        date: "12.09.2026",
        title: "Isak 18år! + Dyrskun 2026",
        text: "Her var det mye som skjedde! Både bursdag go dyrskun! Veldig minnerik dag!",
        image: "images/timeline/31.png"
    },
    {
      date: "22.09.2026",
      title: "2 år ❤️",
      text: "To år med deg. Og jeg ville fortsatt valgt deg.",
      image: "images/timeline/32.png"
    }, 

  ];
  
  // ===== BILDEGALLERI =====
  const galleryImages = [
    "images/gallery/01.png",
    "images/gallery/02.png",
    "images/gallery/03.png",
    "images/gallery/04.png",
    "images/gallery/05.png",
    "images/gallery/06.png",
    "images/gallery/07.png",
    "images/gallery/08.png",
    "images/gallery/09.png",
    "images/gallery/10.png",
    "images/gallery/11.png",
    "images/gallery/12.png",
    "images/gallery/13.png",
    "images/gallery/14.png",
    "images/gallery/15.png",
    "images/gallery/16.png"
  ];
  
  // ===== TING JEG ELSKER =====
  const loveThings = [
    "Smilet ditt",
    "Måten du ler på",
    "De små tingene du gjør",
    "Hvordan du alltid klarer å gjøre en dag bedre",
    "Alle minnene våre",
    "Alle gangene vi spiser sushi",
    "Alle gangene vi ser på The Rookie",
    "At du bare er deg",
    "Og selvfølgelig… deg ♡"
  ];
  
  // ===== BREV =====
  const letterTextContent = `
 Tenk Emilie!! To år!! Det er ganske sykt! Jeg er så sinnsykt takknemlig for at jeg får 
 lov til å være sammen med deg og jeg setter så sinnsykt stor pris på alt det du gjør for meg!

 Jeg var helt sikker på fra dag 1 at dette forholdet var noe som kom til å vare! 
 Og jeg er helt sikker på at vi kommer til å vare i mange år fremover!

 Tusen takk for alle studnene jeg får ha sammen med deg Emilie!

 Jeg elsker deg uendelig masse!
  `;
  
  // ===== SANGINFORMASJON =====
  const songInfo = {
    title: "Our Song",
    artist: "Isak & Emilie",
    cover: "images/hero.png",
    file: "music/our-song.mp3"
  };
  
  // ===== STARTDATO FOR TELLER =====
  const startDate = new Date(2024, 8, 22); // 22.09.2024 (måned 8 = september)
  
  // ===== FUNKSJONER =====
  
  document.addEventListener("DOMContentLoaded", () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  
    // NAVIGASJON
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");
  
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  
    // HERO KNAPP
    const startJourneyBtn = document.getElementById("startJourneyBtn");
    startJourneyBtn.addEventListener("click", () => {
      document.getElementById("story").scrollIntoView({ behavior: "smooth" });
    });
  
    // BREVTEKST
    const letterTextEl = document.getElementById("letterText");
    letterTextEl.textContent = letterTextContent;
  
    // MUSIKKSPILLER
    const musicTitleEl = document.getElementById("musicTitle");
    const musicArtistEl = document.getElementById("musicArtist");
    const musicCoverEl = document.getElementById("musicCover");
    const musicAudio = document.getElementById("musicAudio");
    const musicPlayPause = document.getElementById("musicPlayPause");
    const musicProgressBar = document.getElementById("musicProgressBar");
  
    musicTitleEl.textContent = songInfo.title;
    musicArtistEl.textContent = songInfo.artist;
    musicCoverEl.src = songInfo.cover;
    musicAudio.src = songInfo.file;
  
    musicPlayPause.addEventListener("click", () => {
      if (musicAudio.paused) {
        musicAudio.play();
        musicPlayPause.textContent = "Pause";
      } else {
        musicAudio.pause();
        musicPlayPause.textContent = "Play";
      }
    });
  
    musicAudio.addEventListener("timeupdate", () => {
      if (musicAudio.duration) {
        const progress = (musicAudio.currentTime / musicAudio.duration) * 100;
        musicProgressBar.style.width = `${progress}%`;
      }
    });
  
    musicAudio.addEventListener("ended", () => {
      musicPlayPause.textContent = "Play";
      musicProgressBar.style.width = "0%";
    });
  
    // TIDSLINJE
    const timelinePointsContainer = document.getElementById("timelinePoints");
    const timelineCard = document.getElementById("timelineCard");
    const timelineCardImage = document.getElementById("timelineCardImage");
    const timelineCardDate = document.getElementById("timelineCardDate");
    const timelineCardTitle = document.getElementById("timelineCardTitle");
    const timelineCardText = document.getElementById("timelineCardText");
  
    let activeTimelineIndex = 0;
  
    function renderTimelinePoints() {
      timelinePointsContainer.innerHTML = "";
      timeline.forEach((item, index) => {
        const point = document.createElement("button");
        point.className = "timeline-point";
        point.setAttribute("type", "button");
  
        const marker = document.createElement("div");
        marker.className = "timeline-point-marker";
        const markerIcon = document.createElement("span");
        markerIcon.textContent = "♡";
        marker.appendChild(markerIcon);
  
        const dateEl = document.createElement("div");
        dateEl.className = "timeline-point-date";
        dateEl.textContent = item.date;
  
        const titleEl = document.createElement("div");
        titleEl.className = "timeline-point-title";
        titleEl.textContent = item.title;
  
        point.appendChild(marker);
        point.appendChild(dateEl);
        point.appendChild(titleEl);
  
        point.addEventListener("click", () => {
          setActiveTimelineIndex(index);
          scrollPointIntoView(point);
        });
  
        timelinePointsContainer.appendChild(point);
      });
    }
  
    function setActiveTimelineIndex(index) {
      activeTimelineIndex = index;
      const points = timelinePointsContainer.querySelectorAll(".timeline-point");
      points.forEach((p, i) => {
        p.classList.toggle("active", i === index);
      });
  
      const item = timeline[index];
      timelineCardDate.textContent = item.date;
      timelineCardTitle.textContent = item.title;
      timelineCardText.textContent = item.text;
      timelineCardImage.src = item.image;
  
      if (!prefersReducedMotion) {
        timelineCard.classList.remove("visible");
        void timelineCard.offsetWidth;
        timelineCard.classList.add("visible");
      } else {
        timelineCard.classList.add("visible");
      }
    }
  
    function scrollPointIntoView(point) {
      const wrapper = document.querySelector(".timeline-wrapper");
      const rect = point.getBoundingClientRect();
      const wrapperRect = wrapper.getBoundingClientRect();
  
      const isVertical = window.innerWidth <= 768;
      if (!isVertical) {
        const offset = rect.left - wrapperRect.left - wrapperRect.width / 2 + rect.width / 2;
        wrapper.scrollBy({ left: offset, behavior: "smooth" });
      } else {
        const offset = rect.top - wrapperRect.top - wrapperRect.height / 2 + rect.height / 2;
        wrapper.scrollBy({ top: offset, behavior: "smooth" });
      }
    }
  
    renderTimelinePoints();
    setActiveTimelineIndex(0);
  
    // GALLERI
    const galleryGrid = document.getElementById("galleryGrid");
    let currentLightboxIndex = 0;
  
    function renderGallery() {
      galleryGrid.innerHTML = "";
      galleryImages.forEach((src, index) => {
        const item = document.createElement("div");
        item.className = "gallery-item reveal";
  
        const img = document.createElement("img");
        img.src = src;
        img.alt = `Galleri-bilde ${index + 1}`;
        img.onerror = () => img.classList.add("img-placeholder");
  
        item.appendChild(img);
  
        item.addEventListener("click", () => {
          openLightbox(index);
        });
  
        galleryGrid.appendChild(item);
      });
    }
  
    renderGallery();
  
    // LIGHTBOX
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxClose = document.getElementById("lightboxClose");
    const lightboxPrev = document.getElementById("lightboxPrev");
    const lightboxNext = document.getElementById("lightboxNext");
  
    function openLightbox(index) {
      currentLightboxIndex = index;
      lightboxImage.src = galleryImages[index];
      lightbox.classList.add("active");
    }
  
    function closeLightbox() {
      lightbox.classList.remove("active");
    }
  
    function showPrevImage() {
      currentLightboxIndex = (currentLightboxIndex - 1 + galleryImages.length) % galleryImages.length;
      lightboxImage.src = galleryImages[currentLightboxIndex];
    }
  
    function showNextImage() {
      currentLightboxIndex = (currentLightboxIndex + 1) % galleryImages.length;
      lightboxImage.src = galleryImages[currentLightboxIndex];
    }
  
    lightboxClose.addEventListener("click", closeLightbox);
    lightboxPrev.addEventListener("click", showPrevImage);
    lightboxNext.addEventListener("click", showNextImage);
  
    lightbox.addEventListener("click", (e) => {
      if (e.target.classList.contains("lightbox-backdrop")) {
        closeLightbox();
      }
    });
  
    // Touch for mobil
    let touchStartX = null;
    lightboxImage.addEventListener("touchstart", (e) => {
      touchStartX = e.touches[0].clientX;
    });
  
    lightboxImage.addEventListener("touchend", (e) => {
      if (touchStartX === null) return;
      const diffX = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(diffX) > 40) {
        if (diffX > 0) showPrevImage();
        else showNextImage();
      }
      touchStartX = null;
    });
  
    // DET JEG ELSKER VED DEG
    const loveCardsContainer = document.getElementById("loveCards");
    const showMoreLoveBtn = document.getElementById("showMoreLoveBtn");
    let loveIndex = 0;
  
    function renderLoveCards(initialCount = 3) {
      loveCardsContainer.innerHTML = "";
      loveIndex = 0;
      for (let i = 0; i < initialCount && i < loveThings.length; i++) {
        addLoveCard(loveThings[i]);
      }
      loveIndex = initialCount;
    }
  
    function addLoveCard(text) {
      const card = document.createElement("div");
      card.className = "love-card";
      const p = document.createElement("p");
      p.textContent = text;
      card.appendChild(p);
      loveCardsContainer.appendChild(card);
  
      if (!prefersReducedMotion) {
        requestAnimationFrame(() => {
          card.classList.add("visible");
        });
      } else {
        card.classList.add("visible");
      }
    }
  
    renderLoveCards();
  
    showMoreLoveBtn.addEventListener("click", () => {
      if (loveIndex < loveThings.length) {
        addLoveCard(loveThings[loveIndex]);
        loveIndex++;
      } else {
        showMoreLoveBtn.disabled = true;
        showMoreLoveBtn.textContent = "Alt dette. Og mer. ♡";
      }
    });
  
    // TELLER
    const yearsCountEl = document.getElementById("yearsCount");
    const monthsCountEl = document.getElementById("monthsCount");
    const daysCountEl = document.getElementById("daysCount");
    const hoursCountEl = document.getElementById("hoursCount");
    const minutesCountEl = document.getElementById("minutesCount");
    const secondsCountEl = document.getElementById("secondsCount");
  
    function updateCounter() {
      const now = new Date();
      let diffMs = now - startDate;
  
      if (diffMs < 0) diffMs = 0;
  
      const diffSeconds = Math.floor(diffMs / 1000);
      const diffMinutes = Math.floor(diffSeconds / 60);
      const diffHours = Math.floor(diffMinutes / 60);
      const diffDays = Math.floor(diffHours / 24);
  
      // Enkel år/måned/dag-approx (for romantisk, ikke juridisk presisjon)
      const years = Math.floor(diffDays / 365);
      const remainingDaysAfterYears = diffDays - years * 365;
      const months = Math.floor(remainingDaysAfterYears / 30);
      const days = remainingDaysAfterYears - months * 30;
  
      const hours = diffHours % 24;
      const minutes = diffMinutes % 60;
      const seconds = diffSeconds % 60;
  
      yearsCountEl.textContent = years;
      monthsCountEl.textContent = months;
      daysCountEl.textContent = days;
      hoursCountEl.textContent = hours;
      minutesCountEl.textContent = minutes;
      secondsCountEl.textContent = seconds;
    }
  
    updateCounter();
    setInterval(updateCounter, 1000);
  
    // SCROLL REVEAL
    const revealElements = document.querySelectorAll(".reveal, .section-header, .timeline-card, .final-line");
  
    function handleScrollReveal() {
      const triggerBottom = window.innerHeight * 0.85;
      revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < triggerBottom) {
          if (el.classList.contains("final-line")) {
            el.classList.add("visible");
          } else {
            el.classList.add("visible");
          }
        }
      });
    }
  
    if (!prefersReducedMotion) {
      window.addEventListener("scroll", handleScrollReveal);
      handleScrollReveal();
    } else {
      revealElements.forEach(el => el.classList.add("visible"));
    }
  
    // FINAL-SEKSJON (start animasjon når seksjonen er i view)
    const finalSection = document.getElementById("final");
    function handleFinalReveal() {
      const rect = finalSection.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        document.querySelectorAll(".final-line").forEach(line => line.classList.add("visible"));
        window.removeEventListener("scroll", handleFinalReveal);
      }
    }
    if (!prefersReducedMotion) {
      window.addEventListener("scroll", handleFinalReveal);
      handleFinalReveal();
    } else {
      document.querySelectorAll(".final-line").forEach(line => line.classList.add("visible"));
    }
  });
  