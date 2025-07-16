from app.database import Base, engine

def reset_database():
    # Drop all tables
    Base.metadata.drop_all(bind=engine)
    # Create all tables
    Base.metadata.create_all(bind=engine)
    print("Database schema has been reset.")

if __name__ == "__main__":
    reset_database()
