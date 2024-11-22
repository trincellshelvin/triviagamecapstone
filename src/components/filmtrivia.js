import { useEffect, useState } from 'react';

export default function TriviaComponent() {
    const [triviaData, setTriviaData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data from the API
        const fetchData = async () => {
            try {
                const response = await fetch('https://opentdb.com/api.php?amount=10&category=11');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setTriviaData(data.results);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Trivia Questions</h1>
            <ul>
                {triviaData.map((item, index) => (
                    <li key={index}>
                        <p><strong>Question:</strong> {item.question}</p>
                        <p><strong>Category:</strong> {item.category}</p>
                        <p><strong>Difficulty:</strong> {item.difficulty}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
