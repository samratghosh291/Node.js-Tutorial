const http = require('http');
const fs = require("fs");
const requests = require("requests");
const cache = require('memory-cache');

const homeFile = fs.readFileSync("home.html", "utf-8");

const replaceVal = (tempVal, orgVal) => {
  let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
  temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);
  temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);
  temperature = temperature.replace("{%location%}", orgVal.name);
  temperature = temperature.replace("{%country%}", orgVal.sys.country);
  return temperature;
};

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    const cacheKey = 'weatherData';
    const cachedData = cache.get(cacheKey);

    if (cachedData) {
      // return cached data if available
      res.write(cachedData);
      res.end();
      return;
    }

    // make API request and store response in cache
    requests("https://api.openweathermap.org/data/2.5/weather?q=pune&appid=e29dff3932b314aaee1d6543799012c7&units=metric")
      .on('data', (chunk) => {
        const objdata = JSON.parse(chunk);
        const arrData = [objdata];
        const realTimeData = arrData.map((val) =>
          replaceVal(homeFile, val)).join("");

        // store response in cache for 5 minutes
        cache.put(cacheKey, realTimeData, 5 * 60 * 1000);

        res.write(realTimeData);
        res.end();
      })
      .on('end', (err) => {
        if (err) return console.log('connection closed due to errors', err);
        res.end();
      });
  }
});

server.listen(8000, "127.0.0.1");
