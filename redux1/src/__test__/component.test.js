import React from 'react';
import TopicListing from '../component/topicListing';
import { create} from 'react-test-renderer';

describe('testing Component snapshot', () => {
    test('TopicListing', () => {
        let tree = create(<TopicListing/>)
        expect(tree.toJSON()).toMatchSnapshot();
    })
    test('TestHam component',() => {
        let tree = create(<TopicListing/>)
        expect(tree.toJSON()).toMatchSnapshot();
    })
})