import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

//Do tests 
test('Checking if add element works', () => {
  render(<App />);

  const inputElement = screen.getByPlaceholderText("Add a todo!");
  const submitButton = screen.getByText("Add Todo");

  fireEvent.change(inputElement, { target: { value: "Get baby Bottle" } });
  fireEvent.click(submitButton);

  const pTag = screen.getByText("Get baby Bottle");

  expect(pTag).toBeInTheDocument();
}
)

test("Checking if task is striked on click", () => {
  const mockTodo = {

  }
  render(<App />)

  const originalstate = []
  const newSTtate = changeState([])
  expect(newState).toStrictEqual(someExpectedState)
  setTodos(newState)
})


