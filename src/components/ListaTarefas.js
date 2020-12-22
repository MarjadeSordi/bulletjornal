import React, { Component } from 'react';
import './ListaTarefas.css';

// Obtém a data/hora atual
var data = new Date();

// Guarda cada pedaço em uma variável
var dia     = data.getDate();           // 1-31
var mes     = data.getMonth();          // 0-11 (zero=janeiro)
var ano4    = data.getFullYear();

var str_data = dia + '/' + (mes+1) + '/' + ano4;



export default class ListaTarefas extends Component {    

    constructor(props){
        super(props);
        this.state = {
            newItem: ' ',
            list:[],

        }
    

    }


    updateInput(key, value){
        //adiciona um novo status
        this.setState({
            [key]: value
        })
    }
    addItem() {
        //criando uma item com id único
        const newItem ={
            id: 1 + Math.random(),
            value: this.state.newItem.slice()
        };

        //cópia da lista de itens
        const list = [...this.state.list];

        //adicionar um item a lista
        list.push(newItem);

        //adiciona um novo status para a lista e reseta o input

        this.setState({
            list,
            newItem:"",
        });

        }
    deleteItem(id){
        //copiar novamente a lista de itens 
        const list = [...this.state.list];

        //procura o item que vai ser deletado
        const updateList = list.filter(item => item.id !== id )

        //atualiza o status novamente
        this.setState({list : updateList});
    }
    
    render() {
        return (
         <div className="listadetarefas"> 
          <h1 className="Titulolista">~ Bullet Journal~ </h1>
          <br/>
          <h2 className="Subtitulolista"> Para notas, lembretes e tarefas </h2>  
          <h3 className='Data'> Hoje é {str_data} </h3>
          <textarea className='LinhaTarefa' type='text' cols='50' rows='5' placeholder="Lembretes e tarefas para hoje" value={this.state.newItem}
          onChange={e=> this.updateInput("newItem", e.target.value)} />
          <br></br>
          <button className='BotaoAdiciona' onClick= {() => this.addItem()}>
          Adicionar </button>
          <br/>
          <ul className='ListaOutput'>
              {this.state.list.map(item => {
                return(
                    <li  key = {item.id} >
                        {item.value} 
                        <button className='BotaoDelete'
                        onClick={() => this.deleteItem(item.id)}
                        >X
                        </button></li>
                )} )}
          </ul>
          </div>
        );
    }

}

