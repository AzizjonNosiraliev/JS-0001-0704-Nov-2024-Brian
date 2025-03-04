const cars = {
    "Mustang GT": {
        category: "sports cars", 
        make: "Ford", 
        model: "Mustang GT",
        year: 1998, 
        color: "red", 
        condition: "excellent",
        mileage: 123456, 
        mpg: {city: 18, hwy: 24},
        onRoad: true, 
        forSale: false,
        options: ['sun roof', 'CD player', 'leather seats'],
        engine: {cyl: 8, L: 4.6, hp: 260},
        image: "1999 ford mustang gt.jpg",
        listForSale: function() {
            if(this.forSale) {
                return `FOR SALE! ${this.year} ${this.color} ${this.make} ${this.model}! 
                Only ${this.mileage.toLocaleString()} miles, ${this.condition} condition!
                Loaded: ${this.options[0]}, ${this.options[1]}, ${this.options[2]}`;
            } else {
                return `SORRY! THE ${this.year} ${this.make} ${this.model} is NOT FOR SALE!`; 
            }
        },
    },
    "Camry": {
        category: "sedan", 
        make: "Toyota", 
        model: "Camry",
        year: 2020, 
        color: "blue", 
        condition: "good",
        mileage: 35000, 
        mpg: {city: 28, hwy: 39},
        onRoad: true, 
        forSale: true,
        options: ['backup camera', 'Bluetooth', 'cruise control'],
        engine: {cyl: 4, L: 2.5, hp: 203},
        image: "2020 toyota camry.jpg",
        listForSale: function() {
            if(this.forSale) {
                return `FOR SALE! ${this.year} ${this.color} ${this.make} ${this.model}! 
                Only ${this.mileage.toLocaleString()} miles, ${this.condition} condition!
                Loaded: ${this.options[0]}, ${this.options[1]}, ${this.options[2]}`;
            } else {
                return `SORRY! THE ${this.year} ${this.make} ${this.model} is NOT FOR SALE!`; 
            }
        },
    },
    "CR-V": {
        category: "SUV", 
        make: "Honda", 
        model: "CR-V",
        year: 2022, 
        color: "silver", 
        condition: "like new",
        mileage: 15000, 
        mpg: {city: 27, hwy: 33},
        onRoad: true, 
        forSale: true,
        options: ['backup camera', 'Apple CarPlay', 'lane departure warning'],
        engine: {cyl: 4, L: 1.5, hp: 190},
        image: "2022 honda cr-v.jpg",
        listForSale: function() {
            if(this.forSale) {
                return `FOR SALE! ${this.year} ${this.color} ${this.make} ${this.model}! 
                Only ${this.mileage.toLocaleString()} miles, ${this.condition} condition!
                Loaded: ${this.options[0]}, ${this.options[1]}, ${this.options[2]}`;
            } else {
                return `SORRY! THE ${this.year} ${this.make} ${this.model} is NOT FOR SALE!`; 
            }
        },
    },
    "Versa": {
        category: "compact", make: "Nissan", model: "Versa",
        year: 2021, color: "black", condition: "fair",
        mileage: 50000, mpg: {city: 32, hwy: 40},
        onRoad: true, forSale: true,
        options: ['air conditioning', 'power windows', 'keyless entry'],
        engine: {cyl: 4, L: 1.6, hp: 122},
        image: "2021 nissan versa.jpg",
        listForSale: function() {
            if(this.forSale) {
                return `FOR SALE! ${this.year} ${this.color} ${this.make} ${this.model}! 
                Only ${this.mileage.toLocaleString()} miles, ${this.condition} condition!
                Loaded: ${this.options[0]}, ${this.options[1]}, ${this.options[2]}`;
            } else {
                return `SORRY! THE ${this.year} ${this.make} ${this.model} is NOT FOR SALE!`; 
            }
        },
    },
    "Silverado 1500": {
        category: "pickup truck", make: "Chevrolet", model: "Silverado 1500",
        year: 2023, color: "white", condition: "excellent",
        mileage: 8000, mpg: {city: 16, hwy: 22},
        onRoad: true, forSale: true,
        options: ['towing package', '4WD', 'touchscreen display'],
        engine: {cyl: 8, L: 5.3, hp: 355},
        image: "2023 chevrolet silverado.jpg",
        listForSale: function() {
            if(this.forSale) {
                return `FOR SALE! ${this.year} ${this.color} ${this.make} ${this.model}! 
                Only ${this.mileage.toLocaleString()} miles, ${this.condition} condition!
                Loaded: ${this.options[0]}, ${this.options[1]}, ${this.options[2]}`;
            } else {
                return `SORRY! THE ${this.year} ${this.make} ${this.model} is NOT FOR SALE!`; 
            }
        },
    },
    "S-Class": {
        category: "luxury", make: "Mercedes-Benz", model: "S-Class",
        year: 2023, color: "black", condition: "like new",
        mileage: 5000, mpg: {city: 19, hwy: 28},
        onRoad: true, forSale: true,
        options: ['massaging seats', 'adaptive cruise control', 'ambient lighting'],
        engine: {cyl: 6, L: 3.0, hp: 429},
        image: "2023 mercedes-benz s-class.jpg",
        listForSale: function() {
            if(this.forSale) {
                return `FOR SALE! ${this.year} ${this.color} ${this.make} ${this.model}! 
                Only ${this.mileage.toLocaleString()} miles, ${this.condition} condition!
                Loaded: ${this.options[0]}, ${this.options[1]}, ${this.options[2]}`;
            } else {
                return `SORRY! THE ${this.year} ${this.make} ${this.model} is NOT FOR SALE!`; 
            }
        },
    },
    "Civic": {
        category: "compact", make: "Honda", model: "Civic",
        year: 2022, color: "blue", condition: "good",
        mileage: 30000, mpg: {city: 32, hwy: 42},
        onRoad: true, forSale: true,
        options: ['moonroof', 'Apple CarPlay', 'lane keeping assist'],
        engine: {cyl: 4, L: 2.0, hp: 158},
        image: "2022 honda civic.jpg",
        listForSale: function() {
            if(this.forSale) {
                return `FOR SALE! ${this.year} ${this.color} ${this.make} ${this.model}! 
                Only ${this.mileage.toLocaleString()} miles, ${this.condition} condition!
                Loaded: ${this.options[0]}, ${this.options[1]}, ${this.options[2]}`;
            } else {
                return `SORRY! THE ${this.year} ${this.make} ${this.model} is NOT FOR SALE!`; 
            }
        },
    },
    "Model 3": {
        category: "electric",
        make: "Tesla",
        model: "Model 3",
        year: 2023,
        color: "silver",
        condition: "excellent",
        mileage: 10000,
        mpg: {city: "N/A", hwy: "N/A"},
        onRoad: true,
        forSale: true,
        options: ['autopilot', 'electric AWD', 'full self-driving'],
        engine: {cyl: 0, L: 0, hp: 450},
        image: "2023 tesla model 3.jpg",
        listForSale: function() {
            if(this.forSale) {
                return `FOR SALE! ${this.year} ${this.color} ${this.make} ${this.model}! 
                Only ${this.mileage.toLocaleString()} miles, ${this.condition} condition!
                Loaded: ${this.options[0]}, ${this.options[1]}, ${this.options[2]}`;
            } else {
                return `SORRY! THE ${this.year} ${this.make} ${this.model} is NOT FOR SALE!`; 
            }
        },
    },
    "Corvette": {
        category: "convertible",
        make: "Chevrolet",
        model: "Corvette",
        year: 2022,
        color: "red",
        condition: "like new",
        mileage: 5000,
        mpg: {city: 15, hwy: 27},
        onRoad: true,
        forSale: true,
        options: ['removable roof panel', 'Bose sound system', 'performance exhaust'],
        engine: {cyl: 8, L: 6.2, hp: 490},
        image: "2022 chevrolet corvette.jpg",
        listForSale: function() {
            if(this.forSale) {
                return `FOR SALE! ${this.year} ${this.color} ${this.make} ${this.model}! 
                Only ${this.mileage.toLocaleString()} miles, ${this.condition} condition!
                Loaded: ${this.options[0]}, ${this.options[1]}, ${this.options[2]}`;
            } else {
                return `SORRY! THE ${this.year} ${this.make} ${this.model} is NOT FOR SALE!`; 
            }
        },
    },
    "Explorer": {
        category: "SUV",
        make: "Ford",
        model: "Explorer",
        year: 2023,
        color: "black",
        condition: "good",
        mileage: 15000,
        mpg: {city: 20, hwy: 27},
        onRoad: true,
        forSale: true,
        options: ['third-row seating', 'towing package', 'SYNC infotainment'],
        engine: {cyl: 4, L: 2.3, hp: 300},
        image: "2023 ford explorer.jpg",
        listForSale: function() {
            if(this.forSale) {
                return `FOR SALE! ${this.year} ${this.color} ${this.make} ${this.model}! 
                Only ${this.mileage.toLocaleString()} miles, ${this.condition} condition!
                Loaded: ${this.options[0]}, ${this.options[1]}, ${this.options[2]}`;
            } else {
                return `SORRY! THE ${this.year} ${this.make} ${this.model} is NOT FOR SALE!`; 
            }
        },
    },
    "3 Series": {
        category: "sedan",
        make: "BMW",
        model: "3 Series",
        year: 2022,
        color: "white",
        condition: "excellent",
        mileage: 8000,
        mpg: {city: 26, hwy: 36},
        onRoad: true,
        forSale: false,
        options: ['sunroof', 'navigation system', 'leather upholstery'],
        engine: {cyl: 4, L: 2.0, hp: 255},
        image: "2022 bmw 3-series.jpg",
        listForSale: function() {
            if(this.forSale) {
                return `FOR SALE! ${this.year} ${this.color} ${this.make} ${this.model}! 
                Only ${this.mileage.toLocaleString()} miles, ${this.condition} condition!
                Loaded: ${this.options[0]}, ${this.options[1]}, ${this.options[2]}`;
            } else {
                return `SORRY! THE ${this.year} ${this.make} ${this.model} is NOT FOR SALE!`; 
            }
        },
    },
 };
 

