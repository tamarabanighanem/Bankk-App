import React from 'react'

const Nav = () => {
    return (
        <div><header id="header" className="header d-flex align-items-center">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                <nav id="navbar" className="navbar">
                    <ul>
                        <li>
                            <a href="#login">تسجيل الدخول</a>
                        </li>
                        <li>
                            <a href="contact.html">اتصل بنا</a>
                        </li>
                        <li>
                            <a href="about.html">معلومات</a>
                        </li>
                        <li>
                            <a href="#services">خدماتنا</a>
                        </li>
                        <li>
                            <a href="index.html" className="active">
                                الرئيسية
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* .navbar */}
                <a href="index.html" className="logo d-flex align-items-center">
                    <h1>
                        <span>.</span> عَ الطريق{" "}
                    </h1>
                </a>
                <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
                <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
            </div>
        </header>

        </div>
    )
}

export default Nav