from flask import Flask, render_template, request
import weather_api

app = Flask(__name__)
numberofClicks = 0

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/weather', methods = ['GET', 'POST'])
def weatherInfo():
    if request.method == 'POST':
        data = request.json
        weatherData = weather_api.Weather(data, 'ab9578a0846a86169422f26b6898f29f').update()
        print(weatherData)
        return weatherData
        
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8000)


