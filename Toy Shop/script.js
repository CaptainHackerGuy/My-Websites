var products = [

    {
        image_name: 'images/catpillow.jpg',
        name: 'Cat Pillow',
        price: '1300',
        type: 'Toddler'
    },

    {
        image_name: 'images/hotwheels.jpg',
        name: 'Hot Wheels',
        price: '699',
        type: 'Infant'
    },

    {
        image_name: 'images/rccar.jpg',
        name: 'RC Car',
        price: '2300',
        type: 'Infant'
    },

    {
        image_name: 'images/cycle.jpg',
        name: 'Cycle',
        price: '10000',
        type: 'Kids'
    },
    
    {
        image_name: 'images/waveboard.jpg',
        name: 'WaveBoard',
        price: '3600',
        type: 'Kids'
    },
];

var prod = ''

prod = `

        <div class="Toy">
            <img src="${products[0].image_name}">
            <h3>${products[0].name}</h3>
            <h5>${products[0].price}</h5>
        </div>

        <div class="Toy">
            <img src="${products[1].image_name}">
            <h3>${products[1].name}</h3>
            <h5>${products[1].price}</h5>
        </div>
        
        <div class="Toy">
            <img src="${products[2].image_name}">
            <h3>${products[2].name}</h3>
            <h5>${products[2].price}</h5>
        </div>

        <div class="Toy">
            <img src="${products[3].image_name}">
            <h3>${products[3].name}</h3>
            <h5>${products[3].price}</h5>
        </div>
        
        <div class="Toy">
            <img src="${products[4].image_name}">
            <h3>${products[4].name}</h3>
            <h5>${products[4].price}</h5>
        </div>        
        `

document.getElementById('all_products').innerHTML = prod;