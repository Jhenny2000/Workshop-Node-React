import React, { Component } from 'react';
import TabelaSeries from './Tabela_series';
import FormularioSeries from './Formulario_series';
import { getToken } from '../../services/Auth_service'
import { listar, inserir, atualizar, remove } from '../../services/Series_service'

class BoxSeries extends Component {

    //construtor
    constructor(){
        super()
        this.state = {
            series: []
        }
    }

  async componentDidMount(){
    try{
      const resposta = await listar()
      const series = await resposta.json()
      // console.log(series)
      this.setState({series: series})
    }catch(error){
      console.log(error)
    }
    
    //TESTE
    // console.log('Já estou pronto')
    // //sempre que a gente altera o estado, o react irá chamar o render, assim renderizando a página
    // this.setState({lista: [{nome: 'rei leão', lancamento: '1998'}]})
  }

  enviaDados = async (serie) => {
    try {
      let retorno = ''
      // se ele tiver um id ele vai atualizar e se não uma serie sera cadastrada
      if(serie.id) retorno = await atualizar(serie)
      else retorno = await inserir(serie)
      if (retorno.status === 201) {
        return this.setState({
          series: [...this.state.series, serie],
          serie: this.novaSerie
        })
      }
      if (retorno.status === 200) {
        this.setState({
          series: this.state.series.map(s => s.id == serie.id ? serie : s),
          serie: this.novaSerie
        })
      }

    } catch (erro) {
      console.log(erro)
    }

  }


  deleta = async (id) => {
    const seriesAtual = this.state.series
    const retorno = await remove(id)
    if (retorno.status === 204) {
      this.setState({
        series: seriesAtual.filter((serie) => {
          return serie.id !== id
        })
      })
    }
  }
    
    render() {
        return (
            //container-fluid - ele deixa o conteudo de adaptar ao tamnho da tela do navegador
            <div className="container"> 
                <div className="row">
                    {/* colocando uma tabela com 4 colunas */}
                    <div className="col-md-4">
                        <FormularioSeries enviaDados={this.enviaDados}/>
                    </div>
                    <div className="col-md-8">
                        <TabelaSeries series={this.state.series} deleta={this.deleta}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default BoxSeries;