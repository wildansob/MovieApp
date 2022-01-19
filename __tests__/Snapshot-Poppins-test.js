import React from 'react';
import Poppins from '../src/component/Poppins';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'


Enzyme.configure({adapter: new Adapter()})


describe("all of this", () => {
    it("should render poppins", () => {
        const wrapper = shallow (<Poppins size={16}>Hallo Test</Poppins>)
        expect(wrapper.props().children).toStrictEqual(expect.any(String));
    })

    it("should be render Text with font family Poppins", () => {
        const wrapper = shallow (<Poppins size={16}>hgkhg</Poppins>)
        expect(wrapper.props().style.fontFamily).toStrictEqual('Poppins-Regular');
    })
})