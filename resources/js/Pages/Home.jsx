 import Layout from '../Layouts/Layout';
import { useEffect, useState } from 'react';
import { Head,Link,usePage } from '@inertiajs/react';
import {useRoute} from '../../../vendor/tightenco/ziggy';
import '../../css/app.css';

export default function Home({name,posts}) {

    const route = useRoute();
    const {flash} =usePage().props;
    const {component} = usePage();

    const [flashMsg,setFlashMsg]=useState(flash.message);
    const [successMsg,setSuccessMsg]=useState(flash.success);

    setTimeout(()=>
    {
        setFlashMsg(null);
        setSuccessMsg(null);
    },2000
    );

    console.log(usePage());

    //console.log(posts);
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (

        <>
         {/* <div className="flex items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-blue-600">Welcome to the Home Page</h1>
       </div>  */}
    <Head>
        <title>{component}</title>
    </Head>

        <h1 className="title" >Welcome Home {name}  </h1>

            {flashMsg && <div
            className="absolute top-24 right-6 bg-rose-500 p-2
            rounded-md shadow-lg text-sm text-white"
            >{flashMsg}</div>}

            {successMsg && <div
            className="absolute top-24 right-6 bg-green-500 p-2
            rounded-md shadow-lg text-sm text-white"
            >{successMsg}</div>}

            <div className="py-4 px-2" >
                {posts.data.map(post=>(
                    <div key={post.id} className="p-4 border-b ">
                        <div className="text-sm text-slate-600">
                            <span>Posted On:</span>
                            <span>{ new Date(post.created_at).toLocaleTimeString() }</span>
                        </div>
                    <p className="font-medium">{post.body}</p>

                    {/* <Link  href={`/posts/${post.id}`}
                    className="text-link">Read More..</Link> */}

                    <Link  href={route('posts.show',post)}
                    className="text-link">Read More..</Link>

                    </div>
                ))}
            </div>

            <div className="py-12 px-4 ">
                {posts.links.map(link=>(
                    link.url ?
                    <Link key={link.label} href={link.url}
                    dangerouslySetInnerHTML={{ __html:link.label}}
                    className={`p-1 mx-1 ${link.active ? "text-blue-500 font-bold":""}
                    `}/>
                    :
                    <span
                    key={link.label}
                    dangerouslySetInnerHTML={{ __html:link.label}}
                    className={`p-1 mx-1 text-slate-500 `}

                    ></span>
                ))}
            </div>

        <Link preserveScroll href="/" className="block title fixed bottom-4 left-1/2 -translate-x-1/2 text-black px-4 py-2 rounded shadow">
        {time}</Link>
        </>

    );
}

// Home.layout = page=><Layout children={page} />
// export default Home;
