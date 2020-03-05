import Dashboard from "./Dashboard";

describe("Dashboard ", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Dashboard />);
  });

  test("<Dashboard>should render correctly ", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
