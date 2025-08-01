import { loadAllComponents } from "./load-components.js";
import { loadDataInComponents } from "./load-data-in-components2.js"

async function main()
{
    await loadAllComponents()
    loadDataInComponents();
}


window.addEventListener('load', main)
window.addEventListener('click', print);