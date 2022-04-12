import { useState } from "react";
import axios from "axios";
function App() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("articleImage", image);

    setTitle("");
    setImage("");
    setDescription("");

    axios({
      method: "post",
      url: "/api/v1/article",
      data: formData,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onInputChange = (e) => {
    setImage(e.target.files[0]);
  };
  return (
    <section>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-3"></div>
          <div className="col-lg-6 p-5 border border-2">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="article title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">
                  Upload article image
                </label>
                <input
                  className="form-control"
                  onChange={onInputChange}
                  type="file"
                  id="formFile"
                  filename="articleImage"
                />
              </div>
              <button className="btn btn-warning " type="submit">
                Upload
              </button>
            </form>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
    </section>
  );
}

export default App;
