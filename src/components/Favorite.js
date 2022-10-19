import React from "react";
export default function Favorite(props) {
  const { item } = props;
  return (
    <>
      <div className="card-container">
        <div className="image-container">
          <img
            src={item.image}
            alt="مشکل در نمایش تصویر"
            width="100%"
            height="250px"
          />
        </div>
        <div>
          <p className="content">{item.title}</p>
          <p className="summary">{item.summary}</p>
        </div>
      </div>
    </>
  );
}
