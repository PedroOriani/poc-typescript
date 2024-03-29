import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status"
import { Error } from "protocols/protocols";

export default function errorHandler (error: Error, req: Request, res: Response, next: NextFunction){
    console.log(error)

    if (error.type === "notFound"){
        return res.status(httpStatus.NOT_FOUND).send(error.message)
    }

    if (error.type === "conflict"){
        return res.status(httpStatus.CONFLICT).send(error.message)
    }

    if (error.type === "incompleteData") {
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
    }

    if (error.type === "unprocessableEntity"){
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
    }

    if (error.type === "badRequest"){
        return res.status(httpStatus.BAD_REQUEST).send(error.message);
    }

    if (error.type === "internalServerError"){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
    }

    res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Sorry, something went wrong 😢");
}