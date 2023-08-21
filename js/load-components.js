async function requestComponent(component)
{
    const handler = await fetch(`/components/${component}.html`);
    const html = await handler.text();
    return html;
}

const components = [
    "top",
    "skills",
    "experience",
    "projects",
    "certificate",
    "devHistory",
]

export async function loadAllComponents()
{
    const length = components.length;
    const html = []
    for (let i = 0; i < length; i++)
    {
        const component = components[i];
        const data = await requestComponent(component);
        html.push(data);
    }
    const body = document.body;
    body.innerHTML = html.join('');
}