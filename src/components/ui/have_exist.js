import React from "react";

function HaveExist(props) {
  console.log(props.exist)
if (props.exist <= '0')
  { return ( <div className='product-no_exist'> Нет в наличии </div>)
  }
  return null;

}

export default HaveExist;