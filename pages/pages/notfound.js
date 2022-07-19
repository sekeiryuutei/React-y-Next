import React from 'react';
import BasePage from '@/components/Layout/BasePage';
import Link from 'next/link';

const NotFound = props => (
    <div className="abs-center wd-xl">
        <div className="text-center mb-4">
            <div className="text-lg mb-3">404</div>
            <p className="lead m-0">We couldn't find this page.</p>
            <p>The page you are looking for does not exists.</p>
        </div>
        <div className="input-group mb-4">
            <input className="form-control" type="text" placeholder="Try with a search" />
            <span className="input-group-btn">
                <button className="btn btn-secondary" type="button">
                    <em className="fa fa-search" />
                </button>
            </span>
        </div>
        <ul className="list-inline text-center text-sm mb-4">
            <li className="list-inline-item">
                <Link href="/dashboard/dashboardv1">
                    <a className="text-muted">Go to App</a>
                </Link>
            </li>
            <li className="text-muted list-inline-item">|</li>
            <li className="list-inline-item">
                <Link href="/pages/login" as="/login">
                    <a className="text-muted">Login</a>
                </Link>
            </li>
            <li className="text-muted list-inline-item">|</li>
            <li className="list-inline-item">
                <Link href="/pages/register" as="/register">
                    <a className="text-muted">Register</a>
                </Link>
            </li>
        </ul>
        <div className="p-3 text-center">
            <span className="mr-2">&copy;</span>
            <span>2020</span>
            <span className="mx-2">-</span>
            <span>Angle</span>
            <br />
            <span>Bootstrap Admin Template</span>
        </div>
    </div>
);

NotFound.Layout = BasePage;

export default NotFound;
