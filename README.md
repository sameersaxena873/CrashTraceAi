# CashTrace AI

> Predictive cash-out location intelligence — front-end prototype for prioritizing synthetic risk locations from transaction and behavioral signals.

## Overview

**CashTrace AI** is a cinematic web prototype designed around a cybercrime investigation workflow. It demonstrates how complaint amount, transaction-chain context, geographic inputs, and behavioral signals could be presented to an investigator as a prioritized cash-out risk view.

The current repository is intentionally a **front-end demo**. It uses synthetic values and a deterministic JavaScript scoring formula; it does not connect to banks, NCRP/1930, police systems, payment networks, or live ATM/location data.

## Features

- Cinematic responsive landing page
- Interactive synthetic risk dashboard
- Complaint amount and transaction-chain panel
- Synthetic GIS-style risk heatmap
- Location & value predictor
- Ranked cash-out location table
- Synthetic risk levels and estimated values
- Alert acknowledgement interactions
- Responsive layout for desktop and mobile
- No build step or backend required

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Responsive CSS / animations
- Browser DOM APIs

> **Note:** The original concept references technologies such as Python, XGBoost, FastAPI, React, PostgreSQL/PostGIS, Pandas and NumPy. Those are **not implemented in this front-end repository**. They should only be added to the project's technology list after the corresponding backend/ML/GIS components are actually built.

## Project Structure

```text
CashTrace-AI/
├── index.html      # Main application page
├── styles.css      # Responsive UI, layout and animations
├── script.js       # Demo interactions and synthetic prediction logic
├── README.md       # Project documentation
├── .gitignore      # Git ignore rules
└── LICENSE         # MIT License
```

## How to Run

### Option 1 — Open directly

1. Download or clone the repository.
2. Open `index.html` in Chrome, Edge, or another modern browser.
3. Use **Open Intelligence Dashboard** or scroll to the **Location & Value Predictor**.

### Option 2 — Run with a local server

If Python is installed:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

A local server is useful for testing the project in an environment closer to deployment.

## Demo Workflow

1. Enter a complaint/transaction value.
2. Enter latitude and longitude.
3. Click **Run location prediction**.
4. The interface generates a synthetic risk level, estimated cash-out values, and a ranked list of three demo ATM locations.
5. Use the **View** buttons to inspect the demo interaction.
6. Use **Acknowledge alert** to demonstrate the alert workflow.

The current scoring logic is intentionally simple and deterministic. It is a UI demonstration, not a trained machine-learning model.

## Important Disclaimer

This project is a **synthetic educational/prototype demo**.

- It does not predict real ATM cash-outs.
- It does not identify real ATM locations.
- It does not access live transaction data.
- It does not connect to NCRP/1930, banks, police systems, payment networks, or other sensitive infrastructure.
- Coordinates entered by the user are used only to position a visual demo marker.
- The displayed risk scores and time windows are synthetic.

## Future Scope

A production-oriented version could add:

- Python/FastAPI backend
- Trained and validated ML ranking model
- PostgreSQL/PostGIS spatial data layer
- Authorized GIS/map provider integration
- Secure case and transaction ingestion
- Explainable model outputs
- Role-based investigator access
- Audit logs and monitoring
- Model evaluation, calibration and bias/error analysis
- Secure deployment and data governance

These are future architecture directions, not capabilities of the current repository.

## Resume Description

**CashTrace AI — Predictive Cash-Out Intelligence Prototype**

- Built a responsive web prototype that visualizes synthetic cybercrime cash-out risk using transaction value, geographic inputs and behavioral signals.
- Developed an interactive dashboard with ranked risk locations, synthetic heatmap visualization, prediction outputs and investigator-style alert actions.
- Implemented the prototype using HTML5, CSS3 and Vanilla JavaScript with responsive UI, animations and client-side scoring logic.

## Suggested GitHub Repository Description

```text
Responsive front-end prototype for synthetic predictive cash-out risk intelligence and cybercrime investigation workflows.
```

## License

This project is released under the MIT License. See `LICENSE`.
