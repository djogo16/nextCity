import React from 'react';
import styled from 'styled-components'
import {Draggable} from 'react-beautiful-dnd';
const Container = styled.div`
    border : 1px solid lightgrey;
    border-radius: 2px;
    padding : 8px;
    margin-bottom : 8px;
    background-color: ${props => props.isDragging ? 'skyblue' :'white'}
`;
export default class CensusVariable extends React.Component{
    
    render(){
        return(
            <Draggable draggableId = {this.props.variable.id} index = {this.props.index}>
                {   (provided, snapshot) =>(
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        innerRef = {provided.innerRef}
                        isDragging = {snapshot.isDragging}
                    >
                    {this.props.variable.name}</Container>   
                )
                }    
                    
            </Draggable>
                
        )
    }
}