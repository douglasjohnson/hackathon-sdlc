import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('FizzBuzz', () => {
  let app;
  let inputWrapper;

  const changeInputValue = (value) => {
    inputWrapper.simulate('change', {target: {value: value}});
  };

  const outputWrapper = () => {
    return app.find('#output');
  };

  const outputValue = () => {
    return outputWrapper().prop('value');
  };

  beforeEach(() => {
    app = shallow(<App/>);
    inputWrapper = app.find('#input');
  });

  it('should show header', () => {
    expect(app.find('header').text()).toBe('FizzBuzz');
  });
  it('should show input text field', () => {
    expect(inputWrapper.length).toBe(1);
  });
  it('should show output text field', () => {
    expect(outputWrapper().length).toBe(1);
  });

  describe('should be', function () {
    it('1 when input is 1', function () {
      changeInputValue(1);

      expect(outputValue()).toBe(1);
    });
    it('Fizz when input is 3', function () {
      changeInputValue(3);

      expect(outputValue()).toBe('Fizz');
    });
    it('Buzz when input is 5', function () {
      changeInputValue(5);

      expect(outputValue()).toBe('Buzz');
    });
    it('FizzBuzz when input is 15', function () {
      changeInputValue(15);

      expect(outputValue()).toBe('FizzBuzz');
    });
  });
});
