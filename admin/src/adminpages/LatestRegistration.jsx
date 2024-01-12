import React from 'react';

export const LatestRegistration = ({
  className,
  divClassName,
  divClassName1,
  divClassName2,
  divClassName3,
  divClassNameOverride,
  frameClassName,
  property1,
}) => {
  return (
    <div className={`${className} ${property1 ? 'border-othercolorlightred' : ''}`}>
      <div className={`${divClassName} text-maincolorprimary`}>
        <div className={`${divClassName1} text-othercolorlightred`}>
          <div className={`${divClassName2} text-othercolorlightred`}>
            <div className={`${divClassName3} text-othercolorlightred`}>
              <div className={`${divClassNameOverride} text-othercolorlightred`}>
                <frame className={`${frameClassName} mr-[-3.00px] ml-[-3.00px]`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

