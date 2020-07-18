import React from 'react';
import { Accordion } from './components/Accordion';
import { Search } from './components/Search';

const items = [
  {
    title: 'What is react',
    content: 'React is a frontend javascript framework',
  },
  {
    title: 'Why use react?',
    content: 'React is a frontend javascript framework',
  },
  {
    title: 'How do you use react?',
    content: 'React is a frontend javascript framework',
  },
];

export default () => {
  return (
    <div className='App'>
      <br></br>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};
