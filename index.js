import fetch from "node-fetch";
import axios from "axios";

// fetch("https://jsonplaceholder.typicode.com/posts?userId=1").then(res => res.json()).then(data => console.log(data))

async function getData(number){


    return new Promise( async (res, rej) => {
        let {data: users} = await axios(`https://jsonplaceholder.typicode.com/users/${number}`)
    
        let {data: posts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${number}`)

        let userData = [{
            users: users,
            posts: posts[number]
        }]

        res(userData)

    })

}


getData(5).then(data => console.log(data)).catch( e => console.log("error"))