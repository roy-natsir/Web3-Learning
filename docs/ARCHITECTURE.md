Orchis Portfolio Architecture
Overview

This portfolio is a Decentralized Application (DApp) designed to showcase a professional profile using Web3 technologies. It serves as a living, on-chain CV that evolves in parallel with my developer journey.
Core Components

1. Smart Contracts (packages/contracts/)

   ProfessionalCV.sol: The core smart contract for storing professional CV data (experience, skills) on-chain.

   NFTBusinessCard.sol: An ERC-721 contract that handles the logic for minting NFT business cards.

   Developed and tested using the Foundry framework for robustness and efficiency.

2. Frontend (packages/frontend/)

   Framework: Built with Next.js 14, utilizing the App Router for modern, server-first architecture.

   Styling: Styled with Tailwind CSS for a utility-first and responsive design.

   Web3 Integration: Powered by wagmi and viem for type-safe, and performant interactions with the blockchain.

   UI Components: Implemented using shadcn/ui for accessible and reusable components.

3. Subgraph (packages/subgraph/)

   Indexing: Utilizes The Graph Protocol to index on-chain data from the smart contracts for efficient querying.

   GraphQL: Provides a GraphQL API endpoint for the frontend to consume indexed data, ensuring a fast and responsive user experience.

Tech Stack

    Blockchain: Ethereum / Polygon (and their respective testnets)

    Smart Contracts: Solidity + Foundry

    Frontend: Next.js 14, TypeScript, Tailwind CSS

    Web3 Libraries: wagmi, viem

    Indexing: The Graph Protocol

    Package Manager: pnpm (within a monorepo structure)

    CI/CD: GitHub Actions
