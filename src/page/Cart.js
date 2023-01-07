import{ Container, Table, Button, Image} from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"

import { deleteFromCart, clear } from "../rtk/slices/cart-slice"



const Cart = () => {

  const cart = useSelector((state)=> state.cart)
  const dispatch = useDispatch()

  const totalPrice = cart.reduce((acc, product)=> {
    acc += product.price * product.quantity
    return acc
  }, 0)


  return (
    
    <Container>
      <h1 className="mb-3">Welcome to cart</h1>
      <Button className="mb-3" variant="primary" onClick={()=> dispatch(clear())}>Remove all</Button>
      <h5>Total price: ${totalPrice.toFixed(2)}</h5>
      
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Image</th>
          <th>َQuantity</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {
          cart.map((product)=> {
            return(
              <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td> <Image src={product.image} style={{width: "50px", height:"50px"}}/> </td>
              <td>{product.quantity}</td>
              <td>${product.price}</td>
              <td><Button variant="danger" onClick={()=> dispatch(deleteFromCart(product))}>Delete</Button></td>
          </tr>
            )

          })
        }


      </tbody>
    </Table>


    </Container>



  )
}

export default Cart