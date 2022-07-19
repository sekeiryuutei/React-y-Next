import React, { Component } from 'react';
import ContentWrapper from '@/components/Layout/ContentWrapper';
import { Container, Row, Col } from 'reactstrap';
import $ from 'jquery';

class Nestable extends Component {
    state = {
        output1: '',
        output2: ''
    };

    componentDidMount() {
        // Nestable
        require('nestable');

        // activate Nestable for list 1
        $(this.refs.nestable1)
            .nestable({
                group: 1
            })
            .on('change', this.updateOutput(1));

        // activate Nestable for list 2
        $(this.refs.nestable2)
            .nestable({
                group: 1
            })
            .on('change', this.updateOutput(2));
    }

    updateOutput = id => e => {
        var list = e.length ? e : $(e.target);

        this.setState({
            [`output${id}`]: JSON.stringify(list.nestable('serialize'))
        });
    };

    expandAll = e => $('.dd').nestable('expandAll');
    collapseAll = e => $('.dd').nestable('collapseAll');

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>
                        Nestable
                        <small>
                            Drag &amp; drop hierarchical list with mouse and touch compatibility
                        </small>
                    </div>
                </div>
                <Container fluid>
                    <div className="js-nestable-action">
                        <button onClick={this.expandAll} className="btn btn-secondary btn-sm mr-sm">
                            Expand All
                        </button>
                        <button onClick={this.collapseAll} className="btn btn-secondary btn-sm">
                            CollapseAll
                        </button>
                    </div>
                    <Row>
                        <Col md={6}>
                            <div ref="nestable1" className="dd">
                                <ol className="dd-list">
                                    <li data-id="1" className="dd-item">
                                        <div className="dd-handle">Item 1</div>
                                    </li>
                                    <li data-id="2" className="dd-item">
                                        <div className="dd-handle">Item 2</div>
                                        <ol className="dd-list">
                                            <li data-id="3" className="dd-item">
                                                <div className="dd-handle">Item 3</div>
                                            </li>
                                            <li data-id="4" className="dd-item">
                                                <div className="dd-handle">Item 4</div>
                                            </li>
                                            <li data-id="5" className="dd-item">
                                                <div className="dd-handle">Item 5</div>
                                                <ol className="dd-list">
                                                    <li data-id="6" className="dd-item">
                                                        <div className="dd-handle">Item 6</div>
                                                    </li>
                                                    <li data-id="7" className="dd-item">
                                                        <div className="dd-handle">Item 7</div>
                                                    </li>
                                                    <li data-id="8" className="dd-item">
                                                        <div className="dd-handle">Item 8</div>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li data-id="9" className="dd-item">
                                                <div className="dd-handle">Item 9</div>
                                            </li>
                                            <li data-id="10" className="dd-item">
                                                <div className="dd-handle">Item 10</div>
                                            </li>
                                        </ol>
                                    </li>
                                    <li data-id="11" className="dd-item">
                                        <div className="dd-handle">Item 11</div>
                                    </li>
                                    <li data-id="12" className="dd-item">
                                        <div className="dd-handle">Item 12</div>
                                    </li>
                                </ol>
                            </div>
                            <textarea
                                className="form-control"
                                readOnly
                                value={this.state.output1}
                            />
                        </Col>
                        <Col md={6}>
                            <div ref="nestable2" className="dd">
                                <ol className="dd-list">
                                    <li data-id="13" className="dd-item dd3-item">
                                        <div className="dd-handle dd3-handle">&nbsp;</div>
                                        <div className="dd3-content">Item 13</div>
                                    </li>
                                    <li data-id="14" className="dd-item dd3-item">
                                        <div className="dd-handle dd3-handle">&nbsp;</div>
                                        <div className="dd3-content">Item 14</div>
                                    </li>
                                    <li data-id="15" className="dd-item dd3-item">
                                        <div className="dd-handle dd3-handle">&nbsp;</div>
                                        <div className="dd3-content">Item 15</div>
                                        <ol className="dd-list">
                                            <li data-id="16" className="dd-item dd3-item">
                                                <div className="dd-handle dd3-handle">&nbsp;</div>
                                                <div className="dd3-content">Item 16</div>
                                            </li>
                                            <li data-id="17" className="dd-item dd3-item">
                                                <div className="dd-handle dd3-handle">&nbsp;</div>
                                                <div className="dd3-content">Item 17</div>
                                            </li>
                                            <li data-id="18" className="dd-item dd3-item">
                                                <div className="dd-handle dd3-handle">&nbsp;</div>
                                                <div className="dd3-content">Item 18</div>
                                            </li>
                                        </ol>
                                    </li>
                                </ol>
                            </div>
                            <textarea
                                className="form-control"
                                readOnly
                                value={this.state.output2}
                            />
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <br />
                    <p>
                        (*) Note that in a React enviroment, 'serialize' api from Nestable plugin
                        will read also the 'data-react-id' attribute
                    </p>
                </Container>
            </ContentWrapper>
        );
    }
}

export default Nestable;
