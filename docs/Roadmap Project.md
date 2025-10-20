Project-Based Learning Roadmap (Daily Curriculum)

This is a structured curriculum designed to guide you through building the four main portfolio projects.

Project Goal: Build the static yet professional User Interface (UI) for my On-Chain Portfolio.

## **Week 1: HTML, CSS & Git Fundamentals**

├── Day01-Topic: HTML Semantics -> Task: Create the basic file structure & HTML for the Portfolio page.
├── Day02-Topic: CSS Box Model -> Task: Apply base styling (colors, fonts) to the Portfolio page.
├── Day03-Topic: Git & GitHub -> Task: Initialize a Git repo & create a GitHub repository for the Portfolio.
├── Day04-Topic: Git Branching -> Task: Create a `feat/ui-layout` branch for all UI work.
├── Day05-Topic: CSS Flexbox -> Task: Build the Header & Hero Section layout of the Portfolio with Flexbox.
├── Day06-Topic: Component Practice -> Task: Design the structure for project cards and skill cards.
└── Day07-Topic: Weekly Review -> Task: Review & merge the `feat/ui-layout` branch.```

### **Week 2: Advanced CSS & Responsive Design**

├── Day08-Topic: Advanced Flexbox -> Task: Refine alignment & spacing in the Header/Hero sections.
├── Day09-Topic: CSS Grid -> Task: Build the project gallery layout for the Portfolio with CSS Grid.
├── Day10-Topic: Flexbox vs Grid -> Task: Evaluate & choose the best layout technique for each section.
├── Day11-Topic: Responsive Units -> Task: Refactor the Portfolio's CSS to use rem and em units.
├── Day12-Topic: Media Queries -> Task: Make the Portfolio UI fully responsive for tablets & mobile.
├── Day13-Topic: Project Refactor -> Task: Review & refactor the entire CSS file for consistency.
└── Day14-Topic: Weekly Review -> Task: Test responsiveness across various browser screen sizes.

### **Week 3: Advanced CSS & Design**

├── Day15-Topic: CSS Transitions & Transforms -> Task: Add smooth hover effects & transitions to buttons/cards.
├── Day16-Topic: CSS Keyframe Animations -> Task: Add a simple "fade-in" animation on page load.
├── Day17-Topic: SASS Basics -> Task: (Optional) Refactor CSS to SASS for better organization.
├── Day18-Topic: UI/UX Principles -> Task: Re-evaluate the Portfolio design, improving spacing & visual hierarchy.
├── Day19-Topic: Web Accessibility (A11Y) -> Task: Perform a basic accessibility audit on your Portfolio.
├── Day20-Topic: Animated Component -> Task: Create a CSS-only "loading spinner" component for later use.
└── Day21-Topic: Weekly Review -> Task: Finalize the entire static visual design of the Portfolio.

### **Week 4: First Portfolio Project**

├── Day22-Topic: Planning & Wireframing -> Task: Replace: Write a one-page design doc for the On-Chain Portfolio.
├── Day23-Topic: Semantic Markup -> Task: Replace: Re-audit the Portfolio's HTML for correct semantics.
├── Day24-Topic: Styling Implementation -> Task: Replace: Finish any pending CSS styling.
├── Day25-Topic: Micro-Interactions -> Task: Replace: Add final micro-interaction animations to the UI.
├── Day26-Topic: Final Polish -> Task: Replace: Fix all visual bugs & perform a final audit.
├── Day27-Topic: Deployment -> Task: Replace: Deploy the static version of your Portfolio to Vercel.
└── Day28-Topic: Monthly Review -> Task: Replace: Write the initial README with a live demo link & screenshots.

---

## 📚 **PHASE 2: JAVASCRIPT MASTERY (Days 29-63)**

**Project Goal:** Make the static UI dynamic using vanilla JavaScript (as a foundational exercise before React).

_(During Weeks 1-3, focus on separate JS exercises. In Weeks 4 & 5, apply concepts directly to the project.)_

### **Week 4: DOM Manipulation & Events**

├── Day50-Topic: DOM Selection -> Task: Select elements in the Portfolio UI with JavaScript.
├── Day51-Topic: Dynamic DOM Manipulation -> Task: Write a JS function to render project cards from a JS array of data.
├── Day52-Topic: Event Handling -> Task: Add event listeners for UI interactivity (e.g., filter buttons).
├── Day53-Topic: Event Bubbling/Delegation -> Task: Apply event delegation to the project gallery.
├── Day54-Topic: Form Handling & Validation -> Task: Apply JS validation to the Portfolio's contact form.
├── Day55-Topic: Project: Crypto Watchlist -> Task: Replace: Finalize all dynamic functionalities of the Portfolio.
└── Day56-Topic: Weekly Review -> Task: Review & refactor all of your JavaScript code.

_(Note: Much of this JS will be rewritten in Next.js, so this phase is for fundamental understanding.)_

---

## 📚 **PHASE 4: MODERN FRONTEND ARCHITECTURE (Days 85-112)**

**Project Goal:** Rebuild the Portfolio frontend with Next.js & TypeScript.

### **Weeks 1-3: React, Hooks, & Next.js**

├── Day85-Topic: Setup Vite/Next.js -> Task: Initialize a new Next.js project for the Portfolio.
├── Day86-Topic: Components & Props -> Task: Break the Portfolio UI down into React components (<Header>, <ProjectCard>).
├── Day92-Topic: useEffect -> Task: Use useEffect for simple logging or other side effects.
├── Day99-Topic: Setup Next.js App Router -> Task: Migrate the component structure to the App Router.

### **Week 4: Portfolio Refactor Project**

├── Day106-112-Topic: Portfolio Refactor Project -> Task: Full Focus: Complete the migration of the Portfolio from Vanilla JS to Next.js. Ensure all previous functionality works.

---

## 📚 **PHASE 5 & 6: TESTING & WEB3 INTEGRATION (Days 113-154)**

**Project Goal:** Integrate core Web3 functionality and basic testing into the Portfolio DApp.

### **Phase 5 (Weeks 1-3): Testing & Quality Assurance**

├── Day116-Topic: React Testing Library -> Task: Write a simple unit test for the <ProjectCard> component.
├── Day 117-119: Web3 Testing Deep Dive
├── Day 117: Mock wallet providers untuk testing
├── Day 118: Contract interaction testing
├── Day 119: E2E testing wallet connection flow
├── Day132-Topic: CI/CD Integration -> Task: Create a skeleton GitHub Actions file for frontend tests.

### **Phase 6 (Weeks 2-3): Web3 Fundamentals & Integration**

├── Day142-Topic: ethers.js -> Task: Initialize an ethers.js provider in the Portfolio application.
├── Day143-Topic: Wallet Connection -> Task: Implement the "Connect Wallet" button using RainbowKit.
├── Day144-Topic: Reading Balances -> Task: Display the connected user's address & ETH balance.
├── Day148-154-Topic: First Web3 Project -> Task: Replace: Finalize and polish all basic Web3 integration features on your Portfolio.

---

## 📚 **PHASE 7 & 8: ETHEREUM & SOLIDITY (Days 155-203)**

**Project Goal:** Write the first draft of the `ProfessionalCV` and `NFTBusinessCard` smart contracts.

├── Day170-Topic: Solidity Syntax -> Task: Create the ProfessionalCV.sol file with the basic contract skeleton & structs.
├── Day181-Topic: Project: Simple Bank -> Task: Replace: Implement the basic addExperience logic in the contract.
├── Day197-203-Topic: Project: Voting System -> Task: Replace: Design and implement the draft of NFTBusinessCard.sol.

---

## 📚 **PHASE 9: PROFESSIONAL EVM ENGINEERING (Days 204-259)**

**Project Goal:** Take the draft contracts and make them robust through professional testing with Foundry.

_(Every day in this phase, the learned topic is directly applied to test the On-Chain Portfolio contracts.)_

├── Day204-Topic: Intro to Foundry -> Task: Set up a Foundry project for the Portfolio contracts.
├── Day208-Topic: Fuzz Testing -> Task: Write a fuzz test for the addExperience function.
├── Day211-Topic: Invariant Testing -> Task: Write an invariant test to ensure onlyOwner on addExperience works.

⭐ Job-Ready Milestone (Day 259 / ~Month 9): By the end of this phase, you have a DApp with professionally tested contracts and are ready to apply for jobs.

## **📚 PHASE 10 & 3: L2 DEPLOYMENT & DATA INDEXING (Days 260-287)**

Project Goal: Deploy the contracts to L2 and build a subgraph for data efficiency.

Week 1 (Phase 10): Layer 2 Solutions & Scaling
├── Day261-Topic: Arbitrum Development -> Task: Write a script & deploy the Portfolio contracts to Arbitrum Testnet.

(Parallel) Weeks 2-3 (Phase 3): Backend Fundamentals
├── Task: Apply the material from Phase 3 now.
├── Task: Learn The Graph (Days 66-67) & immediately build a subgraph for the On-Chain Portfolio.
├── Task: Connect the Portfolio frontend to fetch `Experience` & `Skill` data from the subgraph.

## **📚 PHASE 11: DEVOPS & PROFESSIONAL DEVELOPMENT (Days 288-322)**

Project Goal: Finalize the project with a CI/CD pipeline and professional documentation.

Week 1: DevOps Fundamentals for Web3
├── Day291-Topic: GitHub Actions -> Task: Create a CI pipeline that runs `forge test` for the Portfolio repo.
├── Day 292-294: Docker & Environment Management:
├── Containerize frontend dan backend
├── Multi-environment deployment strategy
├── Secrets management implementation

Week 2: Deployment & Infrastructure  
├── Day295-Topic: Vercel Deployment -> Task: Ensure the Portfolio DApp is deployed & connected to the L2 Testnet.

Weeks 4 & 5: Professional Skills & Career Prep  
├── Day310-Topic: Technical Documentation -> Task: Write the final comprehensive README.md for the Portfolio.
├── Day317-Topic: Resume Writing -> Task: Add the On-Chain Portfolio as the primary project on your resume.
