const result = document.querySelector('.result');

const id = window.location.search;

const url = `/api/airtable${id}`;

const fetchProduct = async () => {
    try {
        result.innerHTML = "<h1>Loading...</h1>";

        const product = await axios.get(url);
        const {name, description, price, imageUrl} = product.data;

        const html = 
            `<h1 class="title">Product Details</h1>
            <article class="product">
                <img class="product-img"
                src="${imageUrl}"
                alt="${name}"
                />
                <div class="product-info">
                <h5 class="title">${name}</h5>
                <h5 class="price">${price}</h5>
                <p class="desc">${description}</p>
                </div>
            </article>`
        result.innerHTML = html;
    } catch (error) {
        result.innerHTML = `<h2>${error.response.data}</h2>`
        console.log(error);
    }
}


fetchProduct()