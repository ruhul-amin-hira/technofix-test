import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  let userName = user.firstName + " " + user.maidenName + " " + user.lastName;
  return (
    <div className="text-center cursor-pointer">
      <Link to={`/${user.id}`} state={user}>
        <Card className="relative overflow-hidden custom__hover-card">
          <CardHeader className="pb-0">
            <div className="flex justify-center pb-2">
              <img
                className="max-w-40"
                src={user.image}
                alt={userName}
                loading="lazy"
              />
            </div>
            <p>{user.lastName}</p>
            <CardDescription>{userName}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{user.email}</p>
          </CardContent>
          <div className="custom__hover-view absolute bg-gray-800 inset-0 p-2 flex flex-col justify-center items-center">
            <p className="font-medium">{userName}</p>
            <p>{user.email}</p>
            <p>{user.address.address}</p>
            <p>{user.address.city + ", " + user.address.state}</p>
            <p>{user.company.name}</p>
            <Button variant="outline" className="mt-3">
              View more
            </Button>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default UserCard;
