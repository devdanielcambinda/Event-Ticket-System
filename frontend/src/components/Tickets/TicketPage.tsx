import React from "react";
import { useParams, Params } from "react-router-dom";

export const TicketPage: React.FC = () => {

    const { id } = useParams<Params>();

    return <h1>Hello from ticket number {id} </h1>
}