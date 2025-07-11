import {Head,useForm,usePage} from "@inertiajs/react";
import Layout from '../Layouts/Layout';
import {useRoute} from '../../../vendor/tightenco/ziggy';
import '../../css/app.css';

export default function Create({post}){

    const {data,setData,put,errors,processing}=useForm({
        body: post.body,

    });
    const {component}=usePage();
    const route=useRoute();

    // console.log(useForm());
    function submit(e){
        e.preventDefault()
        // put(`/posts/${post.id}`);
        put(route("posts.update",post) );
    }

    // console.log(errors);

    return (
        <>
        {/* <Head title ={component}/> */}
        <Head >
            <title>{component}</title>
            <meta
            head-key="description"
            name="description"
            content="This is the CREATE description" />
        </Head>

        <h1 className="title">Update your Post</h1>
        {/* {data.body} */}

        <div className="mt-4  bg-white shadow-md rounded-lg">

            <form onSubmit={submit}>
                <textarea rows="10" value={data.body}
                onChange={(e)=> setData('body',e.target.value)}
                className={errors.body && '!ring-red-500'}
                >

                </textarea>
                {errors.body&&<p className="error fill-orange-600" >{errors.body}</p>}

                <button className="primary-btn mt-4 font-bold bg-blue-400"
                disabled={processing}
                >
                    Update Post
                </button>
            </form>

        </div>

        </>
    );

}
