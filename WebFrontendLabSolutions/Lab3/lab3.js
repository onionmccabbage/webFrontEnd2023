// write a function to fetch JSON from https://jsonplaceholder.typicode.com/photos
const getPhotos = (e)=>{
    e.preventDefault()
    const monitor = document.getElementById('monitor')
    console.log(e)
    let results = []
    const url = `https://jsonplaceholder.typicode.com/photos`
    // make an asynchronous call to the API
    fetch(url)
    .then(response => response.json())
        .then((data) => {
            results = data
            console.log(results)
            monitor.innerHTML = JSON.stringify(results)
        })
}

// Populate the page with the returned data (use .then)
// NB feel free to:
// - just show the raw JSON on the page (add a <pre> tag)
// - or show a list of the photo titles (add <ul> then <li> tags)
// - or show a list of the photo titles and other data members
// - or add rows to your table (pretty complex to do)
// - maybe show the actual thumbnail image (use 'title' as alt)?


// get a reference to the form <button>
btnDone = document.getElementById('btnDone')

// add an event listener for when the button is clicked (call your 'fetch' function)
btnDone.addEventListener('click', getPhotos)