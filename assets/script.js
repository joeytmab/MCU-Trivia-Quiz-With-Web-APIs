//page selectors
var hiScoreEl = document.querySelector(".highscore"); //highScoresLink
var questionTimerEl = document.querySelector("#scoreTimer");
var timerSxn = document.querySelector("#timers");
var mainEl = document.querySelector("#quizcomponents");

//initial starting variables of quiz game
var quiz = {};
var score = 0;

var initialTime;
var timeRemain;



//quiz question array
var questionArray = [
    {
        questheading: "Which actor voiced the villain Ultron?",
        choices: ["Jon Voight", "Guy Pearce", "Jeremy Irons", "James Spader"],
        answer: "James Spader"
      },

      {
        questheading: "What was the name of Tony Stark's most current AI?",
        choices: ["E.D.I.T.H.", "J.A.R.V.I.S.", "J.O.C.A.S.T.A.", "F.R.I.D.A.Y."],
        answer: "F.R.I.D.A.Y."
      },
    {
        questheading: "What NY borough is Peter Parker from?",
        choices: ["Queens", "The Bronx", "Brooklyn", "Manhattan"],
        answer: "Queens"
      },
    {
        questheading: "What Disney song did Shang-Chi sing in karaoke during the film?",
        choices: ["HAKUNA MATATA", "A WHOLE NEW WORLD", "LET IT GO", "BEAUTY AND THE BEAST"],
        answer: "A WHOLE NEW WORLD"
      },
    {
        questheading: "Erik Killmonger is of what relation to Black Panther?",
        choices: ["brother", "childhood friend", "cousin"],
        answer: "cousin"
      },
    {
        questheading: "What type of radiation catalyzed Bruce Banner's transformation into the Hulk?",
        choices: ["x ray", "nuclear", "cosmic", "gamma"],
        answer: "gamma"
      },
    {
        questheading: "What is the name of Thanos' home planet?",
        choices: ["Orion", "Titan", "Xandar", "Vormir"],
        answer: "Titan"
      },
    {
        questheading: "Name of the super soldier project which created Captain America?",
        choices: ["Project Rebirth", "Project Allied", "Project Insight", "Project Phoenix"],
        answer: "Project Rebirth"
      },
    {
        questheading: "Prior to taking on the Ant-Man role, Scott Lang worked at what chain restaurant?",
        choices: ["Chili's", "Chuck E Cheese", "Taco Bell", "Baskin-Robbins"],
        answer: "Baskin-Robbins"
      },
    {
        questheading: "This villain is NOT a member of Thano's death squad, the Black Order:",
        choices: ["Cull Obsidian", "Proxima Midnight", "Blackheart", "Corvus Glaive", "Ebony Maw"],
        answer: "Blackheart"
      },
      {
        questheading: "What is the name of the AC/DC song played at the end of Iron Man 2?",
        choices: ["Highway to Hell", "TNT", "Shoot to thrill", "Back in Black"],
        answer: "Highway to Hell"
      },
    {
        questheading: "What was Marvel creator Stan Lee's cameo in the first Captain America?",
        choices: ["museum security guard", "bartender", "Army general", "mailman"],
        answer: "Army general"
      },
    {
        questheading: "Guardians of the Galaxy member Drax has a unique nickname:",
        choices: ["the Enforcer", "the Unsullied", "the Accuser", "the Destroyer"],
        answer: "the Destroyer"
      }, 
    {
        questheading: "What video game does Thor play during Avengers: Endgame?",
        choices: ["LoL", "Apex Legends", "Fortnite", "Call of Duty"],
        answer: "Fortnite"
      },
    {
        questheading: "The Infinity Gauntlet contains 6 stones. Which is orange?",
        choices: ["Soul", "Mind", "Space", "Reality"],
        answer: "Soul"
      },
    {
        questheading: "What is the Winter Soldier's first name?",
        choices: ["Steven", "Jack", "James", "Bucky"],
        answer: "James"
      },
    {
        questheading: "According to Iron Man films, what fruit is Pepper Potts allergic to?",
        choices: ["pears", "blueberries", "strawberries", "raspberries"],
        answer: "strawberries"
      },
    {
        questheading: "The Battle of New York in Avengers (2012) reminded Black Widow of an operation with Hawkeye where?",
        choices: ["Sokovia", "Budapest", "Moscow", "Columbia"],
        answer: "Budapest"
      },
    {
        questheading: "What movie does Clint Barton make his first MCU appearance?",
        choices: ["Incredible Hulk", "Captain America", "Iron Man", "Thor"],
        answer: "Thor"
      },
    {
        questheading: "The Tesseract is known as what other Infinity Stone?",
        choices: ["space", "mind", "power", "time"],
        answer: "space"
      },
    
]

