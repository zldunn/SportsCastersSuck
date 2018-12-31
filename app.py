from flask import Flask, request
import json
from firebase import firebase
import urllib2

app = Flask(__name__)
firebase = firebase.FirebaseApplication('https://sports-casters-suck.firebaseio.com/')
pretty_print =  {'print': 'pretty'}
fancy_header = {'X_FANCY_HEADER': 'VERY FANCY'}

data = {
    "name": "Zane",
    "percent": 60,
    "hotTakeCount": 13,
    "predictionCount": 2,
    "topSport": "basketball"
}

@app.route('/')
def index():
    return request.method

@app.route('/caster/<name>', methods=['GET', 'POST'])
def getSportsCasterInfo(name):
    if request.method == 'POST':
        data = request.form.to_dict()
        hashed = hash(data['name'])
        result = firebase.post('/casters/' + str(hashed), data)

        print(result)
    else:
        formatName = urllib2.unquote(name)
        hashedName = hash(formatName)
        records = firebase.get('/casters/' + str(hashedName), None)
        print(hashedName)
        print(records)
        data = {}
        for idx,caster in records.iteritems():
            data = {
                "name": caster['name'],
                "percent": caster['percent'],
                "hotTakeCount": caster['hotTakeCount'],
                "predictionCount": caster['predictionCount'],
                "topSport": caster['topSport']
            }
        return json.dumps(data)
    return json.dumps(data)


def get_all_users():
    return None

if __name__ == "__main__":
    app.run(host='0.0.0.0',debug=True)
