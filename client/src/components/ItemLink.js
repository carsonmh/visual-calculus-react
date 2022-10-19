import { Link } from 'react-router-dom';
import React from 'react';

function ItemLink({ item }) {
  const [title, setTitle] = React.useState(item);
  return (
    <li class="topics-item">
      <Link to={'/sub-item/' + item}>{title}</Link>
    </li>
  );
}

export default ItemLink;
