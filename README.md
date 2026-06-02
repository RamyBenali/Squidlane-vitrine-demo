# SquidLane — Site vitrine

Site vitrine (landing page) pour **SquidLane**, le processeur de paiement sélectif pour
marchands sérieux. Single-page, statique, animée.

## Stack

- **[Astro](https://astro.build)** — sortie 100 % statique (HTML/CSS/JS), idéale pour un hébergement séparé.
- **SCSS** — design tokens + styles scoping par composant.
- **[GSAP](https://gsap.com)** + **[ScrollTrigger](https://gsap.com/scrolltrigger/)** — reveals, parallax, compteurs, timeline du hero.
- **[Lenis](https://lenis.darkroom.engineering/)** — smooth scroll.
- Police **Inter** (charte SquidLane).

## Commandes

```bash
npm install      # dépendances
npm run dev      # serveur de dev → http://localhost:4321
npm run build    # build de production → dist/
npm run preview  # prévisualise le build
```

## Déploiement

Le build génère un dossier `dist/` 100 % statique. Hébergeable tel quel sur n'importe quel
hébergeur statique (Netlify, Vercel, Cloudflare Pages, S3, Nginx, OVH, etc.). Aucun serveur
Node requis en production.

## Charte graphique (extraite du produit SquidLane)

| Élément | Valeur |
|---|---|
| Accent | Indigo `#6366f1` (couleur primaire du widget checkout SquidLane) |
| Accent secondaire | Cyan `#22d3ee` |
| Neutres | Échelle « encre » `#07080f` → blanc |
| Police | Inter |
| Logo | SVG seiche/calamar (extrait de `app-logo-icon.blade.php`) |

Les tokens sont centralisés dans [`src/styles/global.scss`](src/styles/global.scss).

## Structure

```
src/
├─ layouts/Layout.astro       # <head>, SEO, fonts, init animations
├─ pages/index.astro          # assemblage des sections
├─ styles/global.scss         # design tokens + base (surfaces opaques, hairlines, reveals)
├─ scripts/animations.ts      # Lenis + GSAP : reveals clip-path, parallax, timeline hero,
│                             #   compteurs, magnetic, DrawSVG (seiche/frises), pin
├─ icons.ts                   # système d'icônes line (style Lucide, currentColor)
├─ assets/brands/*.svg        # vrais logos de marque (Visa, Mastercard, Amex, Apple/Google Pay, Bitcoin)
└─ components/
   ├─ Icon.astro              # wrapper SVG unique (name, size, strokeWidth)
   ├─ PaymentMarks.astro      # rangée de logos de paiement monochromes (trust bar)
   ├─ Logo.astro              # logo seiche SquidLane (+ tracé DrawSVG)
   ├─ Nav.astro               # nav sticky + menu mobile
   ├─ Hero.astro              # hero + carte de paiement + cartes flottantes + parallax
   ├─ Marquee.astro           # bandeau défilant
   ├─ Solution.astro          # positionnement (comparatif, divider dessiné)
   ├─ Features.astro          # bento des fonctionnalités (icônes line)
   ├─ HowItWorks.astro        # frise 4 étapes + partenaire Inflowpay
   ├─ Pricing.astro           # barème dégressif EUR/USD (toggle animé)
   ├─ Payouts.astro           # frise des délais de versement + retrait express
   ├─ CTA.astro               # appel à l'action final
   └─ Footer.astro
```

### Parti pris design

Direction « encre » dark premium, **sans signaux « IA »** : aucun emoji (système d'icônes line
cohérent dans `icons.ts`), aucune pastille glassmorphism gratuite (eyebrows à filet, surfaces
opaques), de vrais logos de marque, accent indigo discipliné (le dégradé n'est utilisé que sur
le H1). Couche d'animation GSAP : reveals au masque (clip-path), parallax mesuré, timeline
d'entrée du hero avec compteur, boutons magnétiques bornés, tracés dessinés (DrawSVG) sur le
logo et les frises, pin sur « Comment ça marche ». Respecte `prefers-reduced-motion` et dispose
d'un repli si le JS échoue (contenu jamais masqué).

## Contenu

Le contenu est tiré du document de structure fourni par Jules (CMO). Les **paliers de prix
intermédiaires** du barème sont indicatifs : seules les bornes sont documentées
(EUR 6 % → 1 % ; USD 5 % → 0,7 %, à 3 M de volume mensuel). À ajuster avec les tarifs définitifs.

> Les liens de navigation secondaires du footer et le formulaire de contact sont des
> placeholders (pas de back-end) — à brancher selon vos besoins.
