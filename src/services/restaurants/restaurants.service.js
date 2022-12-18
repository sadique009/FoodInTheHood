import {mocks, mockImages} from "./mock";
import camelize from "camelize";

export const restaurntsRequest=(location="51.2145994302915, 4.418074130291502")=>{
return new promise((resolve, reject)=>{
    const mock=mocks[location];
    if(!mock){
        reject("not found");
    }
    resolve(mock);
});
};

export const restaurantsTransform=({results=[]})=>{
    const mappedResults=results.map((restaurant)=>{
        restaurant.photos=restaurant.photos.map((p)=>{
            return mockImages[Math.ceil(Math.random()*(mockImages.length-1))]
        });
        return{
            ...restaurant,
            address:restaurant.vicinity,
            isOpenNow:restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily:restaurant.business_status==="CLOSED_TEMPORARILY",
        };
    });

    return camelize(mappedResults);
};
