import React from 'react';
import ElasticSearch from './ElasticSearch';

const ShowQuerieResults = () => {
  return (
    <div style={{marginTop: 200, marginLeft: 300}}>
      <h1>Elasticsearch-Suche</h1>
      <ElasticSearch/>
    </div>
  );
};

export default ShowQuerieResults;