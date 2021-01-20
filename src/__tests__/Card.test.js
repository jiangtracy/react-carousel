import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "../Card";
import image1 from "../image1.jpg";

it("renders without crashing", function () {
  render(<Card />);
});

it("matches snapshot", function() {
  const {container} = render(<Card />);
  expect(container).toMatchSnapshot();
});

it("renders properly", function() {
  const {container, debug} = render(<Card />);
  debug(container);
  expect(container.querySelector(".Card-title")).toContainHTML("Photo by Richard Pasquarella on Unsplash")
  expect(container.querySelector(".Card-image").getAttribute("src")).toEqual(image1);
  expect(container.querySelector(".Card-image").getAttribute("alt")).toEqual("Photo by Richard Pasquarella on Unsplash");
  expect(container.querySelector(".Card-small")).toContainHTML("Image 1 of 1")
})

Card.defaultProps = 
    {
      src: image1,
      caption: "Photo by Richard Pasquarella on Unsplash",
      currNum: 1,
      totalNum: 1
    }
   
;
