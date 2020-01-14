const url = "http://localhost:8900/topics";

export function topics(){
    const output = fetch(url, {method:"GET"})
        .then((res) => res.json())

    return{
        type: 'GET_TOPIC',
        payload: output
    }
}

export function posttopics(name,details){

    var random = Math.floor(Math.random()*1000);
    let data = {
        id:random,
        name:name,
        details:details
    }
  fetch(url, {
      method:"POST",
      headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
    .then((response) => response.json())

    return{
        type: 'GET_FORM',
        payload: 'output'
    }
}