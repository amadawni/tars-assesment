import React, { useState, useEffect } from "react";
import { createApi } from "unsplash-js";
import { Navbar, ImageCard, Header } from "./components";
import ImageList from "@mui/material/ImageList";
import InfiniteScroll from "react-infinite-scroll-component";
import "./App.scss";

const unsplash = new createApi({
  accessKey: "a8-ux6ODa4vrSksiiruKv4nXV3ZPLq8_OJdl0Y6OjJ8",
  secret: "MoeaFW_9n3nr6UEvRlPnYTagU8-IxlFj2l8EJSC7GF0",
  timeout: 500,
});

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("explore");
  const [currentPage, setCurrentPage] = useState(1);

  const onSubmit = (e) => {
    e.preventDefault();
    setQuery(e.target.query.value);
  };

  const fetchImages = async () => {
    try {
      const res = await unsplash.search.getPhotos({
        query: query,
        per_page: 20,
        page: currentPage,
      });
      setImages((prev) => [...prev, ...res.response.results]);
      setCurrentPage(currentPage + 1);
      return res;
    } catch (error) {
      console.log("Something went wront!", error);
      return null;
    }
  };

  useEffect(() => {
    setImages([]);
    setCurrentPage(1);
    fetchImages();
  }, [query]);

  console.log(images);

  return (
    <div className="App">
      <Navbar onSubmit={onSubmit} />
      {query === "explore" ? (
        <Header onSubmit={onSubmit} />
      ) : (
        <h1> {query} </h1>
      )}

      <div className="image-gallery">
        <InfiniteScroll
          dataLength={images.length} //This is important field to render the next data
          next={fetchImages}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <ImageList variant="masonry" cols={3} gap={8}>
            {images ? (
              images.map((image) => (
                <ImageCard
                  id={image.id}
                  height={image.height}
                  width={image.width}
                  url={image.urls.regular}
                  alt_description={image.alt_description}
                  profile_image={image.user.profile_image.medium}
                  first_name={image.user.first_name}
                  last_name={image.user.last_name}
                  username={image.user.username}
                  instagram={image.user.social.instagram_username}
                  twitter={image.user.social.twitter_username}
                  likes={image.likes}
                  tags={image.tags}
                  download={image.links.download}
                />
              ))
            ) : (
              <div className="loading">Loading...</div>
            )}
          </ImageList>
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default App;
