# 🚗✨ README — Site Web de Location de Voitures & Taxis (React)

## 📄 Description du Projet

Ce projet est une application web moderne développée avec **React** permettant la **location de voitures** et la **réservation de taxis**.
Elle propose une interface élégante, responsive et intuitive, pensée pour offrir une expérience utilisateur fluide.

Le site permet aux utilisateurs de :

* Consulter un catalogue de véhicules disponibles
* Filtrer par catégorie, prix, carburant, disponibilité
* Voir les détails d’un véhicule
* Réserver un taxi ou une voiture
* Gérer ses réservations
* Se connecter / s’inscrire
* Effectuer des paiements (selon l’intégration choisie)

Le design suit une **charte luxueuse noir + jaune (#e0a31b)** pour une identité raffinée.

## 🛠️ Technologies utilisées

### 🔧 Frontend

* **React 18+**
* **React Router** – navigation
* **Material UI (MUI)** – interface utilisateur moderne
* **Axios** – appels API
* **Redux Toolkit** (ou Zustand selon le projet) – gestion d’état
* **TailwindCSS** (ou uniquement MUI selon configuration)
* **Framer Motion** – animations

### 🔗 Backend (non inclus dans ce README mais compatible)

* **Laravel API**
* Authentification JWT
* Base de données MySQL ou PostgreSQL

---

## 📁 Structure du Projet

```
/src
│── components/
│   ├── Vehicles/
│   │   ├── VehicleCard.tsx
│   │   ├── VehicleList.tsx
│   │   └── VehicleDetails.tsx
│   ├── booking/
│   │   ├── BookingForm.tsx
│   │   ├── Calendar.tsx
│   │   └── PaymentForm.tsx
│   ├── auth/
│   │   └── LoginForm.tsx
│   └── common/
│       ├── DataTable.tsx
│       ├── FileUpload.tsx
│       └── PaymentForm.tsx
│
│── pages/
│── services/
│── store/
│── App.tsx
│── index.tsx
│
└── public/
```

> La structure peut varier selon ton zip, mais cette organisation est recommandée.

---

## 🚀 Installation & Exécution

### 1️⃣ Décompresser le projet ZIP

Si tu as reçu le projet sous forme de **fichier .zip**, dézippe-le :

#### Windows

* Clic droit → *Extraire tout…*

#### macOS

* Double-clique sur le .zip

#### Linux

```bash
unzip projet-location-taxi.zip
```

---

### 2️⃣ Installer les dépendances

Dans le dossier du projet :

```bash
npm install
```

ou

```bash
yarn install
```

---

### 3️⃣ Lancer le projet en développement

```bash
npm start
```

ou

```bash
yarn start
```

Le site sera accessible à l’adresse :

👉 [http://localhost:3000](http://localhost:3000)

---

## 🧩 Features Principales

### 🚙 Catalogue de véhicules

* Affichage sous forme de cartes (MUI Cards)
* Filtres : prix, catégorie, carburant, disponibilités
* Tri par prix, popularité, nouveauté

### 📄 Page Détails

* Galerie d'images
* Spécifications techniques complètes
* Estimation du prix

### 🧾 Système de réservation

* Sélection des dates via calendrier
* Gestion des disponibilités
* Formulaire de réservation complet

### 🚕 Module Taxi

* Réservation immédiate ou programmée
* Calcul automatique du prix estimé
* Carte interactive (si intégration Google Maps prévue)

### 🔐 Authentification

* Login / Register
* Token JWT
* Gestion du profil

### 💳 Paiement

* Intégration Stripe / PayPal (selon version)
* Récapitulatif avant paiement

---

## ⚙️ Configuration de l’API Backend

Modifier le fichier :

```
/src/services/api.ts
```

avec l’URL de ton backend Laravel :

```ts
export const API_URL = "http://localhost:8000/api";
```

---

## 🧪 Scripts disponibles

| Script          | Action                          |
| --------------- | ------------------------------- |
| `npm start`     | lance le serveur de dev         |
| `npm run build` | construit la version production |
| `npm test`      | lance les tests unitaires       |
| `npm run lint`  | vérifie la qualité du code      |

---

## 🎨 Design & Thème

Le thème visuel suit une identité **luxueuse** :

* 🎨 Couleurs : **noir profond** + **jaune doré (#e0a31b)**
* ✨ UI Material/MUI retravaillée
* 🌀 Animations Framer Motion
* 🖼️ Icons : **Material Icons** ou **Lucide Icons**

---

## 📦 Déploiement

### 🔹 Netlify

* `npm run build`
* Glisser-déposer le dossier `build/` dans Netlify

### 🔹 Vercel

* Dépôt GitHub → Import dans Vercel
* Déploiement automatique

### 🔹 Serveur traditionnel

* Uploader le dossier `build/`
* Configurer une redirection pour React Router

---

## 🤝 Contribution

1. Fork du dépôt
2. Créer une branche
3. Commit & push
4. Pull Request

---

## 📜 Licence

Ce projet est disponible sous licence libre (MIT ou autre selon ton choix).

---
