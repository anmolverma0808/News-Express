import React from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default function News(props){

    const [articles,setArticles] = React.useState([]);
    // const [allNews,setAllNews] = React.useState(0);
    const [loading,setLoading] = React.useState(false);

    function updateNews(){

        // let content = `country=${props.country}&category=${props.category}`;
        // if(props.search)
        //     content = `q=${props.search}`;
    
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ee9f5d7a11374429b2e50ae1b7b154dd`

        setLoading(true)
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            // setAllNews(data)
            setArticles(data.articles)
            setLoading(false)
        })
    }

    React.useEffect(() => {
        updateNews();
    },[])

    const newsEl = articles.map((item) => {
        return <NewsItem 
                    imageUrl={item.urlToImage}
                    title={item.title}
                    description={item.description}
                    newsUrl={item.url}
                    author={item.author}
                    date={item.publishedAt}
                />
    })
    
    return (
        <div>
            <h1 className='categories-title'>Top - Headlines</h1>
            {loading && <Spinner />}
            <div className="container">
                {newsEl}
            </div>
        </div>
    )
}