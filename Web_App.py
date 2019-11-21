from flask import Flask, render_template, request

app = Flask(__name__)
numberofClicks = 0

@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')

@app.route('/test')
def test():
    return render_template('test.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8000)