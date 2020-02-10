import React, { useEffect, useState } from 'react';
import {Button} from 'react-bootstrap';
let existed;
const FavoriteButton = ({bivakzone})=>{
    
    const [store, setStore]= useState([]);
    
    useEffect(()=>{
        if(localStorage.getItem('favourites')){
            const storage = JSON.parse(localStorage['favourites']);
             existed = storage.find((fav)=> fav.id === bivakzone.id);
             
           }
         }
         )
    const handleClick=()=>{
        if(localStorage.getItem('favourites')){//If there are favourites
            const storage = JSON.parse(localStorage['favourites']);
            
            //  existed = storage.find((fav)=> fav.id === bivakzone.id);
        if (existed){
            const toRemove= storage.indexOf(existed);
            storage.splice(toRemove, 1);
            localStorage.setItem('favourites', JSON.stringify(storage))
            setStore(storage)
           
         }else{
             storage.push(bivakzone)
             console.log('new bivakzone')
             localStorage.setItem('favourites', JSON.stringify(storage))
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
        {console.log(existed)}
        <Button variant={existed ? "warning":"success"} onClick={handleClick}><i className='fas fa-star'></i></Button>
        <Button onClick={handleFav}>Remove favorite</Button>
        </>
    )

};

export default FavoriteButton;
  