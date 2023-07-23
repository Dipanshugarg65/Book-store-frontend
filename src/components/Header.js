 import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { NavLink } from 'react-router-dom';
const Header = () => {
    const [value, setvalue] = useState();
   return (
     <div>
       <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
         <Toolbar>
           <NavLink to="/" style={{color:"white"}}>
             <Typography>
               <MenuBookIcon />
             </Typography>
           </NavLink>
           <Tabs
             sx={{ ml: "auto" }}
             indicatorColor="secondary"
             textColor="inherit"
             value={value}
             onChange={(e, val) => setvalue(val)}
           >
             <Tab LinkComponent={NavLink} to="/add" label="Add Product" />
             <Tab LinkComponent={NavLink} to="/books" label="Books" />
             <Tab LinkComponent={NavLink} to="/about" label="About Us" />
           </Tabs>
         </Toolbar>
       </AppBar>
     </div>
   );
 }
 
 export default Header
 