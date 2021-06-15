import React from 'react';
import ChildComponent from './childComponent';

export default function SetTimeOut() {

    const submitDataHandler = (data) => {
        console.log('Submitted Data', data)
    }

    return (
        <div>
            <ChildComponent submitToParent={submitDataHandler} />
        </div>
    );
}
