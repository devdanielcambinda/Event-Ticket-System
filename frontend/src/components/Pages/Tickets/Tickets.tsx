import React from "react";
import { TicketCard } from "./TicketCard";

export const Tickets: React.FC = () => {
    return (
    <>
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container py-5">
                <h1 className="display-5 fw-bold">Tickets</h1>
                <p className="col-md-8 fs-4">Here you can find the available for each event.</p>
            </div>
        </div>
        
        <div className="album py-5 bg-light text-center">
            <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <TicketCard title="teste" description="testing ticket" price={19} key={1} id={1}/>
                <TicketCard title="teste" description="testing vip ticket" price={98} key={2} id={2}/>
                <TicketCard title="teste" description="testing ultra vip" price={1998} key={3} id={3}/>
                <TicketCard title="teste" description="testing god ticket" price={0} key={4} id={4}/>
            </div>
            </div>
        </div> 

    </>
    )
}