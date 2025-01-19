import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

function Contact() {
    return (
        <div className="font-poppins py-12 bg-white-smoke">
            <div className="container mx-auto px-4">
                {/* Titre */}
                <h2 className="text-3xl font-bold text-dark-purple text-center">Contactez-moi</h2>

                {/* Informations de contact */}
                <div className="mt-8 space-y-6">
                    {/* Téléphone */}
                    <div className="flex items-center justify-start text-slate-gray">
                        <FaPhone size={20} className="mr-3 text-burnt-orange" />
                        <span className="text-slate-gray">+33 7 85 23 95 27</span>
                    </div>

                    {/* Mail Institutionnel */}
                    <div className="flex items-center justify-start text-slate-gray">
                        <FaEnvelope size={20} className="mr-3 text-burnt-orange" />
                        <a href="mailto:leo.constantin@etu.umontpellier.fr" className="text-blue-500 hover:text-blue-700">leo.constantin@etu.umontpellier.fr</a>
                    </div>

                    {/* Mail Professionnel */}
                    <div className="flex items-center justify-start text-slate-gray">
                        <FaEnvelope size={20} className="mr-3 text-burnt-orange" />
                        <a href="mailto:contact@leo-constantin.fr" className="text-blue-500 hover:text-blue-700">contact@leo-constantin.fr</a>
                    </div>
                </div>

                {/* Carte OpenStreetMap */}
                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-dark-purple text-center">Où je me trouve</h3>
                    <div className="w-full h-96 mt-4 rounded-lg shadow-lg overflow-hidden">
                        {/* Carte OpenStreetMap avec possibilité de zoomer/dézoomer */}
                        <iframe
                            src="https://www.openstreetmap.org/export/embed.html?bbox=3.844997584819794%2C43.63528701739336%2C3.8483610749244694%2C43.63704963813506&amp;layer=mapnik&amp;marker=43.63616833422703%2C3.8466793298721313"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;