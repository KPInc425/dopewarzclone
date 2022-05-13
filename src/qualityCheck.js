// Check Quality using luck and average quality in location
const qualityCheck = (avgQuality) => {
    let luck = checkLuck();
    console.log(luck);
    qualityIndex = (avgQuality * luck);

    return qualityIndex
};

export default qualityCheck;