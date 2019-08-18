import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import React, {useState, useEffect} from "react";
import "./styles.scss";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

export default function RegistrationForm() {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [nationality, setNationality] = useState("");
  const [nations, setNations] = useState([]);
  const [dob, setDob] = useState("");
  const [occupation, setOccupation] = useState("");
  const [submitted, setSubmitted] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://restcountries.eu/rest/v2/all',
      );
      let nationList = [];
      result.data.map((info) => {
        nationList.push(info.demonym);
      });
      setNations(nationList);
    };
    fetchData();
  }, []);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setSubmitted(true);
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="form">
      {!submitted ?
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" required value={name}
                            onChange={e => setName(e.target.value)}/>
              <Form.Control.Feedback type="invalid">
                Please provide a valid name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridSurname">
              <Form.Label>Surname</Form.Label>
              <Form.Control type="text" placeholder="Enter surname" required value={surname}
                            onChange={e => setSurname(e.target.value)}/>
              <Form.Control.Feedback type="invalid">
                Please provide a valid surname.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridDob">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date" placeholder="Enter DOB" required value={dob}
                            onChange={e => setDob(e.target.value)}/>
              <Form.Control.Feedback type="invalid">
                Please provide a valid dob.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridNationality">
              <Form.Label>Nationality</Form.Label>
              <Form.Control as="select" onChange={e => setNationality(e.target.value)} required>
                <option>{nationality}</option>
                {nations.map(nation => (
                  <option>{nation}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required value={email}
                            onChange={e => setEmail(e.target.value)}/>
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridOccupation">
              <Form.Label>Occupation</Form.Label>
              <Form.Control type="text" placeholder="Occupation " required value={occupation}
                            onChange={e => setOccupation(e.target.value)}/>
              <Form.Control.Feedback type="invalid">
                Please provide a valid occupation.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        :
        <Card className={'content'}>
          <CardContent>
            <Typography gutterBottom variant="h2" component="h2" className={'title'}>
              Thank You
            </Typography>
          </CardContent>
        </Card>
      }
    </div>
  );
}
