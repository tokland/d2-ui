import React from 'react';
import { shallow } from 'enzyme';
import Message from '../../src/messages/Message.component';

describe('Message', () => {
    function renderComponent(props) {
        return shallow(<Message {...props} />);
    }

    it('should render a div', () => {
        const component = renderComponent();

        expect(component.find('div')).to.have.length(1);
    });

    it('should render the passed message', () => {
        const component = renderComponent({ message: 'This is an error message' });

        expect(component.find('div').text()).to.equal('This is an error message');
    });

    it('should pass the correct style to the div element', () => {
        const component = renderComponent({ style: { color: 'red', padding: '0.5rem 0' }, message: 'This is an error message' });

        expect(component.find('div').props().style).to.deep.equal({ color: 'red', padding: '0.5rem 0' });
    });
});
