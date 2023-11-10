const Footer = () =>{
    const currentYear = new Date().getFullYear();
    return(
        <footer style={{height:"60px",backgroundColor:"#30374c",paddingLeft:"30px",lineHeight:"60px",color:"#fff"}}>
            {`© 2022-${currentYear} OnePill. Все права защищены`}        
        </footer>
    )

};

export default Footer;
