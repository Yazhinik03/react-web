import project1 from "../assets/img/rfid.png";
import project2 from "../assets/img/download.jpg";
import project3 from "../assets/img/mal.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With hands-on experience, I have honed my skills in front-end technologies like React as well as back-end technologies like Node.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EDUCATION = [
  {
    year: "2022 - 2026",
    role: "Student",
    institute: "Sri Shakthi Institute of Engineering and Technology",
    score:"8.9 CGPA",
    technologies: ["Javascript", "React.js", "Python", "mongoDB"],
  },
  {
    year: "2018 - 2020",
    role: "Student",
    institute: "Vivekananda Matriculation Higher Secondary School",
    score:"87%",
  },
  {
    year: "2017 - 2018",
    role: "Student",
    institute: "Ram Jayam Vidhya Mandir Matriculation Higher Secondary School",
    score:"97%",
  },
];

export const PROJECTS = [
  {
    title: "RFID Based Attendance System",
    image: project1,
    description:
      "An RFID-based attendance system streamlines the process of tracking attendance using radio frequency identification technology. Each participant is assigned a unique RFID tag, which they simply scan at a designated reader to register their presence. This system offers real-time attendance data, reduces manual errors, and enhances efficiency in schools, workplaces, and events. With automatic data capture, it eliminates the need for traditional roll calls, ensuring accurate and timely attendance records.",
    technologies: ["RFID Tags", "RFID Readers", "Middleware Software", "Aurdino", "DBMS"],
  },
  {
    title: "Secure Crypto Wallet",
    image: project2,
    description:
      "A secure crypto wallet project offers a user-friendly platform for managing digital assets with top-notch security features. It utilizes advanced encryption and multi-factor authentication, supports both cold and hot storage options, and accommodates multiple cryptocurrencies. Users benefit from easy backup and recovery options, detailed transaction history, and ongoing security audits, ensuring safe and efficient asset management.",
    technologies: ["Encryption algorithms", "Multi-factor Authentication", "Block Chain Integration"],
  },
  {
    title: "Identification of Malicious Files Using Magic Number",
    image: project3,
    description:
      "The Identification of Malicious Files Using Magic Numbers project detects harmful files by analyzing their unique byte sequences, known as magic numbers. By comparing these signatures against a database of known malicious files, the system quickly identifies potential threats, enhancing cybersecurity and enabling proactive protection against malware.",
    technologies: ["File Signature Analysis", "Python", "DBMS", "User Interface"],
  },
];

export const CONTACT = {
  address: "Sri Shakthi Institute of Engineering and Technology",
  phoneNo: "+91 1234567890",
  email: "yazhini2003k@gmail.com",
};
