class formatUtils {
    constructor(){

    }

    inlineListPunctuation(thisIndex, wholeList)
    {
        return thisIndex == wholeList.length - 1 ? "." : ",";
    }
}

const format = new formatUtils();

export default format;