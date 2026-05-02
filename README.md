# 🚀 DevOps Mini Projet — Task Manager

> Implémentation d'une chaîne DevOps complète de bout en bout  
> **IT Business School — Module : Pratique DevOps, Chaînes d'outils et Automatisation**

---

## 📋 Description du projet

**Task Manager** est une application web trois-tiers (Frontend / Backend / Base de données) servant de support à l'implémentation d'une chaîne DevOps complète.  
L'objectif n'est pas l'application elle-même, mais la maîtrise de toutes les étapes DevOps : CI, CD, GitOps, DevSecOps et Monitoring.

---

## 🏗️ Architecture
┌─────────────────────────────────────────────────────┐
│                    GitHub Repository                  │
│  ┌─────────┐  ┌──────────┐  ┌────────────────────┐  │
│  │ backend/│  │frontend/ │  │ k8s/               │  │
│  │ Node.js │  │  Nginx   │  │ Kubernetes manifests│  │
│  └─────────┘  └──────────┘  └────────────────────┘  │
└─────────────────────────────────────────────────────┘
│                          │
▼                          ▼
┌─────────────────┐      ┌──────────────────┐
│  GitHub Actions │      │     ArgoCD        │
│  CI Pipeline    │      │  GitOps Sync      │
│  - Lint         │      │  Auto-deploy k8s  │
│  - Tests        │      └──────────────────┘
│  - SonarCloud   │               │
│  - Trivy        │               ▼
│  - Docker push  │      ┌──────────────────┐
└─────────────────┘      │   Minikube        │
│  ┌────────────┐  │
│  │  Frontend  │  │
│  │  Backend   │  │
│  │  MySQL     │  │
│  └────────────┘  │
│  ┌────────────┐  │
│  │ Prometheus │  │
│  │  Grafana   │  │
│  └────────────┘  │
└──────────────────┘

---

## 🛠️ Stack Technique

| Couche | Technologie |
|--------|-------------|
| Frontend | HTML/CSS + Nginx |
| Backend | Node.js + Express |
| Base de données | MySQL 8.0 |
| Conteneurisation | Docker |
| Orchestration | Kubernetes (Minikube) |
| CI | GitHub Actions |
| Qualité code | SonarCloud + ESLint |
| Sécurité | Trivy |
| GitOps / CD | ArgoCD |
| Monitoring | Prometheus + Grafana |
| Gestion Agile | GitHub Projects |

---

## 🔄 Chaîne DevOps
PLAN → CODE → BUILD → TEST → RELEASE → DEPLOY → MONITOR → IMPROVE
│       │      │       │       │          │         │         │
GitHub  Git   Docker  Jest   Docker     ArgoCD   Prometheus  Doc
Projects       Build  ESLint  Hub      Kubernetes  Grafana
---

## 📁 Structure du projet
devops-mini-projet/
├── backend/
│   ├── src/
│   │   ├── index.js        # API Express + endpoints /metrics
│   │   └── db.js           # Connexion MySQL
│   ├── tests/
│   │   └── app.test.js     # Tests unitaires Jest
│   ├── Dockerfile
│   ├── package.json
│   └── .eslintrc.json
├── frontend/
│   ├── index.html          # Interface Task Manager
│   └── Dockerfile
├── k8s/
│   ├── mysql-secret.yaml
│   ├── mysql-deployment.yaml
│   ├── backend-deployment.yaml
│   └── frontend-deployment.yaml
├── .github/
│   └── workflows/
│       └── ci.yml          # Pipeline CI/CD complet
├── docker-compose.yml
├── sonar-project.properties
└── README.md
---

## 🚀 Lancer le projet localement

### Prérequis
- Docker & Docker Compose
- Node.js 20+
- kubectl + Minikube

### Avec Docker Compose
```bash
git clone https://github.com/Med-Aziz-Daira/devops-mini-projet.git
cd devops-mini-projet
docker compose up --build
```

- Frontend: http://localhost:8080
- Backend API: http://localhost:3000
- Métriques: http://localhost:3000/metrics

### Avec Kubernetes (GitOps)
```bash
minikube start --memory=4096 --cpus=2

# Installer ArgoCD
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

# ArgoCD se synchronise automatiquement avec le repo GitHub
# L'application se déploie sans aucune commande manuelle

minikube service frontend --url
minikube service backend --url
```

---

## 🔐 Secrets GitHub Actions

| Secret | Description |
|--------|-------------|
| `SONAR_TOKEN` | Token SonarCloud pour l'analyse qualité |
| `DOCKERHUB_USERNAME` | Nom d'utilisateur Docker Hub |
| `DOCKERHUB_TOKEN` | Token d'accès Docker Hub |

---

## 📊 Pipeline CI
push/PR → Lint & Test → SonarCloud → Trivy Scan → Docker Build & Push
Chaque étape doit réussir pour passer à la suivante.

---

## 👤 Auteur

**Mohamed Aziz Daira**  
IT Business School  
Professeur : Mohamed Nejah Issaoui
Module : Pratique DevOps, Chaînes d'outils et Automatisation
