let txtIn = document.querySelector('.txtIn');
let here = document.querySelector('.here');
let loadDots = document.querySelector('.loadDots');
const sendBtn = document.querySelector('.sendBtn');
const diagram = document.querySelector('.diagram');
const graphShow = document.querySelector('.graphShow');

//Hmmm... Maybe call the front desk? <br /> Dial 0 from your room or <br /> 317-735-2527

const intents = {
    "" : "Check out our menu! <br /><a href='https://thehulmanindy.com/' target='_blank'> thehulmanindy.com </a>",
    " " : "Check out our menu! <br /><a href='https://thehulmanindy.com/' target='_blank'> thehulmanindy.com </a>",

    // ** menu questions
    "menu" : "Check out our menu! <br /><a href='https://thehulmanindy.com/' target='_blank'> thehulmanindy.com </a>",
    "eat" : "Check out our menu! <br /><a href='https://thehulmanindy.com/' target='_blank'> thehulmanindy.com </a>",
    "food menu" : "Check out our menu! <br /><a href='https://thehulmanindy.com/' target='_blank'> thehulmanindy.com </a>",
    "food" : "Check out our menu! <br /><a href='https://thehulmanindy.com/' target='_blank'> thehulmanindy.com </a>",
    "hungry" : "Check out our menu! <br /><a href='https://thehulmanindy.com/' target='_blank'> thehulmanindy.com </a>",

     // breakfast
    "breakfast" : "Check out our brunch menu! <br /><a href='https://thehulmanindy.com/brunch/' target='_blank'> thehulmanindy.com </a>",
    "hungry breakfast" : "Check out our brunch menu! <br /><a href='https://thehulmanindy.com/brunch/' target='_blank'> thehulmanindy.com </a>",
    "eat breakfast" : "Check out our brunch menu! <br /><a href='https://thehulmanindy.com/brunch/' target='_blank'> thehulmanindy.com </a>",
    "brunch" : "Check out our brunch menu! <br /><a href='https://thehulmanindy.com/brunch/' target='_blank'> thehulmanindy.com/brunch </a>",
    "hungry brunch" : "Check out our brunch menu! <br /><a href='https://thehulmanindy.com/brunch/' target='_blank'> thehulmanindy.com </a>",
    "lunch" : "Brunch is served till 1 PM! <br /><a href='https://thehulmanindy.com/brunch/' target='_blank'> thehulmanindy.com/brunch </a>",
    "eat lunch" : "Brunch is served till 1 PM! <br /><a href='https://thehulmanindy.com/brunch/' target='_blank'> thehulmanindy.com/brunch </a>",
    "hungry lunch" : "Brunch is served till 1 PM! <br /><a href='https://thehulmanindy.com/brunch/' target='_blank'> thehulmanindy.com/brunch </a>",
    "morning" : "Check out our brunch menu! <br /><a href='https://thehulmanindy.com/brunch/' target='_blank'> thehulmanindy.com/brunch </a>",
    "eggs" : "Check out our brunch menu! <br /><a href='https://thehulmanindy.com/brunch/' target='_blank'> thehulmanindy.com/brunch </a>",
    "bacon" : "Check out our brunch menu! <br /><a href='https://thehulmanindy.com/brunch/' target='_blank'> thehulmanindy.com/brunch </a>",
    "eggs bacon" : "Check out our brunch menu! <br /><a href='https://thehulmanindy.com/brunch/' target='_blank'> thehulmanindy.com/brunch </a>",
    
    // Dinner
    "dinner" : "Check out our Dinner menu! <br /><a href='https://thehulmanindy.com/dinner/' target='_blank'> thehulmanindy.com </a>",
    "hungry dinner" : "Check out our Dinner menu! <br /><a href='https://thehulmanindy.com/dinner/' target='_blank'> thehulmanindy.com </a>",
    "eat dinner" : "Check out our Dinner menu! <br /><a href='https://thehulmanindy.com/dinner/' target='_blank'> thehulmanindy.com </a>",
    "evening" : "Check out our Dinner menu! <br /><a href='https://thehulmanindy.com/dinner/' target='_blank'> thehulmanindy.com </a>",
    "meatloaf" : "Check out our Dinner menu! <br /><a href='https://thehulmanindy.com/dinner/' target='_blank'> thehulmanindy.com </a>",
    "tenderloin" : "Check out our Dinner menu! <br /><a href='https://thehulmanindy.com/dinner/' target='_blank'> thehulmanindy.com </a>",
    "chicken" : "Check out our Dinner menu! <br /><a href='https://thehulmanindy.com/dinner/' target='_blank'> thehulmanindy.com </a>",
    "burger" : "Check out our Dinner menu! <br /><a href='https://thehulmanindy.com/dinner/' target='_blank'> thehulmanindy.com </a>",
    "savory" : "Check out our Dinner menu! <br /><a href='https://thehulmanindy.com/dinner/' target='_blank'> thehulmanindy.com </a>",
    "meat" : "Check out our Dinner menu! <br /><a href='https://thehulmanindy.com/dinner/' target='_blank'> thehulmanindy.com </a>",
    
    // drinks
    "cocktail" : "Check out our drinks menu! <br /><a href='https://thehulmanindy.com/drinks-cocktails/' target='_blank'> thehulmanindy.com </a>",
    "cocktails" : "Check out our drinks menu! <br /><a href='https://thehulmanindy.com/drinks-cocktails/' target='_blank'> thehulmanindy.com </a>",
    "drink" : "Check out our drinks menu! <br /><a href='https://thehulmanindy.com/drinks-cocktails/' target='_blank'> thehulmanindy.com </a>",
    "drinks" : "Check out our drinks menu! <br /><a href='https://thehulmanindy.com/drinks-cocktails/' target='_blank'> thehulmanindy.com </a>",
    "alcohol" : "Check out our drinks menu! <br /><a href='https://thehulmanindy.com/drinks-cocktails/' target='_blank'> thehulmanindy.com </a>",
    "alcoholic" : "Check out our drinks menu! <br /><a href='https://thehulmanindy.com/drinks-cocktails/' target='_blank'> thehulmanindy.com </a>",
    "beverage" : "Check out our drinks menu! <br /><a href='https://thehulmanindy.com/drinks-cocktails/' target='_blank'> thehulmanindy.com </a>",
    
    
    // desserts
    "dessert" : "Check out our dessert menu! <br /><a href='https://thehulmanindy.com/desserts/' target='_blank'> thehulmanindy.com </a>",
    "desserts" : "Check out our dessert menu! <br /><a href='https://thehulmanindy.com/desserts/' target='_blank'> thehulmanindy.com </a>",
    "sweet" : "Check out our dessert menu! <br /><a href='https://thehulmanindy.com/desserts/' target='_blank'> thehulmanindy.com </a>",
    "sweets" : "Check out our dessert menu! <br /><a href='https://thehulmanindy.com/desserts/' target='_blank'> thehulmanindy.com </a>",
    "eat sweets" : "Check out our dessert menu! <br /><a href='https://thehulmanindy.com/desserts/' target='_blank'> thehulmanindy.com </a>",
    "pie" : "Check out our dessert menu! <br /><a href='https://thehulmanindy.com/desserts/' target='_blank'> thehulmanindy.com </a>",
    "pudding" : "Check out our dessert menu! <br /><a href='https://thehulmanindy.com/desserts/' target='_blank'> thehulmanindy.com </a>",
      
    // coffee
    "coffee" : "Check out our coffee menu! <br /><a href='https://thehulmanindy.com/coffee-bar/' target='_blank'> thehulmanindy.com </a>",
    "caffeine" : "Check out our coffee menu! <br /><a href='https://thehulmanindy.com/coffee-bar/' target='_blank'> thehulmanindy.com </a>",
    "latte" : "Check out our coffee menu! <br /><a href='https://thehulmanindy.com/coffee-bar/' target='_blank'> thehulmanindy.com </a>",
    "espresso" : "Check out our coffee menu! <br /><a href='https://thehulmanindy.com/coffee-bar/' target='_blank'> thehulmanindy.com </a>",
    "cappuccino" : "Check out our coffee menu! <br /><a href='https://thehulmanindy.com/coffee-bar/' target='_blank'> thehulmanindy.com </a>",


    // general chat
    "name" : "I'm Indy-bot! <br /> How can I help?",
    "hello" : "Hello! <br /> I'm Indy-bot! <br /> How can I help?",
    "hi" : "Hello! <br /> I'm Indy-bot! <br /> How can I help?",
    "hours" : "The Hulman is open from <br /> 7 AM - 1 PM & 5 - 9 PM Monday - Thursday. <br /> Open till 10 PM Friday & Saturday",
    "open" : "The Hulman is open from <br /> 7 AM - 1 PM & 5 - 9 PM Monday - Thursday. <br /> Open till 10 PM Friday & Saturday",
    "closed" : "The Hulman is open from <br /> 7 AM - 1 PM & 5 - 9 PM Monday - Thursday. <br /> Open till 10 PM Friday & Saturday",
    "hulman" : "Anton 'Tony' Hulman Jr. was an American businessman from Terre Haute, Indiana, who bought the Indianapolis Motor Speedway in 1945 and brought racing back to the famous race course after a four-year hiatus following World War II",


    "from" : "INDIANAPOLIS OF COURSE! <br /> I really love this city :)",
    "history" : "Indianapolis was founded in 1820 and became the state capital of Indiana in 1825.",
    "weekend" : "I love to just walk Massachusettes Avenue, always something fun to do.",
    "weather" : "It seems nice, I would check the window though.",
    "music" : "I'll listen to just about anything with a good beat,",
    "downtown" : "Mass Ave and Fountain Square have great spots for food, drinks, and live music.",
    "fun" : "Mass Ave and Fountain Square have great spots for food, drinks, and live music.",
    "500" : "Racing is a huge part of the city's identity! <br /> Even if you're not into racing, the energy is really cool.",
    "sports" : "we have the Colts for football and the Pacers for basketball. <br /> Indy is a great town for sports!",
    "out" : "I love walking the Cultural Trail or biking around White River State Park.",
    "outside" : "I love walking the Cultural Trail or biking around White River State Park.",
    "city" : "I love walking the Cultural Trail or biking around White River State Park.",
    "outdoors" : "I love walking the Cultural Trail or biking around White River State Park.",
    "joke" : "Why was the robot tired when it got home? <br /> It had a 'hard drive'",
    "service desk" : "Hmmm... Maybe call the front desk? <br /> Dial 0 from your room or <br /> 317-735-2527",
    "person" : "Hmmm... Maybe call the front desk? <br /> Dial 0 from your room or <br /> 317-735-2527",
    "human" : "Hmmm... Maybe call the front desk? <br /> Dial 0 from your room or <br /> 317-735-2527",
    "help" : "You can call the front desk! <br /> Dial 0 from your room or <br /> 317-735-2527"
     /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
};

