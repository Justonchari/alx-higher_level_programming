#!/usr/bin/python3
'''define class City'''
from model_state import Base
from sqlalchemy import Column, Integer, String, ForeignKey


class City(Base):
    '''represent city model inherit from Base'''
    __tablename__ = "cities"
    id = Column("id", Integer, primary_key=True, autoincrement=True)
    name = Column("name", String(128))
    state_id = Column("state_id", Integer,
                      ForeignKey("states.id"), nullable=False)
