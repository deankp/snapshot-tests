import React from "react"
import Card from "react-bootstrap/Card"
import Jordan_1 from './Jordan_1.png'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src={'https://github.com/deankp'} />
        <Card.Body>
            <Card.Title>Jordan 1</Card.Title>
            <Card.Text>
            I am one of the most iconic sneakers
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard