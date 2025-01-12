import { Component, useState } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";
import { registry } from "@web/core/registry";

class ClickerClientAction extends Component {
    static template = "awesome_clicker.ClickerClientAction";
    static props = ['*'];

    setup() {
        this.clickService = useState(useService("awesome_clicker.clicker"));
    }

    increment(){
        this.clickService.increment(9);
    }
}

registry.category("actions").add("awesome_clicker.client_action", ClickerClientAction);