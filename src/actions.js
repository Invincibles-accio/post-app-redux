import { FETCH_DATA_REQUEST,FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE } from "./actionTypes";
import axios from "axios";

// let initialState = {
//     loading: true,
//     data: [],
//     error: ""
// }

export const fetchDataRequest = () => ({
    type: FETCH_DATA_REQUEST
})

export const fetchDataSuccess = (data) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data
})

export const fetchDataFailure = (error) => ({
    type: FETCH_DATA_FAILURE,
    payload: error
})



export const fetchData = () => async (dispatch) => {
    dispatch(fetchDataRequest)
    try{
        const reponse = await axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
        dispatch(fetchDataSuccess(reponse.data))
    }
    catch(error){
        dispatch(fetchDataFailure(error.message))

        // error.name 
        // error.message
    }
}
// 1: 