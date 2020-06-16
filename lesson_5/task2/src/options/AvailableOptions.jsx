
import { connect } from "react-redux";
import Options from "./Options";
import { availableOptionsSelector } from "./options.selectors";
import { toggleOption } from "./options.actions";

const mapState = (state) => {
    
    return {
        options: availableOptionsSelector(state),
    };
};

const mapDispatch = {
    moveOption: toggleOption,
}

export default connect(mapState, mapDispatch)(Options);
