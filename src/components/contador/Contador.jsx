import React, {Component} from 'react';
import './Contador.css'
class Contador extends Component{

    state = {
        numero : this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 0

    }

    // constructor(props){
    //     super(props)

    //     this.inc = this.inc.bind(this)
    // }

    //Usando Arrow Fuction é mais simples para altera o estado do componente
    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        });    
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        });
    }

    setPasso = (evento) => {
        this.setState({
            passo: +evento.target.value,
        });
    };

    render() {
        return (
             <div className='Contador' >
                 <h2>Contador</h2>
                 <h1>{this.state.numero}</h1>
                 <div>
                     <label htmlFor="passoInput">Passo Inicial: </label>
                     <input id='passoInput' type='number' value={this.state.passo} onChange={this.setPasso} ></input>
                 </div>
                 <button onClick={this.inc}>+</button>
                 <button onClick={this.dec}>-</button>
             </div>
        );
    }

}

export default Contador