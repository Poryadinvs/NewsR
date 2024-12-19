import eyeIcon from '../static/images/eye-svgrepo-com.svg'

export default function NewsObject({data}) {
    return (
        <div className="card">
            <div className="image" style={{backgroundImage: `url(${data.image})`}}></div>
            <div className="title">{data.title}</div>
            <div className="source">{data.source}</div>
            <div className="text">{data.body}</div>
            <div className="media">
                <div className="category">{data.category}</div>
                <div className="views"><img style={{height: '15px', filter:'invert(1)'}} src={eyeIcon}/>    {data.views}</div>
            </div>
        </div>
    )
}