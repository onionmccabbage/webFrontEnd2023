const tickerAPI = 'https://c4rm9elh30.execute-api.us-east-1.amazonaws.com/default/cachedPriceData?ticker='

const populatePage=(results)=>{
    // find max and min from the results data arrays
    const arrTickerVolume = results['price_data']['volume']
    const arrTickerHigh = results['price_data']['high']
    const arrTickerLow = results['price_data']['low']
    const arrTickerOpen = results['price_data']['open']
    const arrTickerClose = results['price_data']['close']
    // get references for the parts of the web page we want to populate
    const maxVolume = document.getElementById('maxVolume')
    const maxHigh = document.getElementById('maxHigh')
    const minLow = document.getElementById('minLow')
    const maxOpen = document.getElementById('maxOpen')
    const maxClose = document.getElementById('maxClose')
    
    // show the data members on the page
    // use 'spread' operator to expand out an array
    maxVolume.innerHTML = `Max Volume: ${Math.max(...arrTickerVolume) }`
    maxHigh.innerHTML = `Max High: ${Math.max(...arrTickerHigh) }`
    minLow.innerHTML = `Min Low: ${Math.min(...arrTickerLow) }`
    maxOpen.innerHTML = `Max Open: ${Math.max(...arrTickerOpen) }`
    maxClose.innerHTML = `Max Close: ${Math.max(...arrTickerClose) }`
    // reveal the results
    const output = document.getElementById('output')
    output.setAttribute('class', 'show')
}

const handleTickerChange = (event)=>{
    let results = []
    const selectedTicker = event.target.value
    console.log(selectedTicker)
    const url = `${tickerAPI}${selectedTicker}`
    // make an asynchronous call to the API
    fetch(url) // defautls to 'get'
    .then(response => response.json())
        // asynchronous calls are 'then-able'
        .then((data) => {
            // console.log(JSON.stringify(data))
            results = data
            console.log(results)
            monitor.innerHTML = JSON.stringify(results)
            populatePage(results)
        })
}

const selectTicker = document.getElementById('selectTicker')
selectTicker.addEventListener('change', handleTickerChange)