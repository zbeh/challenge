import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddToFavorite } from "../redux/Reducers/FavoriteReducer";
import { AddToComments } from "../redux/Reducers/CommentReducer";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
export default function Card(props) {
  const { item } = props;
  const [show, setShow] = useState(false);
  const [comment, setComment] = useState([]);
  const [id, setId] = useState();
  const dispatch = useDispatch();
  const info = useSelector((state) => state.comments.userComments);
  //   console.log(info);
  const handleLikes = (i) => {
    // console.log(i);
    dispatch(AddToFavorite(i));
  };
  const handleComment = (i) => {
    setShow(true);
    setId(i.id);
  };
  const handleClose = () => setShow(false);
  const handleChange = (e) => {
    setComment({ id: id, comment: e.target.value });
  };
  const handleSave = () => {
    console.log(comment);
    setShow(false);
    dispatch(AddToComments(comment));
    console.log(info);
  };
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
        <div className="icon-container">
          <i
            className="fa-solid fa-heart icon"
            onClick={() => handleLikes(item)}
          ></i>
          <i
            className="fa-solid fa-message icon-2"
            onClick={() => handleComment(item)}
          ></i>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>comments</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea className="text-area" onChange={handleChange}></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
