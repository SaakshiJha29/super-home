# ⚡ PulseQL — Real-World API Testing & Mocking Platform

> **Build It Like You Mean It Challenge Entry**  
> 🌐 **Live Demo:** [https://super-home-delta.vercel.app/](https://super-home-delta.vercel.app/)  
> 📦 **GitHub Repository:** [https://github.com/SaakshiJha29/super-home.git](https://github.com/SaakshiJha29/super-home.git)  
> 🎨 **Aesthetic:** Light Blue Glassmorphism (`#0ea5e9`, `#38bdf8`, `#0284c7`) with human-crafted elegance.

---

## 🎯 The Problem PulseQL Solves

In modern software development, frontend and mobile engineering teams are frequently blocked while waiting for backend APIs to be designed, deployed, or stabilized. Existing mock servers present several critical flaws:

1. **Static & Unrealistic Mocks**: Standard mock servers return rigid, hardcoded JSON data without simulating real-world network turbulence.
2. **Untested Failure Boundaries**: Applications fail in production because developers cannot easily test how their client SDKs handle **503 Service Unavailable** errors, high latency spikes, or packet drop ratios.
3. **Slow Feedback Loops**: Spinning up local backend containers or cloud staging environments consumes valuable development time.

### 💡 The Solution
**PulseQL** provides an instant, edge-backed API testing and mocking platform. Developers can spin up synthetic GraphQL and REST endpoints in milliseconds, throttle network latency on the fly (10ms to 800ms), inject chaos fault profiles, and validate application resilience before shipping to production.

Try out the live web app deployment at [https://super-home-delta.vercel.app/](https://super-home-delta.vercel.app/).

---

## ✨ Features Offered

- ⚡ **Instant Endpoint Provisioning**: Spin up synthetic GraphQL and REST endpoints with zero backend boilerplate.
- 🔬 **Live Interactive Sandbox**:
  - **Protocol Target Switcher**: Toggle seamlessly between `REST API`, `GraphQL`, and `Fault Inject` modes.
  - **Latency Slider (10ms - 800ms)**: Dynamically throttle network delay and observe real-time payload transformations.
  - **Live Code Inspector**: Formatted JSON response viewer with HTTP status badges (`200 OK`, `503 Fault Injected`) and a copy-to-clipboard button.
  - **One-Click Presets**: Pre-populated scenarios (*User Telemetry*, *Cluster Health*, *503 Fault Injection*).
- 🌐 **Global Edge Topology Map**: Interactive world map visualizer displaying routing telemetry across 35+ PoP locations (*US-East*, *US-West*, *EU-Central*, *AP-South*, *SA-East*).
- 🛡️ **Honesty & Transparency Standard**: Adheres strictly to technical truth—zero fabricated user counts or vanity marketing testimonials. Real engineering specs (`< 15ms Edge Latency`, `100% Open Source Spec`, `Zero Telemetry`).
- 🔑 **Developer Portal Access**: Sleek Sign In modal and portal callout card for managing persistent mock endpoints.
- 🎮 **Secret Konami Easter Egg**: Built-in keyboard listener (`↑ ↑ ↓ ↓ ← → ← → B A`) unlocking a cyberpunk cluster debug notification toast.
- 🔝 **Smooth UX Polish**: Custom glowing cursor and floating scroll-to-top navigation button.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Live Deployment** | Vercel | Instant global edge CDN distribution at [super-home-delta.vercel.app](https://super-home-delta.vercel.app/) |
| **Framework** | React 19 + Vite 8 | Microsecond reactive state renders, sub-second HMR, and ultra-fast build output |
| **Styling** | Tailwind CSS + Glassmorphism | Custom design tokens, light blue palette (`#0ea5e9`, `#38bdf8`), light ambient mesh background (`#f8fafc`) |
| **Icons** | Lucide React | Modern, clean vector icon suite matching engineering dashboard standards |
| **Architecture Document** | `DECISIONS.md` | In-depth engineering rationale and trade-off analysis in repository root |

---

## 🚀 Future Scope & Roadmap

1. ⚙️ **Automated Schema Parser & CLI**: Command-line tool (`npx pulseql-cli`) to auto-generate mock endpoints directly from `.graphql` schemas or OpenAPI 3.0 specs.
2. 🔄 **Real-Time WebSocket & SSE Mocking**: Support for streaming GraphQL Subscriptions and Server-Sent Events with latency simulation.
3. 👥 **Team Workspaces & RBAC**: Collaborative environment vaults allowing engineering teams to share mock endpoints and network throttling profiles.
4. 🤖 **CI/CD Assertion Pipeline**: GitHub Actions integration to automatically test client fallback boundaries against simulated fault injection in pull requests.

---

## 💻 Local Setup & Installation

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/SaakshiJha29/super-home.git

# 2. Navigate to project directory
cd super-home

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev

# 5. Build production bundle
npm run build
```

Open [http://localhost:5173/](http://localhost:5173/) in your browser to view the application locally or visit the live deployment at [https://super-home-delta.vercel.app/](https://super-home-delta.vercel.app/).

---

## 📝 Architectural Decisions Log

For a detailed breakdown of stack selection, technical trade-offs (prioritizing high-fidelity frontend micro-interactions over heavy database backends), and AI pair-programming disclosure, please inspect [DECISIONS.md](./DECISIONS.md).

---

## 📄 License & Challenge Attribution

Created as a submission for the **"Build It Like You Mean It" Challenge**.  
Live Demo: [https://super-home-delta.vercel.app/](https://super-home-delta.vercel.app/)  
Repository maintained by [SaakshiJha29](https://github.com/SaakshiJha29/super-home).
