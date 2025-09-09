// utils/dateUtils.js
export function getLastFiveDays() {
    const today = new Date();
    const days = [];

    for (let i = 4; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(today.getDate() - i);

        const day = d.getDate();
        const month = d.toLocaleString("default", { month: "short" });
        const year = d.getFullYear();

        // Format with suffix (1st, 2nd, 3rd, etc.)
        const suffix =
            day % 10 === 1 && day !== 11
                ? "st"
                : day % 10 === 2 && day !== 12
                    ? "nd"
                    : day % 10 === 3 && day !== 13
                        ? "rd"
                        : "th";

        days.push(`${day}${suffix} ${month}, ${year}`);
    }

    return days;
}
