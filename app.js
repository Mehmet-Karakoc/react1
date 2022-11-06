import axios from 'axios';

export const getData= async(id_number)=>{
    const {data}=await axios ("https://jsonplaceholder.typicode.com/users/"+id_number);
    console.log("userId",data);

    const {data:posts} =await axios("https://jsonplaceholder.typicode.com/posts?userId="+id_number);
    console.log("posts",posts);
};





