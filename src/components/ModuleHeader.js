import React from "react";

class ModuleHeader extends React.Component {
    render() {
        return (
            <header class="module">
                <h1>{this.props.module}</h1>
            </header>
        )
    }
}

export default ModuleHeader