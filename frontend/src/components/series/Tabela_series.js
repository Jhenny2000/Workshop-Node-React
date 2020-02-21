import React, { Component } from 'react';
import './Tabela_series.css'
import PubSub from 'pubsub-js'

// const TabelaHead = () => {
//     return (
//         <thead className="thead-dark">
//             <tr>
//                 <th>Nome</th>
//                 <th>Lançamento</th>
//                 <th>Temporadas</th>
//                 <th>Sinopse</th>
//             </tr>
//         </thead>
//     )
// }

const ListaSeries = (props) => {

    if(props.series.erro){
		return <h1>{props.series.erro}</h1>
	}

    return (
        <div className='card-body card-body-flex'>
            {props.series.map(serie => {
                return(
                    <div className='card card-serie'  key={serie.id}>
                        <div className='card-header'>
                            <h5 className="card-title">{serie.nome}</h5>
							<h6 className="card-title text-muted mb-0">
			                    {serie.lancamento}
							</h6>
                        </div>
                        <div className='card-body'>
                            <img src='/logo192.png' className="card-img"/>
                        </div>
                        <div className='card-footer'>
                            {serie.temporadas} 
							{serie.temporadas > 1 ? ' temporadas' : ' temporada'}
							<br />
							<a href="#"
								data-toggle="modal"
								data-target="#exampleModalCenter"
								onClick={() => {
									PubSub.publish('detail', serie)
								}}
							>Ver mais...</a> <br/> <br/>
                            <div className="text-center mt-1">
                                <button className="btn btn-outline-danger btn-sm mr-2 p-1" onClick={ () => {
                                    if(window.confirm('Confirma a exclusão?'))
                                    props.deleta(serie.id)
                                }}>Deleta</button>
                                <button className="btn btn-outline-warning btn-sm p-1"
                                    onClick={() =>{
                                        PubSub.publish('editing', serie)
                                    }}>
                                    Editar
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })} 
        </div>     
    )
}

class TabelaSeries extends Component {

    constructor(){
        super()
        this.state = {
            serieDetalhe: ''
        }
        PubSub.subscribe('detail', (msg, serie) => {
            this.setState({serieDetalhe: serie})
        })
    }

    render() {

        const serieDetalhe = this.state.serieDetalhe

        const { series, deleta } = this.props

        return(
            //text-white bg-dark - deixa o texto branco e a tabela dark
            <div className="card ">
                <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
					<div className="modal-dialog modal-dialog-centered" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" 
									id="exampleModalLongTitle">
										{serieDetalhe.nome}
								</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<img src='/logo192.png' className='card-img'/>
								{serieDetalhe.temporadas}
								{serieDetalhe.temporadas > 1 ? ' temporadas': ' temporada'}
								<br />
								{serieDetalhe.ano_lancamento}
      						</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
							</div>
						</div>
					</div>
				</div>
				<div className="card-header ">
					<h5 className="text-center">Lista de Series</h5>
				</div>

				<ListaSeries series={series} deleta={deleta} />
            </div>
        )
    }
}
export default TabelaSeries;


{/* <div className='card-header'>
                    <h5 className="text-center">Lista de Series</h5>
                </div>
                <ListaSeries series={series} deleta={deleta}/> */}


// <tr key={serie.id}>
{/* <td>{serie.nome}</td>
<td>{serie.lancamento}</td>
<td>{serie.temporadas}</td>
<td>{serie.sinopse}</td>
</tr> */}