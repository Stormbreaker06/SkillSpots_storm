# SkillSpots

SkillSpots is a full-stack web application designed to connect users with workshops and events. The project consists of two main parts: a backend API built with FastAPI (Python) and a frontend web application built with React and Vite.

---

## Project Overview

- **Backend:** FastAPI-based RESTful API providing authentication, user management, workshop listings, bookings, and more.
- **Frontend:** React application using Vite for fast development and Tailwind CSS for styling. It provides a user-friendly interface to browse workshops, manage profiles, and handle bookings.

---

## Backend

### Technology Stack

- Python 3.10+
- FastAPI
- SQLAlchemy (for ORM)
- Pydantic (for data validation)
- Uvicorn (ASGI server)
- Virtual environment located in `skillspots-backend/vevn`

### Setup

1. Navigate to the backend directory:
   ```bash
   cd skillspots-backend
   ```

2. Activate the virtual environment:
   - On Windows (cmd):
     ```bash
     venv\Scripts\activate.bat
     ```
   - On Windows (PowerShell):
     ```bash
     .\venv\Scripts\Activate.ps1
     ```
   - On Unix or MacOS:
     ```bash
     source venv/bin/activate
     ```

3. Install dependencies (if not already installed):
   ```bash
   pip install -r requirements.txt
   ```

### Running the Backend

Run the FastAPI server using Uvicorn:

```bash
uvicorn app.main:app --reload
```

The API will be available at `http://localhost:8000`.

---

## Frontend

### Technology Stack

- React 18+
- Vite (build tool)
- Tailwind CSS (utility-first CSS framework)
- React Router (for routing)

### Setup

1. Navigate to the frontend directory:
   ```bash
   cd skillspots-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Frontend

Start the development server:

```bash
npm run dev
```

The frontend will be available at `http://localhost:3000` (or the port Vite assigns).

---

## Folder Structure

```
skillspots-project/
│
├── skillspots-backend/
│   ├── app/
│   │   ├── auth.py
│   │   ├── crud.py
│   │   ├── database.py
│   │   ├── main.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   └── routes/
│   │       ├── auth.py
│   │       ├── bookings.py
│   │       ├── users.py
│   │       └── workshops.py
│   └── venv/ (Python virtual environment)
│
├── skillspots-frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
└── README.md (this file)
```

---

## Dependencies

- Backend dependencies are managed via `pip` and listed in `requirements.txt` (if present).
- Frontend dependencies are managed via `npm` and listed in `package.json`.

---

## Contact

For questions or contributions, please contact the project maintainer.

---

This README provides a starting point for understanding, setting up, and running the SkillSpots project.
