import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Picture from "../Rholly.png";

const user = {
  name: "RHOLLY",
  motto: "Here to serve"
}

function ProfilePhoto() {
  return (
    <div className="profile-photo">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Picture} />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          {user.motto}, and we definitely keep to our WORD.
        </Card.Text>
        <Button variant="primary">Just a click away</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default ProfilePhoto;
