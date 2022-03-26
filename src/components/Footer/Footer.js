import React from 'react';

const Footer = () => {
    return (
        <div className="accordion p-4" id="accordionExample ">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        How React Work?
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p className='ans-p'>
                            <strong>
                                React is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications.</strong>
                            It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.React calls function directly with the assigned props and if it is a class React Creates a new instance of the class and calls its render method.
                        </p>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header fw-bold" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Props vs State
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p className='ans-p'>
                            <strong>State is the local state of the component which cannot be accessed and modified outside of the component.</strong> <br />
                            <strong>Props:</strong> Props are immutable. <br />
                            <strong>State: </strong>state are mutable. <br />
                            <strong>Props: </strong>you can pass properties from parent components. <br />
                            <strong>State: </strong>you can define states in the component itself. <br />
                            <strong>Props: </strong>the state is set and updated by the object. <br />
                            <strong>State: </strong>determine the ciew upon creation,and then they remain static.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;