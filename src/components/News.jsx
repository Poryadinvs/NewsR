import NewsObject from "./NewsObject"

export default function News({data, filter}) {
    return(
        <div className="news">
            {
            data.filter(itemData => filter.length == 0 || filter.includes(itemData.category)).map(itemData => (
                <NewsObject data={itemData} key={itemData.id}/>
            ))
            }
        </div>
    )
}