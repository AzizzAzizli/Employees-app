import React from "react";
import {Button, Card, CardBody, CardSubtitle, CardText, CardTitle} from "reactstrap"
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
export const UserCard = ({name="XXXXXX",email="example@gmail.com",phone="99999999999",onClick}) => {
  return (
    <Card
      style={{
        width: "18rem",
      }}
    >
      <img alt="Sample" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xlTxIX_i9UIgOJtZCd01jwHaHa%26pid%3DApi&f=1&ipt=3675cacd554bdd4e02fe6307131d38aaf4ed3fecd84ffe65cad21447e68f7695&ipo=images" />
      <CardBody>
        <CardTitle className="mb-3 d-flex gap-2" tag="h5">
          <FaUser/>  {name}</CardTitle>
        <CardSubtitle className="mb-3 text-muted d-flex gap-2" tag="h6">
      <MdEmail/> {email}
        </CardSubtitle>
        <CardText className="mb-3 d-flex gap-2">
         <FaPhoneAlt/> {phone}
        </CardText>
        <Button onClick={onClick} className="mt-2" color="dark" block>Detail</Button>
      </CardBody>
    </Card>
  );
};
