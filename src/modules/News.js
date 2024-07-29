import React, { useState, useEffect } from "react";
import NewsItem from "./Newsitem";

import Spinner from "./spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";

const News = (props) => {
  const [articles, setArticle] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, set_TotalResults] = useState(0);

  const update_content = async () => {
    let apiKey = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=22b4b7021898431e9cdcfd7dbbff9474&pageSize=5`;
    const proxyUrl = `https://cors-anywhere.herokuapp.com/${apiKey}`;
    setLoading(true);
    let data = await fetch(proxyUrl);
    let parsedData = await data.json();
    console.log(parsedData.articles);
    setArticle(parsedData.articles);
    set_TotalResults(parsedData.totalResults);
    setLoading(false);
  };
  useEffect(() => {
    update_content();
  }, []);
  const fetchMoreData = async () => {
    setPage(page + 1);
    let apiKey = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=22b4b7021898431e9cdcfd7dbbff9474&page=${page}&pageSize=${props.pageSize}`;
    const proxyUrl = `https://cors-anywhere.herokuapp.com/${apiKey}`;
    setLoading(true);
    let data = await fetch(proxyUrl);
    let parsedData = await data.json();
    setArticle(articles.concat(parsedData.articles));
    set_TotalResults(parsedData.totalResults);
    setLoading(false);
  };
  // showPrevNews=async()=>{
  //   let apiKey=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=22b4b7021898431e9cdcfd7dbbff9474&page=${page-1}&pageSize=${props.pageSize}`;
  //   setState({true})
  //   let data=await fetch(apiKey);
  //   let parsedData=await data.json();

  //   setState({
  //     page:page-1,
  //   articles:parsedData.articles,
  //   false

  //    })
  // }
  // showNextNews=async()=>{

  // if(Math.ceil(page+1>totalResults/20))
  // {

  // }
  // else
  // {
  //   let apiKey=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=22b4b7021898431e9cdcfd7dbbff9474&page=${page+1}&pageSize=${props.pageSize}`;
  //   setState({true})
  //   let data=await fetch(apiKey);
  //   let parsedData=await data.json();

  //   setState({

  //     page:page+1,
  //   articles:parsedData.articles,
  //     false

  //    })
  //   }
  // }

  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto gap-y-16">
      <h1 className="w-[50%] text-center font-radios text-xl bg-fade-black text-white p-4 rounded-lg shadow-lg shadow-black mt-12">
        This is our {props.category} News Headlines
      </h1>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >
        <div className="flex flex-row flex-wrap items-center justify-center w-full pt-10 gap-x-8 gap-y-11">
          {articles && articles.length > 0 ? (
            articles.map((element, index) => (
              <div
                className="transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-black"
                key={index}
              >
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  desc={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                  publishedAt={element.publishedAt}
                />
              </div>
            ))
          ) : (
            <p>No articles available</p>
          )}
        </div>
      </InfiniteScroll>

      <div className="container d-flex justify-content-between">
        <button disabled={page <= 1} type="button" className="btn btn-dark">
          Previous
        </button>
        <button
          disabled={page + 1 >= totalResults / 20}
          type="button"
          className="btn btn-dark"
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default News;
