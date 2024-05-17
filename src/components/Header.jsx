export default function Header() {
    return (
        <div className="header container">
            <a href="index.html">ZEHRA ECER <span>/ FRONTEND DEVELOPER</span></a>

            <div className="header-navBar">
                <a href="index.html">Hakkımda</a>
                <a href="projects.html">Projelerim</a>
                <a href="experiences.html">Tecrübelerim</a>
                <a href="contact.html">İletişim</a>

            </div>

            <div className="header-hamburgerBar">

                <img src="./hamburger.svg" />

            </div>
        </div>
    )
}