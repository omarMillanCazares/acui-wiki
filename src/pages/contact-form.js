import React, { useRef } from "react";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import "/src/css/App.css";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import Layout from "@theme/Layout";

//import "semantic-ui-css/semantic.min.css"; this breaks all the css

const SERVICE_ID = "service_bix39o5";
const TEMPLATE_ID = "template_rpnt4h2";
const PUBLIC_KEY = "Gs7kYBY35uJnRLtwf";

const App = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };
  return (
    <Layout>
      <div className="App">
        <Form onSubmit={handleOnSubmit}>
          <Form.Field
            id="form-input-control-email"
            control={Input}
            label="Email"
            name="from_email"
            placeholder="Email…"
            required
            icon="mail"
            iconPosition="left"
          />
          <Form.Field
            id="form-input-control-last-name"
            control={Input}
            label="Nombre"
            name="from_name"
            placeholder="Nombre…"
            required
            icon="user circle"
            iconPosition="left"
          />
          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            label="Mensaje"
            name="message"
            placeholder="Inserte Mensaje…"
            required
          />
          <Button type="submit" color="green">
            Enviar
          </Button>
        </Form>
      </div>
    </Layout>
  );
};
export default App;
