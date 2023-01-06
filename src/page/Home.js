import { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slices/products-slice";

const Products = () => {

  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])




  return (
    <Container>
      <Row>
        {
          products.map((product)=> (
            <Col key={product.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img style={{height: '300px'}} variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    {product.description}
                  </Card.Text>
                  <Card.Text>
                    {product.price} $
                  </Card.Text>
                  <Button variant="primary">Add to cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        }


      </Row>
    </Container>
  );
};

export default Products;
