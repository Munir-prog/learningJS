const requestURL1 = 'http://localhost:8081/api/employees/2'
const requestURL2 = 'https://jsonplaceholder.typicode.com/users'
const requestURL3 = 'http://localhost:8081/api/employees'
const GET_METHOD = 'GET'
const POST_METHOD = 'POST'
const RESPONSE_TYPE = 'json'


function sendRequest(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    }
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        return response.json()
    })
}

// sendRequest(GET_METHOD, requestURL2)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


const body = {
    name: 'Vlad',
    age: 26
}
sendRequest(POST_METHOD, requestURL2, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))


