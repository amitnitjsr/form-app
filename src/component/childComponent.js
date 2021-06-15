import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ChildComponent = ({ submitToParent }) => {
    const initialFields = {
        name: '',
        email: '',
        mobile_number: ''
    }
    const [field, setFields] = useState(initialFields);
    const [loader, setLoader] = useState(false);

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setFields({ ...field, [name]: value });
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setLoader(true);
        setTimeout(() => {
            setLoader(false);
            setFields(initialFields);
        }, 5000);
        submitToParent(field);
    }

    return (
        <div className="margin">
            <form onSubmit={onSubmitHandler}>
                <div className="container">
                    <div className="row">
                        <input
                            className="text-input"
                            placeholder="name"
                            type="text"
                            value={field.name}
                            onChange={onChangeHandler}
                            name="name"
                            required
                        />
                    </div>
                    <br />
                    <div className="row">
                        <input
                            className="text-input"
                            placeholder="Email"
                            type="email"
                            value={field.email}
                            onChange={onChangeHandler}
                            name="email"
                            required
                        />
                    </div>
                    <br />
                    <div className="row">
                        <input
                            className="text-input"
                            placeholder="Mobile number"
                            type="text"
                            value={field.mobile_number}
                            onChange={onChangeHandler}
                            name="mobile_number"
                            required
                        />
                    </div>
                    <br />
                    <div>
                        <button className="submit-btn" type="submit" variant="primary">
                            {loader ? <i className="zmdi zmdi-rotate-right zmdi-hc-spin" /> : 'Submit'}
                        </button>
                    </div>
                </div>

            </form>
        </div>
    );
}

ChildComponent.propTypes = {
    submitToParent: PropTypes.func.isRequired,
};

export default ChildComponent;