from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def index():
    return request.method

@app.route('/sc/<caster>', methods=['GET', 'POST'])
def getSportsCasterInfo(caster):
    return caster


if __name__ == "__main__":
    app.run(debug=True)
