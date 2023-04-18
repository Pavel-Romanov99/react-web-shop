import "./CommentItem.css";

export default function CommentItem({ _id, comment, onDeleteClick }) {
  return (
    <li className="comment-container">
      <div className="comment-info">
        <h6>Thomas Tuchel commented: </h6>
        <p>{comment}</p>
      </div>

      <button
        type="button"
        class="btn btn-dark delete-comment-button"
        onClick={() => onDeleteClick(_id)}
      >
        Delete Comment
      </button>
    </li>
  );
}
