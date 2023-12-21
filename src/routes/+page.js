// routse > page
export const load = async ({ fetch }) => {
    const response = await fetch(`api/lists`)
    const lists = await response.json();

    return { lists }
}