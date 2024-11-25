/**
 * Parse a date to a string with the format: "Día de la semana, Día de mes de año"
 * @param date Date to parse
 * @returns String with the format: "Día de la semana, Día de mes de año"
 * @example
 * parseDate(new Date()) // "Domingo, 1 de enero de 2023"  
 * parseDate(new Date(2023, 0, 1)) // "Domingo, 1 de enero de 2023"
*/
export default function parseDate(date: Date): string {

    const day = date.getDay(),
        month = date.getMonth(),
        year = date.getFullYear();

    const MONTHS: { [key: number]: string } = {
        0: 'enero',
        1: 'febrero',
        2: 'marzo',
        3: 'abril',
        4: 'mayo',
        5: 'junio',
        6: 'julio',
        7: 'agosto',
        8: 'septiembre',
        9: 'octubre',
        10: 'noviembre',
        11: 'diciembre',
    }

    const DAYS: { [key: number]: string } = {
        0: 'Domingo',
        1: 'Lunes',
        2: 'Martes',
        3: 'Miércoles',
        4: 'Jueves',
        5: 'Viernes',
        6: 'Sábado'
    }
    return `${DAYS[day]}, ${day + 1} de ${MONTHS[month]} de ${year}`
}