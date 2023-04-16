export default function ItemCard({ imgUrl, title }) {
  return (
    <div className="card">
      <img className="card-img-top" src={imgUrl} alt="Card image cap" />
      <div className="card-body">
        <p className="card-text">{title}</p>
      </div>
    </div>
  );
}
