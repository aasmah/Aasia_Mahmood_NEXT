import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { login } from "../components/auth";
import AppContext from "../components/context";

function Login(props) {
  const [data, updateData] = useState({ identifier: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();
  const appContext = useContext(AppContext);

  useEffect(() => {
    if (appContext.isAuthenticated) {
      router.push("/"); // redirect if you're already logged in
    }
  }, []);

  function onChange(event) {
    updateData({ ...data, [event.target.name]: event.target.value });
  }

  return (
    <div id="background">
      <Container>
        <Row>
          <Col sm="12" md={{ size: 5, offset: 3 }}>
            <div className="paper">
              <div className="header">
                <img
                  src="https://urchin-app-hi2hs.ondigitalocean.app/uploads/e98c2d51d2b24d08a390bd71822f86f3.jpg"
                  width={90}
                  height={90}
                  alt="Logo"
                />
                <h2>Login</h2>
              </div>
              <section className="wrapper">
                {Object.entries(error).length !== 0 &&
                  error.constructor === Object &&
                  error.message.map((error) => {
                    return (
                      <div
                        key={error.messages[0].id}
                        style={{ marginBottom: 10 }}
                      >
                        <small style={{ color: "red" }}>
                          {error.messages[0].message}
                        </small>
                      </div>
                    );
                  })}
                <Form>
                  <fieldset disabled={loading}>
                    <FormGroup>
                      <Label>Email:</Label>
                      <Input
                        onChange={(event) => onChange(event)}
                        name="identifier"
                        style={{ height: 50, fontSize: "1.2em" }}
                      />
                    </FormGroup>
                    <FormGroup style={{ marginBottom: 30 }}>
                      <Label>Password:</Label>
                      <Input
                        onChange={(event) => onChange(event)}
                        type="password"
                        name="password"
                        style={{ height: 50, fontSize: "1.2em" }}
                      />
                    </FormGroup>

                    <FormGroup>
                      <span>
                        <a href="#">
                          <small>Forgot Password?</small>
                        </a>
                      </span>
                      <Button
                        style={{ float: "right", width: 120 }}
                        color="dark grey"
                        onClick={() => {
                          setLoading(true);
                          login(data.identifier, data.password)
                            .then((res) => {
                              setLoading(false);
                              // set authed User in global context to update header/app state
                              appContext.setUser(res.data.user);
                            })
                            .catch((error) => {
                              // setError(error.response.data);
                              setLoading(false);
                            });
                        }}
                      >
                        {loading ? "Loading... " : "Submit"}
                      </Button>
                    </FormGroup>
                  </fieldset>
                </Form>
              </section>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>
        {`
          #background {
            background-image: url("https://urchin-app-hi2hs.ondigitalocean.app/uploads/cef79037739b47a18308598bd6a42962.jpg");
            background-size: cover;
            background-repeat: no-repeat;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;
          }
          .paper {
            border: 1px solid lightgray;
            box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
              0px 1px 1px 0px rgba(0, 0, 0, 0.14),
              0px 2px 1px -1px rgba(0, 0, 0, 0.12);
            border-radius: 6px 6px 0 0; /* Rounded top corners */
            margin-top: 90px;
            background-color: #f8f8f8; /* Beige background color */
          }
          .notification {
            color: #ab003c;
          }
          .header {
            width: 100%;
            height: 120px;
            background-color: grey;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 20px;
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
          }
          h2 {
            color: #fff;
          }
          .wrapper {
            padding: 20px;
          }
          a {
            color: blue !important;
          }
        `}
      </style>
    </div>
  );
}

export default Login;
