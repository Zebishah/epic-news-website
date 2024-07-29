import React from "react";
import { Link } from "react-router-dom";

const NewsItem = (props) => {
  let { title, desc, imgUrl, newsUrl, publishedAt } = props;
  return (
    <Link to={newsUrl}>
      <div className=" bg-[#f0ebeb] h-[35rem] border border-gray-200 rounded-lg shadow max-w-sm p-4 shadow-fade-black border-1 border-black">
        {console.log(imgUrl)}
        <Link to={newsUrl}>
          <img
            src={
              imgUrl !== null
                ? imgUrl
                : "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3BhcGVyfGVufDB8fDB8fHww"
            }
            className="card-img-top"
            alt="..."
            style={{ height: "14rem" }}
          />
        </Link>
        <div className="py-3 ">
          <Link to={newsUrl}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {title}...
            </h5>
          </Link>
          <p className="mb-3 font-normal text-black dark:text-gray-400">
            {desc}...
          </p>
          <p className="mb-3 font-normal text-gray-800">
            {new Date(publishedAt).toGMTString()}
          </p>
          <Link to={newsUrl}>
            <button className="px-3 py-2 text-white bg-blue-600 rounded-lg shadow-lg font-radios ">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </Link>
  );
};
export default NewsItem;
