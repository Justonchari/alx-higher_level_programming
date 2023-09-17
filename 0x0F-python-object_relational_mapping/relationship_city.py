#!/usr/bin/python3
'''define class City'''
from relationship_state import Base
from sqlalchemy import Column, Integer, String, ForeignKey


class City(Base):
    '''represent city model inherit from Base'''
    __tablename__ = "cities"
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(128))
    state_id = Column(Integer, ForeignKey("states.id"), nullable=False)
