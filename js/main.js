//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('button').value
  const url = 'https://api.coindesk.com/v1/bpi/currentprice.json'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      
        document.querySelector('h2').innerText = data.bpi.USD.rate
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}