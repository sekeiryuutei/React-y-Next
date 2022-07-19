import React, { Component } from 'react';
import ContentWrapper from '@/components/Layout/ContentWrapper';
import { Container, Row, Col } from 'reactstrap';
// import Dropzone from "react-dropzone";

// import "./Dropzone.scss";

let Dropzone = null;
class DropzoneWrapper extends Component {
    state = {
        isClient: false
    };
    componentDidMount = () => {
        Dropzone = require('react-dropzone').default;
        this.setState({ isClient: true });
    };
    render() {
        return Dropzone ? <Dropzone {...this.props}>{this.props.children}</Dropzone> : null;
    }
}

class FormUpload extends Component {
    state = {
        files: [],
        stat: 'Waiting to add files..'
    };

    onDrop = files => {
        this.setState({
            files: files.map(file =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })
            ),
            stat: 'Added ' + files.length + ' file(s)'
        });
    };

    uploadFiles = e => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            stat: this.state.files.length
                ? 'Dropzone ready to upload ' + this.state.files.length + ' file(s)'
                : 'No files added.'
        });
    };

    clearFiles = e => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            stat: this.state.files.length
                ? this.state.files.length + ' file(s) cleared.'
                : 'No files to clear.'
        });
        this.setState({
            files: []
        });
    };

    render() {
        const { files } = this.state;

        const thumbs = files.map((file, index) => (
            <Col md={3} key={index}>
                <img className="img-fluid mb-2" src={file.preview} alt="Item" />
            </Col>
        ));

        return (
            <ContentWrapper>
                <div className="content-heading">Dropzone</div>
                <Container className="container-md">
                    <div className="text-center mb-3">
                        <p>
                            DropzoneJS is an open source library that provides drag&apos;n&apos;drop
                            file uploads with image previews.
                            <br />
                            It’s lightweight, doesn’t depend on any other library (like jQuery) and
                            is{' '}
                            <a
                                href="http://www.dropzonejs.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                highly customizable
                            </a>
                        </p>
                    </div>
                    <DropzoneWrapper className="" onDrop={this.onDrop}>
                        {({ getRootProps, getInputProps, isDragActive }) => {
                            return (
                                <div
                                    {...getRootProps()}
                                    className={
                                        'dropzone card p-3 ' +
                                        (isDragActive ? 'dropzone-drag-active' : '')
                                    }
                                >
                                    <div className="text-right mb-3">
                                        <button
                                            onClick={this.uploadFiles}
                                            className="btn btn-primary"
                                            type="submit"
                                        >
                                            Upload!
                                        </button>
                                    </div>
                                    <input {...getInputProps()} />
                                    <div className="dropzone-previews flex">
                                        {this.state.files.length > 0 ? (
                                            <Row>{thumbs}</Row>
                                        ) : (
                                            <div className="text-center dz-default dz-message">
                                                Drop files here to upload
                                            </div>
                                        )}
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <small>
                                            This demo does not upload files to any server.
                                        </small>
                                        <small className="ml-auto">
                                            <button
                                                type="button"
                                                className="btn btn-link"
                                                onClick={this.clearFiles}
                                            >
                                                Clear files
                                            </button>
                                        </small>
                                    </div>
                                </div>
                            );
                        }}
                    </DropzoneWrapper>
                    <p>
                        <b>Status</b>: <span>{this.state.stat}</span>
                    </p>
                </Container>
            </ContentWrapper>
        );
    }
}

export default FormUpload;
