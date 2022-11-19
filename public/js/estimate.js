let t = TrelloPowerUp.iframe()

window.estimate.addEventListener('submit', function(event){
  // Stop the browser trying to submit the form itself.
  event.preventDefault();
  return t.set('card', 'shared', 'estimate', window.estimateSize.value)
  .then(function(){
    t.closePopup();
  });
});


t.render(function(){
  t.sizeTo('#estimate').done();
  return t.get('card', 'shared', 'estimate')
  .then(function(estimate){
    window.estimateSize.value = estimate;
  })
  .then(function(){
    t.sizeTo('#estimate').done();
  });
});


const fetch = require('node-fetch');

const bodyData = `{
  "idModel": "5abbe4b7ddc1b351ef961414",
  "modelType": "board",
  "name": "<string>",
  "type": "checkbox",
  "options": "<string>",
  "pos": "top",
  "display_cardFront": true
}`;



