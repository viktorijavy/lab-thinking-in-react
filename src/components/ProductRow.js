const ProductRow = (props) => {
    return (
        <>
            <tr key={props.product.id} className="tr-margin">
                <td className="th-td-margin">
                    {props.product.name}
                </td>
                <td className="th-td-margin">
                    {props.product.price}
                </td>
            </tr>



        </>
    )
    
}



export default ProductRow;