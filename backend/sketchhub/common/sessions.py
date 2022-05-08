from typing import Callable
from flask import request, session
from sqlalchemy import create_engine
from sqlalchemy.orm import Session, sessionmaker

from werkzeug.datastructures import ImmutableMultiDict


def _get_session() -> Session:
    """Функция, возвращающая объект сесссии"""

    engine = create_engine("postgresql://postgres:pw@localhost:5435")
    return sessionmaker(engine)()


def session_maker(route) -> Callable:
    """Декоратор, открывающий сессию работы с БД, помещающий ее в request.args"""

    def wrapper():
        session = _get_session()

        # Добавление сессии в данные запроса
        request.args = ImmutableMultiDict({'session': session})

        # Обработка запроса функцией-вью
        result = route()

        # Закрытие сессии
        session.close()
        
        return result
    
    return wrapper