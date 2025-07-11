import {Head,useForm,usePage} from "@inertiajs/react";
import Layout from '../Layouts/Layout';
import '../../css/app.css';

export default function Create(){

    const {data,setData,post,errors,processing}=useForm({
        body: "",

    });
    const {component}=usePage();

    // console.log(useForm());
    function submit(e){
        e.preventDefault()
        post("/posts");
    }

    console.log(errors);

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

        <h1 className="title">Create Page</h1>
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
                    Create Post
                </button>
            </form>

        </div>

        </>
    );

}
