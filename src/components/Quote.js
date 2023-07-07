import React, { useEffect, useState } from 'react';
import './quotes.css';

const category = ['success', 'inspirational', 'humor', 'hope', 'home', 'history'];

function getRandomCategory() {
  const randomIndex = Math.floor(Math.random() * category.length);
  return category[randomIndex];
}

function Quotes() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [quote, setQuote] = useState({ quote: '', author: '', category: '' });

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const randomCategory = getRandomCategory();
        const url = `https://api.api-ninjas.com/v1/quotes?category=${randomCategory}`;
        const response = await fetch(url, {
          headers: {
            'X-Api-Key': 'xwgw5/6Xu28wn4UN6tX7zQ==ZBQT8ALAOG4Y3T56',
          },
        });
        if (!response.ok) {
          throw new Error(response.status);
        }
        const data = await response.json();
        setQuote(data[0]);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchQuote();
  }, []);

  if (loading) return <h1>Loading Quote...</h1>;
  if (error) return <h1>404 Not found</h1>;
  return (
    <div className="quotes">
      <h3>{quote.category}</h3>
      <p className="quote">{quote.quote}</p>
      <p className="author">{quote.author}</p>
    </div>
  );
}

export default Quotes;
