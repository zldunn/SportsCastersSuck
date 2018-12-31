from flask import Flask, request
import json
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
db = SQLAlchemy(app)
name_db = SQLAlchemy(app)


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
    percent = db.Column(db.Integer, unique=False, nullable=False)
    topSport  =db.Column(db.String(80), unique=False, nullable=False)
    hotTakeCount = db.Column(db.Integer, unique=False, nullable=False)
    predictionCount = db.Column(db.Integer, unique=False, nullable=False)

    def __init__(self, dictionary):
        for k, v in dictionary.items():
            setattr(self, k, v)

        super(Commentator, self).__init__()

    def __repr__(self):
        return '<Commentator %r>' % self.id

class LinkName(name_db.Model):
    link = name_db.Column(name_db.String(80), unique=True, nullable=False)
    name = name_db.Column(name_db.String(80), primary_key=True)
    def __init__(self, name):
        stripped = name.replace(" ", "")
        super(LinkName, self).__init__(name, link)

    def __repr__(self):
        return '<LinkName %r>' % self.id


@app.route('/')
def index():
    return request.method

@app.route('/caster/<id>', methods=['GET', 'POST'])
def getSportsCasterInfo(id):
    if request.method == 'POST':
        data = request.form.to_dict()
        new_commentator = Commentator(data)
        db.session.add(new_commentator)
        db.session.commit()
        print(data)
    else:
        caster = Commentator.query.get(id)
        data = {
            "name": caster.name,
            "percent": caster.percent,
            "hotTakeCount": caster.hotTakeCount,
            "predictionCount": caster.predictionCount,
            "topSport": caster.topSport
        }
        return json.dumps(data)
    return json.dumps(data)


def get_all_users():
    print(Commentator.query.all())

def init_db():
    db.create_all()
    name_db.create_all()

def delete_db():
    db.drop_all()
    name_db.drop_all()

if __name__ == "__main__":
    init_db()
    app.run(host='0.0.0.0',debug=True)
