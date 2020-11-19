import React from 'react'

function Table(props){
    function sortList(){
        console.log('SORTING!!!!')
    }

    return (
        <table style={{width: "100%"}}>
            <thead>
                <tr>
                <th>Image</th>
                <th>Name <button className='filter' onClick={sortList}><i className="fas fa-filter"></i></button></th>
                <th>Phone Number <button className='filter' onClick={sortList}><i className="fas fa-filter"></i></button></th>
                <th>Email <button className='filter' onClick={sortList}><i className="fas fa-filter"></i></button></th>
                <th>Location</th>
                </tr>
            </thead>
            <tbody>
                {props.list.map(user => 
                <tr style={{borderTop: "2px solid gray"}}>
                <td>
                    <img src={user.picture.thumbnail} alt="profile"/>
                </td>
                <td>{user.name.first} {user.name.last}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.location.state}, {user.location.country}</td>
                </tr>
                )}
            </tbody>
        </table>
    )
}

export default Table