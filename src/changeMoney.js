const changeMoney = (account, change) => {
    account += change;
    console.log({account});
    console.log(change);
    return account;
}

export default changeMoney;