showInstructions();

//heading will incorporate question, body will have the answers. template for layout
function showInstructions () {

    console.log("showinstructions are working")
    
    clearInput(); 
//instructions for game. should load immediately
    let headingInst = document.createElement("p");
    
    headingInst.textContent = "Welcome to an advanced assessment of the Marvel Cinematic Universe."

    let bodyInst = document.createElement("p");
    
    bodyInst.textContent = "You have 150 seconds to complete 20 questions. Final score is calculated from your time remaining. Correct answers progress you through the test. Incorrect answers penalize you time. The faster you finish, the higher your score. Best of luck, true believer!"

    //make button to start quiz game
    let startQuiz = document.createElement("button");
    startQuiz.setAttribute("id", "startQuiz");
    startQuiz.setAttribute("class", "btn-btn-primary");
    startQuiz.textContent = "Avengers! ASSEMBLE!"

    mainEl.appendChild(headingInst);
    mainEl.appendChild(bodyInst);
    mainEl.appendChild(startQuiz);

    startQuiz.addEventListener("click", function() {
        playQuiz();
    })


    
}

//removing HTML of children, including quiz components
function clearInput () {
    mainEl.innerHTML = "";
}

//initialize the quiz game.
function playQuiz() {
    //display timer
    timerSxn.setAttribute("style", "visibility: visible;");

    //start timer
    initialTime = 150;
    //gameDuration = gameSeconds;

    quiz = pullRandomQuestion(questionArray);

    startGameTimer();

    presentQuestions();
    
}

//obtaining random question out of array of questions, aka question bank
function pullRandomQuestion(arr) {

    var retRandomQuestion = [];

    for (i=0; i < arr.length; i++) {
        retRandomQuestion.push(arr[i]);
    }
    return retRandomQuestion;
}

function startGameTimer() {
    //cancels timed setInterval and sets time for game start
    
    //starts clock moving
    timeRemain = setInterval(function() {
       console.log(initialTime);
       initialTime--;

       questionTimerEl.textContent = initialTime + ' secs';
       
       if (initialTime < 1) {
        clearInterval(timeRemain);
        //questionTimerEl.textContent = "150 secs";
       
      alert("Game over. But you know the saying, 'If at first you don't succeed, bargain, bargain again with Dormammu...");

      gameFinished();
            

    }}, 1000);
    showInstructions();
  }

  //function for presenting questions from the questionArray
function presentQuestions() {

  //conditions if either quiz if finished or time is over
    if (quiz.length === 0 || initialTime < 1) {
        
        gameFinished();
        return;
    }
    

    //selected question is popped out of array, making it current object on page
    selectedQuestion = quiz.pop();
    clearInput();
    //questions are built out onto display; question header is h1, question choices are listed in body of container

    //elements created, then data values attached

    var quest = document.createElement('p');
    quest.setAttribute("question", selectedQuestion.questheading);
    quest.textContent = selectedQuestion.questheading;
    mainEl.appendChild(quest);
    
    var choiceBody = document.createElement('ul');
    choiceBody.setAttribute("id", "choiceBody");
    mainEl.appendChild(choiceBody);

    //populate answers onto screen
    

    for (i=0; i < selectedQuestion.choices.length; i++) {
        var choiceoptions = document.createElement('li');
        choiceoptions.setAttribute("choice-list", selectedQuestion.choices[i]);
        choiceoptions.textContent = selectedQuestion.choices[i];
        choiceBody.appendChild(choiceoptions);
    }


    choiceBody.addEventListener("click", function () {
        scoreAnswer();
    })
}  





