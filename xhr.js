const requestURL1 = 'http://localhost:8081/api/employees/2'
const requestURL2 = 'https://jsonplaceholder.typicode.com/users'
const requestURL3 = 'http://localhost:8081/api/employees'
const GET_METHOD = 'GET'
const POST_METHOD = 'POST'
const RESPONSE_TYPE = 'json'


function sendRequest(method, url, body = null) {

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)

        xhr.responseType = RESPONSE_TYPE
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.onload = () => {
            if (xhr.status >= 400){
                reject(xhr.response)
            }else {
                resolve(xhr.response);
            }
        }

        xhr.onerror = () => {
            resolve(xhr.response)
        }

        xhr.send(JSON.stringify(body))
    })
}
//
// sendRequest(GET_METHOD, requestURL2)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


const body = {
    name: 'Vlad',
    age: 26
}
sendRequest(POST_METHOD, requestURL3, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))


