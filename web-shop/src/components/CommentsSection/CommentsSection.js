import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import "./CommentsSection.css";
import * as commentsService from "../../services/commentsService";

import CommentsForm from "../CommentsForm/CommentsForm";
import CommentItem from "../CommentItem/CommentItem";
import { AuthContext } from "../../context/AuthContext";

export default function CommentsSection() {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    commentsService
      .getAllComments()
      .then((res) => res.filter((x) => x.clothing_id === id))
      .then((filteredResults) => setComments(filteredResults));
  }, [id]);

  const commentSubmitHandler = async (data) => {
    const result = await commentsService.addComment(data);

    setComments((current) => [...current, result]);
  };

  const onDeleteClick = async (id) => {
    await commentsService.deleteComment(id);

    setComments((current) => current.filter((x) => x._id !== id));
  };

  return (
    <div className="comments-container">
      <div className="comments-header">
        <h3>Reviews</h3>
        <h6>Leave a review so that others can see</h6>
      </div>
      <hr />

      <ul>
        {comments.map((x) => (
          <div>
            {" "}
            <CommentItem
              key={x._id}
              {...x}
              onDeleteClick={onDeleteClick}
              user={user}
            ></CommentItem>
            <hr />
          </div>
        ))}

        {comments.length === 0 && (
          <h3 className="no-comments-header">
            Be the first one to leave a comment!
          </h3>
        )}
      </ul>

      {user && (
        <div className="comments-form">
          <CommentsForm
            commentSubmitHandler={commentSubmitHandler}
            user={user}
          ></CommentsForm>
        </div>
      )}
    </div>
  );
}
