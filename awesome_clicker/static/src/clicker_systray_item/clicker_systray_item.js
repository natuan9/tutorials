import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";
import { useClicker } from "../clicker_hook";
import { ClickerValue } from "../clicker_value/clicker_value";

export class ClickerSystray extends Component {
    static template = "awesome_clicker.ClickerSystray"
    static components = { ClickerValue };

    setup() {
        this.action = useService("action");
        this.clicker = useClicker();
    }

    increment(){
        this.clicker.increment(9);
    }

    openClientAction() {
        this.action.doAction({
            type: "ir.actions.client",
            tag: "awesome_clicker.client_action",
            target: "new",
            name: "Clicker Game"
        });
    }
}

const systrayItem = {
    Component: ClickerSystray,
};

registry.category("systray").add("awesome_clicker.ClickerSystray", systrayItem, { sequence: 1000 });