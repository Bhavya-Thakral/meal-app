import { createContext, useState } from "react";


export const FavoriteContext = createContext({
    ids:[],
    addFavorite:()=>{},
    removeFavorite:()=>{},
});

function FavoriteContextProvider({children}){

    const [favMealId,setFavMealId]=useState([]);

    function addFavorite(id){
        setFavMealId((currentIds)=>[...currentIds,id])
    }

    function removeFavorite(id){
        setFavMealId((currentIds)=>currentIds.filter((mealId)=> mealId!==id))
    }

    const value={
        ids:favMealId,
        addFavorite:addFavorite,
        removeFavorite:removeFavorite
    }

  return <FavoriteContext.Provider value={value} >{children}</FavoriteContext.Provider>

}

export default FavoriteContextProvider