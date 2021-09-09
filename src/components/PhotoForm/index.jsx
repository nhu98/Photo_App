import React from "react";
import PropTypes from "prop-types";
import { Form, FormGroup, Button, Input, Label } from "reactstrap";
import Images from "../../constants/images";
import Select from "react-select";
import { PHOTO_CATEGORY_OPTIONS } from "../../constants/global";

PhotoForm.propTypes = {
  onsubmit: PropTypes.func,
};
PhotoForm.defaultProps = {
  onsubmit: null,
};

function PhotoForm(props) {
  return (
    <Form>
      <FormGroup>
        <Label for="titleId">Title</Label>
        <Input name="title" id="titleId" placeholder="Eg: Wow nature..." />
      </FormGroup>

      <FormGroup>
        <Label for="CategoryId">Category</Label>
        <Select
          name="CategoryId"
          id="CategoryId"
          placeholder="What's your photo category"
          options={PHOTO_CATEGORY_OPTIONS}
        />
      </FormGroup>

      <FormGroup>
        <Label for="CategoryId">Photo</Label>

        <div>
          <Button type="button" outline color="primary">
            {" "}
            Random a photo
          </Button>
        </div>
        <div>
          <img
            width="200px"
            height="200px"
            src={Images.COLORFUL_BG}
            alt="colorful"
          />
        </div>
      </FormGroup>

      <FormGroup>
        <Button color="primary"> Add to alnum </Button>
      </FormGroup>
    </Form>
  );
}

export default PhotoForm;
