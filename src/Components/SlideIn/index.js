import React from "react";


const SlideIn = (props) => {
    const { show,  body, header, footer, classNameHeader, classNameFooter, classNameBody } = props;
    return (
        <div className={show ? 'cl-slide-in' : 'cl-slide-in cl-silde-in-closed'}>
            <div>
                <div className={`cl-slide-in-header ${classNameHeader}`}>
                    {header}
                </div>
                <div className={`cl-slide-in-body ${classNameBody}`}>
                    {body}
                </div>
                <div className={`cl-slide-in-footer ${classNameFooter}`}>
                    {footer}
                </div>
            </div>
        </div>
    );
};

export default SlideIn;