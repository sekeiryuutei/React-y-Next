import React from 'react';
import Router from 'next/router';

const defaultPage = 'dashboard/dashboardv1';

export default class extends React.Component {
    static async getInitialProps({ res }) {
        if (res) {
            res.writeHead(302, {
                Location: defaultPage
            });
            res.end();
        } else {
            Router.push(defaultPage);
        }
        return {};
    }
}
