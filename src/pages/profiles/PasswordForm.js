import React from "react";

const PasswordForm = () => {
  return (
    <Row>
      <Col md={6}>
        <Container>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Update Password</Form.Label>
              <Form.Control
                type="password"
                value={new_password1}
                placeholder="Update Password"
                name="new_password1"
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.new_password1?.map((message, idx) => (
              <Alert key={idx} variant="danger">
                {message}
              </Alert>
            ))}
            <Form.Group>
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control
                type="password"
                value={new_password2}
                placeholder="Confirm New Password"
                name="new_password2"
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.new_password2?.map((message, idx) => (
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
