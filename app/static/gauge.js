var tempGauge = Gauge(
    document.getElementById("temp-gauge"), {
        min: 10,
        max: 40,
        value: 20,
        radius:100,
        showValue: true,
        color: function(value) {
            if(value >= 20 && value <= 24) {
                return "#5ee432";
            }else if(value >= 16 && value <= 28) {
                return "#fffa50";
            }else if(value >= 12 && value <= 32) {
                return "#f7aa38";
            }else {
                return "#ef4655";
            }
        }
    }
);

var humidityGauge = Gauge(
    document.getElementById("humidity-gauge"), {
        min: 0,
        max: 50,
        value: 50,
        radius:100,
        showValue: true,
        color: function(value) {
            if(value >= 20 && value <= 35) {
                return "#5ee432";
            }else if(value >= 15 && value <= 40) {
                return "#fffa50";
            }else if(value >= 10 && value <= 45) {
                return "#f7aa38";
            }else {
                return "#ef4655";
            }
        }
    }
);

var asGauge = Gauge(
    document.getElementById("as-gauge"), {
        min: 0,
        max: 100,
        value: 50,
        radius:100,
        showValue: true,
        color: function(value) {
            if(value < 25) {
            return "#5ee432";
            }else if(value < 50) {
            return "#fffa50";
            }else if(value < 75) {
            return "#f7aa38";
            }else {
            return "#ef4655";
            }
        }
    }
);

// Set gauge value
tempGauge.setValue(50);
humidityGauge.setValue(50);
asGauge.setValue(50);

(function loop() {
    var randTemp = (Math.random() * 30)+10;
    var randHumidity = Math.random() * 50;
    var randAs = Math.random() * 100;
    // setValueAnimated(value, durationInSecs);
    tempGauge.setValueAnimated(randTemp, 2);
    humidityGauge.setValueAnimated(randHumidity, 2);
    asGauge.setValueAnimated(100 - randAs, 2);
    window.setTimeout(loop, 6000);
})();