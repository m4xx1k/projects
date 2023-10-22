export function days(days) {
    if (days === 1) {
        return days + " день";
    }
    if (2 <= days && days <= 4) {
        return days + " дня";
    }
    return days + " днів";
}
