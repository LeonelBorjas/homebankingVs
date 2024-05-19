import Anchor from "./Anchor"


const HeaderNav = () => {
    const anchors = [
        { text: "Accounts", to: "/", img: "/public/assets/img/Accounts.webp" },
        { text: "Cards", to: "/Card", img: "/public/assets/img/cards.webp" },
        { text: "DHUE BANK", to: "/", img: "/public/assets/img/penguin.jpg", class: "w-15" },
        { text: "Loans", to: "/Loans", img: "/public/assets/img/loan.webp" },
        { text: "Transactions", to: "/Transactions", img: "/public/assets/img/transfer.webp" }
    ]
    return (
        <div className='h-26 bg-black lg:flex lg:justify-center lg:items-center lg:flex-col'>
            <nav className="flex justify-center items-center w-full h-full bg-white pt-2">
                <ul className="flex justify-around items-center w-11/12 py-1">
                    {anchors.map((anchor, index) => {
                        return (
                            <li key={index} className="w-1/5 text-center">
                                <Anchor  text={anchor.text} to={anchor.to} img={anchor.img} className={anchor.class} />
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default HeaderNav




/*<ul className="flex justify-around items-center w-11/12 py-1">
<li className="w-1/5 text-center">
    <a className="w-full flex flex-col justify-center items-center text-darkblue font-bold scale-105" href="#" >
        <img className="w-10" src="/public/assets/img/Accounts.webp" alt="ACCOUNTS" />
    </a>
    ACCOUNTS
</li>
<li className="w-1/5 text-center">
    <a className="w-full flex flex-col justify-center items-center text-darkblue font-bold scale-105" href="#" >
        <img className="w-10" src="/public/assets/img/cards.webp" alt="CARDS" />
    </a>
    CARDS
</li>
<li className="w-1/5 text-center">
    <a className="w-full flex flex-col justify-center items-center text-darkblue font-bold scale-105 text-logoblack" href="#">
        <img className="w-16" src="/public/assets/img/penguin.jpg" alt="back to home" />
    </a>
    DHUE BANK
</li>
<li className="w-1/5 text-center">
    <a className="w-full flex flex-col justify-center items-center text-darkblue font-bold scale-105" href="#">
        <img className="w-10" src="/public/assets/img/loan.webp" alt="LOANS" />
    </a>
    LOANS
</li>
<li className="w-1/5 text-center">
    <a className="w-full flex flex-col justify-center items-center text-darkblue font-bold scale-105" href="/src/pages/Transactions.jsx">
        <img className="w-10" src="/public/assets/img/transfer.webp" alt="TRANSACTIONS" />
    </a>
    TRANSACTIONS
</li>
</ul>*/






