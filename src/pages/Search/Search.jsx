import React, { useState, useEffect } from "react";
import { API_KEY } from "../../data";
import { useSearchParams, Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import { convertValue } from "../../data";
import moment from "moment";
import fakeVideoSearch from "../../assets/fakeVideoSearch.json";

function Search({ sidebar }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search_query");
  const [searchList, setSearchList] = useState(null);
  const [videoData, setVideoData] = useState(null);
  let finalSearchList = [];

  function fetchSearchList() {
    // Fake Search List
    setSearchList(fakeVideoSearch.items);
  }

  // async function fetchSearchList() {
  //   const videoList_url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=${API_KEY}`;
  //   await fetch(videoList_url)
  //     .then((response) => response.json())
  //     .then((data) => setSearchList(data.items));
  // }

  async function fetchVideoData(ids) {
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id=${ids}&key=${API_KEY}`;
    try {
      await fetch(videoDetails_url)
        .then((response) => response.json())
        .then((data) => {
          const map = {};
          data.items.forEach((video) => {
            map[video.id] = video;
          });
          setVideoData(map);
        });
    } catch {
      setVideoData({});
    }
  }

  useEffect(() => {
    fetchSearchList();
  }, [searchQuery]);

  useEffect(() => {
    if (searchList) {
      const ids = searchList
        .filter((item) => item.id.kind === "youtube#video")
        .map((item) => item.id.videoId)
        .join(",");
      if (ids) fetchVideoData(ids);
    }
  }, [searchList]);

  console.log(searchQuery);
  console.log(searchList && videoData);

  return (
    <div>
      <Sidebar sidebar={sidebar} />
      <div className="container large-container">
        <div className="feed">
          {searchList &&
            videoData &&
            searchList
              .filter((item) => item.id.kind === "youtube#video")
              .map((item) => {
                const stats = videoData[item.id.videoId];
                if (!stats) return null;

                return (
                  <Link
                    to={`/video/${item.snippet.categoryId}/${item.id.videoId}`}
                    className="card"
                    key={item.id.videoId}
                  >
                    <img src={item.snippet.thumbnails.medium.url} alt="" />
                    <h2>{item.snippet.title}</h2>
                    <pre>
                      {convertValue(stats.statistics.viewCount)} Views
                      &bull;&nbsp;
                      {moment(item.snippet.publishedAt).fromNow()}
                    </pre>
                    <h3>{item.snippet.channelTitle}</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Amet aliquid necessitatibus aut. Maxime labore
                      aliquam{" "}
                    </p>
                  </Link>
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default Search;
