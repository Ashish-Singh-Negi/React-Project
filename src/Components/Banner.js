import Card from "./Card";
import { card_details } from "./data";
import Services from '../Components/Services';


export default function Banner() {
    return (
        <div class="header">
            {card_details.map((card_info,index) =><Card key={index} {...card_info}/> )}
            
            <div class="main-container">
            <Services/>
            </div>
     
        </div>
    )
}