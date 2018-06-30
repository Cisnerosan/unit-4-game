(function() {
  let number;
  let score = 0;
  const scoreDisplay = $('h3#score');
  const game = {
    init: function() {
     
      const numberDisplay = $('span#number');
      const crystals = [
        $('img.heart'),
        $('img.square'),
        $('img.tear'),
        $('img.triangle')
      ];
      score = 0;
      scoreDisplay.text(score);
      number = Math.floor(Math.random() * 102) + 19;
      numberDisplay.text(number);
      const values = [];
      let uniqueValues = [];
      while (uniqueValues.length < crystals.length) {
        let value = Math.floor(Math.random() * 11) + 1;
        values.push(value);
        uniqueValues = Array.from(new Set(values));
      }
      for (let i = 0; i < crystals.length; i++) {
        crystals[i].attr('data-value', uniqueValues[i]);
        console.log('crystals from for loop: ', crystals[i][0].dataset.value);
      }
    },
    play: function() {
        let wins = 0;
        let losses = 0;
        const crystalsDiv = $('div.crystals');
        console.log('crystalDiv: ', crystalsDiv);
        const message = $('h3#message');
        crystalsDiv.on('click', '.crystal', function() {
         
          const value = parseInt(this.dataset.value);
          score += value;
          scoreDisplay.text(score);
          console.log(score,number);
          if (score === number) {
            message.text('You Win!');
            wins++;
            $('#wins').text(wins);
            game.init();
          } else if (score > number) {
            console.log('message.text', message.text);
            console.log('losses',losses);
            message.text('You Lose!');
            losses++;
            $('#losses').text(losses);
            game.init();
          } else {
            message.text('');
          }
        });
      }
      
    };
    game.init();
    game.play();

  })();
  