function solve(priceRating , entryPoint , typeOfItems , typeOfPriceRatings) { 

   
    //LEFT SIDE 
    let leftSideItems = [];
    let leftSideSum = 0;

    for(let i = 0; i < entryPoint; i++) { 

        if(typeOfItems === 'cheap') { 

            if(priceRating[i] <= entryPoint) { 
                leftSideItems.push(Number(priceRating[i]));
            }
        }else if(typeOfItems === 'expensive') { 

            if(priceRating[i] === priceRating[i + 1] || priceRating[i] >= priceRating[entryPoint]) { 
                leftSideItems.push(Number(priceRating[i]));
            }
        }

      
    }

    //LEFT SIDE SUMS 

    if(typeOfPriceRatings === 'positive') { 
        //above 0 

        leftSideItems.forEach(element => {
            
            if(element > 0) { 
                leftSideSum += Number(element);
            }
        });
    }else if(typeOfPriceRatings === 'negative') { 
        // below 0 

        leftSideItems.forEach(element => {
            if(element < 0) { 
                leftSideSum += Number(element);
            }
        });
    }else if(typeOfPriceRatings === 'all') { 
        //any 

        leftSideItems.forEach(element => {

            leftSideSum += Number(element);
            
        });
    }

    // RIGHT SIDE 
    
    let rightSideItems = [] ; 
    let rightSideSum = 0;

    for(let i = entryPoint + 1 ; i < priceRating.length ; i ++) { 

        if(typeOfItems === 'cheap') { 

            if(priceRating[i] < entryPoint) { 
                rightSideItems.push(Number(priceRating[i]));
            }
        }else if(typeOfItems === 'expensive') { 

            if(priceRating[i] === priceRating[i + 1] || priceRating[i] >= priceRating[entryPoint]) { 
                rightSideItems.push(Number(priceRating[i]));
            }
        }
        
    }

    //RIGHT SIDE SUM 

    if(typeOfPriceRatings === 'positive') { 
        //above 0 

        rightSideItems.forEach(element => {
            
            if(element > 0) { 
                rightSideSum += Number(element);
            }
        });
    }else if(typeOfPriceRatings === 'negative') { 
        // below 0 

        rightSideItems.forEach(element => {
            if(element < 0) { 
                rightSideSum += Number(element);
            }
        });
    }else if(typeOfPriceRatings === 'all') { 
        //any 

        rightSideItems.forEach(element => {
            rightSideSum += Number(element);
            
        });
    }

    let rPos = 'Right' ; 
    let lPos = 'Left' ; 


    if(leftSideSum > rightSideSum) { 
        console.log(`${lPos} - ${leftSideSum}`);
    }else if(rightSideSum > leftSideSum) { 
        console.log(`${rPos} - ${rightSideSum}`);

    }else if(rightSideSum === leftSideSum) { 
        console.log(`${lPos} - ${leftSideSum}`);

    }


}
