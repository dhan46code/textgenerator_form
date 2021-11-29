import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import data_generate from './lorem_data';
import { IoMdRefresh } from 'react-icons/io';

const App = () => {
  // default input is 0
  const [count, setCount] = useState(0);
  const [textGenerate, setTextGenerate] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let num = Number(count);
    if (count <= 0) {
      num = 0;
    }
    if (count >= 5) {
      num = 5;
    }
    setTextGenerate(data_generate.slice(0, num));
  };
  return (
    <section>
      <h2 className='title'>Lorem Ipsum</h2>
      <form onSubmit={handleSubmit}>
        <div className='form'>
          <label htmlFor='text'>lorem generate</label>
          <input
            type='number'
            id='paragraph'
            name='paragraph'
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button className='btn'>Show</button>
        </div>
      </form>
      <article>
        {/* display textGenerate */}
        {textGenerate.map((text, index) => {
          return <p key={index}>{text}</p>;
        })}
      </article>

      {count <= -1 && (
        <article>
          <div className='icon-warning'>
            <IoMdRefresh className='refresh-icon' onClick={() => setCount(1)} />
            <p>Sorry, minimum generate is 1</p>
          </div>
        </article>
      )}
    </section>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
