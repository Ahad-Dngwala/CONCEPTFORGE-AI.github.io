# ConceptForge AI

> **Transforming Unstructured Text into Structured Mastery.**

![License](https://img.shields.io/badge/license-MIT-blue.svg) ![Node.js](https://img.shields.io/badge/backend-Node.js-green) ![React](https://img.shields.io/badge/frontend-React-61DAFB) ![Gemini](https://img.shields.io/badge/AI-Gemini_Flash-orange) ![Status](https://img.shields.io/badge/status-Active-success)

---

## 📸 Snapshots

<div align="center">
  <img src="https://github.com/user-attachments/assets/ef8a09d8-7681-4197-ac61-c1addec04fc0" width="45%" alt="Dashboard" />
  <img src="https://github.com/user-attachments/assets/59bcab4c-a144-460f-9321-0ffb64e557fc" width="45%" alt="Quiz Interface" />
  <br/>
  <img src="https://github.com/user-attachments/assets/2224bbd8-1414-47d7-9980-6ed1bd1cc7b4" width="45%" alt="Concept Map" />
  <img src="https://github.com/user-attachments/assets/1ac91671-f26a-4d35-ba36-e48bc250b4f9" width="45%" alt="Results" />
</div>

---

## 🚀 Overview

**ConceptForge AI** is an enterprise-grade, autonomous multi-agent system designed to revolutionize how educational content is processed and consumed. Unlike traditional quiz generators that rely on simple prompts, ConceptForge employs a sophisticated **swarm of cognitive agents** to decompose complex texts, extract deep semantic relationships, and construct difficulty-calibrated assessments.

The system features a self-correcting **Validator Agent** that mimics human review processes, rejecting and regenerating content until it meets strict pedagogical standards (Bloom’s Taxonomy).

## 🧠 System Architecture

ConceptForge utilizes a deterministic pipeline of specialized inputs and feedback loops.

```mermaid
graph TD
    UserInput[📄 Raw Educational Text] --> ChunkAgent
    subgraph "Agentic Swarm Core"
        ChunkAgent[✂️ Chunk Generator] --> ConceptAgent[💡 Concept Extractor]
        ConceptAgent --> HierarchyAgent[🔗 Hierarchy Builder]
        HierarchyAgent --> QuizAgent[❓ Quiz Generator]
        QuizAgent --> Validator{🧐 Validator Agent}
        
        Validator -- "❌ Rejection (Quality/Logic)" --> QuizAgent
        Validator -- "✅ Approval" --> AnswerAgent
    end
    
    AnswerAgent[📝 Answer Drafter] --> ExplainerAgent[👨‍🏫 Expert Explainer]
    ExplainerAgent --> UI[📦 Final Learning Package]

    style Validator stroke:#f66,stroke-width:2px,color:#fff,fill:#d00
    style UserInput stroke:#333,stroke-width:2px
    style UI stroke:#4CAF50,stroke-width:2px
```

## ✨ Key Features

- **🤖 True Multi-Agent Orchestration**: Seven specialized agents working in concert (Chunking, Extraction, Hierarchy, Generation, Validation, Reasoning, Explanation).
- **🔁 Autonomous Quality Control**: A dedicated Critic Agent continually evaluates output logic and difficulty, enforcing a regeneration loop for high-fidelity results.
- **🧩 Concept Dependency Mapping**: Visualizes how topics interrelate, creating a structured path for learning rather than isolated questions.
- **🎓 Pedagogical Alignment**: Quizzes are strictly ranked using **Bloom’s Taxonomy**, ensuring a progression from Knowledge/Recall to Analysis/Evaluation.
- **🛡️ Enterprise Security**: Secure authentication (JWT/Bcrypt) with persistent learning history and user tracking.
- **📱 Responsive Dark UI**: A modern, glassmorphism-inspired React interface optimized for focus and readability.

## 🛠️ Technology Stack

| Component | Technology | Description |
|-----------|------------|-------------|
| **AI Model** | Gemini 1.5 Flash | High-throughput, low-latency reasoning model. |
| **Backend** | Node.js / Express | Robust API layer handling agent orchestration. |
| **Frontend** | React / Tailwind* | Dynamic user interface with smooth transitions. |
| **Database** | PostgreSQL | Relational storage for users, quizzes, and history. |
| **Auth** | JWT + Bcrypt | Stateless, secure user session management. |

*\*Styled with custom CSS/styled-components patterns.*

## ⚙️ Installation & Setup

Follow these steps to deploy the system locally.

### Prerequisites
- **Node.js** (v18+)
- **PostgreSQL** (Running locally or hosted)

### 1. Clone the Repository
```bash
git clone https://github.com/varun-ai69/Agentic---AI-.git
cd Agentic---AI-
```

### 2. Configure Environment
Create a `.env` file in the `backend/` directory:
```env
GEMINI_API_KEY=your_google_ai_key
DATABASE_URL=postgres://user:password@localhost:5432/conceptforge
JWT_SECRET=your_secure_secret
PORT=3000
```

### 3. Install Dependencies
You can install dependencies for both services manually:
```bash
# Backend
cd backend && npm install

# Frontend
cd ../frontend && npm install
```

### 4. Application Startup
For convenience, a **Windows script** is provided to launch both services in separate terminals:

```bash
# From the root directory
start.bat
```

*Alternatively, run them separately:*
- **Backend**: `npm run dev` (Port 3000)
- **Frontend**: `npm start` (Port 3001)

## 🔮 Roadmap

- [ ] **Adaptive Learning Paths**: Agents that modify future content based on past user performance.
- [ ] **LMS Integrations**: LTI support for Canvas, Blackboard, and Moodle.
- [ ] **Multi-Modal Input**: Support for PDF, Video transcripts, and Audio lectures.
- [ ] **Collaborative Mode**: Multiplayer quiz battles and shared study rooms.

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---
<div align="center">

**Built with ❤️ for the Future of Students by Ahad Dangarvawala**

</div>
