import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header,Table, Button, Icon } from "semantic-ui-react";
import CvService from "../services/CvService";

export default function Cvs() {
  const [cvs, setCvs] = useState([]);

  useEffect(() => {
    let cvService = new CvService();
    cvService.getCvs().then((result) => {

     var x = setCvs(result.data.data.data);
     console.log("sadadadasdas : " + x);
      return x;

    });

  }, []);

  return (
    <div>
      <Table celled color={"black"}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İş Arayan</Table.HeaderCell>
            <Table.HeaderCell>Github</Table.HeaderCell>
            <Table.HeaderCell>Linkedin</Table.HeaderCell>
            <Table.HeaderCell>Detaylar</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cvs.map((cv) => (
            <Table.Row key={cv.id}>
              <Table.Cell>
                <Header as="h4" image>
                  
                  <Header.Content>
                    {cv.candidate.firstName + " " + cv.candidate.lastName}
                    <Header.Subheader>
                      {cv.candidate.dateOfBirth.dayOfMonth + "/" +cv.candidate.dateOfBirth.month + "/" + cv.candidate.dateOfBirth.year}
                    </Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
             

              <Table.Cell>
                <a href={cv.github} target={"_blank"} rel="noopener noreferrer">
                  <Button secondary disabled={!cv.github}>
                    <Icon name="github" /> Github
                  </Button>
                </a>
              </Table.Cell>

              <Table.Cell>
                <a href={cv.linkedin} target={"_blank"} rel="noopener noreferrer">
                  <Button color="linkedin" disabled={!cv.linkedin}>
                    <Icon name="linkedin" /> LinkedIn
                  </Button>
                </a>
              </Table.Cell>

              <Table.Cell>
                <Button animated as={Link} to={`/cvs/${cv.candidate.id}`}>
                  <Button.Content visible>Detayları Gör</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
