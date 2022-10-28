import React, {useEffect, useState} from 'react'


export const ItemDetailCount = ({initial, stock, onAdd}) => {
	const [count, setCount] = useState(parseInt(initial));
	
	const decrease = () =>{
		setCount(count - 1);
	}

	const increase = () =>{
		setCount(count + 1);
	}

	useEffect(() => {
		setCount(parseInt(initial))
	}, [initial])
	


	return (
		<div className="card-body flex flex-col">
			<div>
				<button className='btn btn-outline' disabled={count <= 1} onClick={decrease}>-</button>
				<span className="p-3">{count}</span>
				<button className='btn btn-outline' disabled={count >= stock} onClick={increase}>+</button>
			<div>
				<button className="btn bg-purple-900 mt-5" disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
			</div>
			</div>
		</div>
)}

export default ItemDetailCount