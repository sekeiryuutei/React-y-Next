import React, { Component } from 'react';
import ContentWrapper from '@/components/Layout/ContentWrapper';
import { ListGroup, ListGroupItem } from 'reactstrap';

class Sortable extends Component {
    componentDidMount() {
        // Sortable
        const sortable = require('html5sortable/dist/html5sortable.amd.js');

        sortable('.sortable', {
            forcePlaceholderSize: true,
            placeholder: '<div class="box-placeholder p-0 m-0"></div>'
        });
    }

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>
                        Sortable
                        <small>
                            Lightweight jQuery plugin to create sortable lists and grids using
                            native HTML5 drag and drop API.
                        </small>
                    </div>
                </div>
                <ListGroup className="sortable">
                    <ListGroupItem>
                        <em className="fas fa-bars fa-fw text-muted mr-4" />
                        Donald Hoffman
                    </ListGroupItem>
                    <ListGroupItem>
                        <em className="fas fa-bars fa-fw text-muted mr-4" />
                        Wallace Barrett
                    </ListGroupItem>
                    <ListGroupItem>
                        <em className="fas fa-bars fa-fw text-muted mr-4" />
                        Marsha Hicks
                    </ListGroupItem>
                    <ListGroupItem>
                        <em className="fas fa-bars fa-fw text-muted mr-4" />
                        Roland Brown
                    </ListGroupItem>
                </ListGroup>
            </ContentWrapper>
        );
    }
}

export default Sortable;
