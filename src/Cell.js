import React from 'react'

function Cell({ id, turn, setTurn, cells, setCells, winner }) {
    const clickHandler = (e) => {
        if (!winner && e.target.innerText === '') {
            if (turn === 'circle') {
                e.target.innerText = '⭕';
                cellHandler('circle');
                setTurn('cross');
            }
            if (turn === 'cross') {
                e.target.innerText = '❌';
                cellHandler('cross');
                setTurn('circle');
            }
        }
    }
    const cellHandler = (currentCell) => {
        let updatedCells = cells.map((cell, index) => {
            if (index === id) return currentCell;
            else return cell;
        })
        setCells(updatedCells);
    }
    return (
        <div className='cell' id={id} onClick={clickHandler}></div>
    )

}

export default Cell;