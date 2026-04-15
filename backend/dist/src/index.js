"use strict";
// import type { Core } from '@strapi/strapi';
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    /**
     * An asynchronous register function that runs before
     * your application is initialized.
     *
     * This gives you an opportunity to extend code.
     */
    register( /* { strapi }: { strapi: Core.Strapi } */) { },
    async bootstrap({ strapi }) {
        var _a;
        const programCount = await strapi.entityService.count('api::program.program');
        if (programCount === 0) {
            const programs = [
                {
                    title: 'DST NIDHI - PRAYAS',
                    tagline: 'Grant Support for Idea to Prototype',
                    description: 'The lack of support for early stage prototyping causes many innovators / startups to lose interest in their technology ventures. To address the gap in the very early stage idea/ proof of concept funding, under the National Initiative for Developing and Harnessing the Innovations (NIDHI), the National Science & Technology Entrepreneurship Development Board (NSTEDB), Department of Science & Technology (DST), Government of India launched the NIDHI-PRAYAS program.',
                    funding: 'Rs.10.00 lakhs',
                    applyUrl: 'https://psgstep.fibenis.org',
                    publishedAt: new Date(),
                },
                {
                    title: 'MeitY TIDE 2.0',
                    tagline: 'Technology Incubation & Development of Entrepreneurs',
                    description: 'PSG-STEP is associated with MeitY, Govt. of India under TIDE 2.0. The scheme envisages provisioning support to tech startups during the entire journey from idea-to-market. It targets early-stage technology-based startups leveraging IoT, AI, BlockChain, Robotics, etc.',
                    funding: 'EiR: ₹ 4.00 lakh | Grant: Rs. 7 lakh',
                    applyUrl: 'http://psgstep.fibenis.org/',
                    publishedAt: new Date(),
                }
            ];
            for (const program of programs) {
                await strapi.entityService.create('api::program.program', {
                    data: program,
                });
            }
            console.log('Successfully seeded program entries.');
        }
        const fundingCount = await strapi.entityService.count('api::funding.funding');
        if (fundingCount === 0) {
            const fundings = [
                {
                    title: 'Seed Fund Support Scheme',
                    description: 'A Seed Fund Support Scheme has been constituted by PSG-STEP with the support from Technology Development Board (TDB) & NSTEDB, Department of Science & Technology, Government of India to extend financial support to technology ventures.',
                    quantum_of_assistance: 'Rs.50.00 lakhs',
                    rate_of_interest: '5%',
                    repayment_period: '5 years',
                    apply_url: 'http://psgstep.fibenis.org/',
                    content: 'The financial support will be extended to: Product Development, Testing, Trial & Test Marketing, Filing of Patents. It also targets high-risk areas and innovation commercialization.',
                    publishedAt: new Date(),
                },
                {
                    title: 'MSME Incubator Scheme',
                    description: 'Support for MSME entrepreneurs in enhancing competitiveness and early-stage startup technopreneurs.',
                    content: 'Includes beneficiaries like Kalycito Infotech Pvt. Ltd (Power Link), Fedlabs (X Welding Robo), Lexbit Technologies (Lead Manager Application), and Webstars (Client Applications).',
                    publishedAt: new Date(),
                },
                {
                    title: 'EDII-Innovation Voucher Program (IVP)',
                    description: 'Tamil Nadu Government’s flagship grant-in-aid scheme for supporting Start-ups and MSMEs.',
                    quantum_of_assistance: 'Voucher A (upto Rs.2 Lakhs) / Voucher B (upto Rs.5 Lakhs)',
                    content: 'Innovation Voucher Programme helps in Technology Roadmap, Market Research, Feasibility Studies, Prototyping, and Design Services.',
                    publishedAt: new Date(),
                },
                {
                    title: 'DST NIDHI - PRAYAS',
                    description: 'Grant Support for Idea to Prototype. Specifically supports young innovators to turn ideas into proof-of-concepts.',
                    quantum_of_assistance: 'Rs.10.00 lakhs',
                    apply_url: 'https://psgstep.fibenis.org',
                    publishedAt: new Date(),
                },
                {
                    title: 'MeitY TIDE 2.0',
                    description: 'Support tech startups from idea-to-market in areas like Healthcare, Edutech, Agritech, Fintech, and Cleantech.',
                    quantum_of_assistance: 'EiR (₹ 4.00 lakh) / Grant (Rs. 7 lakh)',
                    apply_url: 'http://psgstep.fibenis.org/',
                    publishedAt: new Date(),
                }
            ];
            for (const funding of fundings) {
                await strapi.entityService.create('api::funding.funding', {
                    data: funding,
                });
            }
            console.log('Successfully seeded funding entries.');
        }
        try {
            const INCUBATEE_UID = 'api::incubatee-profile.incubatee-profile';
            const incubateeProfileExists = await strapi
                .documents(INCUBATEE_UID)
                .findFirst({ populate: ['present_incubatees'] });
            const hasPresent = Array.isArray(incubateeProfileExists === null || incubateeProfileExists === void 0 ? void 0 : incubateeProfileExists.present_incubatees) &&
                incubateeProfileExists.present_incubatees.length > 0;
            console.log('[Seed] incubatee-profile doc:', (_a = incubateeProfileExists === null || incubateeProfileExists === void 0 ? void 0 : incubateeProfileExists.documentId) !== null && _a !== void 0 ? _a : 'none', '| hasPresent:', hasPresent);
            if (!hasPresent) {
                const presentIncubatees = [
                    { name: '4miZyme Biosciences Pvt Ltd', area_of_operations: 'Industrial Biotechnology', website: 'www.4mizyme.com' },
                    { name: 'Aagnia Technologies', area_of_operations: 'Web & Mobile Applications', website: 'www.aagnia.com' },
                    { name: 'Aaral Exports', area_of_operations: 'Food Tech', website: 'www.aaralexports.com' },
                    { name: 'Abhaya Soft Solutions (OPC) Pvt Ltd', area_of_operations: 'Electronics', website: '' },
                    { name: 'Accessible Engineering Innovation Corporation Pvt Ltd', area_of_operations: 'Electronics/IT Solutions', website: 'www.aeicor.com' },
                    { name: 'ADEPT Knowledge Technologies Pvt Ltd', area_of_operations: 'Healthcare', website: '' },
                    { name: 'Aivar Innovations Private Limited', area_of_operations: 'IT-AI', website: 'www.aivar.tech' },
                    { name: 'Alagiri G', area_of_operations: 'Healthcare', website: '' },
                    { name: 'Aloha Tech Ventures Private Limited', area_of_operations: 'NanoTech', website: 'www.alohatechventures.com' },
                    { name: 'Anci Boselin A', area_of_operations: 'AgriTech', website: '' },
                    { name: 'Ardor Biomed India Pvt Ltd', area_of_operations: 'Industrial Biotech', website: 'www.ardorbiomed.com' },
                    { name: 'Arputha Advanced Systems Pvt Ltd', area_of_operations: 'ICT', website: '' },
                    { name: 'Autoattend', area_of_operations: 'Web based Product', website: 'www.autoattend.com' },
                    { name: 'BeyondCo Technologies Private Limited', area_of_operations: 'Digital Legacy Management', website: '' },
                    { name: 'Bioniversio Biologics Private Limited', area_of_operations: 'Health and Wellness', website: '' },
                    { name: 'Caldor Health Technologies Pvt Ltd', area_of_operations: 'Healthcare', website: 'www.caldorhealthtech.com' },
                    { name: 'Cognitica AI Pvt Ltd', area_of_operations: 'IoT Automation', website: 'www.cognitica.ai' },
                    { name: 'CraftZymes Biotech Private Limited', area_of_operations: 'Industrial Biotechnology', website: 'www.craftzymesbiotech.co.in' },
                    { name: 'Declutter Solutions Pvt Ltd', area_of_operations: 'Environmental Biotech', website: 'www.decluttersolutions.in' },
                    { name: 'Dhanajeevam Lifesciences', area_of_operations: 'Biotechnology', website: 'www.dhanajeevamlabs.com' },
                    { name: 'Doers Tech Enterprise Solutions Pvt Ltd', area_of_operations: 'Developing Enterprise Application', website: 'www.doerstech.com' },
                    { name: 'Dotworld Technologies Pvt Ltd', area_of_operations: 'Electronics', website: 'www.dotworld.in' },
                    { name: 'Dr R Rasmi Rajan', area_of_operations: 'Healthcare', website: '' },
                    { name: 'eApta Dynamics Pvt Ltd', area_of_operations: 'ICT', website: 'www.eapta.tech.in' },
                    { name: 'Easytack Technologies LLP', area_of_operations: 'Cloud base Point of Scale Application', website: '' },
                    { name: 'EBITS Techcon', area_of_operations: 'Enterprise Solutions', website: 'www.ebits.co.in' },
                    { name: 'Elamani Tech Private Limited', area_of_operations: 'Robotics Development', website: '' },
                    { name: 'Elies Biotech Private Limited', area_of_operations: 'Biotech', website: 'www.eliesbiotech.co.in' },
                    { name: 'Elmech Technologies', area_of_operations: 'Medtech', website: 'www.elmechtechnologies.com' },
                    { name: 'EMAX Scientific Solutions Pvt Ltd', area_of_operations: 'Enterprise Solutions', website: 'www.emaxss.org' },
                    { name: 'EpiGen46 Technologies India Pvt Ltd', area_of_operations: 'IT-AI Big Data', website: '' },
                    { name: 'G Solutions', area_of_operations: 'Software Development', website: 'www.gsolutions.se' },
                    { name: 'Gaura Electric Vehicles Services Pvt Ltd', area_of_operations: 'EV Vehicle', website: 'www.gauraelectric.in' },
                    { name: 'Genomatics Pvt Ltd', area_of_operations: 'Bioinformatics', website: 'www.genomatics.in' },
                    { name: 'Grow iTech', area_of_operations: 'Industrial Robotic', website: 'www.itechgrow.in' },
                    { name: 'Gunasundari Manikkam', area_of_operations: 'Biotechnology', website: '' },
                    { name: 'Gut-iCARE Pvt Ltd', area_of_operations: 'Healthcare', website: 'www.guticare.com' },
                    { name: 'Helikem Biotek Industrial Research Pvt Ltd', area_of_operations: 'Biotechnology', website: 'www.helixium.in' },
                    { name: 'Hubstart', area_of_operations: 'Software Development', website: '' },
                    { name: 'Immugenix Biosciences Pvt Ltd', area_of_operations: 'Biotechnology', website: 'www.immugenixbio.com' },
                    { name: 'Innpharx Bioresearch', area_of_operations: 'Healthcare', website: 'www.innpharxresearch.com' },
                    { name: 'INVENIRE', area_of_operations: 'IP Consultancy', website: 'www.invenire.in' },
                    { name: 'Iovate Technologies LLP', area_of_operations: 'ICT/Retail', website: 'www.iovatetech.com' },
                    { name: 'IOZ SOT Pvt Ltd', area_of_operations: 'IoT based intelligent security system', website: 'www.inventorsofzero.in' },
                    { name: 'Jawahar N', area_of_operations: 'Agricultural Machinery', website: '' },
                    { name: 'Kalvi Edtech Pvt Ltd', area_of_operations: 'Software Development', website: 'www.kalvi.co' },
                    { name: 'Kambaa Incorporation', area_of_operations: 'Mobile Applications', website: 'www.kambaaincorporation.com' },
                    { name: 'Karthikeyan N R', area_of_operations: 'Drone', website: '' },
                    { name: 'Katomaran Technology Pvt Ltd', area_of_operations: 'Energy - Automation', website: 'www.katomaran.com' },
                    { name: 'Kishhanth R', area_of_operations: 'Automation & Robotics', website: '' },
                    { name: 'Kriya Biosys Pvt Ltd', area_of_operations: 'Agribiotechnology', website: 'www.kriya.ltd' },
                    { name: 'Lasetrix Technologies Private Limited', area_of_operations: 'Laser Technology', website: 'https://caantech.in' },
                    { name: 'Liason Engineers Pvt Ltd', area_of_operations: 'Automation Solutions', website: 'www.liasonengineers.com' },
                    { name: 'LogBase Technologies LLP', area_of_operations: 'Cloud based Point of Sale Application', website: 'www.logbase.io' },
                    { name: 'Luzu AI Pvt Ltd', area_of_operations: 'IT-AI', website: 'www.luzu.ai' },
                    { name: 'Lynkread LLP', area_of_operations: 'Enterprise Solutions', website: 'www.lynkread.com' },
                    { name: 'Market Monarch', area_of_operations: 'Education', website: 'www.schooldigitalmarketers.com' },
                    { name: 'Mechcreatio Industrial Solutions Pvt Ltd', area_of_operations: 'Agritech', website: 'www.mechcreatio.com' },
                    { name: 'Mechinex Automation Pvt Ltd', area_of_operations: 'Engineering / Product Design', website: 'www.mechinex.com' },
                    { name: 'Metamash Pvt Ltd', area_of_operations: 'ICT', website: 'www.metamash.co' },
                    { name: 'Metayage Private Limited', area_of_operations: 'IP Consultancy', website: 'www.metayage.com' },
                    { name: 'Microbear Applied Sciences Pvt Ltd', area_of_operations: 'Electronics', website: 'www.microbear.in' },
                    { name: 'Mohan V M', area_of_operations: 'Energy', website: '' },
                    { name: 'MS IT Park Pvt Ltd', area_of_operations: 'ICT', website: 'www.msitpark.org' },
                    { name: 'Murtaza Aliakbar', area_of_operations: 'ICT', website: '' },
                    { name: 'Nbase2 Systems Pvt Ltd', area_of_operations: 'Automobile', website: 'www.nbase2.in' },
                    { name: 'Nimitta Technologies', area_of_operations: 'Software Development', website: 'www.technimitta.com' },
                    { name: 'Nutricrafts', area_of_operations: 'Nutraceuticals', website: 'www.nutricrafts.in' },
                    { name: 'Pinaka Innovation P Ltd', area_of_operations: 'IoT/Automation', website: 'www.pinakainnovation.com' },
                    { name: 'Prasanna Kumar M', area_of_operations: 'Drone', website: '' },
                    { name: 'Prithviraj John', area_of_operations: 'Healthcare', website: '' },
                    { name: 'Progen Foods Pvt Ltd', area_of_operations: 'Food Technology', website: '' },
                    { name: 'Proteogenie Biotech LLP', area_of_operations: 'Biotech', website: 'www.proteogenie.com' },
                    { name: 'Prototrial Engineering', area_of_operations: 'Product Development', website: 'www.prototrial.com' },
                    { name: 'Ravi Nallakrishnan', area_of_operations: 'Healthcare', website: '' },
                    { name: 'Ribogen Biosciences Pvt Ltd', area_of_operations: 'Biotechnology', website: 'www.ribogenbiosciences.com' },
                    { name: 'Sacra Systems Pvt Ltd', area_of_operations: 'R&D, System Integration, Product Development', website: 'www.sacrasys.com' },
                    { name: 'Samson Corporation', area_of_operations: 'Solar Products', website: 'www.yuvrajenergy' },
                    { name: 'Scanflow Pvt Ltd', area_of_operations: 'Software Development', website: 'www.scanflow.ai' },
                    { name: 'Seragen Biotherapeutics Pvt Ltd', area_of_operations: 'MedTech', website: 'www.seragen.co' },
                    { name: 'Seshadri G P', area_of_operations: 'Robotics & Automation', website: '' },
                    { name: 'Sidharth M', area_of_operations: 'Healthcare', website: '' },
                    { name: 'Simgrosys Consulting Services Pvt Ltd', area_of_operations: 'Engineering Services', website: 'www.simgrosys.com' },
                    { name: 'Spacim (OPC) Pvt Ltd', area_of_operations: 'NanoTech', website: 'www.spacim.co.in' },
                    { name: 'Sproutwings Telematics Opc Pvt Ltd', area_of_operations: 'Embedded and Cloud Solutions', website: 'www.sproutwings.in' },
                    { name: 'Swab Nanosolutions Pvt Ltd', area_of_operations: 'NanoTech', website: 'https://swabnanosolutions.web.app/' },
                    { name: 'Tekmedia Software Services Pvt Ltd', area_of_operations: 'Software Development', website: 'www.tekmediasoft.com' },
                    { name: 'Terracarb Pvt Ltd', area_of_operations: 'Graphene Manufacturing', website: 'www.terracarb.com' },
                    { name: 'Tezta Electric Mobility and Energy Private Limited', area_of_operations: 'Electric Vehicle and Lithium Battery', website: '' },
                    { name: 'Thompson Martinravi', area_of_operations: 'Medtech', website: '' },
                    { name: 'TYN Ecosystem Pvt Ltd', area_of_operations: 'Enterprise Solutions', website: 'theyellow.network' },
                    { name: 'Universal Snakebite Education & Research Organisation', area_of_operations: 'Nanobiotech', website: 'www.user.org.in' },
                    { name: 'Unwita Insights Pvt Ltd', area_of_operations: 'IOT', website: 'www.unwita.com' },
                    { name: 'UX India Studios Pvt Ltd', area_of_operations: 'Design Studio', website: 'www.uxindia.com' },
                    { name: 'V2k AI India Pvt Ltd', area_of_operations: 'Software Development', website: '' },
                    { name: 'Vasanthakumar Arumugam', area_of_operations: 'Milkshake Machine', website: '' },
                    { name: 'Webstars', area_of_operations: 'Software Development', website: 'www.webstarscg.com' },
                    { name: 'WROXAI Pvt Ltd', area_of_operations: 'Naval Application', website: 'www.kioxwrox.com' },
                    { name: 'Xploro Technology Pvt Ltd', area_of_operations: 'Software Development', website: 'www.xplorotechnologies.com' },
                    { name: 'Yellow Owl Publishers LLP', area_of_operations: 'Education', website: 'www.theyellowowl.com' },
                ];
                const graduatedIncubatees = [
                    { name: '247 Liftetime Solutions', area_of_operations: 'Embedded Systems', website: 'www.247lifetime.com' },
                    { name: 'A K Surya Power Magic Private Limited', area_of_operations: 'IT/Agritech', website: 'www.goldfarm.in' },
                    { name: 'ABigStart Labs', area_of_operations: 'Web Development', website: 'www.abigstart.com' },
                    { name: 'Accumenta Services Pvt Ltd', area_of_operations: 'Smart Queue Management', website: '' },
                    { name: 'ACT Infosolutions Pvt Ltd', area_of_operations: 'Software Development', website: 'www.amulya.biz' },
                    { name: 'ACT Software (Cbe) Pvt Ltd', area_of_operations: 'Web based applications', website: '' },
                    { name: 'Agna Inc', area_of_operations: 'Electronics / Biomedical', website: 'gaitwatchdevice.wixsite.com/gait-watch' },
                    { name: 'AgNa Technology Solutions Pvt Ltd', area_of_operations: 'Internet Marketing', website: '' },
                    { name: 'AKT BPO Pvt Ltd', area_of_operations: 'BPO Service', website: '' },
                    { name: 'Alchemist Techno Labs Pvt Ltd', area_of_operations: 'Software Development', website: '' },
                    { name: 'Alpha TEG', area_of_operations: 'Nano Sensors', website: '' },
                    { name: 'ALTA Infotech Pvt Ltd', area_of_operations: 'Software Development', website: '' },
                    { name: 'Altius Technologies', area_of_operations: 'e-publishing', website: 'www.altius.co.in' },
                    { name: 'Ambigro', area_of_operations: 'Enterprise Applications', website: '' },
                    { name: 'Amoeba Telecom', area_of_operations: 'Telecom Software', website: '' },
                    { name: 'Ananda Vinayak Ideas', area_of_operations: 'Graphene Manufacturing', website: '' },
                    { name: 'Andadhi Fabrics', area_of_operations: 'Textile Automation', website: '' },
                    { name: 'Anidra Raksha Private Limited', area_of_operations: 'Health Care Solutions', website: 'www.anidra.in' },
                    { name: 'Anokka Systems', area_of_operations: 'e-Publishing', website: '' },
                    { name: 'APT Solutions Pvt Ltd', area_of_operations: 'Java based Application', website: '' },
                    { name: 'Archstone Consulting Engineers', area_of_operations: 'Engineering Services', website: '' },
                    { name: 'Aries Biomed Technology', area_of_operations: 'Biomedical Equipment Manufacturer', website: 'www.ariesbiomed.com' },
                    { name: 'Arjun Sridhar', area_of_operations: 'Electronics', website: '' },
                    { name: 'Arthana Technologies', area_of_operations: 'Web Applications', website: '' },
                    { name: 'Arudra Innovations', area_of_operations: 'Electronics', website: '' },
                    { name: 'Ashokkumar M', area_of_operations: 'Electronic', website: '' },
                    { name: 'Astra Infosys', area_of_operations: 'Software Development', website: 'www.astra-infosys.com' },
                    { name: 'Astrix Engineering Products Pvt Ltd', area_of_operations: 'IoT/Automation', website: 'www.astrixengineering.com' },
                    { name: 'Aswin Palanisamy', area_of_operations: 'Electronics', website: '' },
                    { name: 'Atatri', area_of_operations: 'Design Engineering Solutions', website: 'www.atatri.com/' },
                    { name: 'Augtra Technologies India Pvt Ltd', area_of_operations: 'Mobile Applications', website: 'www.augtra.com' },
                    { name: 'Avanti Accounting Services Pvt Ltd', area_of_operations: 'Financial Services', website: 'www.avantiaccounting.com' },
                    { name: 'Ayyappan G', area_of_operations: 'MedTech', website: 'www.stepxtechnology.com' },
                    { name: 'B.E.S Technologies', area_of_operations: 'Data Zoning & Conversion', website: '' },
                    { name: 'Best Infoways India Pvt Ltd', area_of_operations: 'Call Center', website: '' },
                    { name: 'Bioniik Innovations', area_of_operations: 'Bioinformatives', website: '' },
                    { name: 'Biospot Solutions Pvt Ltd', area_of_operations: 'Biotechnology', website: 'www.biospot.in' },
                    { name: 'Bluecubes Softwares', area_of_operations: 'Internet Solutions', website: '' },
                    { name: 'BoatLoad Minds Pvt Ltd', area_of_operations: 'Foodtech', website: 'www.tmaker.in' },
                    { name: 'Bulltin Business Solutions', area_of_operations: 'Information Technology', website: '' },
                    { name: 'Cable Partners Call Solution India Pvt Ltd', area_of_operations: 'CallSolutions', website: '' },
                    { name: 'Candrila Information Systems Pvt Ltd', area_of_operations: 'Software Development', website: '' },
                    { name: 'Carolina Technologies Solutions Pvt Ltd', area_of_operations: 'Software Development', website: 'www.carotechs.com' },
                    { name: 'Carpro Technologies Private Limited', area_of_operations: 'AgriTech', website: 'www.carprotech.in' },
                    { name: 'CGS Systems Pvt Ltd', area_of_operations: 'ERP for Knitting & Apparel Industry', website: '' },
                    { name: 'Chips n Systems', area_of_operations: 'Software Development', website: '' },
                    { name: 'Cipher Labs', area_of_operations: 'Home Automation', website: '' },
                    { name: 'Circuit Factree', area_of_operations: '', website: '' },
                    { name: 'Clear Software Pvt Ltd', area_of_operations: 'Software Development', website: '' },
                    { name: 'Cloud Assert India Pvt Ltd', area_of_operations: 'Cloud Computing', website: 'www.cloudassert.com' },
                    { name: 'Cloud SCS Technologies Pvt Ltd', area_of_operations: 'ICT', website: 'www.cscs.io' },
                    { name: 'Codesoft Solutions', area_of_operations: 'Software Development', website: 'www.codesoft.net' },
                    { name: 'Comdus Solutions', area_of_operations: 'Internet based applications', website: '' },
                    { name: 'Compass Technology Solutions', area_of_operations: 'Software Development', website: '' },
                    { name: 'Corechip Technologies Pvt Ltd', area_of_operations: 'Engineering / Product Design', website: 'www.corechiptech.com' },
                    { name: 'Corrosion Management Services', area_of_operations: 'Corrosion database Management Software', website: '' },
                    { name: 'Cosmos net', area_of_operations: 'ISP - DSL Franchisee', website: '' },
                    { name: 'CRM 24 X 7', area_of_operations: 'CRM', website: '' },
                    { name: 'Cybersol', area_of_operations: 'Medical Transcription', website: '' },
                    { name: 'D M Data India Pvt Ltd', area_of_operations: 'Public Safety Software', website: '' },
                    { name: 'D-FX Technologies', area_of_operations: 'Software Development', website: 'www.wirelesswaterlevelcontroller.in' },
                    { name: 'Daffodils Multimedia', area_of_operations: 'Multimedia Devpt.', website: '' },
                    { name: 'DataQ Technologies', area_of_operations: 'RFID Aero Part Validator', website: 'www.dataqtechnologies.com' },
                    { name: 'Deinopis', area_of_operations: 'Home Automation', website: '' },
                    { name: 'Delving Research & Development Pvt Ltd', area_of_operations: 'IT/SaaS', website: 'www.delvingrd.com' },
                    { name: 'Devi Electronics', area_of_operations: '', website: '' },
                    { name: 'Dextrose Technologies Pvt Ltd', area_of_operations: 'Biopolymers', website: 'dextrosetech.com' },
                    { name: 'Diagnostring Laboratories Pvt Ltd', area_of_operations: 'Medical Diagnostics', website: 'www.diagnostring.com' },
                    { name: 'Diffuson Coatech LLP', area_of_operations: 'Engineering / Product Design', website: 'www.diffuson.in' },
                    { name: 'Digital Dynamix', area_of_operations: 'Web Development', website: '' },
                    { name: 'DMC Labs', area_of_operations: 'IT/SaaS Cloud', website: 'www.sfdclabs.in' },
                    { name: 'Doctor Oxy Healthcare Solutions Pvt Ltd', area_of_operations: 'Mobile & Web Solutions', website: '' },
                    { name: 'Dolomeedes Robotics Pvt Ltd', area_of_operations: 'Engineering', website: '' },
                    { name: 'Dr Christopher', area_of_operations: 'MeTech', website: '' },
                    { name: 'Duce Software', area_of_operations: 'Enterprise Applications', website: '' },
                    { name: 'e-Brahma Technologies Ltd', area_of_operations: 'e-Commerce', website: '' },
                    { name: 'eApta Dynamics Private Limited', area_of_operations: '', website: '' },
                    { name: 'Ease My Care Health Services Pvt Ltd', area_of_operations: 'Healthcare', website: 'www.easemycarehealth.com' },
                    { name: 'EC Switch (Electron Controller)', area_of_operations: 'Internet of things', website: '' },
                    { name: 'Edge Infotech & Consultancy Services', area_of_operations: 'Software Development', website: '' },
                    { name: 'Elmaq Software Pvt Ltd', area_of_operations: 'ERP for SMEs', website: '' },
                    { name: 'Embedded Shastra Solutions', area_of_operations: 'Edutech', website: '' },
                    { name: 'Emeltro Systems', area_of_operations: 'Embedded Solutions', website: 'www.emeltro.com' },
                    { name: 'Emerge Software Technology', area_of_operations: 'ERP for engineering Industry', website: '' },
                    { name: 'Emergys Software Pvt Ltd', area_of_operations: 'Medical Software Development', website: '' },
                    { name: 'EReKY labs Pvt Ltd', area_of_operations: 'Industrial Biotech', website: 'www.erekylabs.com' },
                    { name: 'eVagan Logicom India Pvt Ltd', area_of_operations: 'Market Place Aggregator', website: 'www.evaganlogicom.co.in' },
                    { name: 'Evidenzum Systems Pvt Ltd', area_of_operations: 'Web & Mobile Applications', website: '' },
                    { name: 'Extreme Digital Technology', area_of_operations: 'R/D Embedded Systems', website: '' },
                    { name: 'Fabforge Innovations Pvt Ltd', area_of_operations: '3D Printing', website: 'www.fabforge.in' },
                    { name: 'FedLabs', area_of_operations: 'Manufacturing', website: '' },
                    { name: 'FLMR Studios', area_of_operations: '', website: '' },
                    { name: 'Fornax System Pvt Ltd', area_of_operations: 'Software Training cum Development', website: '' },
                    { name: 'Geek Stack', area_of_operations: 'Smart Management Systems', website: 'www.geekstack.co.in' },
                    { name: 'Global.com', area_of_operations: 'Software Development', website: '' },
                    { name: 'Globus Infosoft Pvt Ltd', area_of_operations: 'Software Development', website: '' },
                    { name: 'Green ECM Technologies', area_of_operations: 'Web Solutions', website: 'www.greenecmtech.com' },
                    { name: 'GREENERG Mobility Solutions Pvt Ltd', area_of_operations: 'Electronics', website: 'www.greenerg.in' },
                    { name: 'Griam Tech Solutions', area_of_operations: 'Software Devpt.', website: '' },
                    { name: 'Gyaanbee', area_of_operations: 'AI/Edutech', website: 'www.gyaanbeeforneet.com' },
                    { name: 'Haipals Messenger Pvt Ltd', area_of_operations: 'ICT/SaaS (Web/MobileApp)', website: 'www.haipals.com' },
                    { name: 'Havilah Technologies', area_of_operations: 'ITES', website: '' },
                    { name: 'Heptagon Technologies Pvt Ltd', area_of_operations: 'On Demand Services', website: 'www.heptagon.in' },
                    { name: 'Hiris Technologies', area_of_operations: 'Web Development', website: 'www.hiristechnologies.com' },
                    { name: 'Hoglund Marine Solutions', area_of_operations: 'Manufacturing', website: 'www.hoglund.no' },
                    { name: 'Hotinfonet Software Labs', area_of_operations: 'Telecom Software', website: '' },
                    { name: 'Hurestic Cloud Services', area_of_operations: 'IoT/SAAS', website: '' },
                    { name: 'Hykon Transcripts Pvt Ltd', area_of_operations: 'Medical Transcription', website: '' },
                    { name: 'Ideal Methods Softtech India Pvt Ltd', area_of_operations: 'Software Development', website: '' },
                    { name: 'Infinit Solutions', area_of_operations: 'Information Technology', website: 'www.infiso.com' },
                    { name: 'Infoaxiom India Pvt Ltd', area_of_operations: 'Software Development', website: '' },
                    { name: 'Infosol Technologies', area_of_operations: 'Regional Auto portal', website: '' },
                    { name: 'Innodroid Technologies', area_of_operations: 'Information Technology', website: 'innodroid.com' },
                    { name: 'Inyards', area_of_operations: 'Fan Engagement Platform', website: 'www.fantumn.com' },
                    { name: 'Iserve Consultancy', area_of_operations: 'e-Publishing', website: '' },
                    { name: 'Jaden Solutions', area_of_operations: 'Web solutions, Software development & SEO', website: '' },
                    { name: 'Jivass Technologies LLP', area_of_operations: 'IoT', website: 'www.jivass.com' },
                    { name: 'Joule Food', area_of_operations: 'Food Processing', website: 'www.joulefood.com' },
                    { name: 'K-Logic Softech Solutions Pvt Ltd', area_of_operations: 'Software Development', website: '' },
                    { name: 'Kalvi Career Education Pvt Ltd', area_of_operations: 'ICT', website: 'www.kalvium.com' },
                    { name: 'Kalycito Infotech Private Limited', area_of_operations: 'Industry 4.0/IoT Software Technology Solutions', website: '' },
                    { name: 'Karthik Somasundaram', area_of_operations: 'Medtech', website: '' },
                    { name: 'Kidzvoo Pvt Ltd', area_of_operations: 'E-Commerce', website: 'www.nicabo.com' },
                    { name: 'Knoou Caliper', area_of_operations: 'Healthcare', website: '' },
                    { name: 'Konvertis Websolution', area_of_operations: 'Web development', website: '' },
                    { name: 'Lauraz Technologies', area_of_operations: 'Information Technology', website: '' },
                    { name: 'Lexbit Technologies', area_of_operations: 'Web Solution', website: 'www.lexbitinc.com' },
                    { name: 'LexHive Corporate Services', area_of_operations: 'Legal Support Services', website: 'www.lexhive.in' },
                    { name: 'Lifetex Medical systems Pvt Ltd', area_of_operations: 'Electronics', website: 'www.lifetex.in' },
                    { name: 'Linsys Technologies', area_of_operations: 'Software Development', website: '' },
                    { name: 'Logic Genie Softtech India Pvt Ltd', area_of_operations: 'Software Development', website: 'www.namecheap.com' },
                    { name: 'Loukyaa Technologies', area_of_operations: 'Embedded Systems', website: '' },
                    { name: 'Lucid Technologies Pvt Ltd', area_of_operations: 'e-commerce Solutions', website: 'www.lucidtechsol.com' },
                    { name: 'Mac Academy', area_of_operations: 'Multimedia Training and Application', website: '' },
                    { name: 'Macco Robotics India Private Limited', area_of_operations: 'Robotics', website: 'www.maccorobotics.com' },
                    { name: 'MadDog Promotions', area_of_operations: 'Information Technology', website: '' },
                    { name: 'Mamatha Pillai', area_of_operations: 'Healthcare', website: '' },
                    { name: 'Manasaraovar Consulting', area_of_operations: 'e-integration', website: '' },
                    { name: 'Mascot esoft Technologies', area_of_operations: 'CAD / CAM', website: '' },
                    { name: 'MAXe Solutions', area_of_operations: '', website: '' },
                    { name: 'Maxval IP', area_of_operations: 'IP Management', website: 'www.maxval.com' },
                    { name: 'Mecgene Opc Pvt Ltd', area_of_operations: 'Biotech', website: 'www.mecgene.com' },
                    { name: 'Media Wood', area_of_operations: 'Multimedia Applications', website: '' },
                    { name: 'Megha Cloud Infotech', area_of_operations: 'Cloud Computing', website: '' },
                    { name: 'Methion Biotech Pvt Ltd', area_of_operations: 'FoodTech', website: '' },
                    { name: 'Mezoblanca Solutions Pvt Ltd', area_of_operations: 'Software Development', website: '' },
                    { name: 'Michael A', area_of_operations: 'Healthcare', website: '' },
                    { name: 'Mighty Seed Designs LLP', area_of_operations: 'Engineering & Industrial Design', website: 'www.mightyseed.co' },
                    { name: 'Millenenials Pvt Ltd', area_of_operations: 'e-Commerce', website: '' },
                    { name: 'Mindocean Infosolutions', area_of_operations: 'Software Devpt.', website: '' },
                    { name: 'Minveli Infotech Pvt Ltd', area_of_operations: 'Multimedia Applications', website: '' },
                    { name: 'Mohammad Yousuf', area_of_operations: 'Industrial Automation', website: '' },
                    { name: 'MONC TECHNOLOGIES Pvt Ltd', area_of_operations: 'Healthcare', website: 'www.monctech.com' },
                    { name: 'Morbium Technologies', area_of_operations: 'Software Development', website: 'www.morbium.co' },
                    { name: 'Mr Mohanasivam P', area_of_operations: 'Nanotechnology', website: '' },
                    { name: 'Mr Ram Prasad D S', area_of_operations: 'Automation', website: '' },
                    { name: 'My Assessment', area_of_operations: 'IT/EdTech', website: 'www.myassessment.xyz' },
                    { name: 'N-Science Sustainable Solutions Pvt Ltd', area_of_operations: 'Biotechnology', website: '' },
                    { name: 'NAL Vision', area_of_operations: 'Electronics', website: '' },
                    { name: 'Nano Cera Enviro India', area_of_operations: 'CleanTech', website: '' },
                    { name: 'Nanogene', area_of_operations: 'Healthcare', website: '' },
                    { name: 'Natrinai Foods Pvt Ltd', area_of_operations: 'Food Tech', website: 'www.buymycs.com' },
                    { name: 'Next Gen Teknologies', area_of_operations: 'Software Development', website: '' },
                    { name: 'NG Automobile Engineering Pvt Ltd', area_of_operations: 'Renewable Energy', website: 'www.ngautomobile.com' },
                    { name: 'Nilatech Robotics Pvt Ltd', area_of_operations: 'Robotics', website: 'www.nilatech.com' },
                    { name: 'Nimbeon Inter Technologies Pvt Ltd', area_of_operations: 'Design & Engineering Operations', website: 'www.nimbeon.com' },
                    { name: 'Nizan Robotics Private Limited', area_of_operations: 'Robotics', website: 'www.nizanrobotics.com' },
                    { name: 'Nxtsys Retail Pvt Ltd', area_of_operations: 'IT', website: '' },
                    { name: 'Ocenture IDO', area_of_operations: 'Software Development', website: '' },
                    { name: 'ODOLift India LLP', area_of_operations: 'VOIP', website: 'www.odolift.com' },
                    { name: 'Ojovati A E Private Limited', area_of_operations: 'VOIP', website: 'ojovati.com' },
                    { name: 'Olivewear Pvt Ltd', area_of_operations: 'Medtech', website: 'www.savemom.in' },
                    { name: 'Oneomics Pvt Ltd', area_of_operations: 'Healthcare', website: 'www.oneomics.in' },
                    { name: 'Onspec-Legend Information Systems Pvt Ltd', area_of_operations: 'VLSI design', website: '' },
                    { name: 'ORCAS', area_of_operations: 'Product Development', website: 'www.orcas.in' },
                    { name: 'Our life Biotech Solutions', area_of_operations: 'FoodTech', website: 'www.ourlife.co.in' },
                    { name: 'Ozotec Vehicles Pvt Ltd', area_of_operations: 'Electronic', website: 'www.ozotecautomobile.com' },
                    { name: 'P3 Fusion', area_of_operations: 'VOIP', website: 'www.P3fusion.com' },
                    { name: 'Panini Infotech Pvt Ltd', area_of_operations: 'Software Development', website: 'www.paniniinfotech.com' },
                    { name: 'Paramount Quality System', area_of_operations: 'ERP for Plantation Industry', website: '' },
                    { name: 'Parthiban Subramaniyam', area_of_operations: 'Medtech/Orthopedics', website: '' },
                    { name: 'Parthipan V', area_of_operations: 'ICT/SaaS (Web/MobileApp)', website: '' },
                    { name: 'Peacock Kovai Engineering Solution', area_of_operations: 'Renewable Energy', website: '' },
                    { name: 'Pepup Today', area_of_operations: 'E-Commerce', website: '' },
                    { name: 'Phison Agritech Pvt Ltd', area_of_operations: 'Agritech', website: '' },
                    { name: 'Pineaxe Technologies', area_of_operations: 'Edutech', website: 'www.placementseason.com' },
                    { name: 'Plantec Industries', area_of_operations: 'Biopolymers', website: 'www.plantec.in' },
                    { name: 'Ponmani Manimaran', area_of_operations: 'Nanotech', website: '' },
                    { name: 'Powerup Cloud Technologies Pvt Ltd', area_of_operations: 'Information Technology', website: 'www.powerupcloud.com' },
                    { name: 'Prashanth Varkey', area_of_operations: 'Healthcare', website: '' },
                    { name: 'Premier Systems and Management', area_of_operations: 'Web Applications', website: '' },
                    { name: 'Prithiv Research Labs', area_of_operations: 'Mobile Application', website: 'www.dowhistle.com' },
                    { name: 'PROBYTO Data Science and Consulting Private Limited', area_of_operations: 'Data Science', website: 'probyto.com' },
                    { name: 'Profitaire Solutions', area_of_operations: 'Information Technology', website: '' },
                    { name: 'Projection Microsoft', area_of_operations: 'ITES', website: '' },
                    { name: 'Prolinture Software India Pvt Ltd', area_of_operations: 'PDM / PLM Software Development', website: 'www.ibell.co.in' },
                    { name: 'Prototech', area_of_operations: 'Energy', website: '' },
                    { name: 'Psitron Technologies Pvt Ltd', area_of_operations: 'Industry Automation', website: 'www.psitrontech.com' },
                    { name: 'Quadki Technologies', area_of_operations: 'Software Development', website: '' },
                    { name: 'Quantum Material Corporation', area_of_operations: 'Nano Materials', website: '' },
                    { name: 'Ranga Enterprise', area_of_operations: 'Engineering Products', website: '' },
                    { name: 'Rao Technologies', area_of_operations: 'ERP & Software development', website: '' },
                    { name: 'Rasquares Information Systems Pvt Ltd', area_of_operations: 'WAP Applications', website: '' },
                    { name: 'Re-lact Bioscience Pvt Ltd', area_of_operations: 'Healthcare', website: '' },
                    { name: 'Realsoft Cybersystems', area_of_operations: 'Finance Package', website: '' },
                    { name: 'Rector Innovation', area_of_operations: 'Software Development', website: '' },
                    { name: 'Relecken India Pvt Ltd', area_of_operations: 'NanoTechnology', website: 'www.releckenindia.in' },
                    { name: 'Reservado', area_of_operations: 'IT - Venue Aggregator', website: 'www.reservado.in' },
                    { name: 'Richmond Technologies', area_of_operations: 'Software Development', website: 'www.richmond.co.in' },
                    { name: 'Rini W M', area_of_operations: 'Healthcare', website: '' },
                    { name: 'Rippleflow Consulting LLP', area_of_operations: 'Software', website: 'www.effitrac.com' },
                    { name: 'RK & GT Technologies LLC', area_of_operations: 'Electronics/RFID', website: '' },
                    { name: 'RND Softech Pvt Ltd', area_of_operations: 'Medical Transcription', website: 'www.rndsofttech.com' },
                    { name: 'Robotex', area_of_operations: 'Textile Automation', website: 'www.robotex.in' },
                    { name: 'RobotoAI Technologies Pvt Ltd', area_of_operations: 'Robotics', website: 'www.robotoai.com' },
                    { name: 'RT Foods', area_of_operations: 'FoodTech', website: '' },
                    { name: 'Sai Vandana Wire Industries', area_of_operations: 'AgriTech', website: '' },
                    { name: 'Samson Technologies', area_of_operations: 'Medical Transcription', website: '' },
                    { name: 'San Software', area_of_operations: 'VOIP', website: 'www.sansoftware.com' },
                    { name: 'Sanjay', area_of_operations: '', website: '' },
                    { name: 'Sapience Software (India) Pvt Ltd', area_of_operations: 'ERP, CRM & SCM', website: '' },
                    { name: 'Sathish Kumar', area_of_operations: 'Textile Engineering', website: '' },
                    { name: 'SBNA Technologies', area_of_operations: 'Enterprise Solutions', website: 'www.sbna.in' },
                    { name: 'Scalerator LLP', area_of_operations: 'ICT', website: '' },
                    { name: 'School 4 success.com Pvt Ltd', area_of_operations: 'Personality Development Portal', website: '' },
                    { name: 'Scot Web India Privated Limited', area_of_operations: 'Offshore Web Design', website: '' },
                    { name: 'SDKN Innovation Pvt Ltd', area_of_operations: 'Nanobiotechnology', website: '' },
                    { name: 'Sednasoft Technologies', area_of_operations: 'Web applications', website: '' },
                    { name: 'Senesan Technologies', area_of_operations: 'Electronics/IoT', website: '' },
                    { name: 'Sepsitronics Pvt Ltd', area_of_operations: 'Biotech', website: 'www.sepsitron.com' },
                    { name: 'Set Infotech Pvt Ltd', area_of_operations: 'e-Publishing', website: 'www.setinfotech.com' },
                    { name: 'Seyal Technologies Pvt Ltd', area_of_operations: 'Software Development', website: 'www.seygentechnologies.com' },
                    { name: 'Seygen Technologies India Private Limited', area_of_operations: 'IT', website: 'seygentechnologies.com/' },
                    { name: 'Shiram Karthic', area_of_operations: 'ICT', website: '' },
                    { name: 'Shri Sai Green Technologies', area_of_operations: 'Embedded Solutions', website: 'www.shrisaigreentech.com' },
                    { name: 'Shri Technologies', area_of_operations: 'Embedded Systems', website: '' },
                    { name: 'Shrihass Consultancy Services', area_of_operations: 'Business Consultancy', website: 'www.shrihass.com' },
                    { name: 'Simha Technologies', area_of_operations: 'Web Content Development', website: '' },
                    { name: 'Sivatec Solutions', area_of_operations: 'Software Development', website: 'www.sivatec.com' },
                    { name: 'Skava Systems Pvt Ltd', area_of_operations: 'Mobile Games', website: 'www.skava.com' },
                    { name: 'SNAP Software India Pvt Ltd', area_of_operations: 'Software Development', website: '' },
                    { name: 'Soft Info Technology', area_of_operations: 'ERP', website: '' },
                    { name: 'Sonsoroil SGPS SA', area_of_operations: '', website: '' },
                    { name: 'Soverign Infotech Pvt Ltd', area_of_operations: 'Software Development', website: '' },
                    { name: 'Springlogic Technologies', area_of_operations: 'ERP for Knitting & Apparel Industry', website: '' },
                    { name: 'Squareshift Technologies Pvt Ltd', area_of_operations: 'ICT', website: 'www.squareshift.co' },
                    { name: 'SRP Enterprises', area_of_operations: 'Nanocomposites and energy', website: '' },
                    { name: 'Steam-A Pvt Ltd', area_of_operations: 'ICT', website: 'www.steam-a.com' },
                    { name: 'Sudarshan Softwares Exports Pvt Ltd', area_of_operations: 'Software Devpt. & Training', website: 'www.sselindia.com' },
                    { name: 'Sudheer Khan', area_of_operations: 'Nanomaterials', website: '' },
                    { name: 'Suisse Ranks Pvt Ltd', area_of_operations: 'Design Engineering Solutions', website: 'www.swissranks.com' },
                    { name: 'Sujith Consultancy', area_of_operations: 'Software Development', website: '' },
                    { name: 'Suraj Technologies', area_of_operations: 'Information Technology', website: 'surajtechnologies.com' },
                    { name: 'Switch Mobility Pvt Ltd', area_of_operations: 'Electric Vehicles', website: 'www.switchmobility.in' },
                    { name: 'Taask Datascribe Infosys', area_of_operations: 'Medical Transcription', website: '' },
                    { name: 'Tamilnadu Computer Education & Organisation', area_of_operations: 'Software Training cum Development', website: '' },
                    { name: 'Team Moplet', area_of_operations: 'SMS service Provided', website: '' },
                    { name: 'Tech Info Softwares', area_of_operations: 'VB based projects', website: '' },
                    { name: 'Techbits Solutions', area_of_operations: 'Web solutions', website: 'www.lexbitinc.com' },
                    { name: 'Techbox Software Solutions', area_of_operations: 'Embedded firmware/hardware development', website: '' },
                    { name: 'Techno Heitz Solutions', area_of_operations: 'Web Applications', website: '' },
                    { name: 'Techurja', area_of_operations: 'Waste Management', website: 'www.techurja.com' },
                    { name: 'TIINO Techmations Pvt Ltd', area_of_operations: 'Embedded Solutions & Products', website: 'www.tiino.in' },
                    { name: 'Timesys India Pvt Ltd', area_of_operations: 'Embedded System', website: 'www.timesys.com' },
                    { name: 'Torbit Technologies Private Limited', area_of_operations: 'Electronics', website: '' },
                    { name: 'Trixo Solution LLP', area_of_operations: 'Smart Facilities Management & IWMS', website: 'www.trixos.org' },
                    { name: 'TSMC Creations India Pvt Ltd', area_of_operations: 'Media', website: '' },
                    { name: 'Unihiring', area_of_operations: 'Information Technology', website: 'www.unihiring.com' },
                    { name: 'US Software Solutions', area_of_operations: 'COM based business', website: '' },
                    { name: 'Vashishta Research Pvt Ltd', area_of_operations: '', website: '' },
                    { name: 'Vectraform Engineering Solutions', area_of_operations: 'Engineering Services', website: 'www.vectraform.in' },
                    { name: 'VenpepSolutions Pvt Ltd', area_of_operations: 'Technology Business Solutions', website: 'www.venpep.com' },
                    { name: 'Venus International', area_of_operations: 'Software Devpt.', website: '' },
                    { name: 'Vestige Technologies', area_of_operations: 'RFID Automation & IT', website: 'www.vestigetech.net' },
                    { name: 'Vibgyor software & Exports Pvt Ltd', area_of_operations: 'Software Development', website: '' },
                    { name: 'Vidvus Technology Solutions India Pvt Ltd', area_of_operations: 'CAD/CAM', website: '' },
                    { name: 'Vilva Bio Org', area_of_operations: 'AgriTech', website: '' },
                    { name: 'Vipher Tech IoT Solution', area_of_operations: 'Industrial IoT', website: 'www.viphertechiot.co.in' },
                    { name: 'Visinture strategic Solutions (CBE) Pvt Ltd', area_of_operations: 'Software Development', website: 'www.radiantq.com' },
                    { name: 'Vista Engineering Solutions', area_of_operations: 'Engineering Services', website: 'www.vistaes.com' },
                    { name: 'VPA Direct', area_of_operations: 'Virtual Assistances', website: '' },
                    { name: 'Vyazhan Technologies Pvt Ltd', area_of_operations: 'Automotive Quality Inspection', website: 'www.vyazhan.com' },
                    { name: 'Vyoog Information Pvt Ltd', area_of_operations: 'Enterprises Solutions', website: 'www.vyoog.com' },
                    { name: 'Vyosoft DG Technologies Pvt Ltd', area_of_operations: 'Software Development', website: '' },
                    { name: 'Weoutsource', area_of_operations: 'Web applications', website: '' },
                    { name: 'Wisdom Infotech', area_of_operations: 'Internet Solutions', website: '' },
                    { name: 'Yosicare Private Limited', area_of_operations: 'Health Informatics', website: 'www.yosicare.com' },
                    { name: 'Zspace Technologies Pvt Ltd', area_of_operations: 'Manufacturing', website: 'www.grahaa.com' },
                ];
                const seedData = {
                    present_incubatees: presentIncubatees,
                    graduated_incubatees: graduatedIncubatees,
                };
                let docId;
                if (incubateeProfileExists === null || incubateeProfileExists === void 0 ? void 0 : incubateeProfileExists.documentId) {
                    console.log('[Seed] Updating existing incubatee-profile doc...');
                    await strapi
                        .documents(INCUBATEE_UID)
                        .update({ documentId: incubateeProfileExists.documentId, data: seedData });
                    docId = incubateeProfileExists.documentId;
                }
                else {
                    console.log('[Seed] Creating new incubatee-profile doc...');
                    const created = await strapi.documents(INCUBATEE_UID).create({ data: seedData });
                    docId = created.documentId;
                }
                await strapi.documents(INCUBATEE_UID).publish({ documentId: docId });
                console.log('[Seed] Successfully seeded and published incubatee profile entries.');
            }
        }
        catch (err) {
            console.error('[Seed] Failed to seed incubatee profile:', err);
        }
        const aboutCount = await strapi.entityService.count('api::about.about');
        if (aboutCount === 0) {
            const abouts = [
                {
                    title: 'About PSG Tech',
                    order: 1,
                    content: `<p><font color="#0000CD"><b>PSG College of Technology,</b></font> an ISO 9001:2000 certified institution is one of the foremost institutions founded by the<font color="#0000CD"> <b>PSG &amp; Sons' Charities Trust (1926)</b>. </font>The College was established in the year 1951 and the Founders wisely decided to locate it in the same campus as the PSG Industrial Institute for effective industry-institute interaction.</p>

<p>Provide world-class Engineering Education, Foster Research and Development. Evolve innovative applications of Technology. Encourage Entrepreneurship. Ultimately mould young men and women capable of assuming leadership of the society for the betterment of the Country.&nbsp;</p>

<p>The College today has a student strength of about 8518 with 15 engineering and technology departments besides the computer applications, management sciences, basic sciences and humanities departments.&nbsp;More than 505 research scholars are pursuing research programmes leading to Ph D / MS / M Tech degrees and thecollege is a recognized QIP centre for Postgraduate and Ph D programmes.</p>

<p>Several advanced centres are set up with financial support from the Ministry of Human Resources Development, DST and other agencies.</p>

<p>The college has signed MoU with research organizations and industries in order to promote closer interaction withother institutions in the areas of technology development, training of students, curriculum updating and development of state-of-art centres.</p>

<p>For more information, visit <a href="http://www.psgtech.edu"><font color="#0000FF">www.psgtech.edu</font></a></p>`,
                    publishedAt: new Date(),
                },
                {
                    title: 'About PSG-STEP',
                    order: 2,
                    content: `<p>The&nbsp;<font color="#0000CD"><b>PSG-Science &amp; Technology Entrepreneurial Park (PSG-STEP</b>)</font> was established in 1998 with support from Department of Science &amp; Technology, Government of India, IDBI and ICICI to promote technology based enterprise in the areas of Software, Electronic Products, Hi-Tech Mechanical Products, Eco friendly Textile Products, &nbsp;Bio-Technology and Nano Technology using the core strengths of PSG College of Technology.&nbsp; PSG-STEP is one among an exclusive club of incubators with exclusive incubation facilities and funding mechanisms for startups in multiple technology domains with the support of NSTEDB, DST, BIRAC and MeitY, Government of India.</p>

<p>PSG-STEP plays a critical role in creating an enabling eco-system to promote innovation and entrepreneurship among the students, faculty, and researchers and for the people from the community.</p>

<p>PSG-STEP has been identified as the nodal agency by various government departments to implement the schemes and programmes to promote innovation, incubation and entrepreneurship in the region.</p>

<p>PSG-STEP is the secretariat for the <b><font color="#0000CD">"Asia Pacific Incubation Network" (APIN)</font> </b>an inititative supported by InfoDev, World Bank &amp; DST, Government of India to promote the incubation network in the region.</p>

<p>PSG-STEP has been awarded the <b><font color="#0000CD">"Best STEP"</font> </b>in the country by <font color="#0000CD"><b>Ministry of Science &amp; Technology, Govt. of India, New Delhi.&nbsp;</b></font></p>`,
                    publishedAt: new Date(),
                },
                {
                    title: 'Incubation Facility',
                    order: 3,
                    content: `<p>PSG-STEP, which is in the 25th year of operation, is spread over an area of 1,00,000 sq.ft to accommodate start-ups, in the areas of</p>

<ul>
    <li>Information Technology</li>
    <li>Electronics&nbsp;</li>
    <li>Nanotechnology&nbsp;</li>
    <li>Mechanical</li>
    <li>Biotechnology</li>
    <li>Centre of Excellence in Advanced Technologies</li>
</ul>

<p>PSG-STEP provides technical services that include R &amp; D activities, Product development, Re-engineering, Calibration and testing facilities, Quality assurance and Market Research to the entrepreneurs.&nbsp; The entrepreneurs utilize the various Centers of Excellence of PSG College of Technology.</p>

<p>The services provided by PSG-STEP include:</p>

<ul>
    <li>Infrastructure Support</li>
    <li>Seed Fund Support</li>
    <li>Innovation Fund Support</li>
    <li>Prototype Development</li>
    <li>Hardware &amp; Software Support</li>
    <li>Mentoring</li>
    <li>Networking</li>
    <li>Connectivity</li>
    <li>Learning Resources</li>
</ul>`,
                    publishedAt: new Date(),
                },
            ];
            for (const about of abouts) {
                await strapi.entityService.create('api::about.about', {
                    data: about,
                });
            }
            console.log('Successfully seeded about entries.');
        }
    },
};
