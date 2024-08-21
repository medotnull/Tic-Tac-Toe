import React, { useState } from 'react';
import './TicTacToe.css';
import circle_icon from '../Assets/o.png';
import cross_icon from '../Assets/x.png';

const TicTacToe = () => {
    const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);

    const toggle = (num) => {
        if (lock || data[num]) {
            return;
        }

        const newData = [...data];
        newData[num] = count % 2 === 0 ? 'x' : 'o';
        setData(newData);
        setCount(count + 1);
        checkWin(newData);
    };

    const checkWin = (newData) => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]  // Diagonals
        ];

        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (newData[a] && newData[a] === newData[b] && newData[a] === newData[c]) {
                setLock(true);
                return;
            }
        }
    };

    const resetGame = () => {
        setData(["", "", "", "", "", "", "", "", ""]);
        setCount(0);
        setLock(false);
    };

    return (
        <div className='container'>
            <h1 className='title'>
                Tic Tac Toe Game In <span>React</span>
            </h1>
            <div className="board">
                {data.map((value, index) => (
                    <div key={index} className="boxes" onClick={() => toggle(index)}>
                        {value && <img src={value === 'x' ? cross_icon : circle_icon} alt={value} />}
                    </div>
                ))}
            </div>
            <button className='reset' onClick={resetGame}>Reset</button>
        </div>
    );
}

export default TicTacToe;
