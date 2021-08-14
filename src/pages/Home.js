import axios from 'axios';
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MediaCard from '../components/MediaCard';
import LoadingComp from "../components/LoadingComp";
const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  
const Home = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState('');
    const [posts,setPosts] = useState([]);
    const [loading,setLoading] = useState(false);

    //Handling the input data
    var handleChange=(event)=>{
        setValue(event.target.value)
      }
    // Handling the submitted data
    var handleSubmit=async ()=>{
        setLoading(true)
        var res = await axios.get(`https://hn.algolia.com/api/v1/search?query=${value}`);
        // console.log(res.data.hits);
        setPosts(res.data.hits);
        setLoading(false)
    }
    return (
        <div className="App">
            {/* Input part */}
            <form className={classes.root} noValidate autoComplete="off">
                <div className="inputBox">
                    <TextField
                        id="standard-multiline-flexible"
                        label="Search Here"
                        multiline
                        maxRows={4}
                        value={value}
                        onChange={handleChange}
                    /> 
                    </div>
            </form>
            <button className="button" onClick={handleSubmit}>
                Go
            </button>
        {(loading)?(<LoadingComp />):( <div className="list" >
                {posts.map((post)=>{
                    var props={title:post.title,author:post.author,id:post.objectID};
                    console.log(props);
                    if(props.title ==null ){
                        return false
                    }
                    else if(props.author==null){
                        return false;
                    }
                    return <MediaCard key={post.objectID} props={props} />
                })}
            </div>)}
        </div>
    )
}

export default Home
