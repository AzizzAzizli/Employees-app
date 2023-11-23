import React from "react";
import { Header } from "../../shared/components/Header";
import { Nav } from "../../shared/components/Nav";
import { useNavigate, useParams } from "react-router-dom";
import { useAxios } from "../../shared/hooks/useAxios";
import { getUsersID } from "../../shared/services/user";
import { Button } from "reactstrap";

export const Detail = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  let newId = id.split("=")[1];

  let { data, loading } = useAxios({ requestFunc: () => getUsersID(newId) });
  console.log(data);
  let userInfo = data?.data;
  console.log(newId);
  return (
    <div>
      <Header />
      <Nav />

      <div className="d-flex gap-5 my-5">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className="d-flex flex-column flex-lg-row  align-items-center gap-5 text-center text-lg-start">
            <div className="w-25 container">
              <img
                className="img-fluid"
                src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
              />
              <Button
                size="lg"
                color="dark"
                block
                onClick={() => navigate("setting")}
              >
                Setting
              </Button>
            </div>
            <div className="w-75">
              <p className="h1">{userInfo?.name}</p>
              <p className="h2">{userInfo?.email}</p>
              <p className="h4">{userInfo?.phone}</p>
              <p className="h4">{userInfo?.website}</p>

              <hr />
              <h2 className="fs-2 ">Address:</h2>
              <br />
              <p className="h4">{userInfo?.address.city}</p>
              <p className="h4">{userInfo?.address.street}</p>
              <p className="h4">{userInfo?.address.suite}</p>

              <hr />
              <h2 className="fs-2">Company:</h2>
              <br />
              <p className="h4">{userInfo?.company.name}</p>
              <p className="h4">{userInfo?.company.catchPhrase}</p>
              <p className="h4">{userInfo?.company.name}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
