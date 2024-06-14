import FooterSocialMedia from "./FooterSocialMedia"


const Footer = () => {
return (
    <footer className="flex gap-3 bg-black font-bold text-white justify-around items-center flex-col md:flex-row lg:flex-row">
        <small className="text-xs">Cohort54</small>
        <small className="text-xs"> &#169; 2024 Leonel Borjas. All rights reserved.</small>
        <FooterSocialMedia/>
    </footer>
)
}

export default Footer






