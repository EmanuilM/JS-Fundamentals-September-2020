function solve(arr =[]) { 
    let particles = arr.shift().split('|');
    let command = arr.shift();

    while(command !== 'Done') { 
        let info = command.split(' ');
        if(info.includes('Right')) { 
            let index = Number(info[2]);

            if(particles[index] && particles[index + 1]) { 
                let getValueOfRight = particles[index + 1];
                particles.splice(index + 1 , 1 , particles[index]);
                particles.splice(index , 1 , getValueOfRight)
               
            }
        }else if(info.includes('Left')) { 
            let index = Number(info[2]);

            if(particles[index] && particles[index - 1]) { 
                let getValueOfRight = particles[index - 1];
                particles.splice(index - 1 , 1 , particles[index]);
                particles.splice(index , 1 , getValueOfRight);
                


            }
        }else if(info.includes('Odd')) { 
            let oddPositions = [];

            for(let i = 0; i < particles.length; i++) { 

                if(i % 2 == 1) { 
                    oddPositions.push(particles[i]);

                }

            }
            console.log(oddPositions.join(' '));
        }else if(info.includes('Even')) { 
            let evenPositions = [];

            for(let i = 0; i < particles.length; i++) { 

                if(i % 2 === 0) { 
                    evenPositions.push(particles[i])
                }
            }
            console.log(evenPositions.join(' '));
        }
        command = arr.shift();
    }

    if(command === 'Done') { 
        console.log(`You crafted ${particles.join('')}!`);
    }

}
