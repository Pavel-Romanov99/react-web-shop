import { useForm } from "../../hooks/useForm";
import { useParams } from "react-router-dom";

import "./CommentsForm.css";

export default function CommentsForm({ commentSubmitHandler, user }) {
  const { id } = useParams();

  const { values, onChange, onSubmit } = useForm(
    {
      comment: "",
      clothing_id: id,
      user_email: user.email,
    },
    commentSubmitHandler
  );

  return (
    <form onSubmit={onSubmit} className="comments-form">
      <div className="form-group"></div>
      <div className="form-group">
        <label for="exampleInputPassword1" className="comment-label">
          <h5>Leave your personalised comment</h5>
        </label>
        <input
          id="comments-input"
          type="text"
          className="form-control"
          placeholder="Comment Section"
          name="comment"
          value={values.comment}
          onChange={onChange}
        />
      </div>
      <button type="submit" className="btn btn-dark">
        Leave your review!
      </button>
    </form>
  );
}
