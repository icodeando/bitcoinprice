//Example fetch using pokemonapi.co
// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
  // const choice = document.querySelector('button').value
  // const url = 'https://api.coindesk.com/v1/bpi/currentprice.json'

  window.onload = function() {
  const url = 'https://api.coincap.io/v2/assets'
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        const assets = data.data;
     
      
        document.querySelector('#bitcoin-price').innerText = data.data[0]?.priceUsd
        document.querySelector('#ethereum-price').innerText = data.data[1]?.priceUsd
        document.querySelector('#tether-price').innerText = data.data[2]?.priceUsd
        document.querySelector('#usdcoin-price').innerText = data.data[7]?.priceUsd
        document.querySelector('#binance-price').innerText = data.data[3]?.priceUsd
        document.querySelector('#xrp-price').innerText = data.data[4]?.priceUsd
        document.querySelector('#cardano-price').innerText = data.data[9]?.priceUsd
        document.querySelector('#solana-price').innerText = data.data[5]?.priceUsd
        document.querySelector('#dogecoin-price').innerText = data.data[6]?.priceUsd
      
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}



