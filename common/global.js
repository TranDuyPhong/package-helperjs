const FormatUnsignedToAccented = value => {
    if (value === undefined || typeof value === 'undefined' || value === null) {
        return '';
    }

    value = value.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    value = value.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    value = value.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    value = value.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    value = value.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    value = value.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    value = value.replace(/đ/g, "d");
    value = value.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    value = value.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    value = value.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    value = value.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    value = value.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    value = value.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    value = value.replace(/Đ/g, "D");

    return value;
};

module.exports = {
    FormatUnsignedToAccented
};