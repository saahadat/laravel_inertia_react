export default function Layout({children}){
    return (
        <>
        <header>
            <nav>
                <a className="nav-link" href="/">Home</a>
                <a className="nav-link" href= "/creare">Create</a>
            </nav>
        </header>
        <main>
            {children}
        </main>
        </>
    )
}