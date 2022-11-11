function BakeryItem(props) {
    return (
        <div className="bakeryItem">
            <img src={props.item.image} alt="bakery item image"></img>
            <div>
                <div className="description">
                    <h3>{props.item.name}</h3>
                    <p>Popularity: {props.item.popularity}</p>
                    <p>Type: {props.item.type}</p>
                    <p>Dietary Restrictions: {props.item.dietaryRestrictions.join(", ")}</p>
                    <p>Description: {props.item.description}</p>
                </div>
                <div className="price-area">
                    <h3 style={{fontWeight: "bold"}}>${props.item.price}</h3>
                    <div className="price-buttons">
                        <button onClick={() => props.addToCart(props.index)}>+</button>
                        <h3>{props.count}</h3>
                        <button onClick={() => props.removeFromCart(props.index)}>-</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default BakeryItem;