import Anchor from "./Anchor"
import React from 'react';


const HeaderNav = () => {
    const activePage = {
        Accounts: "/assets/img/account-active.png",
        Cards: "/assets/img/cards-active.png",
        "DHUE BANK": "/assets/img/penguin.jpg",
        Loans: "/assets/img/loan-active.png",
        Transactions: "/assets/img/transaciton-img.png"
    }

    const anchors = [
        { text: "Accounts", to: "/Accounts", img: "/assets/img/Accounts.webp", activeIcon: activePage.Accounts },
        { text: "Cards", to: "/Card", img: "/assets/img/cards.webp", activeIcon: activePage.Cards },
        { text: "DHUE BANK", to: "/Accounts", img: "/assets/img/penguin.jpg", activeIcon: activePage["DHUE BANK"], className: "w-15" },
        { text: "Loans", to: "/Loans", img: "/assets/img/loan.webp", activeIcon: activePage.Loans },
        { text: "Transactions", to: "/Transactions", img: "/assets/img/transfer.webp", activeIcon: activePage.Transactions }
    ]
    return (
        <div className='h-26 bg-black lg:flex lg:justify-center lg:items-center lg:flex-col'>
            <nav className="flex justify-center items-center w-full h-full bg-white pt-2">
                <ul className="flex justify-around items-center w-11/12 py-1">
                    {anchors.map((anchor, id) => {
                        return (
                            <li key={id} className="w-1/5 text-center">
                                <Anchor text={anchor.text} to={anchor.to} img={anchor.img} activeIcon={anchor.activeIcon} className={anchor.class} />
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default HeaderNav


