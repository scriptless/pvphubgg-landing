import { useEffect, useState } from "react";

export default function Vote() {

    const [votes, setVotes] = useState([]);

    useEffect(() => {
        const list = JSON.parse(process.env.REACT_APP_SERVER_VOTE_LINKS);
        setVotes(list);
    }, []);

    function VoteButton(link, index) {
        return (
            <a href={link} target="_blank" rel="noreferrer">
                <div className="my-5 w-full px-4 py-3 text-xl cursor-pointer shadow-lg rounded-full bg-white hover:bg-blue-600 active:bg-blue-700 text-gray-800 hover:text-white">
                    Vote Link #{index}
                </div>
            </a>
        )
    }

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <p className="mb-12 text-2xl md:text-4xl text-white font-semibold">Vote for PvPHub.GG</p>
            <div className="w-full max-w-md text-center pb-72 space-y-10">
                {votes.map((link, i) => VoteButton(link, i+1))}
            </div>
        </div>
    );
}
  