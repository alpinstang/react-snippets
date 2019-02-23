    handleDateTime = (value) => {
        // value is the utc datetime string
        let day = value.getDate();
        let month = value.getUTCMonth() + 1;
        let year = value.getUTCFullYear();

        // this can be formatted to your preference
        date = (year + '/' + month + '/' + day);
    }
