function solve(arr = []) {
    let gladiators = {};
    arr = arr.splice(0  , arr.indexOf('Ave Cesar')).forEach(element => { 
        if(!element.includes(' vs ')) { 
            let [name , tech , skill] = element.split(' -> ');
            skill = Number(skill);
            if(!gladiators[name]) { 
                gladiators[name] = [[tech,skill]];
            }else { 
                let checker = gladiators[name].find((x) => x[0] === tech)
                if(checker) { 
                   checker[1] = Math.max(checker[1] , skill); 
                }else { 
                    gladiators[name].push([tech,skill]);

                }
                
            }
        }else { 
            let [firstGladiator , secondGladiator] = element.split(' vs ');

            if(gladiators[firstGladiator] && gladiators[secondGladiator]) { 

                if(gladiators[firstGladiator].some((x) => gladiators[secondGladiator].some(y => y[0] === x[0]) )) { 
                    let fGladSkill = gladiators[firstGladiator].reduce((a,v) => a += v[1],0);
                    let sGladSkill = gladiators[secondGladiator].reduce((a,v) => a += v[1],0);
                    
                    if(fGladSkill > sGladSkill) { 
                        delete gladiators[secondGladiator];
                    }else { 
                        delete gladiators[firstGladiator];
                    }

                }
            }
        }


    });

    let entries = Object.entries(gladiators);
    let sorting  = entries.sort((a,b) => { 
        if(a[1].reduce((a,v) => a += v[1],0) - b[1].reduce((a,v) => a+ v[1],0) !== 0) { 
            return b[1].reduce((a,v) => a += v[1],0) - a[1].reduce((a,v) => a + v[1],0);
        }
        return a[0].localeCompare(b[0]);
    }).forEach(x => { 
        let techniques = x[1].sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0]));
        let totalSkill = techniques.reduce((a,v) => a += v[1] ,0);
        console.log(`${x[0]}: ${totalSkill} skill`);
        console.log(`${techniques.map((x) => `- ${x[0]} <!> ${x[1]}`).join('\n')}`);
    })  


    }
