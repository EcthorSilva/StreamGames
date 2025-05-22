"use client";

import React from "react";

export default function Footer() {
    return (
        <footer className="container border-top py-5">
            <div className="row">
                <div className="col-12 col-md">
                    <div className="pb-3">
                        <i className="bi bi-joystick"></i>
                    </div>
                    <small className="d-block mb-3 text-body-secondary">
                        © 2017–{new Date().getFullYear()}
                    </small>
                </div>

                <div className="col-6 col-md">
                    <h5>Features</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="link-secondary text-decoration-none" href="#">Cool stuff</a></li>
                        <li><a className="link-secondary text-decoration-none" href="#">Random feature</a></li>
                        <li><a className="link-secondary text-decoration-none" href="#">Team feature</a></li>
                        <li><a className="link-secondary text-decoration-none" href="#">Stuff for developers</a></li>
                        <li><a className="link-secondary text-decoration-none" href="#">Another one</a></li>
                        <li><a className="link-secondary text-decoration-none" href="#">Last time</a></li>
                    </ul>
                </div>

                <div className="col-6 col-md">
                    <h5>Resources</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="link-secondary text-decoration-none" href="#">Resource name</a></li>
                        <li><a className="link-secondary text-decoration-none" href="#">Resource</a></li>
                        <li><a className="link-secondary text-decoration-none" href="#">Another resource</a></li>
                        <li><a className="link-secondary text-decoration-none" href="#">Final resource</a></li>
                    </ul>
                </div>

                <div className="col-6 col-md">
                    <h5>Resources</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="link-secondary text-decoration-none" href="#">Business</a></li>
                        <li><a className="link-secondary text-decoration-none" href="#">Education</a></li>
                        <li><a className="link-secondary text-decoration-none" href="#">Government</a></li>
                        <li><a className="link-secondary text-decoration-none" href="#">Gaming</a></li>
                    </ul>
                </div>

                <div className="col-6 col-md">
                    <h5>About</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="link-secondary text-decoration-none" href="#">Team</a></li>
                        <li><a className="link-secondary text-decoration-none" href="#">Locations</a></li>
                        <li><a className="link-secondary text-decoration-none" href="#">Privacy</a></li>
                        <li><a className="link-secondary text-decoration-none" href="#">Terms</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}