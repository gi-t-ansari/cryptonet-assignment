import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export default function UserCard({image, firstName, lastName, gender, phone}) {
    return (
      <Card className="w-max flex-row p-3">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={image}
            alt={firstName}
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody className="p-2">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {firstName} {lastName}
          </Typography>
          <Typography variant="p" className="mb-2">
            {gender}
          </Typography>
          <Typography variant="p">
            {phone}
          </Typography>
        </CardBody>
      </Card>
    );
  }