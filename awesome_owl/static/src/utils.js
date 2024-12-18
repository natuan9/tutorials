import {useRef, onMounted} from "@odoo/owl"

export function useAutoFocus(refName) {
    let ref = useRef(refName);
    onMounted(()=>{
        ref.el.focus();
    });
}