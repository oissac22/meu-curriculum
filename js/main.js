import { loadAllComponents } from "./load-components.js";
import { loadDataInComponents } from "./load-data-in-components.js"

async function main()
{
    await loadAllComponents()
    loadDataInComponents();
    // print();
}


window.addEventListener('load', main)