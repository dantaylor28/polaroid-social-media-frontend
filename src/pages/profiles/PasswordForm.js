import React from "react";

const PasswordForm = () => {
  return (
    <Row>
      <Col md={6}>
        <Container>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Update Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                placeholder="Username"
                onChange={(event) => setUsername(event.target.value)}
              />
            </Form.Group>
            {errors?.username?.map((message, idx) => (
              <Alert key={idx} variant="danger">
                {message}
              </Alert>
            ))}
            <Button
              onClick={() => history.goBack}
              className={btnStyles.PostButton}
            >
              Cancel
            </Button>
            <Button
              onClick={() => history.goBack}
              className={btnStyles.PostButton}
              type="submit"
            >
              Update
            </Button>
          </Form>
        </Container>
      </Col>
    </Row>
  );
};

export default PasswordForm;
