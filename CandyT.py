import sys
from functools import wraps
import os
from flask import Flask, render_template, json, request, redirect, session
from src.tools.msqldbcon import MySQldbCon

app = Flask(__name__, static_url_path='')
app.secret_key = os.urandom(24)

def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if not 'user' in session:
            return redirect("/")
        else:
            return f(*args, **kwargs)
    return decorated_function

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/login', methods = ['POST'])
def login():
    print(request.form, file=sys.stderr)
    user = request.form['user']
    password = request.form['password']
    type = 1

    if MySQldbCon.callSP('spLogin', spParameters=[user,password,type])[0][0] == 1:
        session['user'] = user
        return redirect("/home")
    else:
        return redirect("/")

@app.route('/logout', methods = ['POST'])
def logout():
    del session['user']
    return redirect("/")

@app.route('/home')
@login_required
def home():
    data = {
        "cumpTipoProf": MySQldbCon.callSP('spCumpTipoProf'),
        "cumpTipoProfDeber": MySQldbCon.callSP('cantEntradasValidas'),
        #"cumpHorasTipoProf0": MySQldbCon.callSP('spCumpHorasTipoProf', spParameters=[0]),
        #"cumpHorasTipoProf1": MySQldbCon.callSP('spCumpHorasTipoProf', spParameters=[1]),
        #"cumpHorasTipoProf2": MySQldbCon.callSP('spCumpHorasTipoProf', spParameters=[2]),
        #"cumpHorasTipoProf3": MySQldbCon.callSP('spCumpHorasTipoProf', spParameters=[3]),
        "cumpHoras": MySQldbCon.callSP('spCumpHoras'),
        "cumpHorasDeber": MySQldbCon.callSP('cantEntradasValidasPorHr'),
        #"cumpDurCuartos": MySQldbCon.callSP('spCumpDurCuartos'),
        #"cumpMinDeber" : MySQldbCon.callSP('cantEntradasValidasPorMin')
    }

    return render_template("contenido.html", data=data)

if __name__ == '__main__':
    app.run(port=8181)
