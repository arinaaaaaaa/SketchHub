from flask import Blueprint

from common.sessions import session_maker
from authentication.controllers.auth import UserController


auth_module = Blueprint('join_page', __name__)


@auth_module.route('/join')
@session_maker
def join():
    return UserController().createUser()


@auth_module.route('/login')
@session_maker
def login():
    return UserController().loginUser()
    