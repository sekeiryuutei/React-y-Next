import React, { Component } from 'react';
import ContentWrapper from '@/components/Layout/ContentWrapper';
import Link from 'next/link';
import { Table, Card } from 'reactstrap';

class ForumCategories extends Component {

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">Forum - Categories</div>
                {/* First category table */}
                <Card className="card-default">
                    <Table striped>
                        <thead>
                            <tr>
                                <th className="h4" style={{width: '50%'}}>Starting</th>
                                <th className="h4 text-center d-none d-lg-table-cell">Topics</th>
                                <th className="h4 text-center d-none d-lg-table-cell">Posts</th>
                                <th className="h4 d-none d-lg-table-cell">Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <h4>
                                        <Link href="/forum/topics?catid=113" as="/forum/topics/113">
                                            <a><strong>Welcome</strong></a>
                                        </Link>
                                    </h4>
                                    <div className="text-muted">Feel free to come inside and introduce yourself!</div>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>789</strong>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>254</strong>
                                </td>
                                <td className="d-none d-lg-table-cell">
                                    <a href="">Arnold Gray</a>
                                    <br/>
                                    <small>March 10, 2015</small>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                        <Link href="/forum/topics?catid=224" as="/forum/topics/224">
                                            <a><strong>Forum Rules</strong></a>
                                        </Link>
                                    </h4>
                                    <div className="text-muted">Please read the rules before post</div>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>15</strong>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>28</strong>
                                </td>
                                <td className="d-none d-lg-table-cell">
                                    <a href="">Erika Mckinney</a>
                                    <br/>
                                    <small>March 10, 2015</small>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                        <Link href="/forum/topics?catid=335" as="/forum/topics/335">
                                            <a><strong>Announcements</strong></a>
                                        </Link>
                                    </h4>
                                    <div className="text-muted">Latest udpates and news about this forum</div>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>300</strong>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>561</strong>
                                </td>
                                <td className="d-none d-lg-table-cell">
                                    <a href="">Annette Ruiz</a>
                                    <br/>
                                    <small>March 10, 2015</small>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>
                {/* Second category table */}
                <Card className="card-default">
                    <Table striped>
                        <thead>
                            <tr>
                                <th className="h4" style={{width: '50%'}}>Application</th>
                                <th className="h4 text-center d-none d-lg-table-cell">Topics</th>
                                <th className="h4 text-center d-none d-lg-table-cell">Posts</th>
                                <th className="h4 d-none d-lg-table-cell">Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <h4>
                                        <Link href="/forum/topics?catid=446" as="/forum/topics/446">
                                            <a><strong>Getting Started</strong></a>
                                        </Link>
                                    </h4>
                                    <div className="text-muted">Donec id lectus tortor.</div>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>789</strong>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>254</strong>
                                </td>
                                <td className="d-none d-lg-table-cell">
                                    <a href="">Arnold Gray</a>
                                    <br/>
                                    <small>March 10, 2015</small>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                        <Link href="/forum/topics?catid=557" as="/forum/topics/557">
                                            <a><strong>API</strong></a>
                                        </Link>
                                    </h4>
                                    <div className="text-muted">Etiam pharetra, orci sit amet lobortis malesuada.</div>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>15</strong>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>28</strong>
                                </td>
                                <td className="d-none d-lg-table-cell">
                                    <a href="">Erika Mckinney</a>
                                    <br/>
                                    <small>March 10, 2015</small>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                        <Link href="/forum/topics?catid=668" as="/forum/topics/668">
                                            <a><strong>Updates</strong></a>
                                        </Link>
                                    </h4>
                                    <div className="text-muted">Etiam porttitor consectetur lectus, in adipiscing nisi bibendum eu.</div>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>300</strong>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>561</strong>
                                </td>
                                <td className="d-none d-lg-table-cell">
                                    <a href="">Annette Ruiz</a>
                                    <br/>
                                    <small>March 10, 2015</small>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                        <Link href="/forum/topics?catid=779" as="/forum/topics/779">
                                            <a><strong>Modules</strong></a>
                                        </Link>
                                    </h4>
                                    <div className="text-muted">Sed viverra rutrum hendrerit.</div>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>300</strong>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>561</strong>
                                </td>
                                <td className="d-none d-lg-table-cell">
                                    <a href="">Floyd Porter</a>
                                    <br/>
                                    <small>March 10, 2015</small>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                        <Link href="/forum/topics?catid=8810" as="/forum/topics/8810">
                                            <a><strong>Migration</strong></a>
                                        </Link>
                                    </h4>
                                    <div className="text-muted">Cum sociis natoque penatibus.</div>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>300</strong>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>561</strong>
                                </td>
                                <td className="d-none d-lg-table-cell">
                                    <a href="">Pedro Fox</a>
                                    <br/>
                                    <small>March 10, 2015</small>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>
                {/* Third category table */}
                <Card className="card-default">
                    <Table striped>
                        <thead>
                            <tr>
                                <th className="h4" style={{width: '50%'}}>Support</th>
                                <th className="h4 text-center d-none d-lg-table-cell">Topics</th>
                                <th className="h4 text-center d-none d-lg-table-cell">Posts</th>
                                <th className="h4 d-none d-lg-table-cell">Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <h4>
                                        <Link href="/forum/topics?catid=9911" as="/forum/topics/9911">
                                            <a><strong>F.A.Q.'s</strong></a>
                                        </Link>
                                    </h4>
                                    <div className="text-muted">Frequently asked questions here</div>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>789</strong>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>254</strong>
                                </td>
                                <td className="d-none d-lg-table-cell">
                                    <a href="">Arnold Gray</a>
                                    <br/>
                                    <small>March 10, 2015</small>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                        <Link href="/forum/topics?catid=101012" as="/forum/topics/101012">
                                            <a><strong>Guides</strong></a>
                                        </Link>
                                    </h4>
                                    <div className="text-muted">How to guides here</div>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>15</strong>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>28</strong>
                                </td>
                                <td className="d-none d-lg-table-cell">
                                    <a href="">Erika Mckinney</a>
                                    <br/>
                                    <small>March 10, 2015</small>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                        <Link href="/forum/topics?catid=111113" as="/forum/topics/111113">
                                            <a><strong>Updates</strong></a>
                                        </Link>
                                    </h4>
                                    <div className="text-muted">Latest news about latests updates</div>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>300</strong>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>561</strong>
                                </td>
                                <td className="d-none d-lg-table-cell">
                                    <a href="">Annette Ruiz</a>
                                    <br/>
                                    <small>March 10, 2015</small>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                        <Link href="/forum/topics?catid=121214" as="/forum/topics/121214">
                                            <a><strong>Questions</strong></a>
                                        </Link>
                                    </h4>
                                    <div className="text-muted">Ask for help here</div>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>300</strong>
                                </td>
                                <td className="text-muted text-center d-none d-lg-table-cell">
                                    <strong>561</strong>
                                </td>
                                <td className="d-none d-lg-table-cell">
                                    <a href="">Floyd Porter</a>
                                    <br/>
                                    <small>March 10, 2015</small>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>
            </ContentWrapper>
            );
    }

}

export default ForumCategories;

