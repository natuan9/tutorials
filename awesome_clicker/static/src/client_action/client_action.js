import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useClicker } from "../clicker_hook";
import { ClickerValue } from "../clicker_value/clicker_value";

class ClickerClientAction extends Component {
    static template = "awesome_clicker.ClickerClientAction";
    static props = ['*'];
    static components = { ClickerValue };

    setup() {
        this.clicker = useClicker();
    }

    increment(){
        this.clicker.increment(9);
    }
}

registry.category("actions").add("awesome_clicker.client_action", ClickerClientAction);