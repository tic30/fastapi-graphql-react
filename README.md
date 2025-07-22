# Fullstack boilerplate

This is a Python FastAPI + GraphQL + React boilerplate

## Frontend

### React + TypeScript + Vite

Frontend uses `Apollo client` to handle GraphQL. The UI framework is `Ant Design`. A custom theme example is included. See `/frontend` folder for more detail.

## Backend

### Python + FastAPI + Strawberry

Backend uses `FastAPI` with `Strawberry GraphQL` for the API layer. Poetry is used for dependency management. See `/backend` folder for more detail.

## Getting Started

### Backend Setup

```bash
cd backend
poetry install
python -m venv .venv
source .venv/bin/activate
fastapi dev main.py
```

Apollo Sandbox available at: http://localhost:8000

### Frontend Setup

```bash
cd frontend
npm i && npm run dev
```

Frontend available at: http://localhost:5173

## Project Structure

-   `/frontend` - React + TypeScript + Vite application with Apollo Client
-   `/backend` - FastAPI + Strawberry GraphQL API server

## Variants

-   `chromatic` branch also inclues Chromatic. After pulling, follow https://www.chromatic.com/docs/quickstart/ to finish the setup.
