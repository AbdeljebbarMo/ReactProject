export const addVoiture=(voiture)=>{
    return{
    type : 'ADD_VOITURE',
    payload : voiture 
    }
}

export const updateVoiture=(newvoiture)=>{
    return{
        type : 'UPDATE_VOITURE',
        payload : newvoiture 
    }
}

export const deleteVoiture=(id)=>{
    return{
        type : 'DELETE_VOITURE',
        payload :id
    }
}

