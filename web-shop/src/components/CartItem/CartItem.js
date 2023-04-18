export default function CartItem({
  title,
  price,
  imgUrl,
  _id,
  onCartDeleteClick,
  size,
}) {
  const cartDeleteHandler = async (e, id) => {
    e.preventDefault();

    onCartDeleteClick(id);
  };

  return (
    <div className="row border-top border-bottom">
      <div className="row main align-items-center">
        <div className="col-2">
          <img className="img-fluid" src={imgUrl} />
        </div>
        <div className="col">
          <div className="row text-muted">{title}</div>
        </div>
        <div className="col">
          <p>Size: {size}</p>
        </div>
        <div className="col">
          &euro; {price}{" "}
          <span className="close" onClick={(e) => cartDeleteHandler(e, _id)}>
            &#10005;
          </span>
        </div>
      </div>
    </div>
  );
}
