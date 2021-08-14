import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import LoadingComp from "../components/LoadingComp";

const PostDetails = () => {
    const [loading,setLoading] = useState(false);
    const [result,setResult] = useState({title:"",points:0,comments:[{}]});
    const { id } = useParams();
    useEffect(async()=>{
        setLoading(true);
        console.log(loading);
        var res = await axios.get(`http://hn.algolia.com/api/v1/items/${id}`)
        // console.log(res);
        setResult({title:res.data.title,points:res.data.points,comments:res.data.children});
        setLoading(false);
    },[]);
    return (loading)?(<LoadingComp />):(
        <div className="post">
            <div className="post_head">
                <div className="post_title">
                    <p className="highlight">Title-</p>{result.title}
                </div>
                <div className="post_points">
                    <p className="highlight">Points-</p>{result.points}
                </div>
            </div>
            <div className="comments">
                <div className="comments_heading">
                    COMMENTS-
                </div>
                <ol>
                    {result.comments.map((comment)=>{
                        if(comment.author===null){
                            return false;
                        }
                        return<li className="individual_comment">
                            <a className="highlight">@{comment.author}-</a><p >{comment.text}</p>
                        </li>
                    })}
                </ol>
            </div>
        </div>
    )
}

export default PostDetails
