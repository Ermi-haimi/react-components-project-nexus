import './FooterList.css'

function FooterList(props) {
    
    return <div className='footer-list'>
        <h4>{props.title}</h4>
        <ul>
            <li>{props.one}</li>
            <li>{props.two}</li>
            <li>{props.three}</li>
        </ul>
    </div>
}

export default FooterList;