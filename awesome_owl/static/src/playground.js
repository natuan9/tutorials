/** @odoo-module **/

import { Component, useState, markup } from "@odoo/owl";
import { Counter } from "./counter/counter";
import { Card } from "./card/card";

export class Playground extends Component {
    static template = "awesome_owl.playground";

    htmlContent = markup("<div class='text-primary'>some content</div>");

    static components = { Counter, Card };
}
