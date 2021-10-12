window.addEventListener("DOMContentLoaded", () => {

    function req() {
        const request = new XMLHttpRequest();
        request.open("GET", "http://locxalhost:8081/api/employees");
        request.setRequestHeader("Content-type", "application/json; charset=utf-8");
        request.send();
        request.addEventListener("load", function () {
            if (request.status === 200) {
                let data = JSON.parse(request.response);
                console.log(data);
            } else {
                console.error("Something went wrong")
            }
        })
    }

    req();
})