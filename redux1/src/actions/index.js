const url = "http://localhost:8900/topics";

export function topics(){
    const output = fetch(url, {method:"GET"})
        .then((res) => res.json())

    return{
        type: 'GET_TOPIC',
        payload: output
    }
}