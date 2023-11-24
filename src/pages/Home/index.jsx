import React from "react";
import { Header } from "../../shared/components/Header";
import { Nav } from "../../shared/components/Nav";
import { UserCard } from "../../shared/components/Card";
import { useAxios } from "../../shared/hooks/useAxios";
import { getUsers } from "../../shared/services/user";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../shared/constants/router";

export const HomePage = () => {
  let { data, error, loading } = useAxios({ requestFunc: getUsers });
  let users = data?.data;

  let navigate = useNavigate();
  console.log(data, error, loading);
  return (
    <div>
      <Header />
      <Nav />
      {loading ? (
        <h1 className="fs-1 fw-bold text-center text-success mt-5">
          Loading...
        </h1>
      ) : (
        <>
          <div className=" mt-5 container d-flex flex-wrap justify-content-center  gap-3">
            {users?.map((item, index) => {
              return (
                <UserCard
                  {...item}
                  key={"User" + index}
                  onClick={() => navigate("detail/personID=" + item.id)}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
