import { Component, useState } from "@odoo/owl";

export class Counter extends Component {
    static template = "awesome_owl.counter";

    setup() {
        this.state = useState({value: 1});
    }

    static props = {
        onChange: {type: Function, optional: true}
    };

    increment() {
        this.state.value++
        if(this.props.onChange){
            this.props.onChange();
        }
    }
}