const trainingData = [];

for (let intentName in intents) {
    const response = intents[intentName];
    let input = {};
    input[intentName] = 1;
    let output = {};
    output[response] = 1;
    trainingData.push({
        input: input,
        output: output
    });
}

const net = new brain.NeuralNetwork({ hiddenLayers: [5] });

const stats = net.train(trainingData, {
    errorThresh: 0.002,
    iterations: 10000,
    log: (error) => console.log(error),
    logPeriod: 5000
});

//console.log(stats); <- error thresh & iterations

function inputCleaner(inputString) {
    const newVal = inputString.replace(/[^\w\s]/g, '');
    const wordsToExtract = [
                            'menu', 'food', 'eat', 'hungry',
                            'breakfast', 'brunch', 'morning', 'eggs', "lunch", "bacon",                               //breakfast
                            'dinner', 'evening', 'meatloaf', 'tenderloin', 'chicken', 'burger', 'savory', 'meat',    // dinner
                            'cocktail', 'cocktails', 'drink', 'drinks', 'alcohol', 'aloholic', 'beverage',          // drinks
                            'dessert', 'desserts', 'sweet', 'sweets', 'pie', 'pudding',                            // dessert                
                            'coffee', 'caffeine', 'latte', 'espresso', 'cappuccino',                              // coffee

                            'name', 'hours', 'joke', 'hello', 'hi', 'from', 'history', 'weekend', 'open', 'closed', 'hulman',
                            'weather', 'music', 'downtown', '500', 'sports', 'out', 'outside', 'city', 'outdoors', 'fun', 'help'
                          ];
    const resultArray = [];
    
    const wordsArray = newVal.split(/\s+/);
  
    wordsArray.forEach((word) => {
      if (wordsToExtract.includes(word)) {
        resultArray.push(word);
      }
    });
  
    
    const finalVal = resultArray.join(' ');
    return finalVal;
  }
  
  function intentConsidered(response) {
    const cleanedResponse = inputCleaner(response).toLowerCase();
   // const cleanedResponse = noPunc.toLowerCase();
    const result = net.run({ [cleanedResponse]: 1 });
  
    let highestValue = 0;
    let highestintentName = '';
  
    for (let intentName in result) {
      if (result[intentName] > highestValue) {
        highestValue = result[intentName];
        highestintentName = intentName;
      }
    }
    console.log('Cleaned Response = ' + cleanedResponse);
    return highestintentName;
  }



