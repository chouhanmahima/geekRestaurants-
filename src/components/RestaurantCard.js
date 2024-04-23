import './RestaurantCard.css'
import { FaStar } from "react-icons/fa";
import { PiForkKnifeFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";

function RestaurantCard({ name, address, addressLineTwo, foodType, rating, url }) {
    return (
        <div className='card-container'>
            <div className='name-and-rating padding'>
                <h3>{name}</h3>
                <p>Rating : {rating}
                    <FaStar style={{ color: "#fad25a" }} />
                </p>
            </div>
            <div className='address padding'>
                <p><FaLocationDot /> {address}</p>
                <p>{addressLineTwo}</p>
            </div>
            <div className='food-type-and-url padding'>

                <p ><PiForkKnifeFill />{foodType}</p>
                <a href={url}>Visit menu</a>

            </div>
        </div>
    )
}

export default RestaurantCard;