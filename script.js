let url = "http://ip-api.com/json/";
let drawn = false;

setInterval(() => {
    get();
}, 1000);
get();

async function get() {
    await fetch(url)
        .then(response => response.text())
        .then((textResponse) => {
            let json2 = JSON.parse(textResponse);
            let ip = json2.query;
            let city = json2.city;
            let country = json2.country;
            let region = json2.regionName;
            let element = document.body;
            create(ip, city, country, region, element, drawn);
        })
}

function create(ip, city, country, region, element, drawn) {
        element.innerHTML = "";
        element.innerHTML = "your ip: " + ip + "<br>" +
        element.innerHTML + "your country: " + country + "<br>" +
        element.innerHTML + "your region: " + region + "<br>"+
        element.innerHTML + "your city: " + city + "<br>";
}

let myPromise = new Promise(function(myResolve, myReject) {
    myResolve();
    myReject();
});

myPromise.then(
    function(value) { console.log('Promise works perfectly') },
    function(error) { console.log('Promise does not works') }
);