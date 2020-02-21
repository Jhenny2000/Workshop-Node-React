import { doPublicRequest } from './baseapi'

const RESOURCE = 'auth/'

//nome das constantes devem ser maiusculas (aquelas q são chaves por exemplo)
const TOKEN_KEY = '@Series:token'

//cadastrando o ususario
export const signIn = async (usuario) => {
    try{
        //criando uma função de retorno q recebe a url cpmleta da autenticação + o metodo post e as informações do usuario
        const retorno = await doPublicRequest(RESOURCE + 'autenticar/', 'POST', usuario)

        if(retorno.ok)
            usuario = await retorno.json()
            //se conseguir autenticar ele vai para o local Storage
            localStorage.setItem(TOKEN_KEY, JSON.stringify(usuario))
            return retorno
// ele retorna o erro 
    }catch(erro){
        return erro
    }

}

export const signOut = () => {
    localStorage.removeItem(TOKEN_KEY)
}

export const isSignedIn = () => {
    const usuario = localStorage.getItem(TOKEN_KEY)
    return JSON.parse(usuario)
}


export const getToken = () => {
    const usuario = JSON.parse(localStorage.getItem(TOKEN_KEY))
    return usuario.token
}