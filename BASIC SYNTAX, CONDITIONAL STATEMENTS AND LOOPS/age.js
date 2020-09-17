//Write a function that determines whether based on the given age a person is: baby, child, teenager, adult, elder. The input comes as single number parameter. The bounders are:
// ·	0-2 – baby; 
// ·	3-13 – child; 
// ·	14-19 – teenager;
// ·	20-65 – adult;
// ·	>=66 – elder; 
// ·	In all other cases - out of bounds
// ·	All the values are inclusive.
// Examples
// Input	Output
// 20	adult
// 1	baby
// 100	elder


function age (input) {

    if(input >= 0 && input <= 2) { 
        console.log('baby');
    } else if(input >=3 && input <= 13) { 
        console.log('child');
    
    } else if (input >=14 && input <= 19) { 
        console.log('teenager');
    } else if (input >= 20 && input <= 65) { 
        console.log('adult')
    } else if (input >= 66) { 
        console.log('elder')
    } else { 
        console.log(`out of bounds`)
    }
}
