export default function Footer() {
    return (
        <div style={{backgroundColor: "#1c222e"}} className="flex-shrink-0 w-full h-20 text-lg flex justify-center px-4">
            <div className="w-full h-full max-w-3xl inline-flex items-center justify-between space-x-10">
                <div className="inline-flex space-x-10">
                    <a rel="noreferrer" target="_blank" href={process.env.REACT_APP_IMPRINT} className="font-normal text-gray-200 hover:text-gray-400">Imprint</a>
                    <a rel="noreferrer" target="_blank" href={process.env.REACT_APP_CONTACT} className="font-normal text-gray-200 hover:text-gray-400">Contact</a>
                </div>
                <p className="font-normal text-gray-200">© PvPHub.GG, 2022</p>
            </div>
        </div>
    )
}