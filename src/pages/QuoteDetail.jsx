import React from 'react';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
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
  const match = useRouteMatch();

  if (!quote) {
    return <NoQuoteFound />;
  }

  return (
    <>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <Route path={`${match.url}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.url}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
