// ============================================================
// SquidLane — contenu bilingue (EN par défaut + FR)
// Copy officielle (copywriter) — crypto retirée, CTA = contact,
// formulation "Payment Facilitator / Merchant of Record" conservée
// SANS jamais nommer le processeur partenaire.
// ============================================================

export const languages = { en: 'EN', fr: 'FR' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const CHECKOUT_DEMO = 'https://theclub.squidlane.com/buy/offr_fv9_Sn8npo';
export const TELEGRAM_URL = 'https://t.me/VadimBonzai';
export const APPLY_URL = 'https://app.iclosed.io/e/bonzai/discover-squidlane';
export const EMAIL = 'support@bonzai.pro';

// Paliers de prix (libellés issus de la copy, virgules décimales telles quelles).
export const eurTiers = [
  { vol: '< €10K', fee: '6%' },
  { vol: '≥ €10K', fee: '5%' },
  { vol: '≥ €30K', fee: '4%' },
  { vol: '≥ €50K', fee: '3,5%' },
  { vol: '≥ €100K', fee: '3%' },
  { vol: '≥ €500K', fee: '2%' },
  { vol: '≥ €1M', fee: '1,4%' },
  { vol: '≥ €3M', fee: '1%', best: true },
];
export const usdTiers = [
  { vol: '< $10K', fee: '5%' },
  { vol: '≥ $10K', fee: '4%' },
  { vol: '≥ $30K', fee: '3%' },
  { vol: '≥ $50K', fee: '2%' },
  { vol: '≥ $100K', fee: '1,5%' },
  { vol: '≥ $500K', fee: '1%' },
  { vol: '≥ $1M', fee: '0,9%' },
  { vol: '≥ $3M', fee: '0,7%', best: true },
];

export const content = {
  en: {
    meta: {
      title: 'SquidLane — Premium payments for high-quality merchants',
      description:
        'Premium payment solution for high-quality merchants: reliable payments, human support, and total peace of mind. No frozen funds, no surprise suspensions.',
    },
    nav: {
      links: [
        { label: 'Why us', href: '#why' },
        { label: 'How it works', href: '#how' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Payouts', href: '#payouts' },
      ],
      cta: 'Contact us',
    },
    hero: {
      eyebrow: 'Premium payment solution',
      title: [
        { text: 'Premium payments', big: true },
        { text: 'for high-quality merchants.', accent: true },
      ],
      subtitle:
        'Reliable payments, human support, and total peace of mind — so you can focus on growing your business.',
      ctaPrimary: 'Contact us',
      ctaSecondary: 'See an example checkout',
      paycard: {
        secure: 'Secure link',
        amount: 'Amount due',
        amountValue: '€1,280.00',
        pay: 'Pay €1,280.00',
        securedBy: 'Secured by',
        received: 'Payment received',
        receivedSub: '+€1,280.00 · just now',
        rateLabel: 'Volume-based rate',
        rateValue: 'as low as 0.7%',
      },
      scroll: 'Scroll',
    },
    security: {
      label: 'Bank-grade security',
      seals: [
        { icon: 'shieldCheck', label: '3D Secure', caption: 'Strong authentication' },
        { icon: 'lock', label: 'PCI DSS', caption: 'Level 1' },
        { icon: 'badgeCheck', label: 'GDPR', caption: 'Compliant' },
      ],
    },
    marquee: [
      'Instant payment links',
      'Custom checkout',
      'Shopify',
      'WooCommerce',
      'Apple Pay',
      'Cards',
      'Human support',
      'No frozen funds',
      'Fast payouts',
    ],
    why: {
      eyebrow: 'The problem',
      title: [{ text: 'The problem with' }, { text: 'traditional processors.', accent: true }],
      lead: 'Tired of frozen funds, surprise account suspensions, and robotic support? Most payment processors (like Stripe or Shopify Payments) are built for volume, not for high-quality merchants. They onboard anyone, then rely on aggressive algorithms that often punish legitimate businesses. SquidLane is different — selective, human-first, and obsessively merchant-focused.',
      painsTag: 'Traditional processors',
      pains: [
        {
          icon: 'frost',
          title: 'Frozen funds',
          text: 'A spike in sales or a single dispute, and your cash is locked with no explanation.',
        },
        {
          icon: 'ban',
          title: 'Surprise suspensions',
          text: 'Aggressive algorithms close first and ask questions later — sometimes never.',
        },
        {
          icon: 'bot',
          title: 'Robotic support',
          text: 'Endless tickets, canned replies, and no real person to talk to.',
        },
      ],
      gainsTag: 'Why merchants choose SquidLane',
      gains: [
        {
          icon: 'shieldCheck',
          title: 'No suspensions or frozen funds',
          text: 'Guaranteed after approval — your revenue stays yours.',
        },
        {
          icon: 'userRound',
          title: 'Real human support',
          text: 'Fast responses on WhatsApp or Telegram, often within minutes.',
        },
        {
          icon: 'trending',
          title: 'Better economics',
          text: 'Competitive fees that improve as you grow.',
        },
        {
          icon: 'badgeCheck',
          title: 'Superior approval rate',
          text: '91–94% approval thanks to smart routing.',
        },
      ],
    },
    features: {
      eyebrow: 'Core features',
      title: [{ text: 'Everything to get paid,' }, { text: 'nothing to slow you down.', accent: true }],
      lead: 'From a payment link created in seconds to a checkout natively integrated with your store.',
      linkTitle: 'Instant Payment Links',
      linkText:
        'Create secure, shareable links in seconds from your dashboard. Send them, get paid, and track every payment in real time.',
      copy: 'Copy',
      copied: 'Copied',
      methodsTitle: 'Card payments',
      methodsText: 'Visa, Mastercard, American Express and Apple Pay.',
      protectTitle: 'No frozen funds — guaranteed',
      protectText:
        'Once your account is approved, you collect with total peace of mind, backed by real human support.',
      cards: [
        {
          icon: 'cart',
          title: 'Proprietary Custom Checkout',
          text: 'A beautiful, high-converting checkout with native Shopify and WooCommerce integrations — your brand, our infrastructure.',
        },
        {
          icon: 'layers',
          title: 'Conversion boosters',
          text: 'One-click upsell, order bump and free trials — lift your average order value out of the box.',
          wide: true,
        },
        {
          icon: 'repeat',
          title: 'Subscriptions',
          text: 'Recurring billing, fully managed — from sign-up to renewals.',
        },
        {
          icon: 'calendar',
          title: 'Installments',
          text: 'Let your customers pay in up to 12×.',
        },
        {
          icon: 'code',
          title: 'Full API & webhooks',
          text: 'A complete REST API and secure HMAC-signed webhooks to build anything on top of SquidLane.',
          wide: true,
        },
        {
          icon: 'users',
          title: 'Workspace environment',
          text: 'A collaborative workspace to manage your team and access.',
        },
        {
          icon: 'target',
          title: 'Ad tracking',
          text: 'Native conversion tracking for Google (Analytics & Ads) and Meta.',
        },
        {
          icon: 'shieldAlert',
          title: 'Chargeback prevention & fraud monitoring',
          text: 'Real-time chargeback prevention alerts and continuous fraud monitoring to protect your revenue.',
          wide: true,
        },
        {
          icon: 'globe',
          title: 'EUR & USD',
          text: 'Checkouts in EUR or USD. Customers can pay in many major currencies with automatic bank conversion.',
        },
        {
          icon: 'dash',
          title: 'Full Merchant Management',
          text: 'Onboarding, KYC/AML, refunds, chargebacks and payouts — all handled by us.',
        },
      ],
    },
    how: {
      eyebrow: 'How it works',
      title: [{ text: 'How SquidLane' }, { text: 'works.', accent: true }],
      lead: 'SquidLane is a hybrid Payment Facilitator, in partnership with a trusted payment processor operating as a Merchant of Record (MoR). We manage everything on the merchant side — while leveraging our processor’s robust payment infrastructure.',
      partnerLabel: 'Infrastructure',
      partnerValue: 'Hybrid Payment Facilitator · Merchant of Record',
      steps: [
        {
          n: '01',
          title: 'Customer pays',
          text: 'Your customer pays via your SquidLane payment link or checkout.',
        },
        {
          n: '02',
          title: 'Smart routing',
          text: 'The transaction is processed by our payment processor with smart routing.',
        },
        {
          n: '03',
          title: 'Secure settlement',
          text: 'Funds are settled securely through our payment infrastructure.',
        },
        {
          n: '04',
          title: 'Payout to you',
          text: 'We execute payouts straight to your account.',
        },
      ],
    },
    pricing: {
      eyebrow: 'Pricing',
      title: [{ text: 'The more you process,' }, { text: 'the better your rate.', accent: true }],
      lead: 'Transparent, volume-based pricing. SquidLane fees depend on the volume generated over the past 30 days. No subscription, no hidden fees.',
      rateFromLabel: 'Fee from',
      rateDownTo: 'down to',
      processingLabel: '+ processing fee',
      processingPer: 'per transaction',
      volSuffix: '/ 30 days',
      bestBadge: 'Best rate',
      processing: { eur: '+1.5% + €0.25', usd: '+3.4% + $0.25' },
      rateMin: { eur: '6%', usd: '5%' },
      rateMax: { eur: '1%', usd: '0,7%' },
      note: 'Settlement in EUR or USD. Customers can pay with cards in many major currencies (GBP, CHF, CAD, AUD, NZD, SGD, HKD…); their bank automatically converts to EUR or USD and may apply conversion fees.',
      cta: 'Contact us',
      ctaNote: 'We review your application and get back to you quickly.',
    },
    payouts: {
      eyebrow: 'Payouts',
      title: [{ text: 'Your cash flow,' }, { text: 'faster and faster.', accent: true }],
      lead: 'Free, predictable payouts that speed up as your history grows. Need your funds right away? Express withdrawal is always available.',
      daysUnit: ' days',
      cryptoNote: 'Crypto payouts available on request.',
      tracks: [
        {
          icon: 'monitor',
          label: 'SaaS & digital products',
          steps: [
            { when: 'Starting', n: 7, note: 'Free' },
            { when: 'After 1 month', n: 5, note: 'Negotiable · Free', best: true },
            { when: 'Express', n: 3, note: '1% withdrawal fee', express: true },
          ],
        },
        {
          icon: 'package',
          label: 'E-commerce',
          steps: [
            { when: 'Starting', n: 7, note: 'Free' },
            { when: 'After 15 days', n: 5, note: 'Free' },
            { when: 'After 1 month', n: 3, note: 'Free', best: true },
            { when: 'Express', n: 2, note: '1% withdrawal fee', express: true },
          ],
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: [{ text: 'Move to a partner that' }, { text: 'plays on your side.', accent: true }],
      lead: 'Tell us about your business — we’ll get back to you quickly, with a real human. Pick the channel that suits you.',
      telegram: 'Apply now',
    },
    footer: {
      tagline:
        'The selective payment solution for serious merchants. Get paid without ever fearing frozen funds.',
      partnerLabel: 'Security & compliance',
      partnerText: 'Certified 3D Secure, PCI DSS Level 1 and GDPR.',
      cols: [
        {
          title: 'Product',
          links: [
            { label: 'Payment links', href: '#features' },
            { label: 'Checkout', href: '#features' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'Payouts', href: '#payouts' },
          ],
        },
        {
          title: 'Company',
          links: [
            { label: 'About', href: '#' },
            { label: 'Contact', href: '#contact' },
          ],
        },
      ],
      rights: 'All rights reserved.',
      tag: 'Built for merchants who scale.',
    },
  },

  fr: {
    meta: {
      title: 'SquidLane — Des paiements premium pour marchands d’exception',
      description:
        'Solution de paiement premium pour marchands d’exception : des paiements fiables, un support humain et une tranquillité totale. Pas de fonds gelés, pas de suspensions surprises.',
    },
    nav: {
      links: [
        { label: 'Pourquoi nous', href: '#why' },
        { label: 'Comment ça marche', href: '#how' },
        { label: 'Tarifs', href: '#pricing' },
        { label: 'Versements', href: '#payouts' },
      ],
      cta: 'Nous contacter',
    },
    hero: {
      eyebrow: 'Solution de paiement premium',
      title: [
        { text: 'Des paiements premium', big: true },
        { text: 'pour marchands d’exception.', accent: true },
      ],
      subtitle:
        'Des paiements fiables, un support humain et une tranquillité totale — pour vous concentrer sur la croissance de votre activité.',
      ctaPrimary: 'Nous contacter',
      ctaSecondary: 'Voir un exemple de checkout',
      paycard: {
        secure: 'Lien sécurisé',
        amount: 'Montant à régler',
        amountValue: '1 280,00 €',
        pay: 'Payer 1 280,00 €',
        securedBy: 'Sécurisé par',
        received: 'Paiement reçu',
        receivedSub: '+1 280,00 € · à l’instant',
        rateLabel: 'Taux dégressif',
        rateValue: 'jusqu’à 0,7%',
      },
      scroll: 'Défiler',
    },
    security: {
      label: 'Sécurité de niveau bancaire',
      seals: [
        { icon: 'shieldCheck', label: '3D Secure', caption: 'Authentification forte' },
        { icon: 'lock', label: 'PCI DSS', caption: 'Niveau 1' },
        { icon: 'badgeCheck', label: 'RGPD', caption: 'Conforme' },
      ],
    },
    marquee: [
      'Liens de paiement instantanés',
      'Checkout sur-mesure',
      'Shopify',
      'WooCommerce',
      'Apple Pay',
      'Cartes bancaires',
      'Support humain',
      'Zéro fonds gelé',
      'Versements rapides',
    ],
    why: {
      eyebrow: 'Le problème',
      title: [{ text: 'Le problème des' }, { text: 'processeurs classiques.', accent: true }],
      lead: 'Fatigué des fonds gelés, des suspensions de compte surprises et du support robotisé ? La plupart des processeurs (comme Stripe ou Shopify Payments) sont pensés pour le volume, pas pour les marchands d’exception. Ils acceptent tout le monde, puis s’appuient sur des algorithmes agressifs qui punissent souvent des entreprises légitimes. SquidLane, c’est différent — sélectif, humain d’abord, et obsédé par le marchand.',
      painsTag: 'Processeurs classiques',
      pains: [
        {
          icon: 'frost',
          title: 'Fonds gelés',
          text: 'Un pic de ventes ou un simple litige, et votre trésorerie est bloquée sans explication.',
        },
        {
          icon: 'ban',
          title: 'Suspensions surprises',
          text: 'Des algorithmes agressifs ferment d’abord et discutent ensuite — parfois jamais.',
        },
        {
          icon: 'bot',
          title: 'Support robotisé',
          text: 'Des tickets sans fin, des réponses automatiques, aucun interlocuteur réel.',
        },
      ],
      gainsTag: 'Pourquoi les marchands choisissent SquidLane',
      gains: [
        {
          icon: 'shieldCheck',
          title: 'Ni suspensions ni fonds gelés',
          text: 'Garanti après approbation — vos revenus restent les vôtres.',
        },
        {
          icon: 'userRound',
          title: 'Un vrai support humain',
          text: 'Des réponses rapides sur WhatsApp ou Telegram, souvent en quelques minutes.',
        },
        {
          icon: 'trending',
          title: 'De meilleures conditions',
          text: 'Des frais compétitifs qui baissent à mesure que vous grandissez.',
        },
        {
          icon: 'badgeCheck',
          title: 'Taux d’acceptation supérieur',
          text: '91 à 94 % d’acceptation grâce au routage intelligent.',
        },
      ],
    },
    features: {
      eyebrow: 'Fonctionnalités',
      title: [{ text: 'Tout pour encaisser,' }, { text: 'rien pour vous freiner.', accent: true }],
      lead: 'Du lien de paiement créé en quelques secondes au checkout intégré nativement à votre boutique.',
      linkTitle: 'Liens de paiement instantanés',
      linkText:
        'Créez des liens sécurisés et partageables en quelques secondes depuis votre tableau de bord. Envoyez-les, encaissez, suivez chaque paiement en temps réel.',
      copy: 'Copier',
      copied: 'Copié',
      methodsTitle: 'Paiement par carte',
      methodsText: 'Visa, Mastercard, American Express et Apple Pay.',
      protectTitle: 'Zéro fonds gelé — garanti',
      protectText:
        'Une fois votre compte approuvé, vous encaissez l’esprit tranquille, avec un vrai support humain à vos côtés.',
      cards: [
        {
          icon: 'cart',
          title: 'Checkout sur-mesure propriétaire',
          text: 'Un checkout élégant et hautement convertissant, avec intégrations natives Shopify et WooCommerce — votre marque, notre infrastructure.',
        },
        {
          icon: 'layers',
          title: 'Boosters de conversion',
          text: 'Upsell en un clic, order bump et essais gratuits — augmentez le panier moyen d’emblée.',
        },
        {
          icon: 'repeat',
          title: 'Abonnements',
          text: 'Facturation récurrente entièrement gérée — de l’inscription aux renouvellements.',
        },
        {
          icon: 'calendar',
          title: 'Paiement en plusieurs fois',
          text: 'Laissez vos clients payer jusqu’à 12×.',
        },
        {
          icon: 'code',
          title: 'API complète & webhooks',
          text: 'Une API REST complète et des webhooks sécurisés signés HMAC pour tout construire.',
        },
        {
          icon: 'users',
          title: 'Environnement workspace',
          text: 'Un espace de travail collaboratif pour gérer votre équipe et les accès.',
        },
        {
          icon: 'target',
          title: 'Tracking publicitaire',
          text: 'Suivi de conversion natif pour Google (Analytics & Ads) et Meta.',
        },
        {
          icon: 'shieldAlert',
          title: 'Prévention des litiges & monitoring fraude',
          text: 'Alertes de prévention des chargebacks en temps réel et monitoring continu de la fraude pour protéger vos revenus.',
          wide: true,
        },
        {
          icon: 'globe',
          title: 'EUR & USD',
          text: 'Checkouts en EUR ou USD. Vos clients paient dans la plupart des grandes devises avec conversion bancaire automatique.',
        },
        {
          icon: 'dash',
          title: 'Gestion marchand complète',
          text: 'Onboarding, KYC/AML, remboursements, litiges et versements — tout est géré par nos soins.',
        },
      ],
    },
    how: {
      eyebrow: 'Comment ça marche',
      title: [{ text: 'Comment fonctionne' }, { text: 'SquidLane.', accent: true }],
      lead: 'SquidLane est un Payment Facilitator hybride, en partenariat avec un processeur de paiement de confiance opérant comme Merchant of Record (MoR). Nous gérons tout côté marchand — en nous appuyant sur l’infrastructure de paiement robuste de notre processeur.',
      partnerLabel: 'Infrastructure',
      partnerValue: 'Payment Facilitator hybride · Merchant of Record',
      steps: [
        {
          n: '01',
          title: 'Le client paie',
          text: 'Votre client paie via votre lien de paiement ou votre checkout SquidLane.',
        },
        {
          n: '02',
          title: 'Routage intelligent',
          text: 'La transaction est traitée par notre processeur avec un routage intelligent.',
        },
        {
          n: '03',
          title: 'Règlement sécurisé',
          text: 'Les fonds sont réglés en toute sécurité via notre infrastructure de paiement.',
        },
        {
          n: '04',
          title: 'Versement vers vous',
          text: 'Nous exécutons les versements directement sur votre compte.',
        },
      ],
    },
    pricing: {
      eyebrow: 'Tarifs',
      title: [{ text: 'Plus vous encaissez,' }, { text: 'moins vous payez.', accent: true }],
      lead: 'Une tarification transparente et dégressive. Les frais SquidLane dépendent du volume généré sur les 30 derniers jours. Pas d’abonnement, pas de frais cachés.',
      rateFromLabel: 'Commission dès',
      rateDownTo: 'dégressive jusqu’à',
      processingLabel: '+ frais de traitement',
      processingPer: 'par transaction',
      volSuffix: '/ 30 jours',
      bestBadge: 'Meilleur taux',
      processing: { eur: '+1,5% + 0,25 €', usd: '+3,4% + 0,25 $' },
      rateMin: { eur: '6%', usd: '5%' },
      rateMax: { eur: '1%', usd: '0,7%' },
      note: 'Règlement en EUR ou USD. Vos clients peuvent payer par carte dans la plupart des grandes devises (GBP, CHF, CAD, AUD, NZD, SGD, HKD…) ; leur banque convertit automatiquement en EUR ou USD et peut appliquer des frais de conversion.',
      cta: 'Nous contacter',
      ctaNote: 'On étudie votre dossier et on revient vers vous rapidement.',
    },
    payouts: {
      eyebrow: 'Versements',
      title: [{ text: 'Votre trésorerie,' }, { text: 'de plus en plus rapide.', accent: true }],
      lead: 'Des versements gratuits et prévisibles, qui s’accélèrent à mesure que votre historique grandit. Besoin de vos fonds tout de suite ? Le retrait express est toujours là.',
      daysUnit: ' jours',
      cryptoNote: 'Versements en crypto disponibles sur demande.',
      tracks: [
        {
          icon: 'monitor',
          label: 'SaaS & produits digitaux',
          steps: [
            { when: 'Au démarrage', n: 7, note: 'Gratuit' },
            { when: 'Après 1 mois', n: 5, note: 'Négociable · Gratuit', best: true },
            { when: 'Express', n: 3, note: '1% de frais de retrait', express: true },
          ],
        },
        {
          icon: 'package',
          label: 'E-commerce',
          steps: [
            { when: 'Au démarrage', n: 7, note: 'Gratuit' },
            { when: 'Après 15 jours', n: 5, note: 'Gratuit' },
            { when: 'Après 1 mois', n: 3, note: 'Gratuit', best: true },
            { when: 'Express', n: 2, note: '1% de frais de retrait', express: true },
          ],
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: [{ text: 'Passez à un partenaire' }, { text: 'qui joue dans votre camp.', accent: true }],
      lead: 'Parlez-nous de votre activité — on revient vers vous rapidement, avec un vrai interlocuteur. Choisissez le canal qui vous convient.',
      telegram: 'Apply now',
    },
    footer: {
      tagline:
        'La solution de paiement sélective pour les marchands sérieux. Encaissez sans jamais craindre le gel de vos fonds.',
      partnerLabel: 'Sécurité & conformité',
      partnerText: 'Certifié 3D Secure, PCI DSS niveau 1 et RGPD.',
      cols: [
        {
          title: 'Produit',
          links: [
            { label: 'Liens de paiement', href: '#features' },
            { label: 'Checkout', href: '#features' },
            { label: 'Tarifs', href: '#pricing' },
            { label: 'Versements', href: '#payouts' },
          ],
        },
        {
          title: 'Entreprise',
          links: [
            { label: 'À propos', href: '#' },
            { label: 'Contact', href: '#contact' },
          ],
        },
      ],
      rights: 'Tous droits réservés.',
      tag: 'Conçu pour les marchands qui scalent.',
    },
  },
} as const;

export function getContent(lang: Lang) {
  return content[lang] ?? content[defaultLang];
}

/** Préfixe d'URL selon la langue ('' pour EN par défaut, '/fr' pour FR). */
export function localizedPath(lang: Lang, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean === '/' ? '' : clean}`;
}
