import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import moment from "moment";

function PostCard({
  supplier: {
    company,
    description,
    address,
    companyEmail,
    phone,
    createdAt,
    username,
  },
}) {
  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://images.ssstatic.com/serpentin-en-fer-blanc-bobine-etp-880150z1-00000075.jpg"
        />

        <Card.Header>{company}</Card.Header>
        <Image src="https://images.ssstatic.com/serpentin-en-fer-blanc-bobine-etp-880150z1-00000075.jpg" />
        <Card.Meta>{moment(createdAt).fromNow()}</Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons"></div>
      </Card.Content>
    </Card>
  );
}

export default PostCard;
