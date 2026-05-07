import react from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
    const data = useLoaderData()

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch("https://api.github.com/users/Jishnu-shukla")
    //         .then(res => res.json())
    //         .then(data => setData(data))
    // }, [])

    return (
        <>
            <div className="text-center m-4 bg-blue-100 p-4 text-3xl">Github Followers: {data.followers}</div>
            <div className="text-center m-4 bg-blue-100 p-4 text-3xl">Github Following: {data.following}</div>
        </>
    );
}

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/Jishnu-shukla")
    return response.json()
};