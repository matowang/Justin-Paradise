export const dateSlashNotation = ({ month, day, year }) => {
    return (month ? `${month}/` : '') + (day ? `${day}/` : '') + (year ? year : '')
}