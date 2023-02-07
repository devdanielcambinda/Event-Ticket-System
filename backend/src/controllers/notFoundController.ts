import { RequestHandler, Request, Response } from "express";

export const getNotFound: RequestHandler = (req: Request,res: Response) => {
    res.status(404).send({message:'Route not found'})
}

export const postNotFound: RequestHandler = (req,res) => {
    res.status(404).send({message:'Route not found'})
}

export const patchNotFound: RequestHandler = (req,res) => {
    res.status(404).send({message:'Route not found'})
}

export const putNotFound: RequestHandler = (req,res) => {
    res.status(404).send({message:'Route not found'})
}

export const deleteNotFound: RequestHandler = (req,res) => {
    res.status(404).send({message:'Route not found'})
}