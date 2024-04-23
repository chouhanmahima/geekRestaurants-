import './LandingScreen.css'
import data from '../restaurantData.json'
import { useState } from 'react'
import RestaurantCard from '../components/RestaurantCard'

function LandingScreen(){
    
    const [restaurantData ,setRestaurantData] = useState(data.restaurantData);

    function filterRestaurantByName(e){
        const nameToFilterBy = e.target.value;

        const filterdArray = data.restaurantData.filter((elem)=>{
            if(elem.name.toLowerCase().includes(nameToFilterBy.toLowerCase())){
                return true;
            }
        })

        console.log("from filter by name",filterdArray);

        setRestaurantData(filterdArray);
    }

    function filterRestrauntByRating(e){
        const ratingToFilterBy = e.target.value;

        let filterdArray = data.restaurantData.filter((elem)=>{
            if(elem.rating == ratingToFilterBy){
                return true;
            }
        })

        if(ratingToFilterBy === ""){
            filterdArray = data.restaurantData;
        }

        setRestaurantData(filterdArray);
    }

    return(
        <>
            <main id='restaurants-container'>
                <div id='search-box'>
                    <input type='text' placeholder='Search restaurants' onChange={filterRestaurantByName} />
                    <label>Minimum rating: 
                    <input id="rating" type='number' placeholder='Enter rating' onChange={filterRestrauntByRating} />
                    </label>
                </div>
                <div id='restaurant-cards-container'>
                    {
                        restaurantData.map((elem)=>{
                            return(
                                <RestaurantCard key={elem._id.$oid} name = {elem.name} address = {elem.address} addressLineTwo = {elem.address_line_2} foodType = {elem.type_of_food} rating = {elem.rating} url = {elem.URL} />
                            )
                        })
                    }
                </div>
            </main>
        </>
    )
}

export default LandingScreen;