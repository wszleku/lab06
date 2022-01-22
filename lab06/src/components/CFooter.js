import React from "react";
import './CFooter.css'

/*function CFooter() {
  let date = new Date();
  return (
    <div>
      <h5>
        PPFront-end, przykładowy serwis React. Dziaj mamy: {date.toDateString()}
      </h5>
    </div>
  );
}*/

export const CFooter = (props) => {
  const {wheather, temp, children} = props;
  let date = new Date();
  return (
    <div className = "footerDivClass">
      <h5 className = "footerTextClass">
        PPFront-end, przykładowy serwis React. Dziaj mamy: {date.toDateString()}
        <br/>
        Stan pogody: {wheather}, temperatura: {temp}
        <br/>
        {children}
      </h5>
    </div>
  );
};

// export const CFooter = () => {
//   let date = new Date();
//   return React.createElement('div',{className: 'footerDivClass'},
//     React.createElement('h5',{id: 'footerText', className: 'footerTextClass'}, 
//     'PPFront-end, przykładowy serwis React. Dziaj mamy: '+date.toDateString()));
// };

//export default CFooter;
