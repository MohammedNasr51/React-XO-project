import { useState } from 'react';
export default function Player({ initialName, symbol, isActive }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newPlayerName, setNewPlayerName] = useState(initialName);
    const handleEditClick = () => {
        setIsEditing((editing) => !editing);
    };
    const handleChangeName = (event) => {
        setNewPlayerName(event.target.value);
    }
    let PlayerName = <span className="player-name">{newPlayerName}</span>;

    if (isEditing) {
        PlayerName = <input type="text" defaultValue={newPlayerName} onChange={handleChangeName} />;
    }
    return (
        <li className={ isActive ? 'active': undefined}>
            <span className="player">
                {PlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}
