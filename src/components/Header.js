'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Header() {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return (
        <>
            {/* Navbar superior */}
            <nav className="py-2 bg-body-tertiary border-bottom">
                <div className="container d-flex flex-wrap">
                    <ul className="nav me-auto">
                        <li className="nav-item">
                            <Link href="/" className="nav-link link-body-emphasis px-2 active" aria-current="page">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/catalog" className="nav-link link-body-emphasis px-2">
                                Catálogo
                            </Link>
                        </li>
                        <li className="nav-item d-none d-sm-inline">
                            <Link href="/faq" className="nav-link link-body-emphasis px-2">
                                FAQs
                            </Link>
                        </li>
                        <li className="nav-item d-none d-sm-inline">
                            <Link href="/about" className="nav-link link-body-emphasis px-2">
                                About
                            </Link>
                        </li>
                    </ul>
                    <ul className="nav logged-out">
                        <li className="nav-item">
                            <Link href="/login" className="btn btn-secondary ms-3 mx-3">
                                Login
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/signup" className="btn btn-outline-secondary">
                                Sign up
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* Header principal */}
            <header className="py-3 mb-4 border-bottom sticky-top bg-body z-1">
                <div className="container d-flex flex-wrap justify-content-center align-items-center">
                    <Link href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
                        {/* Logo */}
                        <Image src="/assets/logo.png" alt="Logo" width={32} height={32} className="bi me-2" />
                        <span className="ms-3 fs-5">Stream Games</span>
                    </Link>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                    </form>

                    <ul className="nav d-flex align-items-center py-0">
                        {/* Menu do usuário (oculto inicialmente) */}
                        <div className="dropdown text-end z-2 logged-in visually-hidden ps-3">
                            <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                {/* avatar */}
                                <Image className="rounded-circle" src="/assets/avatar/user_avatar.jpg" alt="User" width={42} height={42} />
                            </a>
                            <ul className="dropdown-menu text-small">
                                <li>
                                    <Link href="/profile" className="dropdown-item clienteItem">
                                        Perfil
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/backoffice" className="dropdown-item usuarioItem">
                                        Backoffice
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item logout-button" href="#">
                                        Sair
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Carrinho de compras */}
                        <li className="nav-item d-none d-sm-inline ps-3">
                            <Link href="/cart" className="nav-link link-body-emphasis px-2 position-relative">
                                <span className="position-absolute start-100 translate-middle badge rounded-pill bg-danger visually-hidden">
                                    +1
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}
