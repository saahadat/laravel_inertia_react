import {Head,Link} from '@inertiajs/react';
import '../../css/app.css';

export default function Layout({children}){
    return (
        <>
        <Head>
            <meta
            head-key="description"
            name="description"
            content="This is the default description" />
        </Head>
        <header>
            <nav>
                <Link className="nav-link" href="/">Home</Link>
                <Link className="nav-link" href= "/posts/create">Create</Link>
            </nav>
        </header>
        <main>
            {children}
        </main>
        </>
    )
}
