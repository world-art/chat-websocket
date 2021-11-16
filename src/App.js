import React, { useEffect, useRef, useState } from 'react';
import { Header } from './components/Header';
import { Chat } from './components/Chat';
import { AppWrapper } from './style';
import { Modal, Button, Form } from 'react-bootstrap';

function App() {
  const [show, setShow] = useState(true);
  const [name, setName] = useState('');
  const inputName = useRef(null);

  useEffect(() => {
    const nameFromLS = localStorage.getItem('name');
    if (nameFromLS?.length) {
      setName(nameFromLS);
      setShow(false);
    }
  }, []);

  const handleClose = (e) => {
    e.preventDefault();
    const nameFromInput = inputName.current.value;
    if (nameFromInput?.length) {
      setShow(false);
      setName(nameFromInput);
      localStorage.setItem('name', JSON.stringify(nameFromInput));
    }
  };

  return (
    <AppWrapper>
      {!show && (
        <>
          <Header />
          <Chat name={name} />
        </>
      )}
      <Modal show={show} centered={true}>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control ref={inputName} type="text" placeholder="Enter Name" />
            </Form.Group>
            <Button variant="primary" onClick={handleClose} type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </AppWrapper>
  );
}

export default App;
