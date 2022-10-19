import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./components/Card";
import "./style/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Favorite from "./components/Favorite";
import { useSelector, useDispatch } from "react-redux";
import { RemoveFromComments } from "./redux/Reducers/CommentReducer";
function App() {
  const [data, setData] = useState();
  const [key, setKey] = useState("home");
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get("./json/content.json").then((response) => setData(response.data));
  }, []);
  const likedItems = JSON.parse(localStorage.getItem("items"));
  // console.log(likedItems);
  // const allComments = JSON.parse(localStorage.getItem("comments"));
  const info =  useSelector((state) => state.comments.userComments)
  // console.log(info);
  // console.log(allComments);
  const handleEdit = (c) => {
  };
  const handleDelete = (c) => {
    dispatch(RemoveFromComments(c));
  };
  return (
    <>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          <div className="container d-flex main">
            {data
              ? data.slice(0, 5).map((d) => <Card item={d} key={d.id} />)
              : "loading..."}
          </div>
        </Tab>
        <Tab eventKey="likes" title="Likes">
          <div className="container d-flex main">
            {likedItems.map((news) => (
              <Favorite item={news} key={news.id} />
            ))}
          </div>
        </Tab>
        <Tab eventKey="comments" title="Comments">
          {info.length>0?
          info.map((c) => (
            <div className="container" key={c.id}>
              <div className="comment d-flex">
                {c.comment}
                <div>
                  <i
                    className="fa-solid fa-pen icon-2"
                    onClick={()=>handleEdit(c)}
                  ></i>
                  <i
                    className="fa-solid fa-trash icon-2"
                    onClick={() => handleDelete(c)}
                  ></i>
                </div>
              </div>
            </div>
          ))
          : "There is no comment"}
        </Tab>
      </Tabs>
    </>
  );
}

export default App;
