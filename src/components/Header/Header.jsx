import './Header.sass'

export const Header = () => {
    return (
        <header id='header' className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__inner-logo">
                        <h3>Sultanov <span>Sanzhar</span></h3>
                    </div>
                    <nav className="header__inner-nav">
                        <ul>
                            <li><a href="#header" id='default'>Home</a></li>
                            <li><a href="#education">Education</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
