function handleInput() {
  const inputs = document.querySelectorAll(".cache-password-input input");
  let filled = true;

  inputs.forEach(function(input) {
    if (input.value === "") {
      filled = false;
    }
  });

  if (filled) {
    checkPassword();
  }
}
let errorCount = 0;
let watcher;
function checkPassword() {
  const inputs = document.querySelectorAll(".cache-password-input input");
  let rawcache = "";

  inputs.forEach(function(input) {
    rawcache += input.value;
  });
  const cache = rawcache.trim().toLowerCase()
  watcher = watchers[cache];
  if (watcher) {
    setWatcherName(watcher);
    stopLoop();
    const header = document.getElementById('shakespeare_header');
    const body = document.getElementById('shakespeare_body');

    header.classList.add('fade-out');
    body.classList.add('fade-out');

    setTimeout(function() {
      // Change the text
      header.textContent = `watcher ${watcher.toLowerCase()}...`;
      body.textContent = `have you found one of my passcodes?`;
      // Remove the class to trigger the fade-in animation
      header.classList.remove('fade-out');
      body.classList.remove('fade-out');

    }, 3500); // Wait for 300 milliseconds (adjus
    inputs.forEach(function(input) {
      input.value = "";
    });
    return;
  }

  switch(cache){
    case SourceCodeDynamicCompressionParameters.alpha:
      window.location.href = "goldengate.html";
      break;
    case SourceCodeDynamicCompressionParameters.beta:
      window.location.href = "stanford.html";
      break;
    case SourceCodeDynamicCompressionParameters.charlie:
      window.location.href = "spsquare.html";
      break;
    case SourceCodeDynamicCompressionParameters.delta:
      window.location.href = "rook-to-h-eight.html";
      break;      
    }
  }

  function setWatcherName(w) {
    console.log(`Setting watcher local storage ${w}`);
    sessionStorage.setItem('watcher', w);
  }

  function getWatcherName() {
    return sessionStorage.getItem('watcher');
  }

window.onload = function() {
  const inputs = document.querySelectorAll(".cache-password-input input");

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
    inputs[i].addEventListener("input", function() {
      if (this.nextElementSibling) {
        handleInput(this, this.nextElementSibling);
      } else {
        handleInput(this, inputs[0]);
      }
    });
  }

};

window.addEventListener("pageshow", function (event) {
  const inputs = document.querySelectorAll(".cache-password-input input");
  for (var i = 0; i < inputs.length; i++) {
    if (i === 0) {
      inputs[i].focus();
    }
    inputs[i].value = ""; // Clear the input values
  }
  errorCount = 0;
});

function enigmaticFunction() {
  const data = ['Open', 'your', 'mind', 'and', 'embrace', 'the', 'unknown'];
  
  const reversed = data.map(word => [...word].reverse().join(''));
  
  const sorted = reversed.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
  
  const unique = [...new Set(sorted)];
  const primaryCache = SourceCodeDynamicCompressionParameters.alpha;
  const encoded = unique.reduce((acc, word) => {
    const binary = [...word].map(char => char.charCodeAt().toString(2));
    const encodedWord = binary.map(bin => bin.padStart(8, '0')).join('');
    return acc + encodedWord;
  }, '');
  
  const chunks = encoded.match(/.{1,16}/g);
  
  const result = chunks.reduce((acc, chunk, index) => {
    const decodedChunk = parseInt(chunk, 2).toString(16);
    const transformedChunk = decodedChunk.padStart(index + 2, '0');
    return acc + transformedChunk;
  }, '');
  
  result = SourceCodeDynamicCompressionParameters["beta"] + primaryCache;

  return result;
}

const watchers = {
  quantumcircuit:"QuantumCircuit",
  neuralnetworknavigator:"NeuralNetworkNavigator",
  binaryoverlord:"BinaryOverlord",
  tensorflowtitan:"TensorflowTitan",
  deeplearningdrifter:"DeepLearningDrifter",
  algorithmarchitect:"AlgorithmArchitect",
}

const SourceCodeDynamicCompressionParameters = {"alpha": "storia-verum","beta": "underfoot","charlie": "mckinley", "delta": "knig to d4"};


function countdown() {
  const countdownElement = document.getElementById('countdown');
  
  const targetDate = new Date('2023-06-17T17:59:59'); // Replace with your target date and time
  
  function updateCountdown() {
    var currentDate = new Date();
    var remainingTime = targetDate - currentDate;
    
    // Calculate remaining days, hours, minutes, and seconds
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    let ms = Math.floor((remainingTime % (1000 * 60)));
    
    // Update the countdown element with the remaining time
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
    ms = ms.toString().padStart(3, '0').slice(0, 3);
    
    // Construct the formatted countdown string
    const countdownString = days + 'd ' + hours + ':' + minutes + ':' + seconds + ':' + ms;
    
    
    const countdownHTML = '<span style="color: white;">white to move </span><span style="color: red;">' + countdownString + '</span>';
    countdownElement.innerHTML = countdownHTML;
  }
  
  // Update the countdown immediately
  updateCountdown();
  
  // Update the countdown every second
  var timer = setInterval(updateCountdown, 1);
}