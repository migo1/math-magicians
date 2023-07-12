import React, { useEffect, useState } from 'react';
import './quotes.css';

function Quotes() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [quote, setQuote] = useState({ quote: '', author: '', category: '' });

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const url = 'https://api.api-ninjas.com/v1/quotes?category=success';
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
    <div className="quotes-wrapper">
      <div className="quotes">
        <h2 className="quote-category">{quote.category}</h2>
        <p className="quote">{quote.quote}</p>
        <p className="author">{quote.author}</p>
      </div>
    </div>
  );
}

export default Quotes;
