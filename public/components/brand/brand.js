import { h } from "../../deps_component.js"

export const Brand = (props) => {

    const { name } = props
    console.log("rendered");
    return h `
        <div>Brand name: ${name}</div>
    `
}
