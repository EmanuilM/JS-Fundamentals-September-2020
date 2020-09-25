function vacation(group ,typeOfGroup ,dayOftheWeek){ 
 

 let toPay = 0;

  if(typeOfGroup == 'Students' && dayOftheWeek == 'Friday') { 
    toPay = group * 8.45;
  }else if(typeOfGroup == 'Students' && dayOftheWeek == 'Saturday'){
      toPay = group * 9.80;
  }else if(typeOfGroup == 'Students' && dayOftheWeek == 'Sunday'){
    toPay = group * 10.46;
}

    if(typeOfGroup == 'Business' && dayOftheWeek == 'Friday') { 
        toPay = group * 10.90;
    }else if(typeOfGroup == 'Business' && dayOftheWeek == 'Saturday') { 
        toPay = group * 15.60;
    }else if(typeOfGroup == 'Business' && dayOftheWeek == 'Sunday') { 
        toPay = group * 16;
    }

    if(typeOfGroup == 'Regular' && dayOftheWeek == 'Friday') { 
        toPay = group * 15;
    }else if(typeOfGroup == 'Regular' && dayOftheWeek == 'Saturday') { 
        toPay = group * 20;
    }else if (typeOfGroup == 'Regular' && dayOftheWeek == 'Sunday') { 
        toPay = group * 22.50;
    }

 
    if(typeOfGroup == 'Students' && group >= 30 ) { 
        toPay = toPay * 0.85;
        
    }

    if(typeOfGroup == 'Business' && group >= 100) { 
        
        if(dayOftheWeek == 'Friday') { 
            group -= 10;
            toPay = group  * 10.90;
        }else if(dayOftheWeek == 'Saturday') { 
            group -= 10;
            toPay = group * 15.60;
        }else if(dayOftheWeek == 'Sunday') { 
            group -= 10;
            toPay = group * 16;
        }
    }

    if(typeOfGroup == 'Regular' && group >= 10 && group <= 20) { 
        toPay = toPay * 0.95;
    }
    console.log(`Total price: ${toPay.toFixed(2)}`);
}
vacation(30,
    "Students",
    "Sunday"
    );
