from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from . import models, database
from .database import engine, get_db
from .routes import users, auth, workshops, bookings

models.Base.metadata.create_all(bind=engine)
app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Adjust frontend origin as needed
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users.router)
app.include_router(auth.router)
app.include_router(workshops.router)
app.include_router(bookings.router)

@app.get("/")
def root():
    return {"message": "Welcome to SkillSpots"}
