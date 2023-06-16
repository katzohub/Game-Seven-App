let data = [
    {
     id: 1,
        question: "Sort the buildings by height",
        hint: '1 is the highest',
        answerOne:`Burj Khalifa`,
        answerTwo:"Tokyo Skytree",
        answerThree:"One World Trade Center",
        answerFour:"Taipei 101",
        answerFive:"Shanghai World Financial Center",
        answerSix:"Oriental Pearl Tower",
        answerSeven: "Petronas Tower"
    },
    {
        id: 2,
        question: "Sort the states by area",
        hint: '1 is the smallest',
        answerOne:"The Vatican",
        answerTwo:"Monaco",
        answerThree:"Nauru",
        answerFour:"Tuvalu",
        answerFive:"San Marino",
        answerSix:"Liechtenstein",
        answerSeven:"Marshall Islands"
    },
    {
        id: 3,
        question: "Sort the oceans/seas according to size",
        hint: '1 is the biggest',
        answerOne:"Pacific Ocean",
        answerTwo:"Atlantic Ocean",
        answerThree:"Indian Ocean",
        answerFour:"Arctic Ocean",
        answerFive:"Tasman Sea",
        answerSix:"Coral Sea",
        answerSeven:"South China Sea"
    },
    {
        id: 4,
        question: "List the US presidents in order",
        hint: '1 is current',
        answerOne:"Donald Trump",
        answerTwo:"Barack Obama",
        answerThree:"Bill Clinton",
        answerFour:"Jimmy Carter",
        answerFive:"John F. Kennedy",
        answerSix:"Harry Truman",
        answerSeven: "Herbert Hoover"
    },
    {
        id: 5,
        question: "Sort cities by latitude",
        hint: '1 is the northernmost',
        answerOne:"Berlin",
        answerTwo:"Amsterdam",
        answerThree:"London",
        answerFour:"Brussels",
        answerFive:"Kyiv",
        answerSix:"Prague",
        answerSeven:"Luxembourg"
    },
    {
        id: 6,
        question: "Sort by density",
        hint: '1 is the highest',
        answerOne:"honey",
        answerTwo:"mercury",
        answerThree:"silver",
        answerFour:"iron",
        answerFive:"aluminum",
        answerSix:"water",
        answerSeven:"wood"
    },
    {
        id: 7,
        question: "Sort the minerals on the hardness scale",
        hint: '1 is the softest',
        answerOne:"talc",
        answerTwo:"gypsum",
        answerThree:"calcite",
        answerFour:"fluorite",
        answerFive:"apatite",
        answerSix:"feldspar",
        answerSeven:"quartz"
    },
    {
        id: 8,
        question: "Determine the order of the bodies of our solar system",
        hint: '1 is in the middle',
        answerOne:"Sun",
        answerTwo:"Mercury",
        answerThree:"Venus",
        answerFour:"Earth",
        answerFive:"Mars",
        answerSix:"Jupiter",
        answerSeven: "Saturn"
    },
    {
        id: 9,
        question: "Sort the military ranks",
        hint: '1 is the highest',
        answerOne:"army general",
        answerTwo:"major general",
        answerThree:"Brigadier General",
        answerFour:"Colonel",
        answerFive:"major",
        answerSix:"captain",
        answerSeven:"first lieutenant"
    },
    {
        id: 10,
        question: "Sort the states by area",
        hint: '1 is the largest',
        answerOne:'Russia',
        answerTwo:"Canada",
        answerThree:"USA",
        answerFour:"China",
        answerFive:"Brazil",
        answerSix:"Australia",
        answerSeven:"India"
    },
    {
        id: 11,
        question: "Sort J.K. Rowling's books by publication date",
        hint: '1 is the oldest',
        answerOne:"Harry Potter and the Philosopher's Stone",
        answerTwo:"Harry Potter and the Chamber of Secrets",
        answerThree:"Harry Potter and the Fires of Time",
        answerFour:"Harry Potter and the Order of the Phoenix",
        answerFive:"Harry Potter and the Half-Blood Prince",
        answerSix:"Empty space",
        answerSeven:"The call of the cuckoo"
    },
    {
        id: 12,
        question: "Sort the sports according to the size of the field",
        hint: '1 is the largest',
        answerOne:"baseball",
        answerTwo:"football",
        answerThree:"American football",
        answerFour:"ice hockey",
        answerFive:"futsal",
        answerSix:"floorball",
        answerSeven:"basketball"
    },
    {
        id: 13,
        question: "Sort the rivers according to length",
        hint: '1 is the longest',
        answerOne:"Amazon",
        answerTwo:"Nile",
        answerThree:"Jenisej",
        answerFour:"Congo",
        answerFive:"Steamed",
        answerSix:"Volga",
        answerSeven:"Yukon"
    },
    {
        id: 14,
        question: "Sort the animals according to maximum speed",
        hint: '1 is fastest',
        answerOne:"peregrine falcon",
        answerTwo:"Atlantic sailboat",
        answerThree:"cheetah",
        answerFour:"ostrich",
        answerFive:"lion",
        answerSix:"kangaroo",
        answerSeven:"zebra"
    },
    {
        id: 15,
        question: "Sort the cities by population",
        hint: '1 is the largest',
        answerOne:"Tokyo",
        answerTwo:"Shanghai",
        answerThree:"Dilli",
        answerFour:"Mexico City",
        answerFive:"Mumbai",
        answerSix:"Cairo",
        answerSeven: "New York"
    },
    {
        id: 16,
        question: "null",
        hint: 'null',
        answerOne:"null",
        answerTwo:"null",
        answerThree:"null",
        answerFour:"null",
        answerFive:"null",
        answerSix:"null",
        answerSeven:"null"
    }
   
]

