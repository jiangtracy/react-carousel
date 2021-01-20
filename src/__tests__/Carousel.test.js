import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "../Carousel";


it("renders without crashing", function () {
  render(<Carousel />);
});

it("matches snapshot", function() {
  const {container} = render(<Carousel />);
  expect(container).toMatchSnapshot();
});

it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);
  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});



it("works when you click on the left arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);
  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);
  const leftArrow = queryByTestId("left-arrow");
  fireEvent.click(leftArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();
});



it("arrows are missing when you are on the first or last image", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);
  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // expect left arrow missing
  expect(queryByTestId("left-arrow")).not.toBeInTheDocument();
  const rightArrow = queryByTestId("right-arrow");
  // expect left arrow to appear
  fireEvent.click(rightArrow);
  expect(queryByTestId("left-arrow")).toBeInTheDocument();
  
  // expect right arrow missing, left arrow stil here
  fireEvent.click(rightArrow);
  expect(queryByTestId("right-arrow")).not.toBeInTheDocument();
  expect(queryByTestId("left-arrow")).toBeInTheDocument();
});
