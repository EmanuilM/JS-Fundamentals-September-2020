function solve(input) {
    let register = {} ;
    

    input.forEach(x => {
        let studentInfo = x.split(', ');
        let [student , name] = studentInfo[0].split(': '); //student name 
        let grade = studentInfo[1].split(': ');
        grade = Number(grade[1]); // currentGrade class
        let score = studentInfo[2].split(': '); // average score 
        score = Number(score[1]);

        if(score >= 3) { 
            grade++;
            if(register.hasOwnProperty(grade)) { 
                register[grade].studentList.push(name);
                register[grade].avScore.push(score);
                register[grade].counter++;

            }else { 
                register[grade] = {studentList: [name] , avScore : [score] , counter : 1};

            }
        }
        
    });

    let entries = Object.entries(register)
    
    let sorting = entries.sort((a,b) => { 
        return a[0] - b[0];
    }) 
    
    sorting.forEach(element => {
        console.log(`${element[0]} Grade `);
        let values = Object.values(element[1]);
        
        console.log(`List of students: ${values[0].join(', ')}`);
        let sumScore = values[1].reduce((a , v) => a + v);
        sumScore = sumScore / values[2];
        console.log(`Average annual grade from last year: ${sumScore.toFixed(2)}`);
        console.log('');
    });
    
}
