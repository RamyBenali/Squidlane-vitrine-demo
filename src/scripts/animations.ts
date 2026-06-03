import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Reveal everything immediately (no-JS / reduced-motion fallback). */
function revealAll() {
  document.querySelectorAll<HTMLElement>('[data-reveal], [data-reveal-item]').forEach((el) => {
    el.style.opacity = '1';
    el.style.transform = 'none';
    el.style.clipPath = 'none';
  });
}

export function initAnimations() {
  document.documentElement.classList.remove('no-js');

  // La copie (bouton .bento__copy) et le toggle fonctionnent même sans animation.
  initClipboard();

  if (prefersReduced) {
    revealAll();
    initPricingToggleFallback();
    return;
  }

  // Si quoi que ce soit échoue, on révèle tout le contenu (jamais bloqué masqué).
  try {
    gsap.registerPlugin(ScrollTrigger, CustomEase, DrawSVGPlugin);
    CustomEase.create('squid', '0.16,1,0.3,1');
    gsap.defaults({ ease: 'squid', duration: 0.8 });

    /* ---------- Lenis smooth scroll ---------- */
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (!id || id === '#') return;
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          lenis.scrollTo(target as HTMLElement, { offset: -80, duration: 1.4 });
        }
      });
    });

    initReveals();
    initGroups();
    initParallax();
    initHeroTimeline();
    initHeroAmbient();
    initCounters();
    initMagnetic();
    initTilt();
    initScrollProgress();
    initNav();
    initPricingToggle();
    initDrawnPaths();
    initHowItWorksPin();

    ScrollTrigger.refresh();
  } catch (err) {
    console.error('[animations] init failed, revealing content:', err);
    revealAll();
  }
}

/* ---------- Generic reveal (clip-path masque + translate) ---------- */
function initReveals() {
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    const delay = parseFloat(el.dataset.delay || '0');
    gsap.to(el, {
      opacity: 1,
      y: 0,
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: 0.95,
      delay,
      ease: 'squid',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
    });
  });
}

/* ---------- Staggered groups (diagonale) ---------- */
function initGroups() {
  document.querySelectorAll<HTMLElement>('[data-reveal-group]').forEach((group) => {
    const items = group.querySelectorAll<HTMLElement>('[data-reveal-item]');
    gsap.to(items, {
      opacity: 1,
      y: 0,
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: 0.85,
      ease: 'squid',
      stagger: { each: 0.09, from: 'start' },
      scrollTrigger: { trigger: group, start: 'top 80%', once: true },
    });
  });
}

/* ---------- Hero ambient (aurora drift + flottement carte) ---------- */
function initHeroAmbient() {
  const glow = document.querySelector('.hero__glow--1');
  if (glow) {
    // xPercent + opacity seulement (pas de scale : éviter le re-rendu du flou).
    // yPercent est réservé à la parallaxe.
    gsap.to(glow, {
      xPercent: -12,
      opacity: 0.72,
      duration: 8,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });
  }
  // Flottement léger de la carte de paiement, après son entrée.
  const paycard = document.querySelector('.paycard');
  if (paycard) {
    gsap.to(paycard, {
      y: -12,
      duration: 3.4,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      delay: 2.2,
    });
  }
}

/* ---------- Tilt 3D au survol (cartes) ---------- */
function initTilt() {
  if (!window.matchMedia('(pointer: fine)').matches) return;
  const cards = document.querySelectorAll<HTMLElement>('.bento__card, .compare-card, .track');
  cards.forEach((card) => {
    const maxDeg = 6;
    const xTo = gsap.quickTo(card, 'rotationY', { duration: 0.5, ease: 'power3.out' });
    const yTo = gsap.quickTo(card, 'rotationX', { duration: 0.5, ease: 'power3.out' });
    const liftTo = gsap.quickTo(card, 'y', { duration: 0.5, ease: 'power3.out' });
    gsap.set(card, { transformPerspective: 900, transformOrigin: 'center' });
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      xTo(px * maxDeg * 2);
      yTo(-py * maxDeg * 2);
      liftTo(-6);
    });
    card.addEventListener('mouseleave', () => {
      xTo(0);
      yTo(0);
      liftTo(0);
    });
  });
}

