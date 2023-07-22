import React from "react";

const SectionMaps = () => {
  return (
    <section className="section-maps">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.0105084189727!2d-70.24874027942401!3d-18.024715937075772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915acf5cecd4530f%3A0x91df3a435f8a808f!2sUniverisdad%20Nacional%20Jorge%20Basadre%20Grohmann!5e0!3m2!1ses!2spe!4v1657515555489!5m2!1ses!2spe"
        width="100%"
        style={{ border: '0', height: '75vh', display: 'block' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default SectionMaps;
