import React from 'react';
import { Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import NoQuoteFound from '../components/quotes/NoQuotesFound';
const DUMMY_QUOTES = [
  {
    id: 'q1',
    author: 'Arif',
    text: 'Sabar adalah kunci',
  },
  {
    id: 'q2',
    author: 'Kiki',
    text: 'Kunci nya sabar',
  },
];

const QuoteDetail = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <NoQuoteFound />;
  }

  return (
    <>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
