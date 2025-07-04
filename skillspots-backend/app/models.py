from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey, Text
from sqlalchemy.orm import relationship
from .database import Base
from datetime import datetime

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    bookings = relationship("Booking", back_populates="user")

class Workshop(Base):
    __tablename__ = "workshops"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    description = Column(Text)
    category = Column(String)
    price = Column(Float)
    time = Column(DateTime)
    location = Column(String)
    instructor_name = Column(String)
    bookings = relationship("Booking", back_populates="workshop")

class Booking(Base):
    __tablename__ = "bookings"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    workshop_id = Column(Integer, ForeignKey("workshops.id"))
    booking_time = Column(DateTime, default=datetime.utcnow)

    user = relationship("User", back_populates="bookings")
    workshop = relationship("Workshop", back_populates="bookings")
