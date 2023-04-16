import "./ClothingForm.css";

import { useForm } from "../../hooks/useForm";

export default function ClothingForm({ onSupplementsSubmitClick }) {
  const { values, onChange, onSubmit } = useForm(
    {
      title: "",
      imgUrl: "",
      description: "",
    },
    onSupplementsSubmitClick
  );

  return (
    <form onSubmit={onSubmit}>
      <h1>Create a new piece of clothing</h1>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="clothing name"
          name="title"
          value={values.title}
          onChange={onChange}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Image Url"
          name="imgUrl"
          value={values.imgUrl}
          onChange={onChange}
        />
      </div>

      <div className="form-group">
        <textarea
          className="form-control"
          rows="3"
          placeholder="decription"
          name="description"
          value={values.description}
          onChange={onChange}
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
