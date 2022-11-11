function BakeryItem(props) {
    return (
        <div className="bakeryItem">
            <img src={props.item.image} alt="bakery item image"></img>
            <div>
                <div className="description">
                    <h3>{props.item.name}</h3>
                    <p>Popularity: {props.item.popularity}</p>
                    <p>Type: {props.item.type}</p>
                    <p>Dietary Restrictions: {props.item.dietaryRestrictions && props.item.dietaryRestrictions.join(", ")}</p>
                    <p>Description: {props.item.description}</p>
                </div>
                <div className="price">
                    <h3 style={{fontWeight: "bold"}}>${props.item.price}</h3>
                    <button onClick={() => props.addToCart(props.index)}>Add</button>
                </div>
            </div>
        </div>
    )
}


export default BakeryItem;