import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";


const Like = props => {
    return (
this.props.like===true ?<FaRegHeart/> : <FaHeart/>
  );
};

export default Like;
