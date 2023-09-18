export function badRequest (resource){
    return {
        type: "badRequest",
        message: `${resource}`
    }
}

export function conflictError (resource){
    return {
        type: "conflict",
        message: `${resource} ja existe`
    }
}

export function differentCities (resource){
    return {
        type: "conflict",
        message: `Origem e Destino devem ser diferentes`
    }
}

export function incompleteDataError() {
    return {
        type: "incompleteData",
        message: `Preencha todos os dados!`
    }
}

export function notFoundError (resource) {
    return {
        type: "notFound",
        message: `${resource} não encontrado(a)`
    }
}

export function tooManyResultsError (){
    return {
        type: "internalServerError",
        message: `Too Many Results`
    }
}

export function unprocessableEntityError (resource){
    return {
        type: "unprocessableEntity",
        message: `${resource}`
    }
}