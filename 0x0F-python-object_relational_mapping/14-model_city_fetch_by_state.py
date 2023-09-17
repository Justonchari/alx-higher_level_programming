#!/usr/bin/python3
'''prints all City objects from the database hbtn_0e_14_usa'''
from model_city import City
from model_state import State, Base
from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from sys import argv


if __name__ == "__main__":
    engine = create_engine('mysql+mysqldb://{}:{}@localhost:3306/{}'
                           .format(argv[1], argv[2], argv[3]))
    Base.metadata.create_all(bind=engine)
    session = Session(bind=engine)
    for instance in session.query(State.name, City.id, City.name).\
            filter(State.id == City.state_id).order_by(City.id):
        print(instance[0] + ": (" + str(instance[1]) + ") " + instance[2])
