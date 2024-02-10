export const sortedByUserName = (filteredData) => {
    const sortedData = [...filteredData].sort((a, b) => {
        const usernameA = a.lastName.toLowerCase();
        const usernameB = b.lastName.toLowerCase();
        if (usernameA < usernameB) {
            return -1;
        }
        if (usernameA > usernameB) {
            return 1;
        }
        return 0;
    });
    return sortedData;
};



export const sortedByEmail = (filteredData) => {
    const sortedData = [...filteredData].sort((a, b) => {
        const usernameA = a.email.toLowerCase();
        const usernameB = b.email.toLowerCase();
        if (usernameA < usernameB) {
            return -1;
        }
        if (usernameA > usernameB) {
            return 1;
        }
        return 0;
    });
    return sortedData;
};


export const sortedByCompany = (filteredData) => {
    const sortedData = [...filteredData].sort((a, b) => {
        const usernameA = a.company.name.toLowerCase();
        const usernameB = b.company.name.toLowerCase();
        if (usernameA < usernameB) {
            return -1;
        }
        if (usernameA > usernameB) {
            return 1;
        }
        return 0;
    });
    return sortedData;
};

export const sortFiltering = (select, filterData) => {
    let sortOp = [];
    if (select == "name") {
        sortOp = sortedByUserName(filterData)
    }
    if (select == "email") {
        sortOp = sortedByEmail(filterData)
    }
    if (select == "company") {
        sortOp = sortedByCompany(filterData);
    }
    return sortOp;
}
