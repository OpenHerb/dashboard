
// default values for telemetry
var temp = null
var humidity = null
var lux = null
var injection = null

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDL9CwpORKoxZkAbmg47zcLZrExAvPNH6c",
    authDomain: "openherb-89fa0.firebaseapp.com",
    databaseURL: "https://openherb-89fa0-default-rtdb.firebaseio.com",
    projectId: "openherb-89fa0",
    storageBucket: "openherb-89fa0.appspot.com",
    messagingSenderId: "347898545625",
    appId: "1:347898545625:web:7c459f88074b52e4e805c8",
    measurementId: "G-B0ZMNQWBT0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
// Get a reference to the database service telemetry topic
var telemetry = firebase.database().ref('/');
// only call async listener with most recent push
telemetry.on('child_added', (snapshot) => {
    const data = snapshot.val();
    temp = data.T
    humidity = data.H
    lux = data.L
    injection = data.I
    console.log("Temperature: " + temp + " °C");
    console.log("Soil Humidity: " + humidity + " %");
    console.log("Luminous Flux: " + lux + " Lux");
    console.log("Last Injection: " + injection);
    tempGauge.setValueAnimated(temp, 2);
    humidityGauge.setValueAnimated(humidity, 2);
    luxGauge.setValueAnimated(lux, 2);
});

var tempGauge = Gauge(
    document.getElementById("temp-gauge"), {
        min: 10,
        max: 40,
        value: 25,
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
        value: 25,
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

var luxGauge = Gauge(
    document.getElementById("lux-gauge"), {
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
tempGauge.setValue(25);
humidityGauge.setValue(25);
luxGauge.setValue(50);
