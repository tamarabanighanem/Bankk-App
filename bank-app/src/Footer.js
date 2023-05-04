import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer id=" footer" className="footer">
                <div className="footer-legal text-center position-relative">
                    <div className="container">
                        <div className="copyright">
                            © جميع الحقوق محفوظة{" "}
                            <strong>
                                <span>عَ الطريق </span>
                            </strong>
                        </div>
                        <div className="credits">
                            Devloped by{" "}
                            <a href="https://github.com/MaisGhaith" target="_blank">
                                Mais Ghaith
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer