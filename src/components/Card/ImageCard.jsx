import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import "./ImageCard.scss";

export default function ImageCard({
  id,
  url,
  alt_description,
  profile_image,
  first_name,
  last_name,
  username,
  instagram,
  twitter,
  likes,
  tags,
  download,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="card-container" onClick={handleOpen}>
        <img key={id} src={url} alt={alt_description} className="card-image" />
        <div className="card-content">
          <div className="user-info">
            <img src={profile_image} alt={first_name} />
            <div className="user-name">
              <h4>
                {first_name} {last_name}
              </h4>
              <p>@{username}</p>
            </div>
          </div>
          <div className="likes">
            <img src="/images/like.svg" alt="like" />
            {likes / 1000 > 1 ? `${(likes / 1000).toFixed(1)}k` : likes}
          </div>
        </div>
      </div>

      <Modal open={open} onClose={handleClose}>
        <div className="popup-container">
          <div className="image-container">
            <img src={url} alt={alt_description} />
            <button>Download Image</button>
          </div>
          <div className="info">
            <div className="info-user">
              <img src={profile_image} alt={first_name} />
              <div className="info-user-name">
                <p>
                  {first_name} {last_name}
                </p>
                <p>@{username}</p>
              </div>
              <div className="instagram">
                <img src="/images/instagram.svg" alt="instagram" />
                <span>/{instagram}</span>
              </div>
              <div className="twitter">
                <img src="/images/twitter.svg" alt="twitter" />
                <span>/{twitter}</span>
              </div>
              <div className="downloads">
                {likes / 1000 > 1 ? `${likes / 1000}k` : likes}{" "}
                <span>downloads</span>
              </div>
              <div className="likes">
                <img src="/images/like.svg" alt="like" />
                {likes / 1000 > 1 ? `${likes / 1000}k` : likes}
              </div>
            </div>

            <div className="tags">
              <h2>Related Tags</h2>
              {tags.map((tag) => (
                <div className="tag" key={tag}>
                  <span>{tag.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
