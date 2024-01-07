import React, { useState } from 'react';
import { useContext } from 'react';
import { userContext } from './UseContext';

const Parent = () => {
    let { name } = useContext(userContext)
    console.log(name)

    // const [data, setData] = useState({
    //     name: {
    //         first: "Mohini",
    //         last: "Raut"
    //     },
    //     technical: {
    //         frontend: {
    //             js: {
    //                 stack: ['react']
    //             }
    //         },
    //         backend: {
    //             js: {
    //                 stack: ['node']
    //             },
    //             python: {
    //                 stack: ['Django']
    //             }
    //         }
    //     },
    //     company: [
    //         { name: 'nimap' }
    //     ]
    // })

    const [data, setData] = useState({
        name: "prathamesh",
        stack: {
            frontend: ["react", "html", "css"],
            backend: ["node", "java"]
        },
        company: {
            name: {
                company1: "nimap1",
                company2: "nimap2",
                company3: "nimap3"
            }
        }
    })
    // Create an object
    const myObject = {
        key1: 'value1',
        key2: 'value2'
    };
    console.log(myObject)
    myObject.newKey = 'newValue';
    console.log(myObject)

    let country = [
        {
            name: 'india',
            city: [
                'mumbai',
                'pune'
            ]
        },
        {
            name: 'pak',
            city: [
                'karachi',
                'dhaka'
            ]
        },
        {
            name: 'us',
            city: [
                'las vegas',
                'chacago'
            ]
        }
    ]

    let [code, SetCode] = useState(0)
    console.log(code)
    return (
        <>
            <select onChange={(e) => SetCode(e.target.value)}>
                {
                    country.map((ele, index) => {
                        return (
                            <option value={index}>{ele.name}</option>
                        )
                    })
                }
            </select>
            <select>
                {
                    country[code].city.map((ele) => {
                        return (
                            <option>
                                {ele}
                            </option>
                        )
                    })
                }
            </select>

            {/* <Child></Child> */}
        </>
    )
}

export default Parent