import React from "react";
import { EventCard } from "./Event-Card";

export const Events: React.FC = () => {
    return (
    <>  
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container py-5">
                <h1 className="display-5 fw-bold">Events</h1>
                <p className="col-md-8 fs-4">Here you can find the available events.</p>
            </div>
        </div>


        <div className="album py-5 bg-light text-center">
            <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <EventCard title="teste" description="testing card" date="21/08/1998"/>
                <EventCard title="teste" description="testing card" date="21/08/1998"/>
                <EventCard title="teste" description="testing card" date="21/08/1998"/>
                <EventCard title="teste" description="testing card" date="21/08/1998"/>
            </div>
            </div>
        </div>    
        
    </>  
    )
}