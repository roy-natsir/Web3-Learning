# My On-Chain Professional Portfolio (Web3 CV)

## Orchis Portfolio

Welcome to the repository for my main portfolio project. I am building this **On-Chain Professional Portfolio** in parallel with my comprehensive Full Stack Web3 developer roadmap.

This project is my way of applying every concept I learn—from frontend fundamentals to advanced smart contract engineering—into a single, tangible showcase. It's not just a project; it's the living record of my journey as a developer.

---

## 🎯 My Project Goal

My goal is to build my professional portfolio directly on-chain. This will serve as a verifiable, immutable record of my skills, experience, and completed projects.

Instead of just listing my skills on a traditional CV, I'm building a platform to **demonstrate** them. This project is designed to be my unique "digital CV" and a practical showcase of my abilities for recruiters, technical interviewers, and the Web3 community.

---

## 🎨 What I'm Building (Key Deliverables)

- **An On-Chain CV:** A smart contract that stores my professional data, such as work experience and technical skills.
- **An Interactive Web3 Portfolio:** A clean and responsive frontend, built with modern tools, to display my on-chain data.
- **NFT Business Cards:** A feature allowing others to mint a professional card with my contact details.
- **An On-Chain Achievement System:** A system for issuing on-chain badges to represent my completed milestones and verified skills.
- **A Live, Deployed Demo:** The final application will be live on a testnet, accessible via a public URL.

---

## 🛠️ My Tech Stack (Aligned with My Learning Roadmap)

I'm building this project in stages, and my tech stack evolves as I progress through my learning roadmap.

- **Web Foundations (Roadmap Phases 1-2):**
  - HTML/CSS & Responsive Design
  - JavaScript (ES6+)
  - Git/GitHub

- **Frontend Architecture (Roadmap Phases 3-4):**
  - Next.js & TypeScript
  - Tailwind CSS
  - Next.js API Routes

- **Frontend Testing (Roadmap Phase 5):**
  - Jest & React Testing Library

- **Web3 Integration (Roadmap Phases 6-7):**
  - ethers.js
  - Web3Modal / RainbowKit
  - IPFS for metadata storage

- **Smart Contracts (Roadmap Phases 8-9):**
  - Solidity
  - Foundry for professional testing
  - OpenZeppelin Contracts

- **Advanced Systems (Roadmap Phases 10-11):**
  - Multi-chain deployment (L2s)
  - GitHub Actions for CI/CD
  - Basic performance monitoring

---

## ⚡ Core Features (Developed in Stages)

I'm developing the features in incremental stages to ensure a sustainable pace and high-quality outcome.

### **Stage 1: Foundational MVP**

1.  **A Professional Portfolio Website:**
    - An 'About Me' section, skills showcase, and a project gallery (initially with static data).
    - A functional contact form and a fully responsive design.
2.  **Initial Web3 Integration:**
    - Wallet connection functionality (MetaMask).
    - Display of the connected wallet address and ENS name.

### **Stage 2: On-Chain Functionality**

3.  **The Smart Contract CV:**
    - An on-chain data structure for my professional experience and skills.
    - Owner-only functions to add or update my information.
    ```solidity
    contract ProfessionalCV {
        struct Experience { /* ... */ }
        struct Skill { /* ... */ }
        mapping(address => Experience[]) public experiences;
        mapping(address => Skill[]) public skills;
        function addExperience(...) public onlyOwner { /* ... */ }
    }
    ```
4.  **NFT Business Cards:**
    - A mintable ERC-721 token representing my professional business card.
    - Dynamic metadata pulled from IPFS.

### **Stage 3: Professional & Advanced Features**

5.  **An On-Chain Achievement System:**
    - A system for linking on-chain badges for completed courses or verified skills.
    - A method for linking to "proof of work" (e.g., transaction hashes of other completed projects).
6.  **Multi-Chain Support:**
    - Contracts deployed to multiple testnets (e.g., Ethereum Sepolia, Arbitrum Sepolia).
    - A network switching UI on the frontend.

---

## 📊 My Development Philosophy & Timeline

My development philosophy is **"learn and apply immediately."** I am building features in parallel with my learning roadmap to ensure every theoretical concept is reinforced with practical application.

- **Phase 1: Foundation (Parallel with Roadmap Phases 1-2)**
  - I will build the static portfolio website while mastering HTML/CSS/JS.
  - I will establish my Git workflow and deploy the first version to Vercel.

- **Phase 2: React Integration (Parallel with Roadmap Phases 3-4)**
  - I will migrate the static site to a Next.js & TypeScript application.
  - I will implement my first frontend tests.

- **Phase 3: Web3 Integration (Parallel with Roadmap Phases 5-7)**
  - I will integrate wallet connection and IPFS.
  - I will practice reading basic data from the blockchain.

- **Phase 4: Smart Contracts (Parallel with Roadmap Phases 8-9)**
  - I will write and rigorously test the `ProfessionalCV` smart contract with Foundry.
  - I will deploy it to a testnet and connect it to the frontend.

- **Phase 5: Advanced Features (Parallel with Roadmap Phases 10-11)**
  - I will implement multi-chain deployment and set up a full CI/CD pipeline.
  - I will conduct final performance optimizations.

---

## 🎯 Why I Chose This Project

- **Achievable Scope:** The project has a clear focus on my personal portfolio, which keeps the scope controlled and ensures I can finish it.
- **Unique Differentiator:** An interactive, on-chain portfolio stands out significantly from standard static websites, demonstrating a native Web3 mindset.
- **Comprehensive Skill Showcase:** Successfully completing this project will be tangible proof of my full-stack capabilities, from UI design and smart contract security to DevOps automation.
- **Practical Learning Tool:** Every concept from my learning roadmap is immediately applied to a real-world feature, reinforcing my knowledge and providing context.
