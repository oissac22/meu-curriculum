import { Data } from './data.js'

function loadXNComponents()
{
    const querys = document.querySelectorAll("[x-n]");
    querys.forEach(query => {
        const name = query.getAttribute("x-n");
        if (name)
        {
            query.innerHTML = Data[name];
        }
    })
}

function loadXSComponents()
{
    const querys = document.querySelectorAll("[x-s]");
    querys.forEach(query => {
        const name = query.getAttribute("x-s");
        if (name)
        {
            query.src = Data[name];
        }
    })
}

export function loadDataInComponents()
{
    loadXNComponents();
    loadXSComponents();
}