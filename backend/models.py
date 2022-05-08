# coding: utf-8
from sqlalchemy import Column, Date, ForeignKey, Integer, String, text
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()
metadata = Base.metadata


class User(Base):
    __tablename__ = 'users'

    user_id = Column(Integer, primary_key=True, server_default=text("nextval('users_user_id_seq'::regclass)"))
    name = Column(String(30), nullable=False)
    surname = Column(String(30), nullable=False)
    username = Column(String(30), nullable=False)
    password = Column(String(30), nullable=False)


class Repository(Base):
    __tablename__ = 'repositorys'

    repositury_id = Column(Integer, primary_key=True, server_default=text("nextval('repositorys_repositury_id_seq'::regclass)"))
    owner_id = Column(ForeignKey('users.user_id', ondelete='CASCADE', onupdate='CASCADE', match='FULL'))
    name = Column(String(100), nullable=False)
    url_name = Column(String(30), nullable=False)
    description = Column(String(200))

    owner = relationship('User')


class Model(Base):
    __tablename__ = 'models'

    model_id = Column(Integer, primary_key=True, server_default=text("nextval('models_model_id_seq'::regclass)"))
    name = Column(String(50), nullable=False)
    url_name = Column(String(30), nullable=False)
    model_path = Column(String(200), nullable=False)
    add_date = Column(Date, nullable=False)
    description = Column(String(512))
    repository_id = Column(ForeignKey('repositorys.repositury_id', ondelete='CASCADE', onupdate='CASCADE', match='FULL'))

    repository = relationship('Repository')
