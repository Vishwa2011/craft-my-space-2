import { Facebook, Instagram, YouTube, Pinterest, LocalPhone, Email, AttachMoney } from '@mui/icons-material';
import { Box, Typography, IconButton, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Check if screen is small

  const openLoginPage = (url) => {
    window.open(url, "_blank"); // Opens in new tab
  };

  return (
    <Box
      display="flex"
      flexDirection={isMobile ? "column" : "row"}
      justifyContent="space-between"
      alignItems="center"
      px={3}
      py={1}
      borderBottom={1}
      borderColor="grey.300"
      bgcolor="white"
      textAlign={isMobile ? "center" : "left"}
      sx={{backgroundColor:'#141b1f',color:'#fff'}}
    >
      {/* Social Media Icons with Login Links */}
      <Box display="flex" gap={1} justifyContent={isMobile ? "center" : "flex-start"}>
        <IconButton size="small" onClick={() => openLoginPage("https://www.facebook.com/login")}>
          <Facebook fontSize="small"  style={{color:'#fff'}}/>
        </IconButton>
        <IconButton size="small" onClick={() => openLoginPage("https://www.pinterest.com/login")}>
          <Pinterest fontSize="small"  style={{color:'#fff'}}/>
        </IconButton>
        <IconButton size="small" onClick={() => openLoginPage("https://www.instagram.com/accounts/login/")}>
          <Instagram fontSize="small"  style={{color:'#fff'}}/>
        </IconButton>
        <IconButton size="small" onClick={() => openLoginPage("https://accounts.google.com/signin/v2/identifier?service=youtube")}>
          <YouTube fontSize="small"  style={{color:'#fff'}}/>
        </IconButton>
      </Box>

      {/* Contact Details */}
      <Box 
        display="flex" 
        flexDirection={isMobile ? "column" : "row"} 
        gap={2} 
        alignItems={isMobile ? "center" : "center"} 
        mt={isMobile ? 1 : 0}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <LocalPhone fontSize="small" />
         <a href="tel:+01753530216" style={{color:'#fff'}}>
          <Typography variant="body2" > 01753530216</Typography>
          </a> 
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
  <Email fontSize="small" />
  <a  href="mailto:info@craftmyspace.uk" style={{color:'#fff'}}>
  <Typography 
    variant="body2" 
   
   
    sx={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
  >
  

    info@craftmyspace.uk
  </Typography>
    </a>
</Box>

      </Box>

      {/* Finance Info */}
      <Box display="flex" alignItems="center" gap={1} mt={isMobile ? 1 : 0} justifyContent={isMobile ? "center" : "flex-end"}>
        <AttachMoney fontSize="small" />
      
<a href='/GetaQuote' style={{color:'#fff'}}>

        <Typography variant="body2" sx={{ fontSize: isMobile ? "12px" : "14px" }} href="/GetaQuote">
          Finance Available From 0% APR on Fitted Bedroom Furniture
        </Typography>
</a>
        
      </Box>
    </Box>
  );
};

export default Header;
