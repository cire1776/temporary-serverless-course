const url = '/api/hello'
const result = document.querySelector('.result');

const fetchData = async () => {
    try {
        const {data} = await axios.get(url)
        result.textContent = data;
    } catch (error) {
        console.log(error.response);
    }
}

fetchData();