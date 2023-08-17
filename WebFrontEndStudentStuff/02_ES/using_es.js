// some sample data
const stocks = [{
    'code': 'WPO',
    'price': 10,
    'quantity': 100,
},
{
    'code': 'NYT',
    'price': 20,
    'quantity': 200,
},
{
    'code': 'MZLA',
    'price': 30,
    'quantity': 300,
},
{
    'code': 'TIK',
    'price': 40,
    'quantity': 400,
}
]

console.log(`Stocks Data; ${stocks} \n${stocks.length} items`)

// grab a reference to the web table where we will add the data
const tbUsers = document.getElementById('tbUsers')

// function to  clear then populate the table body
const populateTableBody = () => {
    // first, clear any existing rows in the table body
    tbUsers.innerHTML = ''
    // make a new row element for each data member
    stocks.map((stock) => {
        // console.log(stock.code, stock.price, stock.quantity)
        // Make <td> cells for the data elements
        const stockCodeCell = document.createElement('td')
        stockCodeCell.innerHTML = `${stock.code}` // innerHTML for plain text
        const stockPriceCell = document.createElement('td')
        stockPriceCell.innerHTML = `${stock.price}`
        const stockQuantityCell = document.createElement('td')
        stockQuantityCell.innerHTML = `${stock.quantity}`
        // build a table row element using the <td> cells
        const stockRow = document.createElement('tr')
        stockRow.appendChild(stockCodeCell) // appendChild to add elements inside other elements
        stockRow.appendChild(stockPriceCell)
        stockRow.appendChild(stockQuantityCell)
        // append the new row to the table body
        tbUsers.appendChild(stockRow)
    })
}
// first tiem through, use the existing data structure to populate the table body
populateTableBody()

// event call-back function
const handleAddStock = (event) => { // good practice to explicitly pass the event object
    event.preventDefault() // we don't want the forms default behaviour
    // grab the values from the form
    const code = document.getElementById('code').value
    const price = document.getElementById('price').value
    const quantity = document.getElementById('quantity').value

    const newStock = {
        'code': code,
        'price': price,
        'quantity': quantity
    }
    console.log(newStock)
    stocks.push(newStock)
    // call our function to populate the table
    populateTableBody()
}

// add a listener for the form button
const btnDone = document.getElementById('btnDone')
btnDone.addEventListener('click', handleAddStock)
