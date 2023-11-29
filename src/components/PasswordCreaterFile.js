import React, { useState } from 'react';

function PasswordCreaterFile() {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [timestamp, setTimestamp] = useState('');
    const [response, setResponse] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const body = JSON.stringify({ title, text, timestamp });
            const response = await fetch('https://enbw2hnly8.execute-api.us-east-1.amazonaws.com/prod/myDiary', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ body })
            });
            const data = await response.json();
            setResponse(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="diary-entry-form">
            <h2>Create Diary Entry</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Text:</label>
                    <textarea value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <div>
                    <label>Timestamp:</label>
                    <input type="datetime-local" value={timestamp} onChange={(e) => setTimestamp(e.target.value)} />
                </div>
                <button type="submit">Submit</button>
            </form>
            {response && <div className="response">{JSON.stringify(response)}</div>}
        </div>
    );
}

export default PasswordCreaterFile;
