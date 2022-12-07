export const generateId = () => Math.floor(Math.random() * 10000)

export const formatDate = (date: string) => new Date(date).toLocaleString()
