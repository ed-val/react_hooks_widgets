import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Search = () => {
  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState([]);
  // const [termtwo, setTermTwo] = useState('');

  useEffect(() => {
    console.log(results);
    // given useEffect only accepts a function as a return value
    // one cannot make the function async. Instead a workaround is to handle
    // business inside the normal function, tag it as async and immediately
    // call it, like bellow. Or use promises. O create a fx, assign a var
    // to it and then call it, Your choice.
    const timeoutId = setTimeout(() => {
      if (term) {
        //search only if term !== ''
        (async () => {
          const { data } = await axios.get(
            'https://en.wikipedia.org/w/api.php',
            {
              params: {
                action: 'query',
                list: 'search',
                origin: '*',
                format: 'json',
                srsearch: term,
              },
            }
          );
          setResults(data.query.search);
        })();
      }
    }, 500);
  }, [term]);

  // useEffect(() => {
  //   console.log('I run only once, AFTER component is rendered');
  // }, []);

  // useEffect(() => {
  //   console.log('I run at initial render and after every rerender');
  // });

  // useEffect(() => {
  //   console.log('I run at initial render, after every rerender and IF var term has changed');
  // }, [term]);

  // useEffect(() => {
  //   console.log('I run at initial render, after every rerender and IF var term OR var termtwo have changed');
  // }, [term, termtwo]);

  const renderResults = results.map((result) => {
    return (
      <div key={result.pageid} className='item'>
        <div className='right floated content'>
          <a
            className='ui button'
            href={`http://en.wikipedia.org?curid=${results.pageid}`}
          >
            Go
          </a>
        </div>
        <div className='content'>
          <div className='header'>{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter search term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className='input'
          />
        </div>
      </div>
      <div className='ui celled list'>{renderResults}</div>
    </div>
  );
};
