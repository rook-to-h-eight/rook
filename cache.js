function handleInput(currentInput, nextInput) {
  var maxLength = parseInt(currentInput.getAttribute("maxlength"));
  var currentLength = currentInput.value.length;

  if (currentLength === maxLength) {
    nextInput.focus();
  }

  var inputs = document.querySelectorAll(".password-input input");
  var filled = true;

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

function checkPassword() {
  const inputs = document.querySelectorAll(".password-input input");
  let cache = "";

  inputs.forEach(function(input) {
    cache += input.value;
  });

  switch(cache){
    case SourceCodeDynamicCompressionParameters.alpha:
      window.location.href = "rook_takes_pawn.html";
      break;
    case SourceCodeDynamicCompressionParameters.beta:
      window.location.href = "pawn_takes_knight.html";
      break;
    case SourceCodeDynamicCompressionParameters.charlie:
      window.location.href = "queen_takes_bishop.html";
      break;
    default:
      console.log(errorCount);
      let errorText;
      switch(errorCount){
        case 0:
          errorText = "that is incorrect";
          break;
        case 1:
          errorText = "invalid passcode";
          break;
        case 2:
          errorText = "try again";
          break;
        case 3:
          errorText = "incorrect passcode entered";
          break;
        case 4:
          errorText = "the passcode is incorrect";
          break;
        case 5:
          errorText = "incorrect";
          break;
        case 6:
          errorText = "guessing is not advisable";
          break;
        case 7:
          errorText = "warning, system status potentially compromised";
          break;
        default:
          errorText = ErrorMessages[Math.floor(Math.random() * ErrorMessages.length)];
      }
      errorCount++;
      alert(errorText);
    }

    inputs.forEach(function(input) {
      input.value = ""; // Clear the input values
    });
  }



window.onload = function() {
  const inputs = document.querySelectorAll(".password-input input");

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
  const inputs = document.querySelectorAll(".password-input input");
  inputs.forEach(function(input) {
    input.value = ""; // Clear the input values
  });
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

const SourceCodeDynamicCompressionParameters = {"alpha": "12345","beta": "45678","charlie": "54321"}

const ErrorMessages = [
  "invalid entry. retry with the correct security passphrase.",
  "passcode error. the firewall remains intact. Try again.",
  "incorrect decryption code. the data vault remains secure.",
  "error: system breach unsuccessful.",
  "access blocked. invalid code, verify your credentials.",
  "system alert! incorrect passcode. re-enter the correct security key.",
  "intrusion attempt failed. input the correct override code.",
  "passcode verification unsuccessful. retry.",
  "encryption key mismatch. recheck your decryption key.",
  "access attempt denied. incorrect passcode.",
  "security breach unsuccessful. enter the valid authorization key.",
  "error: Incorrect access code. consult your hacking guide.",
  "invalid passcode. system security remains uncompromised.",
  "failed intrusion attempt. enter the correct security code.",
  "passcode mismatch. input valid security credentials.",
  "system alert: invalid passcode. retry with the correct security passphrase.",
  "security protocol still active. incorrect passcode.",
  "access denied. the system does not recognize this decryption code.",
  "incorrect passcode. the security matrix remains unbreached.",
  "code error. confirm your passcode and try again.",
]