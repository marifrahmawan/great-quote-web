import React from 'react';
import QuoteList from '../components/quotes/QuoteList';
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

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
