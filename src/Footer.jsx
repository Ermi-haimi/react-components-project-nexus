import './Footer.css'
import FooterList from './FooterList'

function Footer(){

    return <footer>
        <div>
            <FooterList title="Company" one="About Us" two="Careers" three="Contact" />
            <FooterList title="Product" one="Features" two="Pricing" three="Support" />
            <FooterList title="Resources" one="Documentation" two="Blog" three="Community" />
        </div>
        <hr />
        <div className='footerFooter'>
            <p>&copy;2024 Task Management Dashboard. All rights reserved.</p>
        </div>
        
</footer>
}

export default Footer;