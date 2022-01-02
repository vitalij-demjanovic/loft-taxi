
export const serverLogin = async ( email, password ) => {
    return fetch(
        `https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`
    ).then(res => res.json()).then(data => data.success)
}


export const serverRegistration = async (email, password, name, surname) => {
    fetch(
        `https://loft-taxi.glitch.me/register`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password, name, surname })
        }
    ).then(res => res.json())
}



