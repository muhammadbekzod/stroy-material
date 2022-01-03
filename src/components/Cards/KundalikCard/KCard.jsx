import React from 'react'
import { Card, Container, Graph, Main, Wrapper, Daily } from './KCardStyle'
import graph from '../../../img/graph.png'
import task from '../../../img/Jadval.png'
const KCard = () => {
    return (
        <Main>
        <Container>
            <Wrapper>
                <Wrapper.Month>
                <p>Yanvar</p>
                <p>Febral</p>
                <p>Mart</p>
                <p>Aprel</p>
                <p>May</p>
                <p>Iyun</p>
                <p>Iyul</p>
                <p>Avgust</p>
                <p>Sentyabr</p>
                <p>Okyabr</p>
                <p>Noyabr</p>
                <p>Dekabr</p>
                </Wrapper.Month>
            </Wrapper>
            <Card>
            </Card>
            <Card>
            </Card>
            <Card>
            </Card>
         
        </Container>
        <Container.Right>
        <Graph  src={graph}/>
       <Daily src={task}/>
       </Container.Right>
        </Main>
    )
}

export default KCard
