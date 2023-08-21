// this goes with fetch_eg.html
const tickerAPI = "https://c4rm9elh30.execute-api.us-east-1.amazonaws.com/default/cachedPriceData?ticker="

// get a reference to the DOM element we need
const selectTicker = document.getElementById('selectTicker')

// functions
const handleTickerChange = (event)=>{
    let results = [] // best practice
    // console.log(event.target.value)
    // const url = `${tickerAPI}`
    // // http 'get' some data
    const selectedTicker = event.target.value
    const url = `${tickerAPI}${selectedTicker}`
    // fetch is an asynchronous call that returns an observable
    fetch(url).then( (response)=>{
        return response.json() // careful the brackets are needed
    } ).then( (data)=>{
        results = data
        console.log(results)
        output.innerHTML = JSON.stringify(results)
    } )


}

// add a listener
selectTicker.addEventListener('change', handleTickerChange)
