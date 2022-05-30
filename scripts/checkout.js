
document.getElementById('form').addEventListener("submit", placeOrder);

function placeOrder()
{
    // event.preventDefault();

    orderAccepted().then(prepared).then(packed).then(delivering).then(delivered)
}

const orderAccepted = () =>
{
    return new Promise((resolve , reject) =>
    {
        setTimeout(() =>
        {
            alert("Your order is accepted");
            resolve()
        }, 0)
    })
}

const prepared = () =>
{
    return new Promise((resolve , reject) =>
    {
        setTimeout(() =>
        {
            alert("Your order is being Prepared");
            resolve()
        })
    }, 3000)
}


const packed = () =>
{
    return new Promise((resolve , reject) =>
    {
        setTimeout(() =>
        {
            alert("Your order is being packed ");
            resolve()
        })
    }, 8000)
}


const delivering = () =>
{
    return new Promise((resolve , reject) =>
    {
        setTimeout(() =>
        {
            alert("Your order is out for delivery");
            resolve()
        })
    }, 10000)
}


const delivered = () =>
{
    return new Promise((resolve , reject) =>
    {
        setTimeout(() =>
        {
            alert("Order delivered");
            resolve()
        })
    }, 12000)
}