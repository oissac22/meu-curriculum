import { Data } from './data2.js'

function loadXNComponents(doc, _data)
{
    if (!doc)
        doc = document;
    if (!_data)
        _data = Data;
    const querys = doc.querySelectorAll("[x-n]");
    querys.forEach(query => {
        const name = query.getAttribute("x-n");
        if (name)
        {
            query.innerHTML = _data[name];
            query.removeAttribute("x-n");
        }
    })
}

function loadXSComponents(doc, _data)
{
    if (!doc)
        doc = document;
    if (!_data)
        _data = Data;
    const querys = doc.querySelectorAll("[x-s]");
    querys.forEach(query => {
        const name = query.getAttribute("x-s");
        if (name)
        {
            query.src = _data[name];
            query.removeAttribute("x-s");
        }
    })
}

function loadSLoopComponents()
{
    const querys = document.querySelectorAll("[s-loop]");
    querys.forEach(query => {
        const name = query.getAttribute("s-loop");
        if (name)
        {
            const html = query.innerHTML;
            query.innerHTML = '';
            const itensToLoop = Data[name];
            itensToLoop.map(data => {
                query.innerHTML += html;
                loadXNComponents(query, data);
                loadXSComponents(query, data);
            })
            query.removeAttribute("s-loop");
        }
    })
}

export function loadDataInComponents()
{
    loadSLoopComponents()
    loadXNComponents();
    loadXSComponents();
}