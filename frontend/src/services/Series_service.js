import { doRequest } from './baseapi'

const RESOURCE = 'series/'

export const listar = () => {
    return doRequest(RESOURCE, 'GET')
}

export const inserir = (serie) => {
    return doRequest(RESOURCE, 'POST', serie)
}

export const remove = (id) => {
    return doRequest(RESOURCE, 'DELETE', id)
}

export const atualizar = (serie) => {
    return doRequest(RESOURCE, 'PUT', serie, serie.id)
}