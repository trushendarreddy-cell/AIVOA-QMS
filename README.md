# AIVOA-QMS Frontend

## Overview

AIVOA-QMS Frontend is the user interface for the AI-Powered Pharmaceutical Quality Management System. Built with React and Redux Toolkit, it provides an interactive interface for logging customer complaints, uploading documents, reviewing AI-generated risk assessments, and managing complaint workflows.

---

## Features

- Natural language complaint input
- PDF and document upload
- AI-assisted complaint extraction
- Structured complaint form
- Complaint completeness validation
- AI Risk Assessment dashboard
- Root cause and CAPA recommendations
- Duplicate complaint warnings
- Complaint lifecycle management
- Real-time integration with FastAPI backend

---

## Technology Stack

- React.js
- Redux Toolkit
- Vite
- Axios
- JavaScript
- HTML5
- CSS3

---

## Project Structure

```text
AIVOA-QMS/
│── src/
│   ├── components/
│   ├── store/
│   ├── App.jsx
│   └── main.jsx
│── public/
│── package.json
│── vite.config.js
```

---

## Application Flow

```text
User Prompt / Document Upload
            │
            ▼
     React Components
            │
            ▼
      Redux Toolkit
            │
            ▼
        Axios API
            │
            ▼
      FastAPI Backend
            │
            ▼
      AI Processing
            │
            ▼
 Updated Complaint Form
            │
            ▼
 AI Risk Assessment Panel
```

---

## Installation

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend runs on:

```
http://localhost:5173
```

---

## Backend

This frontend communicates with the AIVOA-QMS Backend developed using FastAPI, LangGraph, SQLAlchemy, and MySQL.

---

## Author

**T. Rushendar Reddy**

B.Tech in Artificial Intelligence and Machine Learning

Vignan University

Hyderabad,Telangana
