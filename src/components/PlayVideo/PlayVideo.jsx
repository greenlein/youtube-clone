import "./PlayVideo.css";
import { useState, useEffect } from "react";
import { API_KEY, convertValue } from "../../data";
import moment from "moment";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";

function PlayVideo({ videoId }) {
  const [apiData, setAPIData] = useState(null);

  async function fetchVideoData() {
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then((response) => response.json())
      .then((data) => setAPIData(data.items[0]));
  }

  useEffect(() => {
    fetchVideoData();
  }, []);

  // console.log(apiData.snippet);
  return (
    <div className="play-video">
      {/* <video src={video1} controls autoPlay muted></video> */}
      <iframe
        width="687"
        height="395"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="title"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h3>{apiData ? apiData.snippet.title : "Title Loading"}</h3>
      <div className="play-video-info">
        <p>
          {apiData
            ? convertValue(apiData.statistics.viewCount)
            : "View Count Loading"}
          &nbsp;&bull;&nbsp;
          {apiData
            ? moment(apiData.snippet.publishedAt).fromNow()
            : "Publish Date Loading"}
        </p>
        <div>
          <span>
            <img src={like} alt="" />
            {apiData
              ? convertValue(apiData.statistics.likeCount)
              : "Likes Loading"}
          </span>
          <span>
            <img src={dislike} alt="" />
          </span>
          <span>
            <img src={share} alt="" />
            Share
          </span>
          <span>
            <img src={save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>
            {apiData ? apiData.snippet.channelTitle : "Channel Title Loading"}
          </p>
          <span>1M Subscibers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>
          {apiData
            ? apiData.snippet.description.slice(0, 250)
            : "Description Loading"}
        </p>
        <hr />
        <h4>
          {apiData
            ? convertValue(apiData.statistics.commentCount)
            : "Loading Comment Count"}{" "}
          Comments
        </h4>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              debitis dolorem facere quo! Repellendus placeat nostrum quaerat
              deserunt quae expedita, laudantium error laborum praesentium
              provident quo quidem! Quasi, quia molestias.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              debitis dolorem facere quo! Repellendus placeat nostrum quaerat
              deserunt quae expedita, laudantium error laborum praesentium
              provident quo quidem! Quasi, quia molestias.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayVideo;
