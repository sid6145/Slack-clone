import React from 'react'
import '../App.css'

export default function Profile (){
 return ( 
     <div className="profileContainer">
            <img src="https://images.unsplash.com/photo-1522196772883-393d879eb14d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="profile-image" />
            <h3>Name- Some Name</h3>
            <h3>Email- random@gmail.com</h3>
            <h3>Number- 1234567899</h3>
     </div>
 )
}