import "./CommentItem.css";

export default function CommentItem({
  _id,
  comment,
  onDeleteClick,
  user_email,
  user,
}) {
  return (
    <li className="comment-container">
      <div className="comment-info">
        <h6>{user_email} commented: </h6>
        <p>{comment}</p>
      </div>

      {user && user_email === user.email && (
        <button
          type="button"
          class="btn btn-dark delete-comment-button"
          onClick={() => onDeleteClick(_id)}
        >
          Delete Comment
        </button>
      )}
    </li>
  );
}
