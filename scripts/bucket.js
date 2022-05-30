// On clicking remove button the item should be removed from DOM as well as localstorage.

let cart = JSON.parse(localStorage.getItem('coffee')) || [];

let total = cart.reduce((sum, elm) => 
{
    return sum += Number(elm.price);
}, 0);

let cartTotal = document.getElementById('total_amount');
cartTotal.innerText = total;

cart.map((elm, index, cart) => 
{
    let container = document.createElement('div');

        let image = document.createElement('img');
        image.src = elm.image;
        image.style.width = "250px";
        image.style.height = "250px";

        let type = document.createElement('p');
        type.innerText = elm.title;

        let price = document.createElement('p');
        price.innerText = elm.price;

        let rmvBtn = document.createElement('button');
        rmvBtn.innerText = 'remove';
        rmvBtn.setAttribute('id', 'remove_coffee');
        rmvBtn.addEventListener('click', () =>
        {
            removeItems(elm, index, cart);
        })

        container.append(image, type, price, rmvBtn);

        document.getElementById('bucket').append(container);
})

const removeItems = (elm, index, data) =>
{
    cart.splice(index, 1);
    localStorage.setItem('coffee', JSON.stringify(cart));
    window.location.reload();
}