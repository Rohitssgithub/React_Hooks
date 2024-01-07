import React, { useEffect, useState } from 'react';

function UseEffectHook() {
    const [seconds, setSeconds] = useState(0);

    // This effect increments the seconds state every second
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        // The return function here acts as a cleanup function
        return () => {
            clearInterval(interval); // Clean up the interval when the component unmounts
        };
    }, []); // Empty dependency array means the effect runs only on mount and unmount

    return (
        <div>
            <h1>Timer</h1>
            <p>Seconds: {seconds}</p>
        </div>
    );
}

export default UseEffectHook;


// const UseEffectHook = () => {
//     const [data, SetData] = useState([]);

//     const apiCall = async () => {
//         let data = await fetch('https://jsonplaceholder.typicode.com/users')
//         let fetchData = await data.json();
//         console.log(fetchData)
//         SetData(fetchData)
//     }
//     console.log('called')


//     useEffect(() => {
//         apiCall()
//     }, []);
//     return (
//         <>
//             {
//                 data.map((ele, index) => {
//                     return (
//                         <p key={index}>{ele.name}</p>
//                     )
//                 })
//             }
//         </>
//     )
// }

// export default UseEffectHook