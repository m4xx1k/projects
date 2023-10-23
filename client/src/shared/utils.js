export function days(days) {
    if (days === 1) {
        return days + " день";
    }
    if (2 <= days && days <= 4) {
        return days + " дня";
    }
    return days + " днів";
}

export function isArray(array) {
    return array && Array.isArray(array) ? array : false
}

export function date(dateString) {
    try {
        const date = new Date(dateString)
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        const formattedDay = day < 10 ? `0${day}` : day;
        const formattedMonth = month < 10 ? `0${month}` : month;

        return `${formattedDay}.${formattedMonth}.${year}`;
    } catch (e) {
        return '-'
    }

}

export function withAll(array) {
    return [{label: "Всі", value: ''}, ...array]
}
