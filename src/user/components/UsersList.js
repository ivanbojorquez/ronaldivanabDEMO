import React from 'react';
import './UsersList.css';
//Importamos el UserItem
import UserItem from './UserItem';

const UsersList = (props, a, b) => {
    if(props.items.length === 0){
        return(
            <div className="center">
                <h2>No se han econtrado usuarios!</h2>
            </div>

        );
    } else {
        return(
            <ul className="users-list">
                {props.items.map(user => {
                    return(
                        <UserItem
                            key={user.id}
                            id={user.id}
                            image={user.image}
                            name={user.name}
                            placeCount={user.places}
                        />
                    );
                })}
            </ul>

        );
    }
}
export default UsersList;