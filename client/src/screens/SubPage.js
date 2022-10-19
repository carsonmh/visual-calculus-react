import React from 'react';
import { useParams } from 'react-router-dom';

import Visualization from '../components/Visualization';

function SubPage() {
  const { item } = useParams();
  const [title, setTitle] = React.useState(item);
  return (
    <div class="element">
      <h1 class="element-header">{title}</h1>
      <Visualization item={item} />
    </div>
  );
}

export default SubPage;
