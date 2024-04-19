const buttonBehaviorComponent = {
    init() {
      const btn1 = document.getElementById('btn1');
      const btn2 = document.getElementById('btn2');
      const btn3 = document.getElementById('btn3');
  
      const handleButtonClick = (event) => {
        const clickedButton = event.target;
        
        if (clickedButton.classList.contains('clicked')) {
          // Button has already been clicked, do nothing
          return;
        }
  
        if (clickedButton.id === 'btn3') {
          // Correct answer (btn3)
          clickedButton.textContent = 'Correct!';
          clickedButton.style.backgroundColor = '#00C34E';
        } else {
          // Incorrect answer (btn1 or btn2)
          clickedButton.textContent = 'Try again!';
          clickedButton.style.backgroundColor = '#FF1058';
        }
  
        // Add 'clicked' class to the button
        clickedButton.classList.add('clicked');
      };
  
      btn1.addEventListener('click', handleButtonClick);
      btn2.addEventListener('click', handleButtonClick);
      btn3.addEventListener('click', handleButtonClick);
    },
  };
  
  export { buttonBehaviorComponent };
  