const Card = ({name, img, detail, price, booknow}) => {
    return (
        <div className="card">
            <h1>COMBO</h1>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{detail}</p>
            <p>{price}</p>
    
            <button>{booknow}</button>
        </div>
    )
}
export default Card