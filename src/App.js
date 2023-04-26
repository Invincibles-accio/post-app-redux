import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {fetchData} from './actions';




// dispatch  => useDispacth

// store => get data from store => getState => useSelector 

let post_style = {
    border: "1px solid black",
    margin: "10px",
    padding: "10px",
    bacground: "lightgray"
}


const App = () => {
     const loading  = useSelector((state) =>state.data.loading)
     const data  = useSelector((state) =>state.data.data)
     const error = useSelector((state) =>state.data.error)
    
      const dispatch = useDispatch()
    
     useEffect(() =>{
          dispatch(fetchData())
     }, [dispatch]
     )
    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>Error: {error}</h1>
    }

    return(
      <div>
           <h1>Posts</h1>
           {
              data.map((post, index) =>
                  
                 <div key={post.id} style={post_style}> 
                      <h2>{post.title}</h2>
                      <p>{post.body}</p>
                 </div>
                
                )
           }
      </div>
    )
}

export default App










// state = {
//     data: {
 //   loading: true,
//    data: [],
//    error: ""
//},
//     
//   }