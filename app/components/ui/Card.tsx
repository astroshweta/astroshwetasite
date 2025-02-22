import CustomButton from "./CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";


type CardPropsType = {
    title: string,
    description: string,
    price: string,
    id: number,
    
}
const Card = ({ title, price, description,  }: CardPropsType) => {
    return (
        
            <div className="border border-border p-2.5 rounded-2xl m-2">
                <div className="border border-border rounded-md lg:px-12.5 px-6 py-12">
                    <h4 className="pb-6">{title}</h4>
                    
                    <p className="pb-10" dangerouslySetInnerHTML={{ __html: description }} />
                 
                    <h4 className="text-5xl text-primary">{price}</h4>
                </div>
                <div className="py-10 lg:px-12.5 px-6">
                   
                    <CustomButton>Book Now <FontAwesomeIcon icon={faAngleRight} fontSize={14} /></CustomButton>
                </div>
            </div>
        
    )
}

export default Card;