# Leeto - Test technique développeur front-end


## Démarrer le livrable
```sh
git clone git@github.com:florianmg/leeto-front-end-technical-test.git
cd leeto-front-end-technical-test
npm run boot
```
Il y a aussi un storybook disponible dans app :
```sh
npm run storybook --prefix ./app
```
## Introduction

Dans l'application Leeto, nos utilisateurs peuvent consulter différentes cartes cadeaux mises à leur disposition par leur CSE.

Ta mission consiste à créer une page web qui permettra de consulter ces cartes cadeaux ainsi qu'une page détail pour chacune d'entre elles.

Le périmètre concerne uniquement la consultation et non la consommation de la carte cadeau.

## Technos à utiliser

- [React](https://react.dev)
- [TypeScript](https://typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [TanStack Query](https://tanstack.com/query)

## Spécifications

- Une carte cadeau est composée des informations suivantes :
  - un titre
  - une description
  - une date de création
  - une date d'expiration
  - un état de consommation (en euros)
  - une liste de bénéficiaires (moi-même, mon/ma conjoint(e) et/ou mes enfants)
- La page de listing doit pouvoir afficher les cartes cadeaux actives ou clôturées via un système d'onglets

## Ressources

### Maquettes

https://www.figma.com/design/pHiuVYjR31D0tUkavDIsTs/front-end-case?node-id=1-277

### API

#### Démarrer le serveur

1. Cloner ce repository
2. Installer les dépendances : `yarn install`
3. Démarrer le serveur : `yarn start`

#### Endpoints

- Liste des cartes cadeaux actives : `GET http://localhost:3001/gift-cards?state=active`
- Liste des cartes cadeaux clôturées : `GET http://localhost:3001/gift-cards?state=archived`
- Détail d'une carte cadeau : `GET http://localhost:3001/gift-cards/:id`

#### Types

```typescript
type GiftCard = {
  id: number;
  description: string;
  name: string;
  openingDate: string;
  closingDate: string;
  state: "active" | "archived";
  allowedAmount: number;
  consumedAmount: number;
  beneficiaries: {
    id: number;
    type: "user" | "companion" | "child";
    firstName: string;
    consumption: {
      allowedAmount: number;
      consumedAmount: number;
    };
  }[];
};
```

## Bonus

- Bonus n°1 : Ajouter des tests unitaires
- Bonus n°2 : Ajouter un [Storybook](https://storybook.js.org) pour présenter les composants

## Livrable

Le code devra être accessible sur un repository GitHub public.

## Ce qui sera évalué

- Le respect des maquettes
- La qualité du code (lisibilité, maintenabilité et performance)

> 📒 Nos guidelines sont accessibles en ligne si tu souhaites t'en inspirer : https://leeto-front-end-guidelines.netlify.app

> ✉️ Si tu as la moindre question, n'hésite pas à nous contacter.
