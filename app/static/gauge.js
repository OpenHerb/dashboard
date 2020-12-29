// require js pkg
var gauge = Gauge(
    document.getElementById("gauge"), {
        min: 0,
        max: 100,
        value: 50,
        dialStartAngle: 100,
        dialEndAngle: 35,
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
gauge.setValue(50);

(function loop() {
    var value2 = Math.random() * 100;
    // setValueAnimated(value, durationInSecs);
    gauge.setValueAnimated(100 - value2, 2);
    window.setTimeout(loop, 6000);
})();