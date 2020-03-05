import Dashboard from "./Dashboard";
import React from "react";
import { errorMessages } from "../utils/errorMessages";

describe("Dashboard ", () => {
  let wrapper;

  let props;
  const useStateMock = jest.spyOn(React, "useState");
  // const useEffectMock = jest
  //   .spyOn(React, "useEffect")
  //   .mockImplementation(f => f());

  let validationMock;
  const months = 1;
  const setMonths = jest.fn();
  const amount = 500;
  const setAmount = jest.fn();
  const setError = jest.fn();
  const error = "";
  let totalWithCompoundInterestMock;
  let changeMonthsMock;
  useStateMock.mockImplementation(initialState => [months, setMonths]);
  beforeEach(() => {
    // jest.spyOn(React, "useEffect").mockImplementation(f => f());

    validationMock = jest.fn();
    props = {
      validation: validationMock,
      mockSetState: "",
      totalWithCompoundInterest: totalWithCompoundInterestMock,
      changeMonths: changeMonthsMock
    };
    totalWithCompoundInterestMock = jest.fn();
    changeMonthsMock = jest.fn();
    wrapper = shallow(<Dashboard {...props} />);
  });

  test("<Dashboard> should render correctly ", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  test("Triggering onChange in the Slider will cause a change on months state", () => {
    const slider = wrapper.find('[data-test="slider"]');
    const event = "event";

    slider.simulate("change", event, 2);
    expect(setMonths).toHaveBeenCalledWith(2);
    useStateMock.mockImplementation(initialState => [amount, setAmount]);
  });

  test("Triggering onChange in the TextFiled cause a change on the amount state", () => {
    const inputField = wrapper.find('[data-test="input"]');

    const event = {
      target: {
        value: 500
      }
    };

    inputField.simulate("change", event);
    expect(setAmount).toHaveBeenCalledWith(event.target.value);
  });

  test("An error will displayed if the amount is less of the min limit", () => {
    useStateMock.mockImplementation(state => [error, setError]);
    wrapper = shallow(<Dashboard {...props} />);
    const inputField = wrapper.find('[data-test="input"]');
    const event = {
      target: {
        value: 400
      }
    };
    inputField.simulate("change", event);
    expect(setError).toHaveBeenCalledWith(errorMessages.wrongAmount);
  });

  test("An error will displayed if the input filed is left empty", () => {
    wrapper = shallow(<Dashboard {...props} />);
    const inputField = wrapper.find('[data-test="input"]');
    const event = {
      target: {
        value: ""
      }
    };
    inputField.simulate("change", event);
    expect(setError).toHaveBeenCalledWith(errorMessages.emptyInput);
  });
});
