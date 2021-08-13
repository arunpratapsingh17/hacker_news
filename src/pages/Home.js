import axios from 'axios';
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MediaCard from '../components/MediaCard';
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

    //Handling the input data
    var handleChange=(event)=>{
        setValue(event.target.value)
      }
    // Handling the submitted data
    var handleSubmit=async ()=>{
        var res = await axios.get(`http://hn.algolia.com/api/v1/search?query=${value}`);
        // console.log(res.data.hits);
        setPosts(res.data.hits)
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
            <div className="list" >
                {posts.map((post)=>{
                    var props={title:post.title,author:post.author,id:post.objectID};
                    // console.log(props);
                    return <MediaCard key={post.objectID} props={props} />
                })}
            </div>
        </div>
    )
}

export default Home
