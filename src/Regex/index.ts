export const regex = {
    username: (text: string) => text.replace(/[^a-zA-Z\s._]/g, '').toLowerCase(),
    password: (text: string) => text.replace(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]$/g,"").replace(/ /g, ""),
}
