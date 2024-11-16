/** @odoo-module **/

import { Component, useState, markup } from "@odoo/owl";
import { Counter } from "./counter/counter";
import { Card } from "./card/card";

export class Playground extends Component {
    static template = "awesome_owl.playground";

    setup() {
        this.sum = useState({value: 2})
    }

    htmlContent = markup("<div class='text-primary'>some content</div>");

    incrementSum() {
        this.sum.value++;
    }

    static components = { Counter, Card };
}
