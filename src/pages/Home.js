import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {

    const OFFLINE_STATE = {
        status: false,
        players: 0,
        playersMax: 0
    }
  
    const [serverInfo, setServerInfo] = useState(OFFLINE_STATE)
    const [loading, setLoading] = useState(true)
    const [copied, setCopied] = useState(false)
  
    useEffect(async() => {
      async function fetchData() {
          const json = await (await fetch(`https://api.mcsrvstat.us/2/${process.env.REACT_APP_SERVER_IP}`)).json();
          if(!json || !json.online) {
              setServerInfo(OFFLINE_STATE);
          } else {
              setServerInfo({
                  status: json.online,
                  players: json.players.online,
                  playersMax: json.players.max
              })
          }
          setLoading(false);
      }
      fetchData();
    }, []);
  
    return (
        <div className="flex-grow w-full flex flex-col justify-center items-center">
            {loading ? (
                <span className="mb-2 inline-flex items-center text-white text-sm font-mono px-4 py-2 bg-gray-600 bg-opacity-10 firefox:bg-opacity-10 backdrop-filter backdrop-blur-md rounded-full">
                    <svg class={`mr-3 h-2 w-2 text-gray-400`} fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                    </svg>
                    Loading...
                </span>
                ) : (
                <span className="mb-2 inline-flex items-center text-white text-sm font-mono px-4 py-2 bg-gray-600 bg-opacity-10 firefox:bg-opacity-10 backdrop-filter backdrop-blur-md rounded-full">
                    <svg class={`mr-3 h-2 w-2 ${serverInfo.status ? "animate-ping text-green-500" : "text-red-500"}`} fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                    </svg>
                    <svg class={`relative -ml-5 mr-3 h-2 w-2 ${serverInfo.status ? "text-green-500" : "text-red-500"}`} fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                    </svg>
                    {serverInfo.status ? "Online" : "Offline"} {serverInfo.players}/{serverInfo.playersMax}
                </span>)
            }
            <div className="flex flex-col items-center justify-center text-center">
                <p className="my-2 text-5xl md:text-7xl text-white font-semibold">PvPHub.GG</p>
                <p className="my-2 text-4xl md:text-6xl text-white font-semibold">A New <span className="text-blue-200">PotPvP</span> Experience</p>
                <p className="my-2 text-2xl md:text-3xl text-white font-thin tracking-wider">Casino · Prison · PotPvP · Abilities</p>
            </div>
            <div className="mt-16 h-14 space-x-3">
                <input value="eu.pvphub.gg" className="focus:ring-0 active:ring-0 font-mono text-center shadow bg-gray-900 bg-opacity-50 firefox:bg-opacity-50 backdrop-filter backdrop-blur-md text-gray-200 text-2xl px-5 h-full rounded-full"/>
                {!copied && <button onClick={() => { navigator.clipboard.writeText(process.env.REACT_APP_SERVER_IP); setCopied(true)}} className="shadow bg-blue-600 hover:bg-blue-700 active:bg-blue-700 text-gray-200 text-lg px-6 h-full rounded-full font-semibold uppercase tracking-widest">Copy</button>}
                {copied && <button onClick={() => navigator.clipboard.writeText(process.env.REACT_APP_SERVER_IP)} className="shadow bg-green-600 hover:bg-green-500 text-gray-200 text-lg px-6 h-full rounded-full font-semibold uppercase tracking-widest">Copied!</button>}
            </div>
            <div className="w-full mt-20 mb-48 flex flex-col items-center space-y-10 max-w-2xl md:space-y-0 md:flex-row md:justify-between">
                <Link to="/vote" className="w-42 inline-flex justify-center items-center text-white hover:text-gray-300 text-3xl tracking-widest font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                    VOTE
                </Link>
                <a rel="noreferrer" target="_blank" href={process.env.REACT_APP_SERVER_STORE} className="w-42 inline-flex justify-center items-center text-white hover:text-gray-300 text-3xl tracking-widest font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    STORE
                </a>
                <a rel="noreferrer" target="_blank" href={process.env.REACT_APP_SERVER_DISCORD} className="w-42 inline-flex justify-center items-center text-white hover:text-gray-300 text-3xl tracking-widest font-semibold">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        aria-hidden="true" 
                        role="img" 
                        className="h-8 w-8 mr-4" 
                        preserveAspectRatio="xMidYMid meet" 
                        viewBox="0 0 24 24">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" fill="currentColor"/>
                    </svg>
                    DISCORD
                </a>
            </div>
        </div>
    );
}