/* ---------- Barre de progression scroll ---------- */
function initScrollProgress() {
  const bar = document.querySelector<HTMLElement>('.scroll-progress');
  if (!bar) return;
  gsap.to(bar, {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: { start: 0, end: 'max', scrub: 0.3 },
  });
}

/* ---------- Parallax mesuré (desktop seulement) ---------- */
function initParallax() {
  const mm = gsap.matchMedia();
  mm.add('(min-width: 901px)', () => {
    document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
      const speed = parseFloat(el.dataset.parallax || '0.12');
      const trig = el.dataset.parallaxTrigger
        ? (el.closest(el.dataset.parallaxTrigger) as HTMLElement) || el
        : el;
      gsap.to(el, {
        yPercent: speed * 100,
        ease: 'none',
        scrollTrigger: { trigger: trig, start: 'top bottom', end: 'bottom top', scrub: 1 },
      });
    });
  });
}

/* ---------- Hero entrance ---------- */
function initHeroTimeline() {
  const hero = document.querySelector('[data-hero]');
  if (!hero) return;

  const tl = gsap.timeline({ defaults: { ease: 'squid' } });
  tl.from('[data-hero-line]', { yPercent: 110, opacity: 0, duration: 1.05, stagger: 0.1 })
    .from('[data-hero-sub]', { y: 22, opacity: 0, duration: 0.85 }, '-=0.55')
    .from('[data-hero-cta]', { y: 18, opacity: 0, duration: 0.75, stagger: 0.1 }, '-=0.5')
    .from(
      '[data-hero-visual]',
      { y: 30, opacity: 0, scale: 0.97, duration: 1.2, ease: 'power2.out' },
      '-=0.9'
    )
    .add(() => animatePaycardValue(), '-=0.5')
    .from(
      '.pay-logos--paycard .pay-logo',
      { y: 8, opacity: 0, duration: 0.5, stagger: 0.06 },
      '-=0.4'
    )
    .from(
      '.float-card',
      { scale: 0.9, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'back.out(1.6)' },
      '-=0.4'
    );
}

function animatePaycardValue() {
  const el = document.querySelector<HTMLElement>('.paycard__value');
  if (!el) return;
  const target = parseFloat(el.dataset.amount || '1280');
  const currency = el.dataset.currency || 'EUR';
  const locale = el.dataset.locale === 'fr' ? 'fr-FR' : 'en-US';
  const fmt = new Intl.NumberFormat(locale, { style: 'currency', currency });
  const obj = { v: 0 };
  gsap.to(obj, {
    v: target,
    duration: 1.4,
    ease: 'power2.out',
    onUpdate: () => {
      el.textContent = fmt.format(obj.v);
    },
  });
}

/* ---------- Counters [data-count] ---------- */
function initCounters() {
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const target = parseFloat(el.dataset.count || '0');
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 1.4,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      onUpdate: () => {
        el.textContent = prefix + obj.val.toFixed(decimals) + suffix;
      },
    });
  });
}

/* ---------- Magnetic buttons (bornés, CTA seulement) ---------- */
function initMagnetic() {
  if (!window.matchMedia('(pointer: fine)').matches) return;
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    const max = 14;
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const x = gsap.utils.clamp(-max, max, (e.clientX - (r.left + r.width / 2)) * 0.35);
      const y = gsap.utils.clamp(-max, max, (e.clientY - (r.top + r.height / 2)) * 0.35);
      gsap.to(el, { x, y, scale: 1.02, duration: 0.4, ease: 'power3.out' });
    });
    el.addEventListener('mouseleave', () => {
      gsap.to(el, { x: 0, y: 0, scale: 1, duration: 0.6, ease: 'elastic.out(1, 0.5)' });
    });
  });
}

/* ---------- Nav background on scroll ---------- */
function initNav() {
  const nav = document.querySelector('[data-nav]');
  if (!nav) return;
  ScrollTrigger.create({
    start: 'top -60',
    end: 99999,
    onUpdate: (self) => nav.classList.toggle('is-scrolled', self.scroll() > 60),
    onToggle: (self) => nav.classList.toggle('is-scrolled', self.isActive),
  });
  nav.classList.toggle('is-scrolled', window.scrollY > 60);
}

