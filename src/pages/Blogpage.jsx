import React, { useState, useEffect } from "react";
import axios from "axios";
import cheerio from "cheerio";
import Navbar from "../components/Navbar";
import CountUp from "react-countup";
import Loader from "../components/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart, faArrowRight } from "@fortawesome/free-solid-svg-icons";


function Counter({ endValue, suffix = "" }) {
  return (
    <h2 className="title-font font-medium md:text-4xl text-xl">
      <CountUp end={endValue} duration={3} suffix={suffix} />
    </h2>
  );
}

function Blogpage() {
  const [mainArticles, setMainArticles] = useState([]);
  const [totalReads, setTotalReads] = useState(0); 
  const [highestViews, setHighestViews] = useState(0);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    async function fetchMainArticles() {
      try {
        const articleLinks = [
          "https://www.c-sharpcorner.com/article/ambiguity-resolution-in-cpp-programming/",
          "https://www.c-sharpcorner.com/article/why-python-is-greatest-of-all-time/",
          "https://www.c-sharpcorner.com/article/usage-of-stl-in-cpp-programming2/"
        ];

        const fetchedArticles = await Promise.all(articleLinks.map(async (link) => {
          const response = await axios.get(link);
          const html = response.data;
          const $ = cheerio.load(html);

          const category = $("meta[property='article:section']").attr("content");
          const title = $("meta[property='og:title']").attr("content");
          const description = $("p").eq(2).text().trim();
          let views = parseFloat($("#ViewCounts").text().trim()); 

          const likes = $("#LabelLikeCount").text().trim();

          return {
            category,
            title,
            description,
            views,
            likes,
            link
          };
        }));

        setMainArticles(fetchedArticles);

        const highest = fetchedArticles.reduce((maxViews, article) => {
          return article.views > maxViews ? article.views : maxViews;
        }, 0);

        setHighestViews(highest);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching main articles:", error);
      }
    }

    async function fetchTotalReads() {
      try {
        const authorProfileResponse = await axios.get("https://www.c-sharpcorner.com/members/anmol-arora4");
        const authorHtml = authorProfileResponse.data;
        const $author = cheerio.load(authorHtml);

        const totalReadsStr = $author("#ctl00_ContentMain_AuthorProfile1_TotalReadCount").text().trim();
        const totalReadsInt = parseInt(parseFloat(totalReadsStr) * 1000);

        setTotalReads(totalReadsInt);
      } catch (error) {
        console.error("Error fetching total reads:", error);
      }
    }

    fetchMainArticles();
    fetchTotalReads();
  }, []);

  return (
    <>
      <Navbar />
      <div className="text-white px-4">
        <h1 className="m-4 text-3xl md:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight text-center">
          Read some of my{" "} 
          <span className="dark:text-purple-500 md:underline">
            top notch #1
          </span>{" "}
          articles
        </h1>
        <p className="text-md md:text-lg  md:text-center text-justify font-normal">
          Here you'll find my published articles where I shared insights on
          leveraging programming languages and their tactics as well.
        </p>
        <section className="text-white body-font mt-2">
          <div className="container px-5 mx-auto">
            <div className="flex justify-center text-center">
              <div className="p-4 sm:w-1/4 w-1/2">
                <Counter endValue={totalReads} suffix="+" />
                <p className="leading-relaxed">Reads</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <Counter endValue={mainArticles.length} />
                <p className="leading-relaxed">Articles</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <Counter endValue={Math.round(highestViews * 1000)} suffix="+" />
                <p className="leading-relaxed">Highest</p>
              </div>
            </div>
          </div>
        </section>
        <section className="text-white body-font overflow-hidden">
          <div className={`mx-auto ${loading ? "opacity-0" : "opacity-100 transition-opacity duration-1000 ease-in-out"}`}>
            <div className="flex flex-col md:flex-row">
              {mainArticles.map((article, index) => (
                <div
                  key={index}
                  className="p-12 md:w-1/2 flex flex-col items-start mb-6"
                >
                  <span className="inline-block py-1 px-2 rounded text-yellow-500 text-xs font-medium tracking-widest">
                    {article.category}
                  </span>
                  <h2 className="sm:text-3xl text-2xl title-font font-medium text-white mb-4">
                    {article.title}
                  </h2>
                  <p className="leading-relaxed mb-8">{article.description}</p>
                  <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                    <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-yellow-500 inline-flex items-center cursor-pointer">
                      Read Article
                      <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 ml-2" />
                    </a>
                    <span className="text-gray-200 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-white">
                      <FontAwesomeIcon icon={faEye} className="w-4 h-4 mr-1 text-white" />
                      {article.views}k
                    </span>
                    <span className="text-gray-200 inline-flex items-center leading-none text-sm">
                      <FontAwesomeIcon icon={faHeart} className="w-4 h-4 mr-1 text-white" />
                      {article.likes}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {loading && (
            <div className="flex justify-center mt-12">
              <Loader/>
              
            </div>
          )}
        </section>
      </div>
    </>
  );
}

export default Blogpage;
