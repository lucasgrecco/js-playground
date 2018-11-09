class DataHelper {

    static textToDate(text) {
        console.log(text);

        return new Date(...text.split('-').map((item, idx) => {
            if (idx === 1) {
                return item - 1;
            } else {
                return item;
            }
        }));

    }

    static dateToText(date) {

        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} `;

    }
}