let scoreDisplay = 0
let clickedIt = 0
let clickedItFalse = 0;
  
  
let indexToKeep = 0;
let index = 0

const instructionContainer = document.querySelector('.instruction-container')
const winContainer = document.querySelector('.win-container')
const loseContainer = document.querySelector('.lose-container')
const reload = document.querySelector('.reload')
const reloadTwo = document.querySelector('.reload-two')
const go = document.querySelector('.go')
const scoreEnd = document.querySelector('.end-score')
const scoreEndTwo = document.querySelector('.end-score-two')
const wrongEnd = document.querySelector('.end-wrong')
const container = document.querySelector('.container')
const nav = document.querySelector('nav')
const languageContainer =  document.querySelector('.language-container')






go.addEventListener('click', () => {
    instructionContainer.style.display = 'none'
    container.style.display = 'flex'
    nav.style.display = 'flex'
    languageContainer.style.display = 'none'
})

let randomAnswer = [
    data[indexToKeep].answerOne,
    data[indexToKeep].answerTwo,
    data[indexToKeep].answerThree,
    data[indexToKeep].answerFour,
    data[indexToKeep].answerFive,
    data[indexToKeep].answerSix,
    data[indexToKeep].answerSeven
            ]

            

            

function shuffle(a) {

    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

shuffle(randomAnswer)




let sections = document.querySelectorAll('section')
let livesOne = document.querySelector('.one-lives')
let livesTwo = document.querySelector('.two-lives')
let livesThree = document.querySelector('.three-lives')
let score = document.querySelector('.score').innerHTML = 'Score: ' + scoreDisplay




let question = document.querySelector(".question")
question.innerHTML = `${data[indexToKeep].question} <br>
                <span class = 'hint'> ${data[indexToKeep].hint}</span>`



let one = document.querySelector(".one")
    one.textContent = randomAnswer[0]
let two = document.querySelector(".two")
    two.textContent = randomAnswer[1]
let three = document.querySelector(".three")
    three.textContent = randomAnswer[2]
let four = document.querySelector(".four")
    four.textContent = randomAnswer[3]
let five = document.querySelector(".five")
    five.textContent = randomAnswer[4]
let six = document.querySelector(".six")
    six.textContent = randomAnswer[5]
let seven = document.querySelector('.seven')
    seven.textContent = randomAnswer[6]


   
    


    sections.forEach(section => {
        section.addEventListener('click', event => {
            clickedIt++
            
         
            let text = event.target.textContent;
            
            function logik() {
              
if (clickedIt === 1 && text === data[indexToKeep].answerOne) {
one.style.pointerEvents = 'none';
one.style.background ='darkgreen'
scoreDisplay++
document.querySelector('.score').innerHTML = 'Score: ' + scoreDisplay

let randomAnswer = [
data[indexToKeep].answerOne,
data[indexToKeep].answerTwo,
data[indexToKeep].answerThree,
data[indexToKeep].answerFour,
data[indexToKeep].answerFive,
data[indexToKeep].answerSix,
data[indexToKeep].answerSeven
]
let randomOne = [
data[indexToKeep].answerTwo,
data[indexToKeep].answerThree,
data[indexToKeep].answerFour,
data[indexToKeep].answerFive,
data[indexToKeep].answerSix,
data[indexToKeep].answerSeven
]
shuffle(randomAnswer)
shuffle(randomOne)



two.textContent = randomOne[0]
three.textContent = randomOne[1]
four.textContent = randomOne[2]
five.textContent = randomOne[3]
six.textContent = randomOne[4]
seven.textContent = randomOne[5]


one.innerHTML = `Správne prvá pozícia je <br>${data[indexToKeep].answerOne}`;

}
else if (clickedIt === 1 && text !== data[indexToKeep].answerOne) {

one.style.pointerEvents = 'none';
one.style.background ='darkred'

clickedItFalse ++


let randomAnswer = [
data[indexToKeep].answerOne,
data[indexToKeep].answerTwo,
data[indexToKeep].answerThree,
data[indexToKeep].answerFour,
data[indexToKeep].answerFive,
data[indexToKeep].answerSix,
data[indexToKeep].answerSeven
]
let randomOne = [
data[indexToKeep].answerTwo,
data[indexToKeep].answerThree,
data[indexToKeep].answerFour,
data[indexToKeep].answerFive,
data[indexToKeep].answerSix,
data[indexToKeep].answerSeven
]


shuffle(randomAnswer)
shuffle(randomOne)


two.textContent = randomOne[0]
three.textContent = randomOne[1]
four.textContent = randomOne[2]
five.textContent = randomOne[3]
six.textContent = randomOne[4]
seven.textContent = randomOne[5]
one.innerHTML = `Nesprávne prvá pozícia je <br>${data[indexToKeep].answerOne}`;


       
}
if (clickedIt === 2 && text === data[indexToKeep].answerTwo) {
two.style.background = 'darkgreen'
two.style.pointerEvents = 'none'; 
scoreDisplay++
document.querySelector('.score').innerHTML = 'Score: ' + scoreDisplay
let randomAnswer = [
data[indexToKeep].answerOne,
data[indexToKeep].answerTwo,
data[indexToKeep].answerThree,
data[indexToKeep].answerFour,
data[indexToKeep].answerFive,
data[indexToKeep].answerSix,
data[indexToKeep].answerSeven
]
let randomOne = [
data[indexToKeep].answerThree,
data[indexToKeep].answerFour,
data[indexToKeep].answerFive,
data[indexToKeep].answerSix,
data[indexToKeep].answerSeven
]
shuffle(randomAnswer)
shuffle(randomOne)


three.textContent = randomOne[0]
four.textContent = randomOne[1]
five.textContent = randomOne[2]
six.textContent = randomOne[3]
seven.textContent = randomOne[4]


two.innerHTML = `Správne druhá pozícia je <br>${data[indexToKeep].answerTwo}`;


} else if (clickedIt === 2 && text !== data[indexToKeep].answerTwo) {
two.style.background = 'darkred'
two.style.pointerEvents = 'none'; 
clickedItFalse ++

let randomAnswer = [
data[indexToKeep].answerOne,
data[indexToKeep].answerTwo,
data[indexToKeep].answerThree,
data[indexToKeep].answerFour,
data[indexToKeep].answerFive,
data[indexToKeep].answerSix,
data[indexToKeep].answerSeven
]
let randomOne = [
data[indexToKeep].answerThree,
data[indexToKeep].answerFour,
data[indexToKeep].answerFive,
data[indexToKeep].answerSix,
data[indexToKeep].answerSeven
]
shuffle(randomAnswer)
shuffle(randomOne)


three.textContent = randomOne[0]
four.textContent = randomOne[1]
five.textContent = randomOne[2]
six.textContent = randomOne[3]
seven.textContent = randomOne[4]
two.innerHTML = `Nesprávne druhá pozícia je <br>${data[indexToKeep].answerTwo}`;

}

if (clickedIt === 3 && text === data[indexToKeep].answerThree) {
three.style.background = 'darkgreen'
three.style.pointerEvents = 'none'; 
scoreDisplay++
document.querySelector('.score').innerHTML = 'Score: ' + scoreDisplay


let randomAnswer = [
data[indexToKeep].answerOne,
data[indexToKeep].answerTwo,
data[indexToKeep].answerThree,
data[indexToKeep].answerFour,
data[indexToKeep].answerFive,
data[indexToKeep].answerSix,
data[indexToKeep].answerSeven
]
let randomOne = [
data[indexToKeep].answerFour,
data[indexToKeep].answerFive,
data[indexToKeep].answerSix,
data[indexToKeep].answerSeven
]
shuffle(randomAnswer)
shuffle(randomOne)



four.textContent = randomOne[0]
five.textContent = randomOne[1]
six.textContent = randomOne[2]
seven.textContent = randomOne[3]
three.innerHTML = `Správne tretia pozícia je <br>${data[indexToKeep].answerThree}`;

} else if (clickedIt === 3 && text !== data[indexToKeep].answerThree) {
three.style.background = 'darkred'
three.style.pointerEvents = 'none'; 
clickedItFalse ++

let randomAnswer = [
data[indexToKeep].answerOne,
data[indexToKeep].answerTwo,
data[indexToKeep].answerThree,
data[indexToKeep].answerFour,
data[indexToKeep].answerFive,
data[indexToKeep].answerSix,
data[indexToKeep].answerSeven
]
let randomOne = [
data[indexToKeep].answerFour,
data[indexToKeep].answerFive,
data[indexToKeep].answerSix,
data[indexToKeep].answerSeven
]
shuffle(randomAnswer)
shuffle(randomOne)



four.textContent = randomOne[0]
five.textContent = randomOne[1]
six.textContent = randomOne[2]
seven.textContent = randomOne[3]
three.innerHTML = `Nesprávne tretia pozícia je <br>${data[indexToKeep].answerThree}`;
}

if (clickedIt === 4 && text === data[indexToKeep].answerFour) {
four.style.background = 'darkgreen'
four.style.pointerEvents = 'none'; 
scoreDisplay++
document.querySelector('.score').innerHTML = 'Score: ' + scoreDisplay

let randomAnswer = [
data[indexToKeep].answerOne,
data[indexToKeep].answerTwo,
data[indexToKeep].answerThree,
data[indexToKeep].answerFour,
data[indexToKeep].answerFive,
data[indexToKeep].answerSix,
data[indexToKeep].answerSeven
]
let randomOne = [
data[indexToKeep].answerFive,
data[indexToKeep].answerSix,
data[indexToKeep].answerSeven
]
shuffle(randomAnswer)
shuffle(randomOne)



five.textContent = randomOne[0]
six.textContent = randomOne[1]
seven.textContent = randomOne[2]
four.innerHTML = `Správne štvrtá pozícia je <br>${data[indexToKeep].answerFour}`;


} else if (clickedIt === 4 && text !== data[indexToKeep].answerFour) {
four.style.background = 'darkred'
four.style.pointerEvents = 'none'; 
clickedItFalse ++

let randomAnswer = [
data[indexToKeep].answerOne,
data[indexToKeep].answerTwo,
data[indexToKeep].answerThree,
data[indexToKeep].answerFour,
data[indexToKeep].answerFive,
data[indexToKeep].answerSix,
data[indexToKeep].answerSeven
]
let randomOne = [
data[indexToKeep].answerFive,
data[indexToKeep].answerSix,
data[indexToKeep].answerSeven
]
shuffle(randomAnswer)
shuffle(randomOne)



five.textContent = randomOne[0]
six.textContent = randomOne[1]
seven.textContent = randomOne[2]
four.innerHTML = `Nesprávne štvrtá pozícia je <br>${data[indexToKeep].answerFour}`;

}
if (clickedIt === 5 && text === data[indexToKeep].answerFive) {
five.style.background = 'darkgreen'
five.style.pointerEvents = 'none'; 
scoreDisplay++
document.querySelector('.score').innerHTML = 'Score: ' + scoreDisplay

let randomAnswer = [
data[indexToKeep].answerOne,
data[indexToKeep].answerTwo,
data[indexToKeep].answerThree,
data[indexToKeep].answerFour,
data[indexToKeep].answerFive,
data[indexToKeep].answerSix,
data[indexToKeep].answerSeven
]
let randomOne = [
data[indexToKeep].answerSix,
data[indexToKeep].answerSeven
]

shuffle(randomAnswer)
shuffle(randomOne)


six.textContent = randomOne[0]
seven.textContent = randomOne[1]
five.innerHTML = `Správne na piata pozícia je <br>${data[indexToKeep].answerFive}`;


} else if (clickedIt === 5 && text !== data[indexToKeep].answerFive) {
five.style.background = 'darkred'
five.style.pointerEvents = 'none'; 
clickedItFalse++

let randomAnswer = [
data[indexToKeep].answerOne,
data[indexToKeep].answerTwo,
data[indexToKeep].answerThree,
data[indexToKeep].answerFour,
data[indexToKeep].answerFive,
data[indexToKeep].answerSix,
data[indexToKeep].answerSeven
]
let randomOne = [
data[indexToKeep].answerSix,
data[indexToKeep].answerSeven
]
shuffle(randomAnswer)
shuffle(randomOne)




six.textContent = randomOne[0]
seven.textContent = randomOne[1]

five.innerHTML = `Nesprávne piata pozícia je <br>${data[indexToKeep].answerFive}`;
}

if (clickedIt === 6 && text === data[indexToKeep].answerSix) {
six.style.background = 'darkgreen'
six.style.pointerEvents = 'none'; 
scoreDisplay++
document.querySelector('.score').innerHTML = 'Score: ' + scoreDisplay

let randomAnswer = [
data[indexToKeep].answerOne,
data[indexToKeep].answerTwo,
data[indexToKeep].answerThree,
data[indexToKeep].answerFour,
data[indexToKeep].answerFive,
data[indexToKeep].answerSix,
data[indexToKeep].answerSeven
]
let randomOne = [
data[indexToKeep].answerSeven
]
shuffle(randomAnswer)
shuffle(randomOne)




seven.textContent = randomOne[0]
six.innerHTML = `Správne šiesta pozícia je <br>${data[indexToKeep].answerSix}`;

   
} else if (clickedIt === 6 && text !== data[indexToKeep].answerSix) {
six.style.background = 'darkred'
six.style.pointerEvents = 'none';

clickedItFalse ++

let randomAnswer = [
data[indexToKeep].answerOne,
data[indexToKeep].answerTwo,
data[indexToKeep].answerThree,
data[indexToKeep].answerFour,
data[indexToKeep].answerFive,
data[indexToKeep].answerSix,
data[indexToKeep].answerSeven
]
let randomOne = [
data[indexToKeep].answerSeven
]
shuffle(randomAnswer)
shuffle(randomOne)




seven.textContent = randomOne[0]
six.innerHTML = `Nespravne siesta pozicia je <br>${data[indexToKeep].answerSix}`;
}

if (clickedIt === 7 && text === data[indexToKeep].answerSeven) {
seven.style.background = 'darkgreen'
seven.style.pointerEvents = 'none'; 
seven.innerHTML = `Správne siedma pozícia je <br>${data[indexToKeep].answerSeven}`; 
scoreDisplay++
document.querySelector('.score').innerHTML = 'Score: ' + scoreDisplay

} else if (clickedIt === 7 && text !== data[indexToKeep].answerSeven) {
seven.style.background = 'darkred'
seven.style.pointerEvents = 'none'; 
clickedItFalse++
seven.innerHTML = `Nesprávne siedma pozícia je <br>${data[indexToKeep].answerSeven}`;

}  
            }
            function nextLevel() {
                if (clickedIt === 7) {
                
                    document.querySelector('.score').innerHTML = 'Score: ' + scoreDisplay
            
        
                    if (clickedIt === 7) {
                        indexToKeep++
                        clickedIt = 0
        
                        let randomAnswer = [
                        data[indexToKeep].answerOne,
                        data[indexToKeep].answerTwo,
                        data[indexToKeep].answerThree,
                        data[indexToKeep].answerFour,
                        data[indexToKeep].answerFive,
                        data[indexToKeep].answerSix,
                        data[indexToKeep].answerSeven
                        ]
                        
                        shuffle(randomAnswer)
                        
                        question.innerHTML = `${data[indexToKeep].question} <br>
                        <span class = 'hint'> ${data[indexToKeep].hint}</span>`
                        one.textContent = randomAnswer[0]
                        two.textContent = randomAnswer[1]
                        three.textContent = randomAnswer[2]
                        four.textContent = randomAnswer[3]
                        five.textContent = randomAnswer[4]
                        six.textContent = randomAnswer[5]
                        seven.textContent = randomAnswer[6]
            
            
                    }
                        one.style.background = '#262A52'
                        one.style.pointerEvents = 'auto';
            
                        two.style.background = 'none'
                        two.style.pointerEvents = 'auto';
            
                        three.style.background = 'none'
                        three.style.pointerEvents = 'auto';
            
                        four.style.background = 'none'
                        four.style.pointerEvents = 'auto';
            
                        five.style.background = 'none'
                        five.style.pointerEvents = 'auto';
            
                        six.style.background = 'none'
                        six.style.pointerEvents = 'auto'; 
            
                        seven.style.background = 'none'
                        seven.style.pointerEvents = 'auto';
            



                        }   
                        if (indexToKeep === 15) {
                            container.style.display = 'none'
                            nav.style.display = 'none'
                            winContainer.style.display = 'flex'
                            scoreEnd.textContent = scoreDisplay
                            wrongEnd.textContent = clickedItFalse
                            reload.addEventListener('click', () => {
                            location.reload();
                            })
                        } 
            }
            function gameOver() {
                if (clickedItFalse === 1 ) {
               
                livesThree.style.visibility = "hidden";
                } 
                if (clickedItFalse === 2) {
                livesTwo.style.visibility = "hidden";
                }
                if (clickedItFalse === 3) {
                    livesOne.style.visibility = "hidden";
                }
                if (clickedItFalse > 3) {
                    container.style.display = 'none'
                    nav.style.display = 'none'
                    loseContainer.style.display = 'flex'
                    scoreEndTwo.textContent = scoreDisplay
                    reloadTwo.addEventListener('click', () => {
                    location.reload();
                    })
                }       
            }    
            
       


    logik()
    gameOver()
    nextLevel()

   
  
    })
  
})    

