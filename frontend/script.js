document.getElementById('DeleteForm').addEventListener('submit', DeleteData)

function DeleteData(e){
    e.preventDefault()
    let name = document.getElementById('dname').value;
        console.log(name)

       fetch(`http://localhost:5000/deleteData/${name}`, {
        method : 'DELETE',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            'name' : name,
        })
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
      console.log("last")

}

document.getElementById('Updated').addEventListener('submit', UpdateData)
console.log(document.getElementById('Updated'))


function  UpdateData(e){
e.preventDefault()

    let uname = document.getElementById('uname').value;
        console.log(uname)
    let tname = document.getElementById('tname').value;
        console.log(tname)

       fetch(`http://localhost:5000/update/${uname}/${tname}`, {
        method : 'PUT',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            'name' : uname,
        })
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
      console.log("last")

}






document.getElementById('formData').addEventListener('submit', retrieveName)

function retrieveName (e) {
    e.preventDefault()

    let name = document.getElementById('name').value

    fetch(`http://localhost:5000/${name}`)
    .then((res)=> res.json())
    .then((data)=>{
        name = data.name ?? "";
        genre = data.genre?? "";
        game  = data.game ?? "";
//        console.log(name)
        document.getElementById('output').innerHTML = `<li class="list-group-item mx-auto shadow p-3 mb-5 bg-white rounded text-center" style="width: 200px;">Name : ${name}</li>
        <li class="list-group-item mx-auto shadow p-3 mb-5 bg-white rounded text-center" style="width: 200px;">Genre : ${genre}</li>
         <li class="list-group-item mx-auto  shadow p-3 mb-5 bg-white rounded text-center" style="width: 200px;">Game : ${game}</li>`

    })
}

document.getElementById('postData').addEventListener('submit', postData)
function postData (e) {
    e.preventDefault()

    let name = document.getElementById('postName').value
    let genre = document.getElementById('postGenre').value
    let game = document.getElementById('postGame').value

    fetch('http://localhost:5000/postData', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            'name' : name,
            'genre' : genre,
            'game' : game
        })
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
}