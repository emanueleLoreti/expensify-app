import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

let editExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    startRemoveExpens = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
      <EditExpensePage
        editExpense={editExpense}
        startRemoveExpense={startRemoveExpense}
        history={history}
        expense={expenses[2]}
      />
    );
});

test('should render EditExpensePage correctyle', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
    wrapper.find("ExpenseForm").prop("onSubmit")(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test("should handle removeExpense", () => {
  wrapper.find("button").prop("onClick")({ id: expenses[2].id });
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[2].id });
});
