import React, {useState} from 'react'
import * as yup from 'yup'
import {Formik} from 'formik'
import {Form,Button, InputGroup,Modal} from 'react-bootstrap'
import Header from '../Home/Header/Header'
import Aux from '../../hoc/Auxilairy'
import { useHistory } from "react-router";

export default function OrderNow() {
    const history = useHistory();
    // Validation
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
     const schema = yup.object().shape({
    email: yup.string().required('This field is mandatory').email('Enter a valid email'),

    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required(),
    address: yup.string().required(),
  });
const submitForm = () =>{
    history.push('/')
}
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <Aux>
          <Header />
             <Formik
                validationSchema={schema}
                onSubmit={console.log}
                initialValues={{
                email: "",
                phone: "",
                address: "",
                }}
               >
       {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit}
            style={{width:'700px',padding:'30px',margin:'auto'}}>
                    <Form.Group controlId="validationFormik01 " className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                        type="email" 
                        placeholder="Enter email"
                        name="email"
                        value={values.email} 
                         onChange={handleChange}
                        isValid={touched.email && !errors.email}
                        isInvalid={!!errors.email}
                         />
                        <Form.Control.Feedback type="invalid">
                                {errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>
            {/* Phone */}
        <Form.Group className="mb-3" controlId="validationFormikPhone">
            <Form.Label>Phone</Form.Label>
             <InputGroup hasValidation>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">02</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="tel"
                  placeholder="Your Phone"
                  aria-describedby="inputGroupPrepend"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  isInvalid={!!errors.phone}
                  isValid={touched.phone && !errors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phone}
                </Form.Control.Feedback>
              </InputGroup>

            {/* Address */}
        </Form.Group>
            <Form.Group className="mb-3" controlId="validationFormikAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
               type="text" 
                placeholder="Address"
                name="address"
                value={values.address} 
                onChange={handleChange}
                isInvalid={!!errors.address}
                isValid={touched.address && !errors.address}
                 />
                 <Form.Control.Feedback type="invalid">
                  {errors.Address}
                </Form.Control.Feedback>
        </Form.Group>
      
        <Button
        onClick={handleShow}
         variant="primary" 
         type="submit">
            Submit
        </Button>
        </Form>
         )}
        </Formik>
              <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order Submitted Successfully</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thanks for shopping, you can browse more</Modal.Body>
        <Modal.Footer>
       
          <Button variant="success" onClick={submitForm}>
            Home
          </Button>
        </Modal.Footer>
      </Modal>
        </Aux>
    )
}
