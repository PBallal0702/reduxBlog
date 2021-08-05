import jsonplaceholder from "../apis/jsonplaceholder"
import _ from 'lodash';
export const fetchPost = ()=>{
   return async (dispatch)  =>{
       const response = await jsonplaceholder.get('/posts');
       dispatch({
        type:"FETCH_POST",
        payload:response.data
    })
   }
}

export const fetchUser =function(id){
    return _.memoize( async function(dispatch){
            const Uresponse = await jsonplaceholder.get('/users/'+id);
            
            dispatch({
                type:"FETCH_USER",
                payload:Uresponse.data  
            })
        })
    
};