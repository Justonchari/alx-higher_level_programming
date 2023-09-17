#!/usr/bin/python3
''' a script that lists all State objects,
    and corresponding City objects,
    contained in the database hbtn_0e_101_usa
'''
from relationship_state import State, Base
from relationship_city import City
from sqlalchemy import create_engine
from sys import argv
from sqlalchemy.orm import Session

if __name__ == "__main__":
    engine = create_engine('mysql://{}:{}@localhost:3306/{}'
                           .format(argv[1], argv[2], argv[3]))
    Base.metadata.create_all(bind=engine)
    session = Session(bind=engine)

    relations = session.query(State).outerjoin(City)\
        .order_by(State.id, City.id).all()
    for states in relations:
        print(f"{states.id}: {states.name}")
        for city in states.cities:
            print(f"    {city.id}: {city.name}")
    session.close()
