import requests, json


class Weather:

    def __init__(self,city,apikey):
        self.city = city
        self.apikey = apikey
        self.url = "http://api.openweathermap.org/data/2.5/weather?appid=" + apikey + "&q=" + city
    
    def update(self):
        response = requests.get(self.url)
        data = response.json()
        if data['cod'] != '404':
            weather_data = data["main"]
            self.cur_temp = weather_data["temp"]
            self.cur_pres = weather_data['pressure']
            self.cur_humi = weather_data['humidity']
            
            self.weather_description = data['weather'][0]['description']

weather_boston = Weather('boston', 'ab9578a0846a86169422f26b6898f29f')
weather_boston.update()
