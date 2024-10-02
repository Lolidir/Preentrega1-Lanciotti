const ItemListContainer = ( { saludo, saludar } ) => {

    return (
        <div onClick={saludar}>
            <h1> { saludo } </h1>
        </div>
    )
}

export default ItemListContainer