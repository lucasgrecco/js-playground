class DataHelper {

    static textToDate(text) {
        console.log(text);
        return new Date(
            ...text.split('-')
                .map((item, idx) => {
                        if (idx === 1) {
                            return item - 1;
                        }
                    }
                )
        );

    }

    static dateToText(date) {

        return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} `;

    }
}