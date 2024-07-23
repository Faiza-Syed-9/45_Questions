function about_car(manufacturer:string,modelName:string,...optionalFeatures : any){

let cars = {       

manufacturer,
modelName

         }
optionalFeatures.forEach(([key,value]) => {
    cars[key] =value;
});

return cars;
}

let car1 = about_car("Toyota","GLI",["Color","Chromium Silver"],["Brakes","Hydraulic Brakes"]);
console.log(car1);
