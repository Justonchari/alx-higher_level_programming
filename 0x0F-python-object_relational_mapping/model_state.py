#!/usr/bin/python3
''' defines State and an instance Base = declarative_base()
'''
from sqlalchemy.orm import declarative_base
from sqlalchemy import Column, Integer, String


Base = declarative_base()


class State(Base):
    '''represent states'''
    __tablename__ = "states"
    id = Column("id", Integer, primary_key=True, autoincrement=True)
    name = Column("name", String(128), nullable=False)
