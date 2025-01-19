import { StyledTitle } from "./Title.styled";
import PropTypes from "prop-types";

const Title = ({ text }) => {
    return (
        <StyledTitle>{text}</StyledTitle>
    )
};

Title.propTypes = {
    text: PropTypes.string.isRequired
}

export default Title;