import React, { useState, useEffect } from "react";
import { useLocation, useParams, useHistory } from "react-router-dom";
import axiosWithAuth from '../renter/utils/axiosWithAuth'
import axios from "axios";

const initialItem = {
  name: "",
  price: "",
  imageUrl: "",
  description: "",
};

const UpdateItem = props => {
  const location = useLocation();
  const params = useParams();
  const { push } = useHistory();
  const [item, setItem] = useState(initialItem);

  useEffect(() => {
    if (location.state) {
      setItem(location.state);
    } else {
        axiosWithAuth()
            .get(`/items/item/${itemId}`)
            .then(res => setItem(res.data))
            .catch(err => console.log(err));
    }
  }, []);

  const changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;
    setItem({
      ...item,
      [ev.target.name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/items/item/${itemid}`, item)
      .then(res => {
        props.setItems(res.data);
        push(`/renter-dashboard/${item.id}`);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h2>Update Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={changeHandler}
          placeholder="name"
          value={item.name}
        />

        <input
          type="number"
          name="price"
          onChange={changeHandler}
          placeholder="Price"
          value={item.price}
        />

        <input
          type="string"
          name="imageUrl"
          onChange={changeHandler}
          placeholder="Image"
          value={item.imageUrl}
        />

        <input
          type="string"
          name="description"
          onChange={changeHandler}
          placeholder="Description"
          value={item.description}
        />

        <button>Update</button>
      </form>
    </div>
  );
};

export default UpdateItem;
