class Vehicle { 
        constructor(type , model ,parts , fuel) { 
            this.type = type;
            this.model = model;
            let engine = parts.engine;
            let power = parts.power;
            this.parts = { 
                engine: parts.engine,
                power: parts.power,
                quality: engine * power,
            }
            this.fuel = fuel;
        }

         drive(lossFuel) {
            this.fuel -= lossFuel;
        }
     }
