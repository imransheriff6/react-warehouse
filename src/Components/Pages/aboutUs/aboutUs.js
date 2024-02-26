import React from "react";
import './aboutUs.css'
import bg from "../../../images/abountus.jpg"
function AboutUs(){
    return (
        <section id="about_us">
            <h1 className="title-underline center">ABOUT US</h1>
            <div className="d-flex">
                <section>
                    <p className="cards__item__text">Welcome to Move, where efficiency meets reliability. As a leading provider of warehousing solutions, we pride ourselves on our commitment to excellence in storage, logistics, and distribution services. With 25 years of industry experience, we have established ourselves as a trusted partner for businesses of all sizes seeking streamlined supply chain management.</p>
                    <p className="cards__item__text">At Move, our mission is simple: to optimize your storage and distribution processes, allowing you to focus on what matters most—growing your business. Our state-of-the-art facilities are equipped with the latest technology and security measures to ensure the safety and integrity of your inventory.</p>
                    <p className="cards__item__text">What sets us apart is our dedication to personalized service. We understand that every client has unique needs, which is why our team of experienced professionals works closely with you to develop customized solutions tailored to your specific requirements. Whether you're looking for short-term storage or long-term warehousing solutions, we have the expertise and resources to meet your needs.</p>
                    <p className="cards__item__text">Transparency and communication are at the heart of our operations. From real-time inventory tracking to regular updates on order fulfillment, we strive to keep you informed every step of the way. Our commitment to customer satisfaction drives everything we do, and we are constantly seeking ways to improve and innovate to better serve you.</p>
                    {/* <p className="cards__item__text">Partner with Move and experience the difference that reliable, efficient warehousing can make for your business. Contact us today to learn more about our services and how we can help you achieve your logistics goals.</p> */}
                </section>
                <section>
                    <img src={bg} alt="about us" className="abt-img"/>
                </section>
            </div>
        </section>
    )
}
export default AboutUs