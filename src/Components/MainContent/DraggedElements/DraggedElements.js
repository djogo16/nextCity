import React from "react";
import {Grid,Col,Row} from "react-bootstrap";
import Classes from "./DraggedElements.css";

const elements = ()=>(
    <Grid className={Classes.Elements}>
        <Row>
            <Col xs={6} md={6}>
                <span><p>some some</p></span>
            </Col>
            <Col xs={6} md={6}>
                <span><p>some some</p></span>
            </Col>
        </Row>
        <Row>
            <Col xs={6} md={6}>
                <span><p>some some</p></span>
            </Col>
            <Col xs={6} md={6}>
                <span><p>some some</p></span>
            </Col>
        </Row>
        <Row>
            <Col xs={6} md={6}>
                <span><p>some some</p></span>
            </Col>
            <Col xs={6} md={6}>
                <span><p>some some</p></span>
            </Col>
        </Row>
        <Row>
            <Col xs={6} md={6}>
                <span><p>some some</p></span>
            </Col>
        </Row>
    </Grid>
)
export default elements;