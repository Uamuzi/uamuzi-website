import * as React from "react"
import Layout from "../components/layout";
import '../components/extrastyle.css';
import Seo from '../components/seo';

const PolicyPage = () => {
    return (
      <Layout>
        <div id="top">
        <div id="tope" className="container my-4">
          <p className="event text-center event-title">OUR POLICIES</p>
          <p className="h3 text-center event-title">DATA PROTECTION AND PRIVACY NOTICE</p>
          <p className="h6 text-center event-text" style={{color:"#515151"}}><b>Effective Date: 1 st February 2024</b></p>
        </div>
        </div>
        <div className="container my-4">  
          <p className="text-left">
          This Privacy Notice governs the manner in which Uamuzi (&quot;we,&quot;
&quot;us,&quot; or &quot;our&quot;) collects, uses, maintains, and discloses information
collected from users (each, a &quot;User&quot;) of the Uamuzi website and any
associated mobile applications (collectively, the &quot;Service&quot;). This
Privacy Notice applies to the Service and all products and services
offered by Uamuzi Foundation.
          </p>

        <p className="h5 text-start event-title">1. Information we collect</p>
        <p className="text-left">
        We may collect personal identification information from Users in
various ways, including but not limited to when Users visit our
website, register on the website or application, place an order, fill
out a form, respond to a survey, subscribe to the newsletter, and in
connection with other activities, services, features, or resources we
make available on our Service. Users may be asked for, as
appropriate, their name, email address, phone number, location,
voting constituency, date of birth and payment information. We
will collect personal identification information from Users only if
they voluntarily submit such information to us or as part of a
fulfillment of a contract entered between you and Us. Users can
always refuse to supply personally identifiable information, except
that it may prevent them from engaging in certain Service-related
activities.
        </p>
        <p className="h5 text-start event-title">2. Non-Personal Identification Information</p>
        <p className="text-left">
        We may collect non-personal identification information about
Users whenever they interact with our Service. Non-personal
identification information may include the browser name, the type

of computer or device, and technical information about Users&#39;
means of connection to our Service, such as the operating system,
the Internet service providers utilized, and other similar
information. This information aids in our marketing work and in
identifying a particular user service operation need.
        </p>
        <p className="h5 text-start event-title">3. How We Use Collected Information</p>
        <p className="text-left">
        We may collect and use Users&#39; personal information for the
following purposes:
        <ol className="custom-list">
          <li><p style={{ color: 'black' }}>To offer Uamuzi website and Application Service Offerings:
Our Application will require your personal information such
as name, location data, date of birth, email address, and
mobile number to offer the services as per our website Terms
and Conditions;</p></li>
          <li><p style={{ color: 'black' }}>To improve customer service: Information provided helps us
respond to customer service requests and support needs more
efficiently;</p></li>
          <li><p style={{ color: 'black' }}>To personalize user experience: We may use information in
the aggregate to understand how our Users as a group use the
services and resources provided on our Service;</p></li>
          {/* <li><p style={{ color: 'black' }}>To personalize user experience - We may use information in the aggregate to understand how our   Users as a group use the services and resources provided on our Service;</p></li> */}
          <li><p style={{ color: 'black' }}>To improve our Service: We may use feedback provided to
improve our products and services;</p></li>
          <li><p style={{ color: 'black' }}>To process payments: We may use the information Users
provide about themselves when they subscribe only to provide
service to that subscription. We do not share this information
with outside parties except to the extent necessary to provide
the service;</p></li>
          <li><p style={{ color: 'black' }}>To send periodic emails: We may use the email address to

send User information and updates pertaining to the service.
It may also be used to respond to their inquiries, questions,
and/or other requests. If Users decide to opt-in to our mailing
list, they will receive emails that may include Organization
news, updates, related product or service information, etc. If
at any time the User would like to unsubscribe from receiving
future emails, we include detailed unsubscribe instructions at
the bottom of each email or the User may contact us via our
Service;</p></li>
          </ol>  
        </p>
        <p className="h5 text-start event-title">4. How We Protect Your Information</p>
        <p className="text-left">
        The security, integrity, and confidentiality of your information are
extremely important to us. We have implemented technical,
administrative, and physical security measures that are designed to
protect personal information from unauthorized access, disclosure,
use, and modification. We regularly review our security procedures
to consider appropriate new technology and methods. Please be
aware that, despite our best efforts, no security measures are
perfect or impenetrable. We will retain your personal information
for the length of time needed to fulfill the purposes outlined in this
privacy notice unless a longer retention period is required or
permitted by law.
We operate locally within Kenya and at no time will your data be
transferred to any third parties locally, or in locations around the
world. Where your personal information is stored or processed by
us, we will take reasonable steps to safeguard the privacy of your
personal information. These steps may include implementing
standard contractual clauses recognized by law, obtaining your
consent, or other lawful means of transferring personal
information. 
        </p>
        
        <p className="h5 text-start event-title">5. Your Controls and Your Choices</p>
        <p className="text-left">
        We provide you the ability to exercise certain controls and choices
regarding our collection, use and sharing of your information. In
accordance with applicable law, your controls and choices may
include:
        <ol className="custom-list">
          <li><p style={{color:'black'}}>Correcting, updating, and deleting your registration account;</p></li>
          <li><p style={{color:'black'}}>Choosing or changing your choices for subscriptions,
newsletters, and alerts;</p></li>
          <li><p style={{color:'black'}}>Choosing whether to receive from us offers and promotions
for our products and services, or products and services that we
think may be of interest to you;</p></li>
          <li><p style={{color:'black'}}>Choosing whether we share your personal information with
other companies or third parties so they can send you offers
and promotions about their products and services;</p></li>
          <li><p style={{color:'black'}}>Controlling targeted advertising by clicking on “Do Not Sell or
Share My Personal Information” or “Manage Your Cookie
Settings” in our website footers or application settings;</p></li>
          <li><p style={{color:'black'}}>Requesting removal of your personal information from a
public forum on one of our sites or application;</p></li>
          <li><p style={{color:'black'}}>Requesting access to the personal information we hold about
you and that we amend or delete it.</p></li>
          </ol>
        </p>
        <p className="text-left">
        You may exercise these controls by sending an email to:
        <a href="mailto:privacy@uamuzi.org" style={{color: '#8067AD'}}>privacy@uamuzi.org</a>. 
Please be aware that if you do not allow us to collect personal
information from you, we may not be able to deliver certain

experiences, products, and services to you, and some of our services
may not be able to take account of your interests and preferences. If
collection of personal information is mandatory, we will make that
clear at the point of collection so that you can make an informed
decision whether to participate. If you have questions about the
specific personal information about you that we process or retain,
and your rights regarding that personal information, please contact
insert email:[<a href="mailto:privacy@uamuzi.org" style={{color: '#8067AD'}}>privacy@uamuzi.org</a>].
        </p>

        <p className="h5 text-start event-title">6. Sharing Your Personal Information</p>
        <p className="text-left">We do not sell, trade, or rent Users&#39; personal identification
information to others. We may share generic aggregated
demographic information not linked to any personal identification
information regarding visitors and users with our business
partners, trusted affiliates, and advertisers for the purposes
outlined above.</p>

        <br/>
<p className="h5 text-start event-title">7. Changes to This Privacy Notice.</p>
        <p className="text-left">From time to time, we may change this Privacy Notice to
accommodate new technologies, industry practices, regulatory
requirements or for other purposes. We will provide notice to you if
these changes are material and, where required by applicable law,
we will obtain your consent. Notice may be by email to you at the
last email address you provided us, by posting notice of such
changes on our sites and applications, or by other means,
consistent with applicable law.</p>

<br/>
<p className="h5 text-start event-title">8. Lawful Processing.</p>
        <p className="text-left">Our Company depends on various lawful means of processing
Personal data.</p>
<ol className="custom-list">
<li><p style={{color:'black'}}>Consent: For personal data such as website cookies, and
sharing of personal data for advertising purposes.</p></li>


<li><p style={{color:'black'}}>Performance of a Contract: For our service offerings both on
the website and application as outlined in our Terms and
Conditions and in the performance of other types of internal
company contracts.</p></li>

<li><p style={{color:'black'}}>Legal obligation: In adherence to a rule of law as regards a
data subject personal data.</p></li>
          </ol>
          <p className="text-left">By using this Service, you signify that you have read and are aware
of this Privacy Notice.</p>

<br/>
<p className="h5 text-start event-title">Contact Us</p>
        <p className="text-left">If you have any questions about our Privacy Policy, the practices of
this Service, or your dealings with this Service, please contact us at: 
<a href="mailto:privacy@uamuzi.org" style={{color: '#8067AD'}}>privacy@uamuzi.org</a>. </p>
        </div>
        

        
      </Layout>  
    );
  };


export const Head = () => <Seo title="Policy" />
export default PolicyPage;