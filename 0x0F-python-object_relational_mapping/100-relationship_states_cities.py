#!/usr/bin/python3
'''  a script that creates the State Californi
     with the Ci San Franci from the
     database hbtn_0e_100_usa
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

    newState = State(name='California')
    newCity = City(name='San Francisco')
    newState.cities.append(newCity)

    session.add(newState)
    session.add(newCity)
    session.commit()
