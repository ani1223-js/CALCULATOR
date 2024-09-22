
    let currentValue = '';
    let isSquare = false;
    
    function appendChar(char) {
        
        document.getElementById("result").value += char;
        
        }
    

    function clearScreen() {
      document.getElementById("result").value = " ";
    }

    function deleteChar() {
      let currentValue = document.getElementById("result").value;
      document.getElementById("result").value = currentValue.slice(0,-1);
    }

    function calculateResult() {
      
      try {
        if(isSquare){
          currentValue = Math.pow(parseFloat(currentValue),2);
          document.getElementById("result").value = currentValue;
          isSquare = false;
        }
        else{
        let expression = document.getElementById("result").value;
        document.getElementById("result").value = eval(expression);
      }

      } catch (error) {
        document.getElementById("result").value = "Error";
      }


    }


    function Square(){


     currentValue = document.getElementById("result").value;
      document.getElementById("result").value = currentValue + "^2";
      isSquare = true;
     
     
    }