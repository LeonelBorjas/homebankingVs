import FooterSocialMedia from "./FooterSocialMedia"


const Footer = () => {
return (
    <footer className="flex bg-black font-bold text-white justify-around items-center">
        <small>Cohort54</small>
        <small> &#169; 2024 Leonel Borjas. All rights reserved.</small>
        <FooterSocialMedia/>
    </footer>
)
}

export default Footer






{/* <footer className="flex bg-black font-bold text-white justify-around items-center">
<small>Cohort54</small>
<small> &#169; 2024 Leonel Borjas. All rights reserved.</small>
<div className="flex gap-10 justify-center items-center">
<img className="w-10" src="/public/assets/img/instagram_icon.png.webp"  alt="Instagram_Logo" />
<img className="w-10" src="/public/assets/img/wsp-icono.webp" alt="linkedin_Logo" />
<img className="w-10" src="/public/assets/img/GitHub.png" alt="GitHub_Logo" />
</div>
</footer> */}