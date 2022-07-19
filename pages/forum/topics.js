import React, { Component } from 'react';
import ContentWrapper from '@/components/Layout/ContentWrapper';
import Link from 'next/link';
import { withRouter } from 'next/router'
import { Table, Card } from 'reactstrap';

class ForumTopics extends Component {

    constructor(props) {
        super(props)
        this.params = this.props.router.query;
    }

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>Forum - Topics
                        <small>Category ID: {this.params.catid}</small>
                    </div>
                    <div className="ml-auto">
                        <Link href="/forum/categories" as="/forum">
                            <button className="btn btn-sm btn-secondary text-sm">&lt; back</button>
                        </Link>
                    </div>
                </div>
                <Card className="card-default">
                    <Table striped>
                        <thead>
                            <tr>
                                <th className="h4" style={{width: '50%'}}>Welcome</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <h4>
                                        <Link href={`/forum/discussion?catid=${this.params.catid}&topid=12346`} as={`/forum/discussion/${this.params.catid}/12346`}>
                                            <a><strong>Powered by AngularJS</strong></a>
                                        </Link>
                                    </h4>
                                    <div className="text-muted text-sm">
                                        <span>
                                            <strong className="mr-1">17</strong>views</span>
                                        <span className="mx-1"></span>
                                        <span>
                                            <strong className="mr-1">19</strong>comments</span>
                                    </div>
                                </td>
                                <td className="text-right d-none d-lg-table-cell">
                                    <div className="text-muted">
                                        <small className="mr-1">Started by</small>
                                        <a className="mr-1" href="">Victoria West</a>
                                        <small>on March 10, 2015</small>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                        <Link href={`/forum/discussion?catid=${this.params.catid}&topid=23457`} as={`/forum/discussion/${this.params.catid}/23457`}>
                                            <a><strong>How to create an AngularJS admin GUI?</strong></a>
                                        </Link>
                                    </h4>
                                    <div className="text-muted text-sm">
                                        <span>
                                            <strong className="mr-1">7</strong>views</span>
                                        <span className="mx-1"></span>
                                        <span>
                                            <strong className="mr-1">13</strong>comments</span>
                                    </div>
                                </td>
                                <td className="text-right d-none d-lg-table-cell">
                                    <div className="text-muted">
                                        <small className="mr-1">Started by</small>
                                        <a className="mr-1" href="">Olivia Reynolds</a>
                                        <small>on March 10, 2015</small>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                        <Link href={`/forum/discussion?catid=${this.params.catid}&topid=34568`} as={`/forum/discussion/${this.params.catid}/34568`}>
                                            <a><strong>Issue found..</strong></a>
                                        </Link>
                                    </h4>
                                    <div className="text-muted text-sm">
                                        <span>
                                            <strong className="mr-1">13</strong>views</span>
                                        <span className="mx-1"></span>
                                        <span>
                                            <strong className="mr-1">500</strong>comments</span>
                                    </div>
                                </td>
                                <td className="text-right d-none d-lg-table-cell">
                                    <div className="text-muted">
                                        <small className="mr-1">Started by</small>
                                        <a className="mr-1" href="">Michelle Lane</a>
                                        <small>on March 10, 2015</small>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                        <Link href={`/forum/discussion?catid=${this.params.catid}&topid=45679`} as={`/forum/discussion/${this.params.catid}/45679`}>
                                            <a><strong>Share your application</strong></a>
                                        </Link>
                                    </h4>
                                    <div className="text-muted text-sm">
                                        <span>
                                            <strong className="mr-1">98</strong>views</span>
                                        <span className="mx-1"></span>
                                        <span>
                                            <strong className="mr-1">1900</strong>comments</span>
                                    </div>
                                </td>
                                <td className="text-right d-none d-lg-table-cell">
                                    <div className="text-muted">
                                        <small className="mr-1">Started by</small>
                                        <a className="mr-1" href="">Derek Jensen</a>
                                        <small>on March 10, 2015</small>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                        <Link href={`/forum/discussion?catid=${this.params.catid}&topid=567810`} as={`/forum/discussion/${this.params.catid}/567810`}>
                                            <a><strong>Angle - Angular Admin Template</strong></a>
                                        </Link>
                                    </h4>
                                    <div className="text-muted text-sm">
                                        <span>
                                            <strong className="mr-1">17</strong>views</span>
                                        <span className="mx-1"></span>
                                        <span>
                                            <strong className="mr-1">19</strong>comments</span>
                                    </div>
                                </td>
                                <td className="text-right d-none d-lg-table-cell">
                                    <div className="text-muted">
                                        <small className="mr-1">Started by</small>
                                        <a className="mr-1" href="">Colleen Cole</a>
                                        <small>on March 10, 2015</small>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                        <Link href={`/forum/discussion?catid=${this.params.catid}&topid=678911`} as={`/forum/discussion/${this.params.catid}/678911`}>
                                            <a><strong>Take a breakfast and happy coding</strong></a>
                                        </Link>
                                    </h4>
                                    <div className="text-muted text-sm">
                                        <span>
                                            <strong className="mr-1">31</strong>view</span>
                                        <span className="mx-1"></span>
                                        <span>
                                            <strong className="mr-1">190</strong>comments</span>
                                    </div>
                                </td>
                                <td className="text-right d-none d-lg-table-cell">
                                    <div className="text-muted">
                                        <small className="mr-1">Started by</small>
                                        <a className="mr-1" href="">Charlene Barrett</a>
                                        <small>on March 10, 2015</small>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                        <Link href={`/forum/discussion?catid=${this.params.catid}&topid=7891012`} as={`/forum/discussion/${this.params.catid}/7891012`}>
                                            <a><strong>Sed vitae nisi eget metus semper congue.</strong></a>
                                        </Link>
                                    </h4>
                                    <div className="text-muted text-sm">
                                        <span>
                                            <strong className="mr-1">27</strong>views</span>
                                        <span className="mx-1"></span>
                                        <span>
                                            <strong className="mr-1">419</strong>comments</span>
                                    </div>
                                </td>
                                <td className="text-right d-none d-lg-table-cell">
                                    <div className="text-muted">
                                        <small className="mr-1">Started by</small>
                                        <a className="mr-1" href="">Austin Montgomery</a>
                                        <small>on March 10, 2015</small>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>
            </ContentWrapper>
            );
    }

}

export default withRouter(ForumTopics);
