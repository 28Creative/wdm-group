import { Link } from "wouter";
import { LegalLayout } from "@/components/layout/LegalLayout";

export default function TermsOfService() {
  return (
    <LegalLayout
      title="Terms of Service"
      description="Terms and conditions governing the use of the Why Design Matters website."
      effectiveDate="19 August 2026"
    >
      <p>
        These Terms of Service govern your use of the Why Design Matters website at <a href="https://www.wdm-group.co.uk">www.wdm-group.co.uk</a>. The website is operated by WDM-GROUP LTD, trading as Why Design Matters ("WDM", "we", "us" or "our"). By accessing or using our website, you agree to comply with these terms.
      </p>

      <h2>1. Website Information vs. Professional Appointments</h2>
      <p>
        The content on this website is provided for general information purposes only. While we outline our professional capabilities, including Architecture &amp; Design, Feasibility &amp; Development Insight, Planning &amp; Project Navigation, and Sustainable &amp; Responsible Design, nothing on this website constitutes formal professional advice or an offer to contract.
      </p>
      <p>
        If you wish to engage Why Design Matters for architectural services, such engagements are subject to a separate, formal professional appointment contract outlining specific scopes, fees, and responsibilities.
      </p>

      <h2>2. Lawful Website Use</h2>
      <p>
        You agree to use our website only for lawful purposes. You must not use our site in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website. Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.
      </p>

      <h2>3. Intellectual Property</h2>
      <p>
        All content, design, imagery, text, and architectural concepts displayed on this website are the intellectual property of Why Design Matters, unless otherwise stated. You may view and temporarily cache pages for your personal, non-commercial use, but you may not reproduce, modify, distribute, or otherwise exploit any content without our express prior written permission.
      </p>

      <h2>4. External Links</h2>
      <p>
        Our website may contain links to external websites, such as LinkedIn. These links are provided for your convenience. We do not endorse these external websites and are not responsible for their content, security, or privacy practices.
      </p>

      <h2>5. Availability and Disclaimers</h2>
      <p>
        We endeavour to ensure that this website is available and functioning correctly; however, we provide the website on an "as-is" and "as-available" basis. We make no warranties or representations that the website will be uninterrupted, error-free, or entirely free from viruses or bugs.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Why Design Matters accepts no liability for any direct, indirect, or consequential loss or damage arising from your use of, or inability to use, this website or any information contained within it.
      </p>
      <p>
        Nothing in these terms shall exclude or limit our liability for death or personal injury caused by negligence, fraud, or any other liability which cannot be excluded or limited under applicable law.
      </p>

      <h2>7. Privacy</h2>
      <p>
        Your use of our website and any enquiries submitted through it are also governed by our <Link href="/privacy">Privacy Policy</Link>, which outlines how we handle your personal information.
      </p>

      <h2>8. Changes to These Terms</h2>
      <p>
        We reserve the right to amend these Terms of Service at any time. Any changes will be published on this page with an updated effective date. Your continued use of the website following any changes indicates your acceptance of the updated terms.
      </p>

      <h2>9. Governing Law</h2>
      <p>
        These terms and conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
      </p>

      <h2>10. Company Details</h2>
      <p>
        Why Design Matters is the trading name used by WDM-GROUP LTD, a private limited company registered in England and Wales.
      </p>
      <ul>
        <li><strong>Registered Company:</strong> WDM-GROUP LTD</li>
        <li><strong>Company Number:</strong> 16337075</li>
        <li><strong>VAT Number:</strong> 490295766</li>
        <li><strong>Registered Office:</strong> Shire House, Birmingham Road, Lichfield, WS14 9BW</li>
        <li><strong>Contact Email:</strong> <a href="mailto:Hello@wdm-group.co.uk">Hello@wdm-group.co.uk</a></li>
        <li><strong>Contact Telephone:</strong> 01543 886175</li>
      </ul>
    </LegalLayout>
  );
}
