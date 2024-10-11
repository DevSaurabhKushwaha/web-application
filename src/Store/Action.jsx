import axios from "axios";


export const fetchPosts=()=>
async(dispatch)=>{
    dispatch({
        type : 'FETCH_POSTS_REQUEST'
    });
    try{
        const response = await axios.get(' https://jsonplaceholder.typicode.com/posts');
        console.log(888, response);
        
        dispatch({type : 'FETCH_POSTS_SUCCESS',payload : response.data });
    } catch(error){
        dispatch({type : 'FETCH_POSTS_FAILURE', error})
    };

}
export const removePost=(postId)=>({
    type:'REMOVE_POST',
    payload : postId
})