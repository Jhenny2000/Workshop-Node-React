import { getToken } from './Auth_service'

const URL = 'http://localhost:3000/'

// endPoint = url completa  um recursos pois ele fala do link completo
// a variavel dados nao recebe dados então ele será vazio
export const doRequest = async (resource, method, dados = '', urlParam = '') => {
    const params = {
		method: method,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + getToken()
		},
    }
    //se tiver dados os parametros irão receber de dados, caso não tenha ficará em branco
    //se ele não for get e delete, ele então o coprco não virá com os dados
    if(!['GET','DELETE'].includes(method)) params.body = JSON.stringify(dados)
	return await fetch(URL + resource + urlParam, params)
    
}

export const doPublicRequest = async (resource, method, dados = '', urlParam = '') => {
	const params = {
		method: method,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
	}
	
	if(!['GET','DELETE'].includes(method)) 
		params.body = JSON.stringify(dados)
	return await fetch(URL + resource + urlParam, params)
}








// enviaDados = async (serie) => {
//     const params = {
//       method: method,
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         authorization: getToken() 
//       },
//       body: JSON.stringify(serie)
//     }
//     //não faremos distinção por id
//     // const urlParam = serie.id || ''
//     try {
//       const retorno = await fetch(URL + resource + urlParam, params)
      
      
//     } catch (erro) {
//       reject(erro)
//     }

//   }