import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyAllPassFiles() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [snsData, setSnsData] = useState(null);

  useEffect(() => {
    axios.post('https://1n5q6nc7dc.execute-api.us-east-1.amazonaws.com/prod/getDiary')
      .then(response => {
        const entryList = JSON.parse(response.data.body);
        setEntries(entryList);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const fetchSnsData = () => {
    axios.post('https://j2zdftnuw4.execute-api.us-east-1.amazonaws.com/prod/getAllSNS')
      .then(response => {
        // Assuming the response is the data you want to display
        setSnsData(response.data);
      })
      .catch(error => console.error('Error fetching SNS data:', error));
  };

  if (loading) return <p>Loading diary entries...</p>;

  return (
    <div>
      <h2>Diary Entries</h2>
      {entries.length === 0 ? (
        <p>No entries found.</p>
      ) : (
        <ul>
          {entries.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      )}
      <button onClick={fetchSnsData}>Fetch SNS Data</button>
      {snsData && <div>
        <h3>SNS Data:</h3>
        <p>{JSON.stringify(snsData)}</p>
      </div>}
    </div>
  );
}

export default MyAllPassFiles;
