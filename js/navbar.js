const printNavbar = () => {
    const navbar = document.getElementById('navbar');
    navbar.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="../index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../html/about.html">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../html/cv.html">CV</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../html/portfolio.html">Portfolio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../html/contact.html">Contact</a>
                </li>
            </ul>
        </nav>
    `;

    const currentPage = window.location.pathname.split("/").pop(); // Get the current file name
    const links = navbar.querySelectorAll("a");

    for (const link of links) {
        const linkHref = link.getAttribute("href").split("/").pop(); // Get only the file name
        if (currentPage === linkHref || (currentPage === "" && linkHref === "index.html")) {
            link.classList.add("active");
        }
    }

}

printNavbar();