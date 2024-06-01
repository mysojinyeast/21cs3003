import React, { useState } from 'react';
import { mockFetchNumbers } from './mockData'; // Import the mockFetchNumbers function

function App() {
    const [numberType, setNumberType] = useState('');
    const [result, setResult] = useState(null);
    const [numbers, setNumbers] = useState([]);
    const windowSize = 10;

    const handleFetchNumbers = async () => {
        if (!['p', 'f', 'e', 'r'].includes(numberType)) {
            alert('Invalid number type');
            return;
        }

        try {
            const newNumbers = await mockFetchNumbers(numberType); // Use mock function
            const prevState = [...numbers];

            newNumbers.forEach(num => {
                if (!numbers.includes(num)) {
                    if (numbers.length >= windowSize) {
                        numbers.shift();
                    }
                    numbers.push(num);
                }
            });

            const currState = [...numbers];
            const avg = numbers.reduce((a, b) => a + b, 0) / numbers.length;

            setResult({
                windowPrevState: prevState,
                windowCurrState: currState,
                numbers: newNumbers,
                avg: avg
            });
        } catch (error) {
            console.error('Failed to fetch numbers:', error);
            alert(`Failed to fetch numbers: ${error.message}`);
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Average Calculator</h1>
                <input
                    type="text"
                    value={numberType}
                    onChange={(e) => setNumberType(e.target.value)}
                    placeholder="Enter number type (p, f, e, r)"
                />
                <button onClick={handleFetchNumbers}>Fetch Numbers</button>
                {/* Display the result */}
                {result && (
                    <div>
                        <h2>Result</h2>
                        <pre>{JSON.stringify(result, null, 2)}</pre>
                    </div>
                )}
            </header>
        </div>
    );
}

export default App;
