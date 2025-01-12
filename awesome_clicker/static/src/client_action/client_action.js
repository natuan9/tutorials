import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useClicker } from "../clicker_hook";

class ClickerClientAction extends Component {
    static template = "awesome_clicker.ClickerClientAction";
    static props = ['*'];

    setup() {
        this.clicker = useClicker();
    }

    increment(){
        this.clicker.increment(9);
    }
}

registry.category("actions").add("awesome_clicker.client_action", ClickerClientAction);