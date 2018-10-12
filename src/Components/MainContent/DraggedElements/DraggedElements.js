import React, { Component } from 'react';
// import './App.css';
import {transport, economy, housing} from './InitialData';
import Column from './Column';
import {DragDropContext} from 'react-beautiful-dnd';
import styled from 'styled-components';


const Container = styled.div`
  display:flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

class App extends Component {
  state = {transport, economy, housing}
  onDragEnd = (result)=>{
    const { source, destination, draggableId} = result;
    if(!destination){
      return;
    }
    if(source.droppableId === destination.droppableId && source.index === destination.index){
      return;
    }
    console.log(source.droppableId);
    let category = null;
    let name = null;
    if(source.droppableId === "transport"){
        category = this.state.transport;
        name = 'transport';
    }
    else if (source.droppableId === "economy"){
        category = this.state.economy;
        name = 'economy';
    }
    else{
        category = this.state.housing;
        name = 'housing';
    }
    let a = {}
    let b = 5
    // a = {[name]:5}
    a[b] = 5
    console.log(a);
    const column = category.columns[source.droppableId];
    const newVariableIds = Array.from(column.variableIds);
    newVariableIds.splice(source.index,1);
    newVariableIds.splice(destination.index,0,draggableId);
    const newColumn = {...column ,variableIds:newVariableIds};
    let newState = {};
    newState = {
      //...this.state,
      [name] : {
        ...category,
        columns:{
            ...category.columns,
            [newColumn.id] : newColumn
        } 
        
      }
    };
    this.setState(newState);
    console.log(newState)

  }
  render() {
    return (
      <Container>
        <DragDropContext onDragEnd = {this.onDragEnd}>{
        this.state.transport.columnOrder.map(columnId =>{
          const column = this.state.transport.columns[columnId];
          const variables= column.variableIds.map(id =>this.state.transport.variables[id]);

          return <Column key = {column.id} column = {column} variables ={variables} />;
        })}
      </DragDropContext>
      
      <DragDropContext onDragEnd = {this.onDragEnd}>{
        this.state.economy.columnOrder.map(columnId =>{
          const column = this.state.economy.columns[columnId];
          const variables= column.variableIds.map(id =>this.state.economy.variables[id]);

          return <Column key = {column.id} column = {column} variables ={variables} />;
        })}
      </DragDropContext>
      
      <DragDropContext onDragEnd = {this.onDragEnd}>{
        this.state.housing.columnOrder.map(columnId =>{
          const column = this.state.housing.columns[columnId];
          const variables= column.variableIds.map(id =>this.state.housing.variables[id]);

          return <Column key = {column.id} column = {column} variables ={variables} />;
        })}
      </DragDropContext>
      </Container>
      
    );
  }
}

export default App;
