/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;

var BLACK_ROCKET_ICON = "https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421";

const bodyData = `{
  "idModel": "5abbe4b7ddc1b351ef961414",
  "modelType": "board",
  "name": "Tipo",
  "type": "number",
  "pos": "top",
  "display_cardFront": true
}`;

function create() {
  fetch('https://api.trello.com/1/customFields?key=05b6872aa32005c40dec2e18df2576bb&token=f25b25bf754067b2dc420bf85a6857ab25a4914e37ff374bfa5ae4803bcc40a3', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: bodyData
  })
    .then(response => {
      console.log(
        `Response: ${response.status} ${response.statusText}`
      );
      return response.text();
    })
    .then(text => console.log(text))
    .catch(err => console.error(err));
}

TrelloPowerUp.initialize({
  'card-buttons': function(t, options){
    return [{
      icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
      text: 'Estimate Size',
      callback: (t, options) => {
          return t.popup({
            title: "Leonardo",
            url: 'estimate.html'
          })
      }
    },
    {
      icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
      text: 'Create',
      callback: create
    }];
  },
});

TrelloPowerUp.authorize({
  type: 'popup',
  name: 'Getting Started Application',
  scope: {
    read: 'true',
    write: 'true' },
  expiration: 'never',
  success: () => console.log("ok"),
  error: () => console.log("Falhou!")
});
