import React, { useEffect, useState } from 'react';
import {Button} from 'react-bootstrap';

const FavoriteButton = ({bivakzone,refresh})=>{
    
    
    const initialValue=()=> JSON.parse(localStorage.getItem('favourites'));
    console.log(initialValue())
    const [store, setStore]= useState(initialValue);
    console.log(store)
    let exist
      if (store){
           exist = store.find((fav)=> fav.id === bivakzone.id);
      }
    

    useEffect(()=>{
            
           // 
            
              localStorage.setItem('favourites',JSON.stringify(store) ) 
             
    }, [store])
    const handleClick=()=>{
        if(typeof localStorage.getItem('favourites')){//If there are favourites
            const storage = JSON.parse(localStorage['favourites']);
            const existed = storage.find((fav)=> fav.id === bivakzone.id);
        if (existed){
            const toRemove= storage.indexOf(existed);
            storage.splice(toRemove, 1);
            localStorage.setItem('favourites', JSON.stringify(storage));
            setStore(storage);
            refresh(store);
         }else{
             storage.push(bivakzone);
             console.log('new bivakzone');
             localStorage.setItem('favourites', JSON.stringify(storage));
             setStore(storage);
             refresh(store)
         }
         }else{//No favourites in local storage, so add new
            const favArray= [];
            favArray.push(bivakzone);
            localStorage.setItem('favourites', JSON.stringify(favArray));
            console.log('favorite created and added');
            refresh(store)
        }
    }
 
    const handleFav=()=>{
        const defaultArr = [{

            
    "type": "Feature",
    "properties": {
    },
    "geometry": {
      "type":"",
      "coordinates": [
        [
          
        ]
      ]
    },
    "id": ""
        }];
      localStorage.setItem('favourites', JSON.stringify(defaultArr) )
      refresh(store)
    }

    return(
        <>
        <Button variant={exist ? "warning":"success"} onClick={handleClick}><i class='fas fa-star'></i></Button>
        <Button onClick={handleFav}>Remove favorite</Button>
        </>
    )

};

export default FavoriteButton;
  