/* ---------- Pricing toggle : refresh animé des taux ---------- */
function initPricingToggle() {
  const toggle = document.querySelector<HTMLElement>('.pricing__toggle');
  const panel = document.querySelector<HTMLElement>('.pricing__panel');
  if (!toggle || !panel) return;
  toggle.querySelectorAll('button').forEach((b) =>
    b.addEventListener('click', () => {
      // Le composant met à jour le texte au clic ; on ajoute un swap visuel.
      const targets = panel.querySelectorAll<HTMLElement>(
        '.tier__rate, [data-rate-min], [data-rate-max], [data-processing]'
      );
      gsap.fromTo(
        targets,
        { yPercent: -40, opacity: 0.25 },
        { yPercent: 0, opacity: 1, duration: 0.45, ease: 'squid', stagger: 0.02, overwrite: true }
      );
    })
  );
}

function initPricingToggleFallback() {
  /* reduced-motion : rien à animer, le composant gère déjà le texte. */
}

/* ---------- Drawn SVG paths (DrawSVG) ---------- */
function initDrawnPaths() {
  // Logo seiche : tracé dessiné puis fondu (one-shot).
  document.querySelectorAll<SVGElement>('.logo__draw').forEach((el) => {
    gsap.set(el, { opacity: 1 });
    gsap
      .timeline({ delay: 0.3 })
      .fromTo(el, { drawSVG: '0%' }, { drawSVG: '100%', duration: 1.5, ease: 'squid' })
      .to(el, { opacity: 0, duration: 0.4 }, '+=0.1');
  });

  // Frise Payouts : tracé vertical puis allumage des points.
  document.querySelectorAll<SVGPathElement>('.track__path').forEach((path) => {
    const line = path.closest('.track__line') as HTMLElement | null;
    const dots = line ? line.querySelectorAll<HTMLElement>('.milestone__dot') : [];
    gsap.set(dots, { scale: 0.4, opacity: 0.35, transformOrigin: 'center' });
    gsap
      .timeline({ scrollTrigger: { trigger: line || path, start: 'top 78%', once: true } })
      .fromTo(path, { drawSVG: '0%' }, { drawSVG: '100%', duration: 1.1, ease: 'squid' })
      .to(dots, { scale: 1, opacity: 1, duration: 0.4, stagger: 0.18, ease: 'back.out(2)' }, '-=0.5');
  });

  // Divider Solution.
  document.querySelectorAll<SVGElement>('.divider-line').forEach((line) => {
    const vs = (line.closest('.compare-divider') as HTMLElement)?.querySelector('.divider-vs');
    const tl = gsap.timeline({
      scrollTrigger: { trigger: line.closest('.compare-divider') || line, start: 'top 80%', once: true },
    });
    tl.fromTo(line, { drawSVG: '0%' }, { drawSVG: '100%', duration: 1, ease: 'power2.inOut' });
    if (vs) tl.from(vs, { opacity: 0, scale: 0.7, duration: 0.4 }, '-=0.2');
  });
}

/* ---------- HowItWorks : pin + séquence (desktop) ---------- */
function initHowItWorksPin() {
  const section = document.querySelector<HTMLElement>('.how');
  const intro = document.querySelector<HTMLElement>('.how__intro');
  if (!section || !intro) return;

  const mm = gsap.matchMedia();
  mm.add('(min-width: 901px)', () => {
    intro.style.position = 'relative';
    intro.style.top = '0';
    ScrollTrigger.create({
      trigger: section,
      start: 'top top+=88',
      end: 'bottom bottom',
      pin: intro,
      pinSpacing: false,
    });

    const steps = gsap.utils.toArray<HTMLElement>('.how__step');
    steps.forEach((step) => {
      const node = step; // ::before node éclaire via classe
      gsap.fromTo(
        step,
        { autoAlpha: 0.45, x: -10 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.5,
          ease: 'squid',
          scrollTrigger: { trigger: node, start: 'top 75%', end: 'top 40%', scrub: 0.6 },
        }
      );
    });
  });
}

/* ---------- Clipboard (bouton .bento__copy) ---------- */
function initClipboard() {
  document.querySelectorAll<HTMLButtonElement>('.bento__copy').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const text = btn.dataset.copy || '';
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        /* ignore */
      }
      const original = btn.innerHTML;
      btn.textContent = btn.dataset.copied || 'Copied';
      btn.classList.add('is-copied');
      window.setTimeout(() => {
        btn.innerHTML = original;
        btn.classList.remove('is-copied');
      }, 1600);
    });
  });
}