//fxn alerting user of correct and wrong answers = contributes to their score
function scoreAnswer(e) {
    
    var e = event.target;
    if (e.matches("li")) {
    
        let clickedItem = e.textContent;
        if (clickedItem !== selectedQuestion.answer) {
            alert("Wrong. Thanos is not pleased.");
            initialTime -= 15;
        } else if (clickedItem == selectedQuestion.answer) {
            alert("Good job. You've been doing your research.")
        } else {
            console.log("error")
        }
        
        setTimeout(presentQuestions, 500);
    }
}

//end game function
function gameFinished() {

    console.log("gamefinished is functioning");
//clear html input and clearing time intervals
     clearInterval(timeRemain)
    
    clearInput();

    //removes timer with game ending
    timerSxn.setAttribute("style", "visibility: hidden;");

    //score = initialTime;

    //create container containing message, final score, and input for user to enter initials
    let heading = document.createElement("p");
    heading.setAttribute("id", "main-heading");
    heading.textContent = "Welcome back, true believer!. Thanks for playing! Hopefully you got at least half right....that's a passing grade in Thanos' eyes...#sarcasm"

    let body = document.createElement("p");
    body.setAttribute("id", "instructions");
    body.textContent = "Final score: " + initialTime;

    let replayButton = document.createElement('button');
    replayButton.setAttribute("class", "btn-btn-primary");
    replayButton.textContent = "Replay!";

    let initDiv = document.createElement('p');
    let initLabel = document.createElement('label');
    initLabel.textContent = "Enter your Initials: "

    let userInput = document.createElement("input");
    userInput.setAttribute('size', '3');
    userInput.setAttribute('minlength', '3');
    userInput.setAttribute('maxlength', '3');

    mainEl.appendChild(heading);
    mainEl.appendChild(body);
    mainEl.appendChild(initLabel);
    mainEl.appendChild(userInput);
    mainEl.appendChild(initDiv);
    mainEl.appendChild(replayButton);

    replayButton.addEventListener("click", showInstructions);

    userInput.addEventListener("input", function() {
//when length of initials is 3, values are saved and pushed to local storage 
        if (userInput.value.length === 3) {
            let currScore = [{ name: userInput.value, score: initialTime }];
            //getting scores from storage
            let archivedScores = JSON.parse(localStorage.getItem("highScores"));

            if (archivedScores !== null) {
                archivedScores.push(currScore[0])
            
            } else {
                archivedScores = currScore;
            }

            localStorage.setItem("highScores", JSON.stringify(archivedScores));
            
            highScores();
        }
    });
}

function highScores() {
    clearInterval(timeRemain);

    console.log("highscores is working rn")
    //clears body of page, hides timer
    clearInput();

    timerSxn.setAttribute("style", "visibility: hidden");
    //getting scores from storage
    let archivedScores = JSON.parse(localStorage.getItem("highScores"));

    let heading = document.createElement('h2');
    heading.textContent = "Asgardian High Score Hall of Valhalla";

    mainEl.appendChild(heading);

    if (archivedScores !== null) {

        archivedScores.sort((a,b) => (a.score < b.score) ? 1: -1);
        //display scores at 10 max;
        let scoresDisplayed = 10;
        if (archivedScores.length < 10) {
            scoresDisplayed = archivedScores.length;
        }

        for (i=0; i < scoresDisplayed; i++) {
        
            var a = archivedScores[i];

            var list = document.createElement("p");
            list.textContent = a.name + " " + a.score;
            mainEl.appendChild(list);
        }
       
    } else {
            var list = document.createElement("p");
            list.textContent = "Enter Your Initials:";
            mainEl.appendChild(list);
        }

//button to restart quiz at high score tab
    var letsPlay = document.createElement("button");
    letsPlay.setAttribute("class", "btn-btn-secondary");
    letsPlay.textContent = "Let's Play!";

    mainEl.appendChild(letsPlay);

    letsPlay.addEventListener("click", showInstructions);

}
//button for high score link at top of page
hiScoreEl.addEventListener("click", highScores);


