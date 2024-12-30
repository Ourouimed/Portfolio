import Button from "./Button"
const Home = ()=>{
    return (
        <section id="home" className="bg-[#070439] px-[10%] py-10 text-white min-h-screen flex items-center gap-8">
            <div className="text-sec w-2/4">
                <span className="text-sky-400 inline-block mb-2 text-2xl font-bold">Hello , </span>
                <h1 className="text-4xl font-bold">Mohamed Amine <span className="text-cyan-500">Ouroui</span></h1>
                <h3 className="text-2xl  text-gray-400">Frontend Web developper</h3>
                <Button name="downoad Resume" btnType="type1"/>
            </div>
            <div className="img-sec">

            </div>
        </section>
    )
}

export default Home