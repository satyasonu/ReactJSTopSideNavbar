import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavBarElements";

const NavBarTop =() => {
    return (
        <>
            <Nav style={{backgroundColor:'#faf7f2'}}>
                <NavLogo to ="/"><img alt="
                Company_Logo" className="rotate" src="https://img.icons8.com/ios-filled/50/000000/redux.png"/></NavLogo>
                <Bars />

                <NavMenu>
                    <NavLink to = "/">
                        Home
                    </NavLink>
                    <NavLink to = "/about">
                        About
                    </NavLink>
                    <NavLink to = "/contact">
                        Index
                    </NavLink>
                    <NavLink to = "/report">
                        Report
                    </NavLink>
                    <NavBtn>
                    <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>                
                    </NavBtn>
                    {/* Add your NavLink here */}
                </NavMenu>
            </Nav>
        </>
    )
}

export default NavBarTop;

// install below modules to create NavBar
//1 -  npm install react-router-dom
//2 -  npm install --save styled components
//3 -  npm install react-icons --save