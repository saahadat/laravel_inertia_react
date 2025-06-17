function Home({name}) {
    return (

        <>
         {/* <div className="flex items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-blue-600">Welcome to the Home Page</h1>
        </div>  */}
        <h1 className="title" >Welcome Home {name} </h1>

        
        </>
        
    );
}

Home.layout = page=><Layout children={page} />
export default Home;