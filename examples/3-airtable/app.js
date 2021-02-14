const result = document.querySelector('.result')

const fetchData = async () => {
    
    try {
      const {data} = await axios.get('/api/airtable');  
      console.log(data);

      html = data.map((product) => {
       const {id, name, price, imageUrl} = product;
       return `<a href="product.html?id=${id}" class="product">
                <img src="${imageUrl}" alt="${name}" />
                <div class="info">
                    <h5>${name}</h5>
                    <h5 class="price">$${price}</h5>
                </div>
               </a>`
      })

      result.innerHTML = html.join("");
    } catch (error) {
        result.innerHTML = '<h4>Threre was an error</h4>'
    } 

}

fetchData()