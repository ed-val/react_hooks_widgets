import React, { useState } from 'react';

export const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onListItemClick = (index) => {};

  const renderItems = () => {
    return items.map((item, i) => {
      const active = i === activeIndex ? 'active' : '';
      return (
        // react.fragment is just a way to wrap components without the need of having to use
        // Jsx components, can also be written like <></>
        <React.Fragment key={i.toString()}>
          <div onClick={() => setActiveIndex(i)} className={`title ${active}`}>
            <i className='dropdown icon'></i>
            {item.title}
          </div>
          <div className={`content ${active}`}>
            <p>{item.content}</p>
          </div>
        </React.Fragment>
      );
    });
  };
  return <div className='ui styled accordion'>{renderItems()}</div>;
};
