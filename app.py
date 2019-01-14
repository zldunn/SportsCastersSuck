from flask import Flask, request
import json
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
db = SQLAlchemy(app)

data = {
    "name": "Zane",
    "percent": 60,
    "hotTakeCount": 13,
    "predictionCount": 2,
    "topSport": "basketball"
}

class Commentator(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    percent = db.Column(db.Integer, unique=True, nullable=False)
    topSport  =db.Column(db.String(80), unique=True, nullable=False)
    hotTakeCount = db.Column(db.Integer, unique=True, nullable=False)
    predictionCount = db.Column(db.Integer, unique=True, nullable=False)

    def __repr__(self):
        return '<Commentator %r>' % self.name


@app.route('/')
def index():
    return request.method

@app.route('/sc/<caster>', methods=['GET', 'POST'])
def getSportsCasterInfo(caster):
    if request.method == 'POST':
        data = request.form.to_dict()
        print(data)
    return json.dumps(data)



if __name__ == "__main__":
    app.run(host='0.0.0.0',debug=True)
