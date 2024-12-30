const Header = ()=>{
    let Links = 
    [
        {
            id : 0,
            title : "home",
            url : "#"
        },
        {
            id :  1,
            title : "About",
            url : "#"
        },
        {
            id : 0,
            title : "Servivces",
            url : "#"
        },
        {
            id : 0,
            title : "Contact",
            url : "#"
        }
    ]
    return (
        <header className="fixed top-0 z-10 w-full py-7 px-[10%] bg-transparent flex items-center justify-between gap-4 text-white">
            <h1 className="text-2xl ">Ouroui<span className="text-cyan-500 font-bold">Dev</span></h1>
            <ul className="flex items-center gap-2"> 
                {Links.map(li => <li key={li.id}><a className="transition duration-300 ease-in-out text-white decoration-none hover:text-cyan-500" href={li.url}>{li.title}</a></li>)}
            </ul>
        </header>
    )
}
export default Header