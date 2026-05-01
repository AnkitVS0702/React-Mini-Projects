import React from 'react'
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
function Github() {
    // const { myId } = useParams()


    const data =useLoaderData();
    return (
        <>
            <h1 className='bg-blue-600 text-white px-5 py-5 text-5xl' >Github followers {data.followers} </h1>
        </>
    )
}

export default Github;

export const githubInfoLoader = async ({params}) => {
    const response = await fetch(`https://api.github.com/users/${params.myId}`)
    return response.json()
}