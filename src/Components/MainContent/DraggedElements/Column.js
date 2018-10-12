import React from 'react';
import styled from 'styled-components';
import CensusVariable from './CensusVariable';
import {Droppable} from 'react-beautiful-dnd';

const Container = styled.div`

    margin:8px;
    border: 1px solid lightgrey;
    border-radius : 2px;
    width: 150px;
    display: block;
    
    
`;
const Title = styled.h3`
    padding: 0px;
`;
const VariableList = styled.div`
    padding: 8px;
    transition : background-color 0.2s ease;
    background-color: ${props => props.isDraggingOver ? 'green' :'white'};
    
`;

export default class Column extends React.Component{
    render(){
        return (
            
                <Container>
                    <Title>{this.props.column.title}</Title>
                    <Droppable droppableId = {this.props.column.id}>
                        {
                            (provided,snapshot) =>(
                                <VariableList
                                    innerRef = {provided.innerRef}
                                    {...provided.droppableProps}
                                    isDraggingOver = {snapshot.isDraggingOver}
                                >
                                    {this.props.variables.map((variable,index)=><CensusVariable key = {variable.id} variable = {variable} index = {index}/>)}
                                    {provided.placeholder}
                                </VariableList>
                            )
                        }
                        
                    </Droppable>
                    
                </Container>
        );
    }
}