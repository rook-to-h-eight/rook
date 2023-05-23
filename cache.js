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
      alert("Incorrect");

      inputs.forEach(function(input) {
        input.value = ""; // Clear the input values
      });
  }

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

const SourceCodeDynamicCompressionParameters = {
  "alpha": "12345",
  "beta": "45678",
  "charlie": "54321"
}