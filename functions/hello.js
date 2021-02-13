// domain/.netlify/functions/hello

const person = {
    name: 'john',
}

exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: 'First Netlify Example asdf',
    }
    // cb(null, {
    //     statusCode:200,
    //     body:'Hello world!'
    // })
}

