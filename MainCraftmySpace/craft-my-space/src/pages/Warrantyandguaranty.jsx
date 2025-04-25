// import React from 'react'
// import Footers from './Footer'
// import Navbar from './Navbar'
// import { motion } from 'framer-motion';
// import { Card, CardContent } from '@mui/material';
// import { Button } from '@mui/material';

// import { CheckCircle, XCircle, ShieldCheck, Wrench, PhoneCall, FileText, Image as ImageIcon } from "lucide-react";
// const Warrantyandguaranty = () => {
//   return (
//     <>
//       <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       style={{ background: '#000' }}
//     >
//       <div className="page-wraper term_li" style={{ background: "#000" }}>
//         <Navbar />
//         <div className="page-content">
//           <div
//             className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
//             data-stellar-background-ratio="0.5"
//             style={{ backgroundImage: "url(assets/pic/terms.webp)" }}
//           >
//             <div className="overlay-main bg-black opacity-07"></div>
//             <div className="container">
//               <div className="wt-bnr-inr-entry">
//                 <div className="banner-title-outer">
//                   <div className="banner-title-name">
//                     <h2 className="text-white">Warranty & Guaranty</h2>
//                   </div>
//                 </div>
//                 <div>
//                   <ul className="wt-breadcrumb breadcrumb-style-2">
//                     <li>
//                       <a href="/">Home</a>
//                     </li>
//                     <li>Warranty & Guaranty</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="container">
//       {/* Hero Banner Section with Background Image */}
//       <div
//         className="w-full h-64 bg-cover bg-center flex items-center justify-center text-white text-center rounded-b-xl shadow-lg"
//         style={{
//           backgroundImage: "url('/eccd3d09-1f61-4b48-993e-723d2ee64bdf.png')",
//         }}
//       >
//         <div className="bg-black bg-opacity-50 p-4 rounded">
//           <h1 className="text-4xl font-bold">Warranty & Guarantee</h1>
//           <p className="text-md mt-2">
//             Our promise of quality, durability, and support — because you deserve the best.
//           </p>
//         </div>
//       </div>

//       {/* Main Content Section */}
//       <div className="p-6 max-w-5xl mx-auto space-y-10">
//         {/* Warranty Coverage */}
//         <div className="grid md:grid-cols-2 gap-6">
//           <Card className="shadow-md">
//             <CardContent className="p-4 space-y-2">
//               <h2 className="flex items-center text-lg font-semibold">
//                 <CheckCircle className="text-green-500 mr-2" /> What’s Covered
//               </h2>
//               <ul className="list-disc pl-6 text-gray-700">
//                 <li>Manufacturing defects</li>
//                 <li>Hardware issues (hinges, sliders)</li>
//                 <li>Cracking/splitting due to poor construction</li>
//               </ul>
//             </CardContent>
//           </Card>
//           <Card className="shadow-md">
//             <CardContent className="p-4 space-y-2">
//               <h2 className="flex items-center text-lg font-semibold">
//                 <XCircle className="text-red-500 mr-2" /> What’s Not Covered
//               </h2>
//               <ul className="list-disc pl-6 text-gray-700">
//                 <li>Normal wear and tear</li>
//                 <li>Accidental damage (water, heat)</li>
//                 <li>Unauthorized repairs or misuse</li>
//               </ul>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Warranty Period Table */}
//         <Card className="shadow-md">
//           <CardContent className="p-4">
//             <h2 className="text-lg font-semibold mb-2">Warranty Period</h2>
//             <table className="w-full text-left border border-gray-200">
//               <thead>
//                 <tr className="bg-gray-100">
//                   <th className="p-2 border">Product Type</th>
//                   <th className="p-2 border">Warranty Duration</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="p-2 border">Living Room Furniture</td>
//                   <td className="p-2 border">1 Year</td>
//                 </tr>
//                 <tr>
//                   <td className="p-2 border">Bedroom Sets</td>
//                   <td className="p-2 border">1 Year</td>
//                 </tr>
//                 <tr>
//                   <td className="p-2 border">Modular Wardrobes</td>
//                   <td className="p-2 border">2 Years</td>
//                 </tr>
//                 <tr>
//                   <td className="p-2 border">Custom Furniture</td>
//                   <td className="p-2 border">As Agreed</td>
//                 </tr>
//               </tbody>
//             </table>
//           </CardContent>
//         </Card>

