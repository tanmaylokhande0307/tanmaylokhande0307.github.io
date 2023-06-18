import React, { useState } from "react";
import Link from "next/link";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
} from "@mui/material";

export default function Footer() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <footer>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <h2>At UPSKILLER, we take your privacy seriously.</h2>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <p>
                This Privacy Policy outlines how we collect, use, and protect
                your personal information when you interact with our services
                and website. We are committed to ensuring the confidentiality
                and security of your data. By using our services, you consent to
                the practices described in this policy.
              </p>
              <p>Information We Collect:</p>
              <p>
                Personal Information: We may collect personal information, such
                as your name, email address, and contact details, when you
                voluntarily provide it to us.
              </p>
              <br />
              <p>
                Usage Data: We may collect information about your interactions
                with our services, such as your IP address, browser type, and
                device information. This data is collected through cookies and
                similar technologies.{" "}
              </p>
              <br />
              <p>
                Use of Information: We use the collected information to provide
                and improve our services, personalize your experience, and
                communicate with you. Personal information may be used to send
                you updates, newsletters, or marketing communications if you
                have opted to receive them. Usage data is collected to analyze
                trends, administer our website, and gather demographic
                information for aggregate use.
              </p>
              <br />
              <p>
                Data Sharing: We do not sell, trade, or rent your personal
                information to third parties. However, we may share it with
                trusted service providers who assist us in delivering our
                services. We may also disclose personal information if required
                by law or to protect our rights, safety, or the rights and
                safety of others.
              </p>
              <br />
              <p>
                Data Security: We implement appropriate security measures to
                protect your personal information from unauthorized access,
                alteration, disclosure, or destruction. However, no method of
                transmission over the internet or electronic storage is 100%
                secure. We cannot guarantee absolute security of your data.
              </p>
              <br />
              <p>
                Cookies: We use cookies and similar technologies to enhance your
                browsing experience, analyze usage patterns, and customize
                content. You can control cookies through your browser settings,
                but disabling them may affect the functionality of our services.
                Third-Party Links: Our services may contain links to third-party
                websites or services. We are not responsible for the privacy
                practices or content of those websites.
              </p>
              <br />
              <p>
                {" "}
                Children's Privacy: Our services are not intended for children
                under the age of 13. We do not knowingly collect personal
                information from children. If we become aware of such
                information being collected, we will take steps to delete it.{" "}
              </p>
              <br />
              <p>
                Updates to the Privacy Policy: We may update this Privacy Policy
                from time to time. Any changes will be posted on our website,
                and the revised policy will be effective upon posting. Contact
                Us: If you have any questions or concerns regarding this Privacy
                Policy or the handling of your personal information, please
                contact us at [contact padolelayesh@gmail.com/7620410439]. By
                using our services, you acknowledge that you have read and
                understood this Privacy Policy and agree to the collection, use,
                and disclosure of your personal information as described herein.
              </p>
              <br />
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12 w-screen">
            {/* 1st block */}
            <div className="md:col-span-5 lg:col-span-9">
              <div className="mb-2">
                {/* Logo */}
                <h1 style={{ color: "#9370DB", fontWeight: "bold" }}>
                  About Me
                </h1>
              </div>
              <div className="text-gray-400">
                Hi, I'm Layesh Padole a solopreneur specializing in prompt
                engineering and harnessing the power of ChatGPT. With a strong
                background in software development, I offer personalized
                mentoring and guidance to individuals seeking to leverage
                ChatGPT's capabilities. Our goal is to empower students like you
                by providing the knowledge and tools to optimize your
                interactions with ChatGPT. I understand the importance of prompt
                engineering and will help you craft effective queries that
                generate accurate and relevant responses. With my practice, I'll
                guide you in utilizing ChatGPT to enhance your productivity,
                creativity, and problem-solving abilities. Join me on this
                exciting journey as we unlock the potential of ChatGPT
              </div>
            </div>
          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">
            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <Link
                  href="/"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  href="/"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Github"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  href="/"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  href="/"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  href="/"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Linkedin"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </Link>
              </li>
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">
              &copy; By using our services, you acknowledge that you have read
              and understood this{" "}
              <strong onClick={handleClickOpen} className="privacy-link">
                Privacy Policy
              </strong>{" "}
              and agree to the collection, use, and disclosure of your personal
              information as described herein.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
