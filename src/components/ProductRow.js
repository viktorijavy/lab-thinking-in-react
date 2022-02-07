const ProductRow = (props) => {


    return (
        <>
            <tr>

                {props.product.inStock ? 
                
                <td className="th-td-margin"> {props.product.name} </td> 
                : 
                <td className="red th-td-margin">{props.product.name}</td>}


                <td className="th-td-margin">
                    {props.product.price}
                </td>
            </tr>



        </>
    )

}



export default ProductRow;