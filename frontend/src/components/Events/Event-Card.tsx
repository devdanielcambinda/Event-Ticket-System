import React from "react";
import { Link } from "react-router-dom";

interface Props {
    title: string;
    description: string;
    date: string;
    id:number;
}

export const EventCard: React.FC<Props> = ({title,description,date,id}: Props) => {
    return (
    <div className="col">
        <div className="card shadow-sm">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{description}</p>
                <p className="card-text"> Date: {date} </p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                    <Link to={`/events/${id}`}type="button" className="btn btn-md btn-outline-secondary" >View event</Link>
                    </div>
                    <small className="text-muted">9 mins</small>
                </div>
            </div>
        </div>
    </div>)
}
