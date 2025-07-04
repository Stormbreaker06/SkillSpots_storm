from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from .. import schemas, crud, auth, database

router = APIRouter(prefix="/bookings", tags=["bookings"])

@router.post("/{workshop_id}", response_model=schemas.BookingOut)
def book_workshop(workshop_id: int, token: str = Depends(auth.oauth2_scheme), db: Session = Depends(database.get_db)):
    user_email = auth.get_current_user(token)
    user = crud.get_user_by_email(db, user_email)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return crud.book_workshop(db, user.id, workshop_id)

@router.get("/me", response_model=List[schemas.BookingOut])
def get_my_bookings(token: str = Depends(auth.oauth2_scheme), db: Session = Depends(database.get_db)):
    user_email = auth.get_current_user(token)
    user = crud.get_user_by_email(db, user_email)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return crud.list_user_bookings(db, user.id)
