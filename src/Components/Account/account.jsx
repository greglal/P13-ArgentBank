import "../../Styles/Account.css";

/**
 * Account with name, mount and balance
 *
 * @param accountName
 * @param mount
 * @param balance
 * @returns {JSX.Element}
 * @constructor
 */
export default function Account({accountName, mount, balance}) {

    return (
        <div className="account">
            <div className="account-desc">
                <p className="account-balance">{accountName}</p>
                <p className="mount">{mount}</p>
                <p className="account-balance">{balance}</p>
            </div>
            <button className="transaction-button">View transactions</button>
        </div>
    )
}