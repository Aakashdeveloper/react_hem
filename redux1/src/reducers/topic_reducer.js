export default function(state={}, actions){
    switch(actions.type){
        case 'GET_TOPIC':
            return {...state, tdata:actions.payload}
        default:
            return state
    }
}