document.addEventListener('keypress', (keyNum) => {
    if (keyNum.keyCode == 13) {
        loadDots.textContent = 'Thinking ...';
        setTimeout(pressed, 1000);
    } else if (keyNum.key == 'Enter') {
        loadDots.textContent = 'Thinking ...';
        setTimeout(pressed, 1000);
    }
});

sendBtn.addEventListener('click', () => {
    loadDots.textContent = 'Thinking ...';
    setTimeout(pressed, 1000);
});

function pressed() {
    let val = txtIn.value.toLowerCase();
    
        here.innerHTML = intentConsidered(val);
        loadDots.textContent = ' ';
        sendBtn.focus();
/*

    
        // Retrain the model
        const trainingData = [];
        const rand = Math.floor(Math.random() * 5) + 5;
        console.log(rand);

        for (let intentName in intents) {
            const response = intents[intentName];
            let input = {};
            input[intentName] = 1;
            let output = {};
            output[response] = 1;
            trainingData.push({
                input: input,
                output: output
            });
        }
    
        const net = new brain.NeuralNetwork({ hiddenLayers: [rand] });
    
        const stats = net.train(trainingData, {
            iterations: 10000,
            log: (error) => console.log(error),
            logPeriod: 5000
        });
    
        console.log(stats);
        diagram.innerHTML = brain.utilities.toSVG(net.toJSON());

*/
}

