import React from 'react'
import Footers from './Footer'
import Navbar from './Navbar'
import { motion } from 'framer-motion';
import { Card, CardContent } from '@mui/material';
import { Button } from '@mui/material';

import { CheckCircle, XCircle, ShieldCheck, Wrench, PhoneCall, FileText, Image as ImageIcon } from "lucide-react";
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
            data-stellar-background-ratio="0.5"
            style={{ backgroundImage: "url(assets/pic/terms.webp)" }}
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
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Warranty & Guaranty</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
      {/* Hero Banner Section with Background Image */}
      <div
        className="w-full h-64 bg-cover bg-center flex items-center justify-center text-white text-center rounded-b-xl shadow-lg"
        style={{
          backgroundImage: "url('/eccd3d09-1f61-4b48-993e-723d2ee64bdf.png')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-4 rounded">
          <h1 className="text-4xl font-bold">Warranty & Guarantee</h1>
          <p className="text-md mt-2">
            Our promise of quality, durability, and support — because you deserve the best.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="p-6 max-w-5xl mx-auto space-y-10">
        {/* Warranty Coverage */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-md">
            <CardContent className="p-4 space-y-2">
              <h2 className="flex items-center text-lg font-semibold">
                <CheckCircle className="text-green-500 mr-2" /> What’s Covered
              </h2>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Manufacturing defects</li>
                <li>Hardware issues (hinges, sliders)</li>
                <li>Cracking/splitting due to poor construction</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="p-4 space-y-2">
              <h2 className="flex items-center text-lg font-semibold">
                <XCircle className="text-red-500 mr-2" /> What’s Not Covered
              </h2>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Normal wear and tear</li>
                <li>Accidental damage (water, heat)</li>
                <li>Unauthorized repairs or misuse</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Warranty Period Table */}
        <Card className="shadow-md">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-2">Warranty Period</h2>
            <table className="w-full text-left border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 border">Product Type</th>
                  <th className="p-2 border">Warranty Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">Living Room Furniture</td>
                  <td className="p-2 border">1 Year</td>
                </tr>
                <tr>
                  <td className="p-2 border">Bedroom Sets</td>
                  <td className="p-2 border">1 Year</td>
                </tr>
                <tr>
                  <td className="p-2 border">Modular Wardrobes</td>
                  <td className="p-2 border">2 Years</td>
                </tr>
                <tr>
                  <td className="p-2 border">Custom Furniture</td>
                  <td className="p-2 border">As Agreed</td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* Claim Process */}
        <Card className="shadow-md">
          <CardContent className="p-4 space-y-2">
            <h2 className="text-lg font-semibold mb-2">How to Claim Warranty</h2>
            <ol className="list-decimal pl-6 text-gray-700 space-y-1">
              <li className="flex items-center">
                <FileText className="mr-2 text-blue-500" />
                Keep your Invoice & Order ID
              </li>
              <li className="flex items-center">
                <ImageIcon className="mr-2 text-blue-500" />
                Take photos/videos of the issue
              </li>
              <li className="flex items-center">
                <PhoneCall className="mr-2 text-blue-500" />
                Contact our Support Team
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 text-blue-500" />
                Wait for assessment & resolution
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Resolution Options */}
        <Card className="shadow-md">
          <CardContent className="p-4 space-y-2">
            <h2 className="flex items-center text-lg font-semibold">
              <Wrench className="text-yellow-600 mr-2" /> Resolution Options
            </h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Free repairs for minor issues</li>
              <li>Replacement of defective parts</li>
              <li>Complete product replacement (if needed)</li>
              <li>Resolution within 7 working days</li>
            </ul>
          </CardContent>
        </Card>

        {/* Final CTA */}
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold">Still Have Questions?</h2>
          <p className="text-gray-600">
            Our support team is here to help you with anything you need.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Contact Support
          </Button>
        </div>
      </div>
    </div>
        </div>
        <Footers />
        <button className="scroltop">
          <span className="fa fa-angle-up relative" id="btn-vibrate"></span>
        </button>
      </div>
    </motion.div>
    </>
  )
}

export default Warrantyandguaranty
