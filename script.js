const link = 'https://randomuser.me/api'
function sendRequest(url){
    return fetch(url).then(resp => {
        if (!resp.ok) {
            throw Error(`is not ok: ` + resp.status);
        }
        return resp.json();
    }).catch((err) => {
            console.warn(err)
        })
}

const dataContainer = document.getElementById("data-container")
const imgContainer= document.getElementById("img-container")
const button= document.getElementById("change-user")

function showResults(data){
    console.log(data)

    let img = document.createElement('img');
    img.src = data['picture']['large']
    imgContainer.appendChild(img)

    let city = document.createElement('p');
    city.innerHTML = 'city' + ": " + data['location']['city'];
    dataContainer.appendChild(city)

    let name = document.createElement('p');
    name.innerHTML = 'name' + ": " + data['name']['title'] + " " +data['name']['first']+ " " +data['name']['last'];
    dataContainer.appendChild(name)

    let cell = document.createElement('p');
    cell.innerHTML = 'cell' + ": " + data['cell'];
    dataContainer.appendChild(cell)

    let phone = document.createElement('p');
    phone.innerHTML = 'phone' + ": " + data['phone'];
    dataContainer.appendChild(phone)

}
sendRequest(link).then(data => showResults(data['results'][0]))
button.addEventListener('click', ()=>{
    imgContainer.innerHTML = ''
    dataContainer.innerHTML = ''
    sendRequest(link).then(data => showResults(data['results'][0]))
})