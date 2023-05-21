import React from "react";
import { Link } from "react-router-dom";

interface Props {
    title: string;
    description: string;
    price: number;
    id:number;
}

export const TicketCard: React.FC<Props> = ({title,description,price,id}: Props) => {
    return (
    <div className="col">
        <div className="card shadow-sm">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{description}</p>
                <p className="card-text"> Price: {price} </p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <Link to={``} type="button" className="btn btn-md btn-outline-secondary" >Buy ticket</Link>
                    </div>
                    <small className="text-muted"> Event date: 21/08/2023</small>
                </div>
            </div>
        </div>
    </div>)
}
