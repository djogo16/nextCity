import React , {Component} from 'react';
import {DragDropContext} from 'react-beautiful-dnd';
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';
import DraggedElements from '../MainContent/DraggedElements/DraggedElements'
const Container = styled.div`

`;
const mainLayout = () =>{
    return(
        <Draggable>
            <Container>
                <DraggedElements/>
            </Container>
        </Draggable>
    )
}
export default mainLayout;


