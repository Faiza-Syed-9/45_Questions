function about_car(manufacturer, modelName) {
    var optionalFeatures = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        optionalFeatures[_i - 2] = arguments[_i];
    }
    var cars = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    optionalFeatures.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        cars[key] = value;
    });
    return cars;
}
var car1 = about_car("Toyota", "GLI", ["Color", "Chromium Silver"], ["Brakes", "Hydraulic Brakes"]);
console.log(car1);
