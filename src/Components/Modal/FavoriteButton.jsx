import React, { useEffect, useState } from 'react';
import {Button} from 'react-bootstrap';

const FavoriteButton = ({bivakzone})=>{
    const [favorite, setFavorite] = useState(`success`);
    const [store, setStore]= useState(localStorage.getItem('favourites'));
    console.log(store)

    useEffect(()=>{
        if(store){
            const storage = JSON.parse(localStorage['favourites']);
            const existed = storage.find((fav)=> fav.id === bivakzone.id);
            if (existed){
                setFavorite(`warning`);
             }}
    },[store])
    const handleClick=()=>{
        if(localStorage.getItem('favourites')){//If there are favourites
            const storage = JSON.parse(localStorage['favourites']);
            const existed = storage.find((fav)=> fav.id === bivakzone.id);
        if (existed){
            setFavorite(`warning`);
            const toRemove= storage.indexOf(existed);
            storage.splice(toRemove, 1);
            localStorage.setItem('favourites', JSON.stringify(storage))
            alert('bivakzone delted')
            setStore(storage)
         }else{
             storage.push(bivakzone)
             console.log('new bivakzone')
             localStorage.setItem('favourites', JSON.stringify(storage))
             alert('bivakzone added')
             setStore(storage)
         }
         }else{//No favourites in local storage, so add new
            const favArray= [];
            favArray.push(bivakzone);
            localStorage.setItem('favourites', JSON.stringify(favArray));
            console.log('favorite created and added');
        }
    }
 
    const handleFav=()=>{
      localStorage.clear()
    }

    return(
        <>
        <Button variant={favorite} onClick={handleClick}><i class='fas fa-star'></i></Button>
        <Button onClick={handleFav}>Remove favorite</Button>
        </>
    )

};

export default FavoriteButton;
  