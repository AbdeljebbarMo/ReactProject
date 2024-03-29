import React, { useState } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { updateVoiture } from './actions';
import { useNavigate, useParams } from 'react-router';
const UpdateVoiture = () => {
    const {id}=useParams()
    const Couleurs = useSelector((data)=>data.Couleurs)
    const voit = useSelector((data)=>data.lvoiture.find(u=>u.id===parseInt(id)))
    const dispatch= useDispatch()
    const navigator = useNavigate()
    const [uvoiture , setUvoiture]=useState({
        Marque :voit.Marque,
        Modele: voit.Modele,
        Couleur:  voit.Couleur
    })
const handelchange=(e)=>{
    setUvoiture({...uvoiture,[e.target.name]:e.target.value})
}
const handelsubmit=()=>{
    dispatch(updateVoiture({
        id:id,
        Marque :uvoiture.Marque ,
        Modele :uvoiture.Modele ,
        Couleur :uvoiture.Couleur 
    }))
    navigator('/')
}
    return (
        <div>
            <form onSubmit={handelsubmit}>

            <label  htmlFor="">Marque : </label>
                <input 
                name='Marque' 
                value={uvoiture.Marque} 
                onChange={handelchange} 
                type="text" />
                    <br/>
                    <br/>
            <label htmlFor="">Modele : </label>
                <input
                name='Modele' 
                value={uvoiture.Modele} 
                onChange={handelchange} 
                type="text" />
            {/* <label htmlFor="">Couleur</label>
                <input name='Couleur' value={Couleurs.name} onChange={handelchange} type="text" /> */}
                    <br/>
                    <br/>

            <label htmlFor="">Couleur : </label>
             <select     
                    value={uvoiture.Couleur}
                    onChange={handelchange}
                    name="Couleur"
                    >
                        <option value="">Select Couleurs</option>
                        {Couleurs.map((model) => (
                            <option key={model.id} value={model.id}>
                                {model.nom}
                            </option>
                        ))}
                    </select>
                    <br/>
                    <br/>
            <button className='btn btn-outline-info'>Engistrer</button>
            </form>
        </div>
    );
}

export default UpdateVoiture;
