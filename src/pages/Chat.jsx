import React from 'react'
import Navbar from '../utilities/Navbar'
import data from '../data/map.json';

export default function Chat() {
	console.log(data)
	
	return (
		<div>
			<Navbar />
			{ data.map((item, index) => {
				return (
					<div key={index}>
						<h1>{item.name}</h1>
						<p>{item.address}</p>
						<p><img src={item.image} alt="" /></p>
						<p>{item.time}</p>
						<p>{item.website}</p>
						<p>{item.phoneNumber}</p>
						
						</div>
						)
			 })}
		</div>
	)
}