//         {/* Claim Process */}
//         <Card className="shadow-md">
//           <CardContent className="p-4 space-y-2">
//             <h2 className="text-lg font-semibold mb-2">How to Claim Warranty</h2>
//             <ol className="list-decimal pl-6 text-gray-700 space-y-1">
//               <li className="flex items-center">
//                 <FileText className="mr-2 text-blue-500" />
//                 Keep your Invoice & Order ID
//               </li>
//               <li className="flex items-center">
//                 <ImageIcon className="mr-2 text-blue-500" />
//                 Take photos/videos of the issue
//               </li>
//               <li className="flex items-center">
//                 <PhoneCall className="mr-2 text-blue-500" />
//                 Contact our Support Team
//               </li>
//               <li className="flex items-center">
//                 <CheckCircle className="mr-2 text-blue-500" />
//                 Wait for assessment & resolution
//               </li>
//             </ol>
//           </CardContent>
//         </Card>

//         {/* Resolution Options */}
//         <Card className="shadow-md">
//           <CardContent className="p-4 space-y-2">
//             <h2 className="flex items-center text-lg font-semibold">
//               <Wrench className="text-yellow-600 mr-2" /> Resolution Options
//             </h2>
//             <ul className="list-disc pl-6 text-gray-700">
//               <li>Free repairs for minor issues</li>
//               <li>Replacement of defective parts</li>
//               <li>Complete product replacement (if needed)</li>
//               <li>Resolution within 7 working days</li>
//             </ul>
//           </CardContent>
//         </Card>

//         {/* Final CTA */}
//         <div className="text-center space-y-2">
//           <h2 className="text-xl font-semibold">Still Have Questions?</h2>
//           <p className="text-gray-600">
//             Our support team is here to help you with anything you need.
//           </p>
//           <Button className="bg-blue-600 hover:bg-blue-700 text-white">
//             Contact Support
//           </Button>
//         </div>
//       </div>
//     </div>
//         </div>
//         <Footers />
//         <button className="scroltop">
//           <span className="fa fa-angle-up relative" id="btn-vibrate"></span>
//         </button>
//       </div>
//     </motion.div>
//     </>
//   )
// }

// export default Warrantyandguaranty
import React from 'react';
import Footers from './Footer';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@mui/material';
import { Button } from '@mui/material';
import { CheckCircle, XCircle, ShieldCheck, Wrench, PhoneCall, FileText, Image as ImageIcon } from "lucide-react";
import { FaCheckCircle, FaTimesCircle, FaFileInvoice, FaCamera, FaHeadset, FaClock, FaWrench } from "react-icons/fa";

