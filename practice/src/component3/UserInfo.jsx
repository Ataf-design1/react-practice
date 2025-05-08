import React from "react";

const UserInfo = ({ data }) => {
  const { name, email, bio } = data;
  console.log("from userinfo", name, email, bio);
  return (
    <div style={{ border: "1px solid black" }}>
      <h4>
        <strong>Name:- </strong>
        {name}
      </h4>
      <h4>
        <strong>Email:- </strong>
        {email}
      </h4>
      <p>
        <strong>Bio:- </strong>
        {bio}
      </p>
    </div>
  );
};

export default UserInfo;
