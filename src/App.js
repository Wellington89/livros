import React, { useState } from 'react';

const EbookUploader = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', image);
    formData.append('text', text);
    // Send formData to server for further processing
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <form onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mb-4">Ebook Uploader</h1>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleTitleChange}
            className="w-full border border-gray-400 p-2 rounded-lg"
            placeholder="Enter title"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept=".jpg,.jpeg,.png"
            onChange={handleImageChange}
            className="w-full border border-gray-400 p-2 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="text" className="block text-gray-700 font-bold mb-2">
            Text
          </label>
          <textarea
            id="text"
            name="text"
            value={text}
            onChange={handleTextChange}
            rows="5"
            className="w-full border border-gray-400 p-2 rounded-lg"
            placeholder="Enter text"
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
          >
            Upload Ebook
          </button>
        </div>
      </form>
    </div>
  );
};

export default EbookUploader;