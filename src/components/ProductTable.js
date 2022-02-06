import ProductRow from "./ProductRow"

const ProductTable = (props) => {


    return (


        <div className="table-container">
            <table className="table">
                <thead>
                    <tr className="tr-margin">
                        <th className="th-td-margin"> Title </th>
                        <th className="th-td-margin"> Price </th>
                    </tr>
                </thead>

                <tbody>
                    {props.products.map(product => {

                        return <ProductRow product={product} />
                        
                    })}

                    
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable;