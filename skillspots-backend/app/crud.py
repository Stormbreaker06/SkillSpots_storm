from sqlalchemy.orm import Session
from . import models, schemas, auth

def create_user(db: Session, u: schemas.UserCreate):
    user = models.User(name=u.name, email=u.email, hashed_password=auth.hash_password(u.password))
    db.add(user)
    db.commit()
    db.refresh(user)
    return user

def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()

def create_workshop(db: Session, w: schemas.WorkshopCreate):
    obj = models.Workshop(**w.dict())
    db.add(obj)
    db.commit()
    db.refresh(obj)
    return obj

def list_workshops(db: Session, category: str = None, date: str = None, price: str = None):
    q = db.query(models.Workshop)
    if category:
        q = q.filter(models.Workshop.category == category)
    if date:
        # Assuming date is a string in ISO format, filter workshops on that date
        from datetime import datetime, timedelta
        start = datetime.fromisoformat(date)
        end = start + timedelta(days=1)
        q = q.filter(models.Workshop.time >= start, models.Workshop.time < end)
    if price == "free":
        q = q.filter(models.Workshop.price == 0)
    return q.all()

def get_workshop_by_id(db: Session, workshop_id: int):
    return db.query(models.Workshop).filter(models.Workshop.id == workshop_id).first()

def book_workshop(db: Session, user_id: int, workshop_id: int):
    booking = models.Booking(user_id=user_id, workshop_id=workshop_id)
    db.add(booking)
    db.commit()
    db.refresh(booking)
    return booking

def list_user_bookings(db: Session, user_id: int):
    return db.query(models.Booking).filter(models.Booking.user_id == user_id).all()
