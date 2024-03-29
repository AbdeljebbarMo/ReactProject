const initailState ={
    Couleurs:[ 
        {id:1, nom:"Noir"}, 
        {id:2, nom:"Blue"}, 
        {id:3, nom:"Rouge"}, 
        {id:4, nom:"Blanc"}, 
        {id:5, nom:"Rouge"}, 
    ],
    lvoiture :[
        
        {id : 1, Marque : 'Mercedes', Modele :'G64', Couleur :1},                       
        {id : 2, Marque : 'Renault', Modele :"Clio", Couleur :2},                       
        {id : 3, Marque : 'Dacia', Modele :'Logan', Couleur :3}, 
        {id : 4, Marque : 'Peugeot', Modele :"301", Couleur :4}
    ]
}


const reducer =(state=initailState,action)=>{
    switch(action.type){
        case 'ADD_VOITURE':
            return{
                ...state,
                lvoiture :[...state.lvoiture,action.payload]
            }
        case 'UPDATE_VOITURE':
            const voiture = state.lvoiture.find((u)=>u.id===parseInt(action.payload.id))
            if(voiture){
                voiture.Marque= action.payload.Marque 
                voiture.Modele= action.payload.Modele
                voiture.Couleur= parseInt( action.payload.Couleur )
            }
            return state 
        case 'DELETE_VOITURE':
            return {
                ...state , 
                lvoiture:[...state.lvoiture.filter((u)=>u.id!==parseInt(action.payload))]
            }
            default :
            return state 

            
    }
}
export default reducer ;