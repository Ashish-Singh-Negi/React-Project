import ButtonComponent from "./ButtonComponent";
import { useState } from "react";
import { service_details } from "./data";
export default function Services() {
    let [changetext, setValue] = useState('Web');
    function tabclicked(subject) {
        console.log("the button is clicked" + subject)
        setValue(subject);
        changetext = subject;
    }
    return (
        <div class="Services-container">
            <h1>Services</h1>
            <div class="button-container">
                <ButtonComponent command={() => tabclicked("Web")}>Web Dev</ButtonComponent>
                <ButtonComponent command={() => tabclicked("App")}>App Dev</ButtonComponent>
                <ButtonComponent command={() => tabclicked("Cpp")}> C++ </ButtonComponent>
                <ButtonComponent command={() => tabclicked("Python")}>Python</ButtonComponent>
            </div>
            <div class="services-display">
                <div class="service-data">
                    <div class="service-title">{service_details[changetext].title} </div>
                    <div class="service-duration">{service_details[changetext].duration} </div>

                    <div class="service-description">{service_details[changetext].description} 
                     </div>
                </div>
                <div class="service-image"><img src={service_details[changetext].image} alt="pic" class="service-image"></img></div>
            </div>
        </div>
    )
}