const Warrantyandguaranty = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ background: '#000' }}
      >
        <div className="page-wraper term_li" style={{ background: "#000" }}>
          <Navbar />
          <div className="page-content">
            <div
              className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center"
              style={{ backgroundImage: "url(assets/pic/Country-Cottage-Style-Furniture-Blog-at-Oak-Furniture-UK.jpg)" }}
            >
              <div className="overlay-main bg-black opacity-07"></div>
              <div className="container">
                <div className="wt-bnr-inr-entry">
                  <div className="banner-title-outer">
                    <div className="banner-title-name">
                      <h2 className="text-white">Warranty & Guaranty</h2>
                    </div>
                  </div>
                  <div>
                    <ul className="wt-breadcrumb breadcrumb-style-2">
                      <li><a href="/">Home</a></li>
                      <li>Warranty & Guaranty</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
           

              {/* Main Section */}
              <div className=" text-gray-800 px-4 py-10 md:px-20" style={{paddingTop:'80px'}}>
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-blue-700">
          <span role="img" aria-label="shield">🛡️</span> 
        </h1>
        <h2 style={{marginBottom:'15px',color:'#B19777'}}>[ Warranty & Guarantee ]</h2>
        <p className="text-sm text-gray-600 mt-2" style={{display:'flex',justifyContent:'center'}}>
          Our promise of quality, durability, and support — because you deserve the best.
        </p>
      </div>

      {/* Covered / Not Covered */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="col-12">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-md-12 " style={{marginBottom:'22px'}}>
            <div className="border rounded-lg p-4 shadow-sm">
          <h3 className="flex items-center text-green-600 font-semibold text-lg mb-2" style={{color:'#B19777'}}>
            <FaCheckCircle className="mr-2" /> What's Covered
          </h3>
          <ul className="list-disc pl-6 text-sm space-y-1" style={{margin:'20px ',lineHeight:'35px'}}>
            <li>Manufacturing defects</li>
            <li>Hardware issues (hinges, sliders)</li>
            <li>Cracking/splitting due to poor construction</li>
          </ul>
        </div>
            </div>

            <div className="col-lg-6 col-sm-12 col-md-12" style={{marginBottom:'22px'}}>
            <div className="border rounded-lg p-4 shadow-sm">
          <h3 className="flex items-center text-red-500 font-semibold text-lg mb-2" style={{color:'#B19777'}}>
            <FaTimesCircle className="mr-2" /> What's Not Covered
          </h3>
          <ul className="list-disc pl-6 text-sm space-y-1" style={{margin:'20px',lineHeight:'35px'}}>
            <li>Normal wear and tear</li>
            <li>Accidental damage (water, heat)</li>
            <li>Unauthorized repairs or misuse</li>
          </ul>
        </div>
            </div>
          </div>
        </div>
   

      
      </div>

      {/* Warranty Period Table */}
      <div className="mb-10" style={{ border: '1px solid #fff', padding: '20px', margin: '15px 15px 37px 15px' }}>
  <h3 className="text-lg font-semibold mb-3" style={{ color: '#B19777' }}>Warranty Period</h3>
  
  <div className="overflow-x-auto">
    <table className="w-full border text-sm min-w-[400px]" style={{ margin: '0px' }}>
      <thead className="bg-gray-100">
        <tr>
          <th className="border px-4 py-2 text-left">Product Type</th>
          <th className="border px-4 py-2 text-left">Warranty Duration</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">Living Room Furniture</td>
          <td className="border px-4 py-2">1 Year</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Bedroom Sets</td>
          <td className="border px-4 py-2">1 Year</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Modular Wardrobes</td>
          <td className="border px-4 py-2">2 Years</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Custom Furniture</td>
          <td className="border px-4 py-2">As Agreed</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


      {/* How to Claim */}
      <div className="mb-10" style={{border:'1px solid #fff',padding:'20px',margin:'37px 15px'}}>
        <h3 className="text-lg font-semibold mb-3" style={{color:'#B19777'}}>How to Claim Warranty</h3>
        <ul className="space-y-2 text-sm" style={{listStyle:'none',lineHeight:'35px'}}>
          <li className="flex items-center">
            <FaFileInvoice className="text-blue-600 mr-2" /> Keep your Invoice & Order ID
          </li>
          <li className="flex items-center">
            <FaCamera className="text-blue-600 mr-2" /> Take photos/videos of the issue
          </li>
          <li className="flex items-center">
            <FaHeadset className="text-blue-600 mr-2" /> Contact our Support Team
          </li>
          <li className="flex items-center">
            <FaClock className="text-blue-600 mr-2" /> Wait for assessment & resolution
          </li>
        </ul>
      </div>

      {/* Resolution Options */}
      <div className="mb-10" style={{border:'1px solid #fff',padding:'20px',margin:'15px'}}>
        <h3 className="text-lg font-semibold mb-3 text-yellow-600 flex items-center" style={{color:'#B19777'}}>
          <FaWrench className="mr-2" /> Resolution Options
        </h3>
        <ul className="list-disc pl-6 text-sm space-y-1" style={{marginLeft:'20px',lineHeight:'35px'}}>
          <li>Free repairs for minor issues</li>
          <li>Replacement of defective parts</li>
          <li>Complete product replacement (if needed)</li>
          <li>Resolution within 7 working days</li>
        </ul>
      </div>

      {/* Still Have Questions */}
      <div className="text-center mt-10" style={{padding:'40px'}}>
        <h3 className="text-lg font-semibold " style={{marginBottom:'20px',color:'#B19777'}}> Still Have Questions?</h3>
        <p className="text-sm " style={{display:'flex',justifyContent:'center',marginBottom:'20px'}}>Our support team is here to help you with anything you need.</p>
        <div>
                <a
                  href="/ContactUs"
                  className="site-button-link"
                  style={{
                    background: "#B19777",
                    color: "white",
                    padding: "11px 15px",
                    textDecoration: "none",
                    border: "2px solid #B19777",
                    transition: "all 0.3s ease-in-out",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "white";
                    e.target.style.color = "#B19777";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "#B19777";
                    e.target.style.color = "white";
                  }}
                >
                  Contact Support
                </a>
              </div>
      </div>
    </div>
            </div>

            <Footers />
            <button className="scroltop">
              <span className="fa fa-angle-up relative" id="btn-vibrate"></span>
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Warrantyandguaranty;
