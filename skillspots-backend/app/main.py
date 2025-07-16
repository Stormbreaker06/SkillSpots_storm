from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from app import models, database
from .database import engine, get_db
from .routes import users, auth, workshops, bookings

models.Base.metadata.create_all(bind=engine)
app = FastAPI()

app.include_router(users.router)
app.include_router(auth.router)
app.include_router(workshops.router)
app.include_router(bookings.router)

@app.get("/")
def root():
    return {"message": "Welcome to SkillSpots"}
