import React from 'react';
import { render, shallow } from 'enzyme';
import ComponentPlayground from './component-playground';

describe('<ComponentPlayground />', () => {
  test('Should render the dark theme correctly', () => {
    const wrapper = render(<ComponentPlayground theme="dark" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Should render the light theme correctly', () => {
    const wrapper = render(<ComponentPlayground theme="light" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Should render with a custom background color', () => {
    const wrapper = render(
      <ComponentPlayground theme="light" previewBackgroundColor="#ff0" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('Should render with a custom code block', () => {
    const code = `
      const Button = ({ title }) => (<button type="button">{ title }</button>);
      render(<Button title="My Button" />, mountNode);
    `;
    const wrapper = render(
      <ComponentPlayground
        theme="light"
        code={code}
        previewBackgroundColor="#ff0"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('Should render custom scoped components', () => {
    const NewComponent = () => <div><h1>Hi!</h1></div>;
    const wrapper = shallow(<ComponentPlayground scope={{ NewComponent }} />);

    const scope = wrapper.find('ReactPlayground').prop('scope');
    expect(scope.NewComponent).toEqual(NewComponent);
  });
});
