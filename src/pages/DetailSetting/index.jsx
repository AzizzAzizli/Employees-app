import React, { useEffect, useLayoutEffect, useState } from "react";
import { Header } from "../../shared/components/Header";
import { Nav } from "../../shared/components/Nav";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useAxios } from "../../shared/hooks/useAxios";
import { getUsersID, updateUser } from "../../shared/services/user";
import { ROUTE } from "../../shared/constants/Router";

let userObj = {
  username: "",
  email: "",
  phone: "",
};

export const DetailSetting = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState(userObj);
  let { id } = useParams();
  // console.log(id);
  let ID = id.split("=")[1];
  // console.log(ID);
  let respons = useAxios({ requestFunc: () => getUsersID(ID) });
  let data = respons.data?.data;
  console.log(data);

  useEffect(() => {
    userObj.username = data?.username;
    userObj.email = data?.email;
    userObj.phone = data?.phone;
  }, [data]);

  function handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    // console.log(e.target.name);
    setUser((prev) => ({ ...prev, [name]: value }));
    // console.log(e.target.value);
  }
  // console.log(user);

  async function updateData() {
    let res = await updateUser(ID, user);
    console.log(res);
    if (res.status === 200) {
      alert("Changes successfully saved !");
      navigate(ROUTE.Home);
    } else {
      alert("Problem occurred");
    }
  }
  return (
    <div>
      <Header />
      <Nav />

      {respons.loading ? (
        <h1 className="text-center fs-1 fw-bold text-success mt-5">
          Loading...
        </h1>
      ) : (
        <div className="d-flex container justify-content-between align-items-center mt-5 flex-column flex-lg-row  gap-3">
          <div className="w-25">
            <img
              className=" object-fit-cover w-100"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xlTxIX_i9UIgOJtZCd01jwHaHa%26pid%3DApi&f=1&ipt=3675cacd554bdd4e02fe6307131d38aaf4ed3fecd84ffe65cad21447e68f7695&ipo=images"
              alt="PersonImg"
            />
          </div>
          <div className="w-75">
            <Form>
              <FormGroup className="d-flex flex-column gap-3">
                <Label for="exampleusername">User Name</Label>
                <Input
                  value={user.username}
                  onChange={handleInput}
                  id="exampleusername"
                  name="username"
                  placeholder="Type here..."
                  type="text"
                />
                <Label for="exampleEmail">Email</Label>
                <Input
                  value={user.email}
                  onChange={handleInput}
                  id="exampleEmail"
                  name="email"
                  placeholder="Type here..."
                  type="email"
                />
                <Label for="examplephone">Phone</Label>
                <Input
                  value={user.phone}
                  onChange={handleInput}
                  id="examplephone"
                  name="phone"
                  placeholder="Type here..."
                  type="text"
                />
              </FormGroup>
              <Button onClick={updateData} className="w-25">
                Save
              </Button>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};
