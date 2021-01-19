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


Card.defaultProps = 
    {
      src: image1,
      caption: "Photo by Richard Pasquarella on Unsplash",
      currentNum: 1,
      totalNum: 1
    }
   
;
