// import Layout from '../Layouts/Layout';
import { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';


export default function Home({name,posts}) {

     const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    console.log(posts);
    return (

        <>
         {/* <div className="flex items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-blue-600">Welcome to the Home Page</h1>
       </div>  */}
        <h1 className="title" >Welcome Home {name}  </h1>

            <div>
                {posts.data.map(post=>(
                    <div key={post.id} className="p-5 border-b border-gray-200">
                        <div className="text-sm text-slate-600">
                            <span>Posted On:</span>
                            <span>{ new Date(post.created_at).toLocaleTimeString() }</span>
                        </div>
                    <p className="font-medium">{post.body}</p>
                    </div>
                ))}
            </div>

            <div className="py-12 px-4">
                {posts.links.map(link=>(
                    link.url ?
                    <Link key={link.label} href={link.url}
                    dangerouslySetInnerHTML={{ __html:link.label}}
                    className={`p-2 mx-2 ${link.active ? "text-blue-500 font-bold":""}
                    `}/>
                    :
                    <span
                    key={link.label}
                    dangerouslySetInnerHTML={{ __html:link.label}}
                    className={`p-2 mx-2 text-slate-500 `}

                    ></span>
                ))}
            </div>

        <Link preserveScroll href="/" className="block title fixed bottom-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 rounded shadow">
        {time}</Link>
        </>

    );
}

// Home.layout = page=><Layout children={page} />
// export default Home;
