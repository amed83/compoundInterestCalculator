// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import React from "react";
import { errorMessages } from "./utils/errorMessages";

configure({ adapter: new Adapter() });

global.React = React;
global.shallow = shallow;
global.errorMessages = errorMessages;