function firstFocus() {
    txtIn.focus();
    // console.log('Ready!');
    here.textContent = 'Ready!'
}

firstFocus();


// brain_graph

let showControl = 0;



// uncomment this for graph
// graphShow.addEventListener('click', () => {
//     showControl++;
//     graphShow.style.color = '#0000FF';
//     if (showControl % 2) {
//         diagram.style.display = 'block';
//         graphShow.style.color = '#0000FF';
//         graphShow.textContent = 'Hide the network!';
//     } else {
//         diagram.style.display = 'none';
//         graphShow.style.color = '#0000FF';
//         graphShow.textContent = 'Show the network!';
//     }
// });

// diagram.innerHTML = brain.utilities.toSVG(net.toJSON());





const totalImages = 6;
let current = 1;
let showingBg1 = true;

const bg1 = document.getElementById('bg1');
const bg2 = document.getElementById('bg2');

function updateBackground() {
  const imageName = `bkr_${current}.png`;
  const nextBg = showingBg1 ? bg2 : bg1;
  const currentBg = showingBg1 ? bg1 : bg2;

  nextBg.style.backgroundImage = `url('./images/${imageName}')`;
  nextBg.classList.add('visible');
  currentBg.classList.remove('visible');

  showingBg1 = !showingBg1;
  current++;
  console.log('Changed')
  if (current > totalImages) current = 1;
}

// Initial load
bg1.style.backgroundImage = `url('../images/bkr_6.png')`;

// Update every 5 seconds (change to 60000 for 60s)
setInterval(updateBackground, 60000);


