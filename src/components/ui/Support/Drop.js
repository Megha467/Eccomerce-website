import React from 'react';
import '../../../Styles/Drop.css';

export default function Drop() {
  return <div>
<div className="container">
  <button type="button" class="button">
    ☰
  </button>
  <div class="dropdown">
    <ul>
      <li>Option 1</li>
      <li>Option 2</li>
      <li>Option 3</li>
      <li>Option 4</li>
    </ul>
  </div>
</div>
  </div>;
}
