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
      // borderBottom={1}
      borderColor="grey.300"
      bgcolor="white"
      textAlign={isMobile ? "center" : "left"}
      sx={{backgroundColor:'#000',color:'#fff'}}
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
        {/* <IconButton size="small" onClick={() => openLoginPage("https://accounts.google.com/signin/v2/identifier?service=youtube")}>
          <YouTube fontSize="small"  style={{color:'#fff'}}/>
        </IconButton> */}
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
         <a href="tel:(0044)07365 566 666" style={{color:'#fff'}}>
          <Typography variant="body2" > (0044)07365 566 666</Typography>
          </a> 
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
  <Email fontSize="small" />
  <a  href="mailto:Info@craftmyspace.co.uk" style={{color:'#fff'}}>
  <Typography 
    variant="body2" 
   
   
    sx={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
  >
  

  Info@craftmyspace.co.uk
  </Typography>
    </a>
</Box>

      </Box>

      {/* Finance Info */}
      <Box 
  display="flex" 
  alignItems="center" 
  gap={1} 
  mt={isMobile ? 1 : 0} 
  justifyContent={isMobile ? "center" : "flex-end"}
>
  <a 
    href='/GetaQuote' 
    style={{ 
      color: '#fff', 
      fontWeight: '600', 
      padding: '5px 10px', 
      border: '2px solid #B19777', 
      background:'#B19777',
      borderRadius: '5px', 
      transition: 'all 0.3s ease-in-out',
      display: 'inline-block'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = "#fff";
      e.currentTarget.style.color = "#B19777";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = "#B19777";
      e.currentTarget.style.color = "#fff";
    }}
  >
    <Typography 
      variant="body2" 
      sx={{ fontSize: isMobile ? "12px" : "14px" }}
    >
      Download Broucher
    </Typography>
  </a>
</Box>

    </Box>
  );
};

export default Header;
