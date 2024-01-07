import React, { useEffect, useState } from 'react';
import { useQuery } from "react-query";


const UseQueryHook = () => {
    let [datas, setDatas] = useState([])

    const fetchUsers = async () => {
        let res = await fetch("https://dummyjson.com/users");
        let userData = await res.json()
        // console.log('res', userData.users)
        // return res.json();
        return userData

    };

    const { data, status } = useQuery("users", fetchUsers);


    if (status === "loading") {
        return <p>Loading...</p>;
    }

    if (status === "error") {
        return <p>Error loading data.</p>;
    }

    console.log('data', data)

    return (
        <>
            {
                data.users.map((ele) => {
                    return (
                        <p key={ele.id}>{ele.email}</p>
                    )
                })
            }
        </>
    )
}

export default UseQueryHook