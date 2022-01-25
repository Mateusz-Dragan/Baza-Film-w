import React, {Component, useEffect, useState} from "react";
import "./styles/movie.css";
import movie from "./images/movie2.jpg"
import {useParams} from "react-router-dom";

const Movie=() =>{
    let { id } = useParams();
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");

    fetch("https://pr-movies.herokuapp.com/api/movies/" + id)
        .then((res) => res.json())
        .then((json) => {
            console.log(id)
            setTitle(json.title);
            setImage(json.image);
            setContent(json.content);
        });
        return (
            <div className="movieDetailsContainer">
                <div className="detailsContainer">
                    <div className="titleContainer">
                        <p className="title">{title}</p>
                    </div>
                    <div className="pic">
                        <img src={image} alt="movie"/>
                    </div>
                    <div className="descriptionContainer">
                        <p className="details">{content}</p>
                    </div>
                    <div className="ratingContainer">
                        <p className="rating">Rating: ?/10</p>
                    </div>
                </div>
            </div>

        );
    }


export default Movie;

