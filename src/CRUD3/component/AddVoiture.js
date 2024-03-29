import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addVoiture } from '../actions'
const AddVoiture = () => {
    const Couleurs = useSelector(data=>data.Couleurs);
    const dataV = useSelector((data) => data.lvoiture.length)
    const [voiture, setVoiture] = useState({
        Marque: '',
        Modele: '',
        Couleur: ''
    })
    const dispatch = useDispatch()
    const handelchange = (e) => {
        setVoiture({ ...voiture, [e.target.name]: e.target.value })
    }

    const handelClick = (e) => {
        e.preventDefault()
        if (!voiture.Marque) {
            alert("Marque cannot be empty");
            return;
        }
        if (!voiture.Modele) {
            alert("Modele cannot be empty");
            return;
        }
        if (!voiture.Couleur) {
            alert("Couleur cannot be empty");
            return;
        }
        dispatch((addVoiture({
            id: dataV + 1,
            Marque: voiture.Marque,
            Modele: voiture.Modele,
            Couleur: voiture.Couleur
        })))
    }
    return (
        <div className='container'>
            <form className='row '>
                <div>
                    <label htmlFor="">Marque</label>
                    <input className='form-control' placeholder='Marque'
                        name='Marque'
                        value={voiture.Marque}
                        onChange={handelchange}
                        type="text" />



                    <label htmlFor="">Modele</label>
                    <input className='form-control' placeholder='Modele'
                    name='Modele' 
                    value={voiture.Modele} 
                    onChange={handelchange} 
                    type="text" />



                <label htmlFor="">Couleur</label>
                <select
                        value={voiture.Couleur}
                        onChange={handelchange}
                        name="Couleur"
                        className="form-control"
                    >
                        <option value="">Select Couleurs</option>
                        {Couleurs.map((model) => (
                            <option key={model.id} value={model.id}>
                                {model.nom}
                            </option>
                        ))}
                    </select>

                    {/* <label htmlFor="">Couleur</label>
                    <input className='form-control' placeholder='Couleur'
                        name='Couleur'
                        value={voiture.Couleur}
                        onChange={handelchange}
                        type="text" /> */}
                    <br />

                </div>
                <button className='btn btn-outline-warning' onClick={handelClick}>Engistrer</button>
            </form>
        </div>
    );
}

export default AddVoiture;
