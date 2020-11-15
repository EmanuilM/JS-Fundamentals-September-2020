function solve(input) {
    let register = {} ;
    

    input.forEach(x => {
        let studentInfo = x.split(', ');
        let [student , name] = studentInfo[0].split(': ');
        let grade = studentInfo[1].split(': ');
        grade = Number(grade[1]); 
        let score = studentInfo[2].split(': '); 
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

    register = Object.entries(register).sort((a,b) => { 
        return a[0] - b[0];
    }).forEach(element => { 
        console.log(`${element[0]} Grade `);
        let values = Object.values(element[1]);
        console.log(`List of students: ${values[0].join(', ')}`);
        let sumScore = values[1].reduce((a , v) => a + v) / values[2];
        console.log(`Average annual grade from last year: ${sumScore.toFixed(2)}`);
        console.log('');
    })
    

    
}
