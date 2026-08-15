import "./PlayVideo.css";
import { useState, useEffect } from "react";
import { API_KEY, convertValue } from "../../data";
import DOMPurify from "dompurify";
import moment from "moment";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
import { useParams } from "react-router-dom";

function PlayVideo() {
  const { videoId } = useParams();
  const [apiData, setAPIData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState(null);

  async function fetchVideoData() {
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then((response) => response.json())
      .then((data) => setAPIData(data.items[0]));
  }

  async function fetchOtherData() {
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelData_url)
      .then((response) => response.json())
      .then((data) => setChannelData(data.items[0]));

    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;
    await fetch(comment_url)
      .then((response) => response.json())
      .then((data) => setCommentData(data.items));
  }

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    if (apiData) {
      fetchOtherData();
    }
  }, [apiData]);

  return (
    <div className="play-video">
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
        <img
          src={
            channelData
              ? channelData.snippet.thumbnails.default.url
              : "Loading Channel Data"
          }
          alt=""
        />
        <div>
          <p>
            {apiData ? apiData.snippet.channelTitle : "Channel Title Loading"}
          </p>
          <span>
            {channelData
              ? convertValue(channelData.statistics.subscriberCount)
              : "Loading"}{" "}
            Subscibers
          </span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>
          {apiData
            ? apiData.snippet.description
            : "Description Loading"}
        </p>
        <hr />
        <h4>
          {apiData
            ? convertValue(apiData.statistics.commentCount)
            : "Loading Comment Count"}{" "}
          Comments
        </h4>
        {commentData &&
          commentData.map((item, index) => {
            return (
              <div key={index} className="comment">
                <img
                  src={
                    item.snippet.topLevelComment.snippet.authorProfileImageUrl
                  }
                  alt=""
                />
                <div>
                  <h3>
                    {item.snippet.topLevelComment.snippet.authorDisplayName}{" "}
                    <span>1 day ago</span>
                  </h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        item.snippet.topLevelComment.snippet.textDisplay,
                      ),
                    }}
                  />
                  <div className="comment-action">
                    <img src={like} alt="" />
                    <span>
                      {convertValue(
                        item.snippet.topLevelComment.snippet.likeCount,
                      )}
                    </span>
                    <img src={dislike} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default PlayVideo;
