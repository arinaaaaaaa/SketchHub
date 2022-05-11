import jwt
import fernet
from flask import request

from models import User

class UserController:
    def __init__(self) -> None:
        self.data = request.get_json()
        self.session = request.args.get('session')

    def createUser(self):
        if (self.session.query(User).filter(User.username == self.data['username'], User.password == self.data['password']).first()):
            pass
        else:
            return { 'status': 400 }
    
    def loginUser(self):
        if (self.session.query(User).filter(User.username == self.data['username']).first()):
            session_key = fernet.generate_key()
            encoded_jwt = jwt.encode({"session_key": session_key}, algorithm="HS256")
            print(encoded_jwt)
