from flask import Flask, request

from common.sessions import session_maker
from models import User
from authentication.views.auth import auth_module

app = Flask(__name__)
app.register_blueprint(auth_module)


@app.route('/')
@session_maker
def hello():
    r = []
    session = request.args.get('session')
    r.append(session.query(*User.__table__.columns).all())
    newObj = User(name="ann", surname = "K", username = "annk", password="1234")
    session.add(newObj)
    session.flush()
    r.append(session.query(User).all())
    return str(r)

app.run()
