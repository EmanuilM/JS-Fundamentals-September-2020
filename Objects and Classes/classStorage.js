    class Storage { 
        
        constructor(capacity) { 
            this.capacity = capacity;
            this.storage = [];
            this.totalCost = 0;
        }

        addProduct = i => { 
            this.storage.push(i);
            this.capacity -= i.quantity;
            this.totalCost += i.price * i.quantity;
    
        }
    
        getProducts = () => {  
            this.storage = this.storage.map(x => JSON.stringify(x));
            return this.storage.join('\n')
            
        }
    }
