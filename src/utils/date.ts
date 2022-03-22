const getTimeItem = (item: number): string => String(item).padStart(2, "0");

export const msToHMS = (ms: number): string => {
    // 1- Convert to seconds:
    let seconds = ms / 1000;
    // 2- Extract hours:
    const hours = Math.round(seconds / 3_600); // 3_600 seconds in 1 hour
    seconds = seconds % 3600; // seconds remaining after extracting hours
    // 3- Extract minutes:
    const minutes = Math.round(seconds / 60); // 60 seconds in 1 minute
    // 4- Keep only seconds not extracted to minutes:
    seconds = Math.round(seconds % 60);
    return `${getTimeItem(hours)}:${getTimeItem(minutes)}:${getTimeItem(seconds)}`;
}
