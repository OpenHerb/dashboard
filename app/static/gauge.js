// require js pkg
var tempGauge = Gauge(
    document.getElementById("temp-gauge"), {
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

var humidityGauge = Gauge(
    document.getElementById("humidity-gauge"), {
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
    var randTemp = Math.random() * 100;
    var randHumidity = Math.random() * 100;
    var randAs = Math.random() * 100;
    // setValueAnimated(value, durationInSecs);
    tempGauge.setValueAnimated(100 - randTemp, 2);
    humidityGauge.setValueAnimated(100 - randHumidity, 2);
    asGauge.setValueAnimated(100 - randAs, 2);
    window.setTimeout(loop, 6000);
})();