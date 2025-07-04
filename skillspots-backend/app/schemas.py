from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional, List

class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str

class UserOut(BaseModel):
    id: int
    name: str
    email: EmailStr

    class Config:
        orm_mode = True

class WorkshopBase(BaseModel):
    title: str
    description: Optional[str] = None
    category: Optional[str] = None
    price: float
    time: datetime
    location: Optional[str] = None
    instructor_name: Optional[str] = None

class WorkshopCreate(WorkshopBase):
    pass

class WorkshopOut(WorkshopBase):
    id: int

    class Config:
        orm_mode = True

class BookingOut(BaseModel):
    id: int
    user_id: int
    workshop_id: int
    booking_time: datetime
    workshop: WorkshopOut

    class Config:
        orm_mode = True
