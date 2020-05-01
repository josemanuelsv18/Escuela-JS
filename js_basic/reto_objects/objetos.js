function car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}
var brand_array = ["Tesla", "Lamborghini", "Ford", "Chevrolet", "Hyundai", "Tesla", "Audi"];
var model_array = ["Model S", "Aventador SVJ", "Explorer", "Optra", "Tucson", "Model 3", "R8"];
var year_array = [2020, 2018, 2019, 2010, 2008, 2020, 2018];
var new_car = [];
for(var i = 0; brand_array.length > i; i++){
    new_car.push(new car(brand_array[i], model_array[i], year_array[i]));
    console.log(new_car);
}