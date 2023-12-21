import "../../Styles/Account.css";


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