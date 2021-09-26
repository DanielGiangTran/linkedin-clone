import React, { useState, useEffect } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import InputOption from "./InputOption";
import Post from "./Post/Post";
import { db, auth } from "../../firebase";
import firebase from "firebase";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");
  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: "Daniel Tran",
      description: "This is another test",
      message: message,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessage("");
  };

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          date: doc.data(),
        }))
      )
    );
    // const fetchPosts = async () => {
    //   const response = db.collection("posts");
    //   const data = await response.get();
    //   data.docs.forEach((item) => {
    //     console.log(item);
    //     setPosts([...posts, item.data()]);
    //   });
    // };
    // fetchPosts();
  }, []);

  console.log(posts);
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon></CreateIcon>
          <form>
            <input
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              type="text"
            ></input>
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption color="#70B5F9" Icon={ImageIcon} title="Photo" />
          <InputOption color="#E7A33E" Icon={SubscriptionsIcon} title="Photo" />
          <InputOption color="#C0CBCD" Icon={EventNoteIcon} title="Photo" />
          <InputOption
            color="#7FC15E"
            Icon={CalendarViewDayIcon}
            title="Photo"
          />
        </div>
      </div>

      {!posts.length === 0
        ? posts.map(
            ({ id, data: { name, description, message, photoUrl } }) => {
              return (
                <Post
                  name={name}
                  key={id}
                  description={description}
                  message={message}
                  photoUrl={photoUrl}
                />
              );
            }
          )
        : "Loading..."}
    </div>
  );
}

export default Feed;
