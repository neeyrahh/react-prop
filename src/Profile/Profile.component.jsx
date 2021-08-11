import React  from "react";
import PropTypes  from "prop-types";

export const Data= ({fullName,bio,profession,}) => {
    console.log (fullName);
      return(
        <>
            <h1>FullName = {fullName}</h1>
            <h2> Bio = {bio}</h2>
            <h2> Profession = {profession}</h2>
         </>
    )
};


export const MyImage = ({children}) => {
    return(
        <>
        <h1> This is my {children}:</h1>
        <img src = '/images.jpeg/red.jpeg' alt = "bag" height = '300' style = {{marginTop : 15,marginBottom : 15}} ></img>
        </>
    )
};


export const ActionAlert = ({handleName}) => {
    return (
        <button style = {{height : 20, width :200, color : "blue"}} onClick = {e =>handleName(e)}>ClickMe</button>
    )
};


Data.defaultProps = {
    fullName : "somoye munirat",
    bio : "i love reading and researching",
    profession : "student"
};
MyImage.defaultProps={
    children :"image"
};

Data.propTypes={
    fullName : PropTypes.string,
    bio :PropTypes.string,
    profession:PropTypes.string
};
MyImage.propTypes = {
    childeren : PropTypes.string
};
