import { useState } from 'react'
import './Project.css'
import ProjectFilter from './ProjectFilter'
const Project = () => {
	const [array, setArray] = useState([])
	const onSubmit = (el) => {
		el.preventDefault()
		const obj = {
			name: name,
            adress:address,
            phone:phone,
			select: select,
		}
		setArray([...array, obj])
		// console.log(array)
	}
	// text
	const [name, setName] = useState('')
	const nameChangeHandler = (el) => {
		setName(el.target.value)
		// console.log(name)
	}
    const [address, setAddress] = useState('')
	const addresChangeHandler = (el) => {
		setAddress(el.target.value)
		// console.log(address)
	}
    const [phone, setPhone] = useState('')
	const phoneChangeHandler = (el) => {
		setPhone(el.target.value)
		// console.log(phone)
	}
    
	const [select, setSelect] = useState('')
	const selectChangeHandler = (el) => {
		setSelect(el.target.value)
		// console.log(select)
	}
    const [filtering,setFilter]=useState('All')
    const filterChangeHandler =(update)=>{
        setFilter(update)
    }
    const filterYear = array.filter((el) => {
		return el.select === filtering
	})

	return (
		<form onSubmit={onSubmit}>
            
            <div className='project-macarons'>

                <p>Get in Touch</p>
            </div>
			<div className='project-macarons__login'>
				<textarea
					onChange={nameChangeHandler}
                    placeholder='Username'
					value={name}
					cols='25'
					rows='1'
				></textarea>
			</div>
            <div  className='project-macarons__login'>
				<textarea
					onChange={addresChangeHandler}
                    placeholder='Your adress'
					value={address}
					cols='25'
					rows='1'
				></textarea>
			</div>
            <div  className='project-macarons__login'>
				<textarea
					onChange={phoneChangeHandler}
                    placeholder='Phone'
					value={phone}
                    type="number"
					cols='25'
					rows='1'
				></textarea>
			</div>

			<div className='project-macarons__select'>
				<select onChange={selectChangeHandler} value={select}>
					<option value='Copuchino'>Copuchino</option>
					<option value='Banana'>Banana</option>
					<option value='Snikers'>Snikers</option>
					<option value='Nutella'>Nutella</option>
				</select>
			</div>
			<div >
				<button type='submit'>Add</button>
			</div>

            <div className='Card'>
                <div>
                <ProjectFilter
							onFilter={filterChangeHandler}
							onSelect={filtering}
						/>
					</div>
					<div>
						{filterYear.map((el, id) => {
							return (
								<div className='select-name' key={id}>
									<p>
										Name: {el.name},
										Address:{el.address},
										Phone:{el.phone}, 
										select: {el.select} 
									</p>
								</div>
							)
						})}
                </div>

            </div>
		</form>
	)
}
export default Project
