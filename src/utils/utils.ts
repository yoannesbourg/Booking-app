//takes an array with 2 fullnames and split them in order to return both firstnames
export const formatCoupleName = (partnersArr: string[]): string => {
    const coupleNamesSplited = partnersArr.map((partner) => partner.split(' '));
    const firstNames = coupleNamesSplited.map((arr: string[]) => (arr.length > 2 ? `${arr[0]} ${arr[1]}` : arr[0]));
    return firstNames.join(' & ');
};

export const calculatePercentage = (value: number, totalValue: number): number => {
    if (!value || !totalValue) {
        return 0;
    }
    return Math.round((value / totalValue) * 100);
};

export const formatEpochDate = (date: number): string => {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const constructedDate = new Date(date);
    return `${constructedDate.getDate()} ${monthNames[constructedDate.getMonth()]} ${constructedDate.getFullYear()}`;
};

export const calculateDifferenceBetwwenDateAndNow = (date: number): number => {
    const oneDay = 1000 * 60 * 60 * 24;
    const now = new Date().getTime();
    return Math.round((now - date) / oneDay);
};
