import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeValue } from "./fieldActions"; //Liga as açoes criadas com os dispatchers

class Field extends Component {


    render() {
        return (
            <div>
                <label>{this.props.value}</label>
                <input onChange={this.props.changeValue} value={this.props.value}></input>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        value: state.field.value
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({changeValue}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Field)