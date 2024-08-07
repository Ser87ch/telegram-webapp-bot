import { Badge, Container, ListGroup, Image } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";


export default function Order({order}) {
    return(
        <Container style={{ marginBottom: '1rem', padding: 0 }} >
            {order.length > 0 ? ( <h4>Your order</h4>) : ''} 
            <ListGroup as="ol">
                <TransitionGroup className="order-list">
                    {order.map(i => (
                        <CSSTransition
                            key={i.id}
                            timeout={500}
                            classNames="item"
                        >
                            <ListGroup.Item as="li"
                            className="d-flex justify-content-between align-items-start">
                                <Image style={{ width: 25, height: 25 }} src={i.icon} height="1rem" />
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{i.name} x {i.count}</div>
                                </div>
                                <Badge bg="primary" pill>${i.count * i.price / 100}</Badge>
                            </ListGroup.Item> 
                        </CSSTransition>    
                    ))}
                </TransitionGroup>
            </ListGroup>
        </Container>
    );
}