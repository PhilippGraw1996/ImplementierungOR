import React, { useState } from 'react';
import axios from 'axios';

const ElasticsearchSearch = () => {
  const [results, setResults] = useState([]);

  // Elasticsearch-Cluster-URL
  const clusterUrl = 'http://pg-elastic.abraakie.com/';

  // Indexname und Dokumenttyp
  const indexName = 'all_regular_user_trips';
  const documentType = '_doc';

  const search = async (query) => {
    try {
      const response = await axios.get(`${clusterUrl}/${indexName}/${documentType}/_search?q=${query}`);
      setResults(response.data.hits.hits);
    } catch (error) {
      console.error('Fehler bei der Suche:', error);
      setResults([]);
    }
  };

  return (
    <div>
      <input type="text" onChange={(e) => search(e.target.value)} />
      <ul>
        {results.map((result) => (
          <li key={result._id}>{result._source}</li>
        ))}
      </ul>
    </div>
  );
};

export default ElasticsearchSearch;