import React from "react";

const Footer = () => {
  return (
    <footer className="footer-bg bg-[#2f0547] pt-10 pb-5">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm md:text-base leading-loose text-gray-400">
            &copy;&nbsp;{new Date().getFullYear()}, All Rights Reserved. Powered
            by:&nbsp;
            <a
              href="https://www.promising.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src="images/pdpl2.png"
                alt="promisingdesigns"
                className="inline-block w-5 h-5 md:w-4 md:h-4"
              />
            </a>
            &nbsp;|&nbsp;
            <a
              href="privacy-policy.html"
              className="text-gray-400 hover:text-gray-200"
            >
              Privacy Policy
            </a>
            &nbsp;|&nbsp;
            <a
              href="emi-calculator.html"
              className="text-gray-400 hover:text-gray-200"
            >
              EMI Calculator
            </a>
          </p>

          <div className="clearfix py-2"></div>

          <p className="text-[8px] md:text-[10px] leading-loose text-justify text-gray-400 px-1">
            Disclaimer: The plans, specifications, images, and other details
            herein are only indicative and subject to approval of the concerned
            authorities. The Group / Owner reserves the right to change any or
            all of these in the interest of the development, without prior
            notice or obligation. Artist's impressions are used to illustrate
            amenities, specifications, images, and other details and these may
            be applicable to select apartments only. Tolerance of +/- 3% is
            possible in the unit areas on account of design and construction
            variances. All brands stated are subject to final decision of the
            project architect. This printed material does not constitute an
            offer and/or contract of any type between the Group / Owner and the
            recipient. No booking or allotment shall be deemed to have been made
            on the basis of this printed material. Any Purchaser / Lessee of
            this development shall be governed by the terms and conditions of
            the agreement for sale / lease entered into between the parties, and
            no details mentioned in this printed material shall in any way
            govern such transactions unless as may be otherwise expressly
            provided in the agreement for sale/lease by the Group / Owner. The
            Group / Owner does not warrant or assume any liability or
            responsibility for the accuracy or completeness of any information
            contained here in.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