const carsArr = [
    { 
        category: "sports cars", 
        make: "Ford", 
        model: "Mustang GT",
        year: 1998, 
        color: "red", 
        condition: "excellent",
        mileage: 123456, 
        mpg: {city: 18, hwy: 24},
        onRoad: true, 
        forSale: false,
        options: ['sun roof', 'CD player', 'leather seats'],
        engine: {cyl: 8, L: 4.6, hp: 260},
        image: "1999 ford mustang gt.jpg",
        listForSale: function() {
            if(this.forSale) {
                return `FOR SALE! ${this.year} ${this.color} ${this.make} ${this.model}! 
                Only ${this.mileage.toLocaleString()} miles, ${this.condition} condition!
                Loaded: ${this.options[0]}, ${this.options[1]}, ${this.options[2]}`;
            } else {
                return `SORRY! THE ${this.year} ${this.make} ${this.model} is NOT FOR SALE!`; 
            }
        },
    },
    {
        category: "sedan", 
        make: "Toyota", 
        model: "Camry",
        year: 2020, 
        color: "blue", 
        condition: "good",
        mileage: 35000, 
        mpg: {city: 28, hwy: 39},
        onRoad: true, 
        forSale: true,
        options: ['backup camera', 'Bluetooth', 'cruise control'],
        engine: {cyl: 4, L: 2.5, hp: 203},
        image: "2020 toyota camry.jpg",
        listForSale: function() {
            if(this.forSale) {
                return `FOR SALE! ${this.year} ${this.color} ${this.make} ${this.model}! 
                Only ${this.mileage.toLocaleString()} miles, ${this.condition} condition!
                Loaded: ${this.options[0]}, ${this.options[1]}, ${this.options[2]}`;
            } else {
                return `SORRY! THE ${this.year} ${this.make} ${this.model} is NOT FOR SALE!`; 
            }
        },
    },
    {
        category: "SUV", 
        make: "Honda", 
        model: "CR-V",
        year: 2022, 
        color: "silver", 
        condition: "like new",
        mileage: 15000, 
        mpg: {city: 27, hwy: 33},
        onRoad: true, 
        forSale: true,
        options: ['backup camera', 'Apple CarPlay', 'lane departure warning'],
        engine: {cyl: 4, L: 1.5, hp: 190},
        image: "2022 honda cr-v.jpg",
        listForSale: function() {
            if(this.forSale) {
                return `FOR SALE! ${this.year} ${this.color} ${this.make} ${this.model}! 
                Only ${this.mileage.toLocaleString()} miles, ${this.condition} condition!
                Loaded: ${this.options[0]}, ${this.options[1]}, ${this.options[2]}`;
            } else {
                return `SORRY! THE ${this.year} ${this.make} ${this.model} is NOT FOR SALE!`; 
            }
        },
    },
    {
        category: "compact", make: "Nissan", model: "Versa",
        year: 2021, color: "black", condition: "fair",
        mileage: 50000, mpg: {city: 32, hwy: 40},
        onRoad: true, forSale: true,
        options: ['air conditioning', 'power windows', 'keyless entry'],
        engine: {cyl: 4, L: 1.6, hp: 122},
        image: "2021 nissan versa.jpg",
        listForSale: function() {
            if(this.forSale) {
                return `FOR SALE! ${this.year} ${this.color} ${this.make} ${this.model}! 
                Only ${this.mileage.toLocaleString()} miles, ${this.condition} condition!
                Loaded: ${this.options[0]}, ${this.options[1]}, ${this.options[2]}`;
            } else {
                return `SORRY! THE ${this.year} ${this.make} ${this.model} is NOT FOR SALE!`; 
            }
        },
    },
    {
        category: "pickup truck", make: "Chevrolet", model: "Silverado 1500",
        year: 2023, color: "white", condition: "excellent",
        mileage: 8000, mpg: {city: 16, hwy: 22},
        onRoad: true, forSale: true,
        options: ['towing package', '4WD', 'touchscreen display'],
        engine: {cyl: 8, L: 5.3, hp: 355},
        image: "2023 chevrolet silverado.jpg",
        listForSale: function() {
            if(this.forSale) {
                return `FOR SALE! ${this.year} ${this.color} ${this.make} ${this.model}! 
                Only ${this.mileage.toLocaleString()} miles, ${this.condition} condition!
                Loaded: ${this.options[0]}, ${this.options[1]}, ${this.options[2]}`;
            } else {
                return `SORRY! THE ${this.year} ${this.make} ${this.model} is NOT FOR SALE!`; 
            }
        },
    },
    {
        category: "luxury", make: "Mercedes-Benz", model: "S-Class",
        year: 2023, color: "black", condition: "like new",
        mileage: 5000, mpg: {city: 19, hwy: 28},
        onRoad: true, forSale: true,
        options: ['massaging seats', 'adaptive cruise control', 'ambient lighting'],
        engine: {cyl: 6, L: 3.0, hp: 429},
        image: "2023 mercedes-benz s-class.jpg",
        listForSale: function() {
            if(this.forSale) {
                return `FOR SALE! ${this.year} ${this.color} ${this.make} ${this.model}! 
                Only ${this.mileage.toLocaleString()} miles, ${this.condition} condition!
                Loaded: ${this.options[0]}, ${this.options[1]}, ${this.options[2]}`;
            } else {
                return `SORRY! THE ${this.year} ${this.make} ${this.model} is NOT FOR SALE!`; 
            }
        },
    },
    {
        category: "compact", make: "Honda", model: "Civic",
        year: 2022, color: "blue", condition: "good",
        mileage: 30000, mpg: {city: 32, hwy: 42},
        onRoad: true, forSale: true,
        options: ['moonroof', 'Apple CarPlay', 'lane keeping assist'],
        engine: {cyl: 4, L: 2.0, hp: 158},
        image: "2022 honda civic.jpg",
        listForSale: function() {
            if(this.forSale) {
                return `FOR SALE! ${this.year} ${this.color} ${this.make} ${this.model}! 
                Only ${this.mileage.toLocaleString()} miles, ${this.condition} condition!
                Loaded: ${this.options[0]}, ${this.options[1]}, ${this.options[2]}`;
            } else {
                return `SORRY! THE ${this.year} ${this.make} ${this.model} is NOT FOR SALE!`; 
            }
        },
    },
    {
        category: "electric",
        make: "Tesla",
        model: "Model 3",
        year: 2023,
        color: "silver",
        condition: "excellent",
        mileage: 10000,
        mpg: {city: "N/A", hwy: "N/A"},
        onRoad: true,
        forSale: true,
        options: ['autopilot', 'electric AWD', 'full self-driving'],
        engine: {cyl: 0, L: 0, hp: 450},
        image: "2023 tesla model 3.jpg",
        listForSale: function() {
            if(this.forSale) {
                return `FOR SALE! ${this.year} ${this.color} ${this.make} ${this.model}! 
                Only ${this.mileage.toLocaleString()} miles, ${this.condition} condition!
                Loaded: ${this.options[0]}, ${this.options[1]}, ${this.options[2]}`;
            } else {
                return `SORRY! THE ${this.year} ${this.make} ${this.model} is NOT FOR SALE!`; 
            }
        },
    },
    {
        category: "convertible",
        make: "Chevrolet",
        model: "Corvette",
        year: 2022,
        color: "red",
        condition: "like new",
        mileage: 5000,
        mpg: {city: 15, hwy: 27},
        onRoad: true,
        forSale: true,
        options: ['removable roof panel', 'Bose sound system', 'performance exhaust'],
        engine: {cyl: 8, L: 6.2, hp: 490},
        image: "2022 chevrolet corvette.jpg",
        listForSale: function() {
            if(this.forSale) {
                return `FOR SALE! ${this.year} ${this.color} ${this.make} ${this.model}! 
                Only ${this.mileage.toLocaleString()} miles, ${this.condition} condition!
                Loaded: ${this.options[0]}, ${this.options[1]}, ${this.options[2]}`;
            } else {
                return `SORRY! THE ${this.year} ${this.make} ${this.model} is NOT FOR SALE!`; 
            }
        },
    },
    {
        category: "SUV",
        make: "Ford",
        model: "Explorer",
        year: 2023,
        color: "black",
        condition: "good",
        mileage: 15000,
        mpg: {city: 20, hwy: 27},
        onRoad: true,
        forSale: true,
        options: ['third-row seating', 'towing package', 'SYNC infotainment'],
        engine: {cyl: 4, L: 2.3, hp: 300},
        image: "2023 ford explorer.jpg",
        listForSale: function() {
            if(this.forSale) {
                return `FOR SALE! ${this.year} ${this.color} ${this.make} ${this.model}! 
                Only ${this.mileage.toLocaleString()} miles, ${this.condition} condition!
                Loaded: ${this.options[0]}, ${this.options[1]}, ${this.options[2]}`;
            } else {
                return `SORRY! THE ${this.year} ${this.make} ${this.model} is NOT FOR SALE!`; 
            }
        },
    },
    {
        category: "sedan",
        make: "BMW",
        model: "3 Series",
        year: 2022,
        color: "white",
        condition: "excellent",
        mileage: 8000,
        mpg: {city: 26, hwy: 36},
        onRoad: true,
        forSale: false,
        options: ['sunroof', 'navigation system', 'leather upholstery'],
        engine: {cyl: 4, L: 2.0, hp: 255},
        image: "2022 bmw 3-series.jpg",
        listForSale: function() {
            if(this.forSale) {
                return `FOR SALE! ${this.year} ${this.color} ${this.make} ${this.model}! 
                Only ${this.mileage.toLocaleString()} miles, ${this.condition} condition!
                Loaded: ${this.options[0]}, ${this.options[1]}, ${this.options[2]}`;
            } else {
                return `SORRY! THE ${this.year} ${this.make} ${this.model} is NOT FOR SALE!`; 
            }
        },
    },
]
