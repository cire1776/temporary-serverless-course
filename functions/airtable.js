require('dotenv').config();
const Airtable = require('airtable-node');

const airtable = new Airtable({apiKey: process.env.AIRTABLE_API_KEY})
    .base('appUreaje3Uqt5867')
    .table('products')

exports.handler = async (event, context) => {
    const {id} = event.queryStringParameters;
    try {
        if (id) {
            const record = await airtable.retrieve(id);

            if (record.error) {
                return {
                    statusCode: 404,
                    body: `Product ${id} not found`
                }
            }

            const product = {
                id: record.id,
                ...record.fields,
                imageUrl: record.fields.image[0].url,
            }
            delete product.image;

            return {
                statusCode: 200,
                body: JSON.stringify(product),
            }
        } else {
            const {records} = await airtable.list();
    
            const products = records.map((product) => {
                const {name, description, image, price} = product.fields;
                const imageUrl = image[0].url;
                const {id} = product;
                return { id, name, imageUrl, price };
            })
    
            return {
                statusCode: 200,
                body: JSON.stringify(products),
            }            
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: `An error occurred.  Please try again later. ${error}`
        }
    }

}