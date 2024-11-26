import { useState } from 'react';
export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const handleEdit = () => {
        setIsEditing(true);
    };
    const nameField = <span className="player-name">{name}</span>
    const inputNameField = <input type="text" defaultValue={name} />;
    return (
        <li>
            <span className="player">
                {isEditing? inputNameField : nameField}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdit}>Edit</button>
        </li>
    )
}
