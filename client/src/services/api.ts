export const API = async (input): Promise<Object> =>{
    let response = await  fetch("/commandrun",{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ command: input })
    });
    let data = await response.json()

    return data
}