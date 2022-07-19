import React, { Component } from 'react';
import ContentWrapper from '@/components/Layout/ContentWrapper';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';

// Chartist
import 'matchmedia/index.js';
import 'chartist/dist/chartist.min.css';
import ChartistGraph from 'react-chartist';

import { BarBipolar, BarHorizontal, Line, SVGAnimation, SlimAnimation } from '@/components/Config/chartist.setup';

const CardDefault = props => (
    <Card {...props} className="card-default">
        {props.children}
    </Card>
)

class ChartChartist extends Component {
    state = {
        chartReady: false
    }
    componentDidMount() {
        window.requestAnimationFrame(() => this.setState({ chartReady: true }));
    }
    render() {
        const { chartReady } = this.state;
        return (
            <ContentWrapper>
                <div className="content-heading">Chartist</div>
                <Container fluid>
                    <Row>
                        <Col md={ 4 }>
                            <CardDefault>
                                <CardHeader>Bar bipolar</CardHeader>
                                <CardBody>
                                    {chartReady && <ChartistGraph data={BarBipolar.data} options={BarBipolar.options} type={'Bar'} />}
                                </CardBody>
                            </CardDefault>
                        </Col>
                        <Col md={ 4 }>
                            <CardDefault>
                                <CardHeader>Bar Horizontal</CardHeader>
                                <CardBody>
                                    {chartReady && <ChartistGraph data={BarHorizontal.data} options={BarHorizontal.options} type={'Bar'} />}
                                </CardBody>
                            </CardDefault>
                        </Col>
                        <Col md={ 4 }>
                            <CardDefault>
                                <CardHeader>Line</CardHeader>
                                <CardBody>
                                    {chartReady && <ChartistGraph data={Line.data} options={Line.options} type={'Line'} />}
                                </CardBody>
                            </CardDefault>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 6 }>
                            <CardDefault>
                                <CardHeader>Smil Animations</CardHeader>
                                <CardBody>
                                    {chartReady && <ChartistGraph data={SlimAnimation.data} options={SlimAnimation.options} listener={SlimAnimation.events} type={'Line'} />}
                                </CardBody>
                            </CardDefault>
                        </Col>
                        <Col md={ 6 }>
                            <CardDefault>
                                <CardHeader>SVG Path Animations</CardHeader>
                                <CardBody>
                                    {chartReady && <ChartistGraph data={SVGAnimation.data} options={SVGAnimation.options}  listener={SVGAnimation.events} type={'Line'} />}
                                </CardBody>
                            </CardDefault>
                        </Col>
                    </Row>
                </Container>
            </ContentWrapper>
            );
    }

}

export default ChartChartist;
