import React from "react";

export default function NewsItem(props){

    const {title,imageUrl,description,newsUrl,date,author} = props;

    let modifiedProps = {
        title: title ? title : "",
        description: description ? description : "",
        imageUrl: imageUrl ? imageUrl : "/images/unavailable.png",
        date: new Date(date).toDateString(),
        author: author ? author : "Unknown"
    }

    return (
        <div className="news-container">
            <div className="img-container">
                <img src={modifiedProps.imageUrl} alt="..." />
            </div>
            <div className="news-content">
                <div className="news-title">
                    <h3>{modifiedProps.title}</h3>
                </div>
                <div className="news-body">
                    <p>{modifiedProps.description}</p>
                </div>
                <div className="news-text">
                    <small>By {modifiedProps.author} on {modifiedProps.date}</small>
                </div>
                <div className="btn">
                    <button><a href={newsUrl} target="_blanck">Read More</a></button>
                </div>
            </div>
        </div>
    )
}