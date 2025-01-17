

// With array

window.onload = function () {
  const url = 'https://api.coincap.io/v2/assets';

  fetch(url)
  .then((res) => res.json()) // parse response as JSON
  .then((data) => {
    //takes first 10 coins 
    const coins = data.data.slice(0, 10);


coins.forEach((coin) => {
  const { id, priceUsd } = coin; 
  const priceCoin = document.querySelector(`#${id}`); 
  if (priceCoin) {
    priceCoin.innerText = priceUsd
      ? `${(priceUsd)}`
      //if does not find any info
      : 'No data'; 
  }
});
})

//if it caches an error fetching
.catch((err) => {
console.error(`error ${err}`);
});
}; 

  //Coins array

//   const coins = [
//     { id: 'bitcoin-price', index: 0 },
//     { id: 'ethereum-price', index: 1 },
//     { id: 'tether-price', index: 2 },
//     { id: 'usdcoin-price', index: 7 },
//     { id: 'binance-price', index: 3 },
//     { id: 'xrp-price', index: 4 },
//     { id: 'cardano-price', index: 9 },
//     { id: 'solana-price', index: 5 },
//     { id: 'dogecoin-price', index: 6 },
//   ];

//       coins.forEach(({ id, index }) => {
//         const priceCoin = document.querySelector(`#${id}`);
//         if (priceCoin) {
//           priceCoin.innerText = assets[index]?.priceUsd || 'No data';
//         }
//       });
//     })
//     .catch((err) => {
//       console.error(`error ${err}`);
//     });
// };



//With button

// function getFetch(){
  // const choice = document.querySelector('button').value
  // const url = 'https://api.coindesk.com/v1/bpi/currentprice.json'



//Without button

//   window.onload = function() {
//   const url = 'https://api.coincap.io/v2/assets'
//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         const assets = data.data;
     
      
//         document.querySelector('#bitcoin-price').innerText = data.data[0]?.priceUsd
//         document.querySelector('#ethereum-price').innerText = data.data[1]?.priceUsd
//         document.querySelector('#tether-price').innerText = data.data[2]?.priceUsd
//         document.querySelector('#usdcoin-price').innerText = data.data[7]?.priceUsd
//         document.querySelector('#binance-price').innerText = data.data[3]?.priceUsd
//         document.querySelector('#xrp-price').innerText = data.data[4]?.priceUsd
//         document.querySelector('#cardano-price').innerText = data.data[9]?.priceUsd
//         document.querySelector('#solana-price').innerText = data.data[5]?.priceUsd
//         document.querySelector('#dogecoin-price').innerText = data.data[6]?.priceUsd
      
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }







