#!/usr/bin/python3
"""a script that adds the State object Louisian
   to the database hbtn_0e_6_usa
"""
from sys import argv
from model_state import Base, State
from sqlalchemy.orm import Session
from sqlalchemy import (create_engine)

if __name__ == "__main__":
    engine = create_engine('mysql+mysqldb://{}:{}@localhost:3306/{}'
                           .format(argv[1], argv[2], argv[3]))
    Base.metadata.create_all(bind=engine)
    session = Session(bind=engine)
    st = State(name='Louisiana')
    session.add(st)
    session.commit()

    instance = session.query(State).filter(State.name == 'Louisiana').first()
    print(instance.id)
