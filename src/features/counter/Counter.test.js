// import { describe, it, render, screen } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import Counter from "../counter/Counter";
import { Provider } from "react-redux";
import { store } from "../../app/store";

// TODO: using describe errors and breaks the test
// describe("<Counter />", () => {
//   it("Should render component with testid counter", () => {
//     // render(<Counter />);
//     render(
//       <Provider store={store}>
//         <Counter />
//       </Provider>
//     );
//     const testId = screen.getByTestId("counter");
//     expect(testId).toBeInTheDocument();
//   });
// });

test("Should render component with testid 'counter'", () => {
  // render(<Counter />);
  render(
    <Provider store={store}>
      <Counter />
    </Provider>
  );
  const testId = screen.getByTestId("counter");
  expect(testId).toBeInTheDocument();
});
