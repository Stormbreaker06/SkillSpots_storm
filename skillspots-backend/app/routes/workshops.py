from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List, Optional
from datetime import datetime
from .. import schemas, crud, database

router = APIRouter(prefix="/workshops", tags=["workshops"])

@router.post("/", response_model=schemas.WorkshopOut)
def add_workshop(workshop: schemas.WorkshopCreate, db: Session = Depends(database.get_db)):
    return crud.create_workshop(db, workshop)

@router.get("/", response_model=List[schemas.WorkshopOut])
def get_workshops(
    category: Optional[str] = None,
    date: Optional[str] = None,
    price: Optional[str] = None,
    db: Session = Depends(database.get_db)
):
    return crud.list_workshops(db, category, date, price)
