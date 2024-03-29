import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AddVoiture from './AddVoiture';
import { deleteVoiture } from '../actions';
const LIstVoiture = () => {
    const Couleurs = useSelector((data)=>data.Couleurs)
    const voiture = useSelector((data)=>data.lvoiture)
    // const dispatch = useDispatch();
    const dispatch = useDispatch()
    const handelonclick = (id) => {
        // dispatch(deleteUserAction(id));
        dispatch(deleteVoiture(id));
    }
    return (
        <div>
            <p>
                <AddVoiture/>
            </p>
            <br/>
            <br/>
            <table className='table table-success table-striped container' border={1}>
                <thead>
                    <tr>
                        <td>Matricule</td>
                        <td>Marque</td>
                        <td>Modele</td>
                        <td>Couleur</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {voiture.map((voiture , index) =>{
                        const Couleur = Couleurs.find((v)=>v.id===parseInt(voiture.Couleur))
                        return(
                        <tr key={index}>
                            <td>{voiture.id}</td>
                            <td>{voiture.Marque}</td>
                            <td>{voiture.Modele}</td>
                            <td>{Couleur.nom}</td>
                            <td>
                                <Link to={`/update/${voiture.id}`}>
                                    <button className='btn btn-primary'>EDIT</button>=
                                </Link>
                                <button className='btn btn-secondary ' onClick={() => handelonclick(voiture.id)}>DELET</button>
                            </td>
                        </tr>
                    )
                    })}
                </tbody>
            </table>
        </div>
    );
}
export default LIstVoiture;
