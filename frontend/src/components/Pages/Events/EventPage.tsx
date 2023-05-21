import React from "react";
import { useParams, Params } from "react-router-dom";

export const EventPage: React.FC = () => {

    const { id } = useParams<Params>();

    return <h1>Hello from event number {id} </h1>
}