import "./Homepage.css";

import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div id="jumbotron-container">
      <div className="main-jumbotron">
        <div className="left-side-main-jumbotron">
          <h2>Висококачествени хранителни добавки за по-добър живот</h2>
          <p>
            Подобри тонуса и визията си с висококачествени добавки, които не
            само са полезни, но и имат неповторим вкус.
          </p>
          <button type="button" class="btn btn-primary">
            <Link className="button-link" to={"/supplements"}>
              Виж добавките
            </Link>
          </button>
        </div>
        <div className="right-side-main-jumbotron"></div>
      </div>

      <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 p-5 text-bg-dark rounded-3">
            <h2>Change the background</h2>
            <p>
              Swap the background-color utility and add a `.text-*` color
              utility to mix up the jumbotron look. Then, mix and match with
              additional component themes and more.
            </p>
            <button className="btn btn-outline-light" type="button">
              Example button
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 p-5 bg-body-tertiary border rounded-3">
            <h2>Add borders</h2>
            <p>
              Or, keep it light and add a border for some added definition to
              the boundaries of your content. Be sure to look under the hood at
              the source HTML here as we've adjusted the alignment and sizing of
              both column's content for equal-height.
            </p>
            <button className="btn btn-outline-secondary" type="button">
              Example button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
