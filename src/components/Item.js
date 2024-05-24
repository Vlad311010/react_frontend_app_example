import ApiRequest from "../ApiRequests";

export default function Item({id, name, description, image, price, callback}) {
    return (
        <div className="StoreItemWrapper">
            <div className="card shadow-sm">
                <svg
                className="bd-placeholder-img card-img-top"
                width="100%"
                height={225}
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                >
                <title>{name}</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <image href={image} width="100%" height="100%" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    {name}
                </text>
                </svg>
                <div className="card-body">
                <h4>{name}</h4>
                <p className="card-text">{description}.</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <form method="post" onSubmit={callback} >
                            <button type="submit" className="btn btn-sm btn-outline-secondary">
                            Buy
                            </button>
                            <input type="hidden" name="itemId" defaultValue={id}/>
                        </form>
                    </div>
                    <small className="text-muted">{price}</small>
                </div>
            </div>
        </div>
    </div>

    )
}