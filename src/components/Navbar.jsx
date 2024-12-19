export default function Navbar({categories, setFilter}) {
    function updateFilter() {
        let _filter = []
        document.querySelectorAll('#filter .category:has(input:checked)').forEach(element => _filter.push(element.getAttribute('id')))
        setFilter(_filter)
    }

    return(
        <div className="navbar">
            <div className="categories" id="filter">
                {categories.map(item => (
                    <div className="category" onClick={updateFilter} key={item} id={item}>
                        <input type="checkbox"/>
                        <label>{item}</label>
                    </div>
                ))}
            </div>
        </div>
    )
} 