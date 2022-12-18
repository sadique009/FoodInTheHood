import React, {useState, useContext, createContext, useEffect, useMemo} from"react";
import { LocationContext } from "../location/location.context";
import { restaurntsRequest, restaurantsTransform } from "./restaurants.service";

export const RestaurantsContext=createContext();

export const RestaurantsContextProvider=({children})=>{
    const [restaurants, setRestaurants]=useState([]);
    const [isLoading, setIsLoading]=useState(false);
    const [error, setError]=useState(null);
    const {location}=useContext(LocationContext);

    const retrieveRestaurants=(loc)=>{
        setIsLoading(true);
        setRestaurants([]);
        
        setTimeout(()=>{
            restaurntsRequest(loc)
            .then(restaurantsTransform)
            .then((results)=>{
                setIsLoading(false);
                setRestaurants(restaurants);
            })
            .catch((err)=>{
                setIsLoading(false);
                setError(err);
            });

        }, 2000)
    };

    useEffect(()=>{
        if(location){
        const locationString=`${location.lat},${location.lng}`;
        console.log(locationString);
        retrieveRestaurants(locationString);
        }
    },[location]);

    return(
        <RestaurantsContext.Provider
        value={{
            restaurants,
            isLoading,
            error,

        }}
        >{children}</RestaurantsContext.Provider>
    );
};