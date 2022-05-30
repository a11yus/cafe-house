// Add the coffee to local storage with key "coffee"

const url = `https://masai-mock-api.herokuapp.com/coffee/menu`;

fetch (url)
.then(res => res.json())
.then(res => append(res.menu.data))
.catch((err) =>
    {
        console.log('error:', err)
    });


const append = (data) => 
{
    // console.log(data);
    data.forEach((elm, index, data) =>
    {
        let box = document.createElement('div');

        let image = document.createElement('img');
        image.src = elm.image;
        image.style.width = "250px";
        image.style.height = "250px";

        let type = document.createElement('p');
        type.innerText = elm.title;

        let price = document.createElement('p');
        price.innerText = elm.price;

        let btn = document.createElement('button');
        btn.innerText = 'Add to bucket';
        btn.setAttribute('id', 'add_to_bucket');
        btn.addEventListener('click', () =>
        {
            bucket(elm, index, data);
        })

        box.append(image, type, price, btn);

        document.getElementById('menu').append(box);
    })
}

let cart = JSON.parse(localStorage.getItem('coffee')) || [];

const bucket = (elm, index, data) =>
{
    cart.push(elm);
    localStorage.setItem('coffee', JSON.stringify(cart));
    window.location.reload();
}

let itemCount = document.getElementById('count');
itemCount.innerText = cart.length;