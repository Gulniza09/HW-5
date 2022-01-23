
const ProjectFilter= (props)=>{
    const ChangeselectHandler = (event)=>{
        props.onFilter(event.target.value)
    }
return (
    <div>
        
        <select onChange={ChangeselectHandler} value={props.onSelect}>
        <option value="All">All</option>
        <option value='Copuchino'>Copuchino</option>
					<option value='Banana'>Banana</option>
					<option value='Snikers'>Snikers</option>
					<option value='Nutella'>Nutella</option>
                   
				</select>
        
    </div>
)
}
export default ProjectFilter