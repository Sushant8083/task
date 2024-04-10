import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"; // Import useParams hook

export const Details = () => {
  const { name } = useParams();

  const data = [
    {
      name: "Durga Pooja",
      description:
        "Worship of Goddess Durga, symbolizing strength, victory, and the destruction of evil. Celebrated during Navratri.",
      benefits: [
        "Removes obstacles and brings success.",
        "Empowers individuals and communities.",
        "Provides protection and removes negativity.",
      ],
      howItHappens: [
        "Kalash sthapana (installation of a pot).",
        "Daily pujas to Durga and other deities.",
        "Offering of bhog (food) and chanting of mantras.",
        "Culminates with the immersion of Durga idols (Visarjan).",
      ],
      aboutPooja:
        "Durga Puja is a major festival celebrated by Hindus worldwide. It marks the victory of good over evil as depicted in the battle between Durga and the demon Mahishasura.",
      afterPooja: [
        "Distribute prasad (blessed food) among family and friends.",
        "Continue to practice virtues like courage and righteousness.",
        "Maintain a positive and grateful attitude.",
      ],
      whyBookWithDivineConnection: [
        "Experienced priests for authentic rituals.",
        "Guidance on puja preparations and materials.",
        "Convenient booking and seamless experience.",
      ],
    },
    {
      name: "Gopal Pooja",
      description:
        "Worship of Lord Krishna in his child form, symbolizing love and playfulness.",
      benefits: [
        "Brings peace, harmony, and joy to the family.",
        "Promotes child well-being and removes obstacles in their growth.",
        "Develops devotion and bhakti towards Lord Krishna.",
      ],
      howItHappens: [
        "Preparing a decorated altar with Krishna's idol or murti.",
        "Offering milk, sweets, and fruits (bhog).",
        "Chanting mantras and devotional songs (bhajans).",
        "Reading stories and scriptures related to Lord Krishna.",
      ],
      aboutPooja:
        "Gopal Puja is a popular practice performed by devotees seeking blessings for their children. It can be done daily or on special occasions.",
      afterPooja: [
        "Share prasad with family and friends, especially children.",
        "Practice devotion and good character traits inspired by Krishna.",
      ],
      whyBookWithDivineConnection: [
        "Expertise in conducting child-friendly and engaging poojas.",
        "Guidance on suitable offerings and puja materials for children.",
        "Creating a memorable and spiritual experience for the whole family.",
      ],
    },
    {
      name: "Vastu Pooja",
      description:
        "Balancing the energies of a space for positive vibes and well-being, following the principles of Vastu Shastra.",
      benefits: [
        "Promotes harmony, peace, and prosperity within the home or workplace.",
        "Enhances energy flow for improved health, relationships, and success.",
        "Creates a more positive and balanced environment.",
      ],
      howItHappens: [
        "Consultation with a Vastu expert to assess the space.",
        "Performing corrective measures based on Vastu principles.",
        "Purification rituals and chanting of mantras to energize the space.",
      ],
      aboutPooja:
        "Vastu Pooja is performed to address any energy imbalances in a building or property. It's believed to bring peace, prosperity, and good fortune to the occupants.",
      afterPooja: [
        "Maintain a clean and organized living space.",
        "Continue positive affirmations and visualization for desired outcomes.",
      ],
      whyBookWithDivineConnection: [
        "Experienced Vastu experts for accurate assessment and solutions.",
        "Guidance on implementing Vastu principles in your space.",
        "Holistic approach for long-term benefits and positive energy flow.",
      ],
    },
    {
      name: "Chandra Pooja",
      description:
        "Worship of the Moon God, Chandra, seeking blessings for peace, tranquility, and mental well-being.",
      benefits: [
        "Improves emotional balance and mental clarity.",
        "Promotes peace of mind and reduces stress and anxiety.",
        "Brings calmness and emotional stability.",
      ],
      howItHappens: [
        "Offering milk, rice, and white flowers to the moon.",
        "Chanting mantras dedicated to Chandra.",
        "Practicing meditation and relaxation techniques.",
      ],
      aboutPooja:
        "Chandra Pooja is particularly beneficial for individuals facing emotional challenges, anxiety, or sleep disturbances. It's often performed on specific days with lunar significance.",
      afterPooja: ["Practice meditation or mindfulness exercises regularly."],
      whyBookWithDivineConnection: [
        "Expertise in conducting traditional Chandra Pooja rituals.",
        "Guidance on creating a serene environment for the pooja.",
        "Personalized assistance for individual spiritual needs.",
      ],
    },
    {
      name: "Mahalaxmi Pooja",
      description:
        "Worship of Goddess Lakshmi, the deity of wealth, prosperity, and fortune.",
      benefits: [
        "Invokes blessings for financial stability and abundance.",
        "Attracts wealth, prosperity, and material well-being.",
        "Promotes generosity, gratitude, and spiritual growth.",
      ],
      howItHappens: [
        "Setting up an altar with images or idols of Goddess Lakshmi.",
        "Offering flowers, incense, fruits, and sweets to the deity.",
        "Reciting Lakshmi mantras and performing aarti (ritual of light).",
      ],
      aboutPooja:
        "Mahalaxmi Pooja is performed to seek the blessings of Goddess Lakshmi for wealth, prosperity, and abundance in life. It's often done during Diwali and other auspicious occasions.",
      afterPooja: [
        "Share prasad (blessed offerings) with family and friends.",
        "Express gratitude for blessings received and continue virtuous deeds.",
      ],
      whyBookWithDivineConnection: [
        "Experienced priests specializing in Mahalaxmi Pooja rituals.",
        "Guidance on performing the pooja with devotion and sincerity.",
        "Enhancing the atmosphere for a spiritually enriching experience.",
      ],
    },
    {
      name: "Mrityunjay Pooja",
      description:
        "Worship of Lord Shiva in his Mrityunjay form, seeking protection from illness, accidents, and untimely death.",
      benefits: [
        "Grants protection from dangers, diseases, and accidents.",
        "Promotes physical, mental, and spiritual well-being.",
        "Fosters inner strength, resilience, and fearlessness.",
      ],
      howItHappens: [
        "Setting up a sacred space with Shiva's idol or image.",
        "Offering water, milk, bilva leaves, and bael fruit to Lord Shiva.",
        "Reciting Mrityunjay mantra and performing abhishek (ritual bathing).",
      ],
      aboutPooja:
        "Mrityunjay Pooja is performed to seek the blessings of Lord Shiva for protection from the cycle of birth and death. It's believed to alleviate suffering and grant longevity.",
      afterPooja: [
        "Donate food or perform acts of charity for the welfare of others.",
        "Continue regular prayers and meditation for spiritual growth.",
      ],
      whyBookWithDivineConnection: [
        "Experienced priests proficient in Mrityunjay Pooja rituals.",
        "Guidance on performing rituals with reverence and devotion.",
        "Creating a sacred ambiance conducive to spiritual upliftment.",
      ],
    },
    {
      name: "Surya Pooja",
      description:
        "Worship of the Sun God, Surya, seeking blessings for vitality, health, and prosperity.",
      benefits: [
        "Promotes physical and mental strength, vitality, and energy.",
        "Fosters good health, well-being, and immunity.",
        "Attracts success, prosperity, and divine grace.",
      ],
      howItHappens: [
        "Offering water, flowers, and arghya (water oblation) to the Sun.",
        "Reciting Surya mantras and Gayatri mantra.",
        "Performing Surya Namaskar (salutations to the Sun).",
      ],
      aboutPooja:
        "Surya Pooja is performed to invoke the blessings of the Sun God for health, vitality, and success. It's believed to promote physical and spiritual well-being.",
      afterPooja: [
        "Spend time outdoors and soak in the Sun's rays for vitality.",
        "Practice gratitude and reverence for the blessings of life.",
      ],
      whyBookWithDivineConnection: [
        "Experienced priests specializing in Surya Pooja rituals.",
        "Guidance on performing the pooja with devotion and sincerity.",
        "Enhancing the atmosphere for a spiritually enriching experience.",
      ],
    },
    {
      name: "Saraswati Puja",
      description:
        "Worship of Goddess Saraswati, the deity of knowledge, wisdom, and arts.",
      benefits: [
        "Promotes learning, education, and intellectual growth.",
        "Blesses students and scholars with success in studies and creativity.",
        "Fosters clarity of thought, speech, and expression.",
      ],
      howItHappens: [
        "Setting up a shrine with Saraswati's image or idol.",
        "Offering flowers, fruits, and sweets to the goddess.",
        "Reciting Saraswati mantras and hymns.",
      ],
      aboutPooja:
        "Saraswati Puja is performed to seek the blessings of Goddess Saraswati for knowledge, wisdom, and creativity. It's often observed during the festival of Basant Panchami.",
      afterPooja: [
        "Engage in activities that promote learning and creativity.",
        "Offer prayers regularly to Saraswati for continued guidance and inspiration.",
      ],
      whyBookWithDivineConnection: [
        "Experienced priests specializing in Saraswati Puja rituals.",
        "Guidance on performing the pooja with devotion and sincerity.",
        "Creating a conducive environment for learning and artistic pursuits.",
      ],
    },
    {
      name: "Kali Pooja",
      description:
        "Worship of Goddess Kali, the fierce form of Shakti, seeking protection and liberation from negative forces.",
      benefits: [
        "Grants protection from evil, negativity, and malevolent forces.",
        "Fosters courage, strength, and fearlessness in facing challenges.",
        "Promotes spiritual growth, transformation, and liberation.",
      ],
      howItHappens: [
        "Preparing an altar with Kali's image or idol.",
        "Offering blood, flowers, fruits, and sweets to the goddess.",
        "Reciting Kali mantras and performing aarti (ritual of light).",
      ],
      aboutPooja:
        "Kali Pooja is performed to invoke the blessings of Goddess Kali for protection, courage, and spiritual liberation. It's often observed during the festival of Diwali and Navratri.",
      afterPooja: [
        "Continue to practice courage, compassion, and righteousness.",
        "Offer prayers regularly to Kali for protection and guidance.",
      ],
      whyBookWithDivineConnection: [
        "Experienced priests proficient in Kali Pooja rituals.",
        "Guidance on performing the pooja with reverence and devotion.",
        "Creating a sacred ambiance conducive to spiritual connection.",
      ],
    },
    {
      name: "Bhagwat Geeta Pooja",
      description:
        "Worship and recitation of the Bhagavad Gita, the sacred scripture containing the teachings of Lord Krishna.",
      benefits: [
        "Provides spiritual guidance, wisdom, and enlightenment.",
        "Promotes inner peace, clarity, and self-realization.",
        "Inspires righteous action, devotion, and karma yoga.",
      ],
      howItHappens: [
        "Setting up an altar with the Bhagavad Gita.",
        "Reciting verses from the scripture with devotion and understanding.",
        "Reflecting on the teachings and applying them to daily life.",
      ],
      aboutPooja:
        "Bhagwat Geeta Pooja is performed to honor and seek the blessings of Lord Krishna through the recitation and contemplation of the Bhagavad Gita. It's considered a powerful tool for spiritual growth and self-realization.",
      afterPooja: [
        "Continue to study and contemplate the teachings of the Bhagavad Gita.",
        "Practice the principles of dharma, devotion, and selfless action.",
      ],
      whyBookWithDivineConnection: [
        "Experienced priests proficient in Bhagwat Geeta recitation and interpretation.",
        "Guidance on understanding and applying the teachings of the scripture.",
        "Creating a serene atmosphere conducive to spiritual reflection.",
      ],
    },
    {
      name: "Navgrah Pooja",
      description:
        "Worship of the nine celestial bodies (Navagrahas) for planetary harmony and mitigation of astrological afflictions.",
      benefits: [
        "Balances the influences of the planets for overall well-being.",
        "Reduces the malefic effects of planetary alignments.",
        "Promotes harmony, prosperity, and spiritual growth.",
      ],
      howItHappens: [
        "Setting up a sacred space with Navgraha yantra or idols.",
        "Offering specific items to each of the nine grahas (planets).",
        "Reciting Navgraha mantras and performing homa (fire ritual).",
      ],
      aboutPooja:
        "Navgrah Pooja is performed to appease the nine planets and seek their blessings for harmony, prosperity, and protection from astrological influences. It's often recommended for individuals facing challenges due to planetary positions in their horoscope.",
      afterPooja: [
        "Continue to wear gemstones or perform remedies as advised by an astrologer.",
        "Maintain a positive outlook and engage in virtuous deeds.",
      ],
      whyBookWithDivineConnection: [
        "Experienced priests proficient in Navgrah Pooja rituals.",
        "Guidance on performing the pooja with devotion and sincerity.",
        "Assistance in selecting appropriate remedies based on individual horoscopes.",
      ],
    },
    {
      name: "Rahu Pooja",
      description:
        "Worship of Rahu, the shadow planet, to mitigate its malefic effects and seek blessings for spiritual growth.",
      benefits: [
        "Neutralizes the negative influence of Rahu in the horoscope.",
        "Promotes clarity of thought, intuition, and spiritual insight.",
        "Fosters growth, transformation, and liberation from obstacles.",
      ],
      howItHappens: [
        "Setting up a sacred space with Rahu yantra or image.",
        "Offering specific items such as blue flowers, sandalwood, and sesame oil.",
        "Reciting Rahu mantras and performing puja with devotion.",
      ],
      aboutPooja:
        "Rahu Pooja is performed to pacify the malefic effects of Rahu in the birth chart and seek its blessings for spiritual growth and liberation. It's often recommended for individuals experiencing challenges related to Rahu's placement in their horoscope.",
      afterPooja: [
        "Continue to wear Rahu remedies or perform spiritual practices as advised.",
        "Practice humility, self-awareness, and detachment from worldly desires.",
      ],
      whyBookWithDivineConnection: [
        "Experienced priests proficient in Rahu Pooja rituals.",
        "Guidance on performing the pooja with sincerity and devotion.",
        "Assistance in selecting appropriate remedies based on astrological analysis.",
      ],
    },
    {
      name: "Ketu Pooja",
      description:
        "Worship of Ketu, the shadow planet, to mitigate its malefic effects and seek blessings for spiritual growth.",
      benefits: [
        "Neutralizes the negative influence of Ketu in the horoscope.",
        "Promotes spiritual insight, intuition, and inner wisdom.",
        "Fosters detachment, liberation, and transcendence of material desires.",
      ],
      howItHappens: [
        "Setting up a sacred space with Ketu yantra or image.",
        "Offering specific items such as white flowers, sandalwood, and camphor.",
        "Reciting Ketu mantras and performing puja with devotion.",
      ],
      aboutPooja:
        "Ketu Pooja is performed to pacify the malefic effects of Ketu in the birth chart and seek its blessings for spiritual growth and liberation. It's often recommended for individuals experiencing challenges related to Ketu's placement in their horoscope.",
      afterPooja: [
        "Continue to wear Ketu remedies or engage in spiritual practices as advised.",
        "Cultivate humility, introspection, and detachment from worldly attachments.",
      ],
      whyBookWithDivineConnection: [
        "Experienced priests proficient in Ketu Pooja rituals.",
        "Guidance on performing the pooja with sincerity and devotion.",
        "Assistance in selecting appropriate remedies based on astrological analysis.",
      ],
    },
    {
      name: "Mangal Pooja",
      description:
        "Worship of Mangal (Mars), the planet of energy, drive, and ambition, to mitigate its malefic effects and seek blessings for strength and vitality.",
      benefits: [
        "Neutralizes the negative influence of Mars in the horoscope.",
        "Promotes courage, determination, and physical vitality.",
        "Fosters success, ambition, and achievement of goals.",
      ],
      howItHappens: [
        "Setting up a sacred space with Mangal yantra or image.",
        "Offering specific items such as red flowers, red sandalwood, and jaggery.",
        "Reciting Mangal mantras and performing puja with devotion.",
      ],
      aboutPooja:
        "Mangal Pooja is performed to pacify the malefic effects of Mars in the birth chart and seek its blessings for strength, courage, and success. It's often recommended for individuals experiencing challenges related to Mars's placement in their horoscope.",
      afterPooja: [
        "Continue to wear Mars remedies or engage in physical activities to channel energy positively.",
        "Cultivate patience, discipline, and constructive action.",
      ],
      whyBookWithDivineConnection: [
        "Experienced priests proficient in Mangal Pooja rituals.",
        "Guidance on performing the pooja with sincerity and devotion.",
        "Assistance in selecting appropriate remedies based on astrological analysis.",
      ],
    },
    {
      name: "Rudra Abhishek Pooja",
      description:
        "Elaborate worship of Lord Shiva in his fierce form, Rudra, seeking blessings for spiritual purification, protection, and liberation.",
      benefits: [
        "Cleanses the soul of impurities and negative karma.",
        "Grants protection from evils, diseases, and adversities.",
        "Fosters spiritual growth, enlightenment, and liberation.",
      ],
      howItHappens: [
        "Performing ceremonial bathing (abhishek) of Shiva lingam with various sacred substances.",
        "Offering bilva leaves, flowers, and other auspicious items to Lord Shiva.",
        "Reciting Rudra mantras and chanting Vedic hymns.",
      ],
      aboutPooja:
        "Rudra Abhishek Pooja is performed with utmost devotion and reverence to Lord Shiva to invoke his blessings for spiritual purification, protection, and liberation. It's considered a powerful means of attaining spiritual upliftment and inner peace.",
      afterPooja: [
        "Continue to offer prayers and engage in spiritual practices regularly.",
        "Practice compassion, forgiveness, and detachment from worldly desires.",
      ],
      whyBookWithDivineConnection: [
        "Experienced priests proficient in Rudra Abhishek Pooja rituals.",
        "Guidance on performing the pooja with sincerity and devotion.",
        "Creating a sacred ambiance conducive to spiritual elevation.",
      ],
    },
    {
      name: "Gath Bandhan Pooja",
      description:
        "Worship to strengthen the bond of marriage and foster love, harmony, and understanding between partners.",
      benefits: [
        "Strengthens the marital bond and promotes mutual understanding.",
        "Resolves conflicts, misunderstandings, and differences.",
        "Fosters love, harmony, and long-lasting companionship.",
      ],
      howItHappens: [
        "Exchanging garlands or tying sacred threads (gath bandhan) between partners.",
        "Reciting marriage vows and offering prayers for marital bliss.",
        "Seeking blessings from elders and the divine for a happy union.",
      ],
      aboutPooja:
        "Gath Bandhan Pooja is performed to strengthen the marital bond and invoke divine blessings for a harmonious and blissful married life. It's often performed on auspicious occasions or as a remedial measure for marital discord.",
      afterPooja: [
        "Continue to communicate openly and empathetically with your partner.",
        "Practice patience, compromise, and mutual respect in the relationship.",
      ],
      whyBookWithDivineConnection: [
        "Experienced priests proficient in Gath Bandhan Pooja rituals.",
        "Guidance on performing the pooja with sincerity and devotion.",
        "Creating a sacred atmosphere conducive to marital harmony and bliss.",
      ],
    },
    {
      name: "Satya Narayan Pooja",
      description:
        "Worship of Lord Vishnu in his form as Satya Narayan, the embodiment of truth and righteousness, seeking blessings for prosperity, well-being, and spiritual fulfillment.",
      benefits: [
        "Invokes blessings for prosperity, happiness, and fulfillment of desires.",
        "Promotes spiritual growth, devotion, and righteousness.",
        "Fosters harmony, peace, and well-being in the family.",
      ],
      howItHappens: [
        "Preparing an altar with images or idols of Lord Vishnu and Goddess Lakshmi.",
        "Offering fruits, flowers, sweets, and other auspicious items to the deities.",
        "Reciting Satya Narayan Katha (narrative of Lord Vishnu's glory) with devotion.",
      ],
      aboutPooja:
        "Satya Narayan Pooja is performed to seek the blessings of Lord Vishnu and Goddess Lakshmi for prosperity, happiness, and spiritual fulfillment. It's often observed on full moon days or as a special occasion in Hindu households.",
      afterPooja: [
        "Share prasad (blessed offerings) with family and friends.",
        "Continue to uphold truth, righteousness, and moral values.",
      ],
      whyBookWithDivineConnection: [
        "Experienced priests proficient in Satya Narayan Pooja rituals.",
        "Guidance on performing the pooja with devotion and sincerity.",
        "Creating a sacred ambiance for a spiritually enriching experience.",
      ],
    },
    {
      name: "Brihaspati Pooja",
      description:
        "Worship of Lord Brihaspati, the deity of wisdom, knowledge, and auspiciousness, seeking blessings for intellect, success, and spiritual growth.",
      benefits: [
        "Grants wisdom, intellect, and success in endeavors.",
        "Fosters spiritual growth, devotion, and righteousness.",
        "Attracts auspiciousness, blessings, and divine grace.",
      ],
      howItHappens: [
        "Setting up an altar with Brihaspati's image or idol.",
        "Offering yellow flowers, gram dal (chickpeas), and yellow sweets to the deity.",
        "Reciting Brihaspati mantras and performing puja with devotion.",
      ],
      aboutPooja:
        "Brihaspati Pooja is performed to seek the blessings of Lord Brihaspati for wisdom, intellect, success, and auspiciousness. It's often observed on Thursdays or as a remedial measure for Jupiter-related afflictions in the horoscope.",
      afterPooja: [
        "Continue to wear yellow-colored clothes or accessories on Thursdays.",
        "Practice generosity, humility, and gratitude.",
      ],
      whyBookWithDivineConnection: [
        "Experienced priests proficient in Brihaspati Pooja rituals.",
        "Guidance on performing the pooja with devotion and sincerity.",
        "Assistance in propitiating Jupiter for favorable outcomes.",
      ],
    },
    {
      name: "Nakshatra Pooja",
      description:
        "Worship performed to appease the ruling deity of a person's birth star (nakshatra) for health, prosperity, and overall well-being.",
      benefits: [
        "Neutralizes negative influences and enhances the positive qualities associated with the nakshatra.",
        "Promotes health, wealth, success, and spiritual growth.",
        "Fosters harmony, happiness, and fulfillment in life.",
      ],
      howItHappens: [
        "Determining the ruling deity and auspicious timings for the pooja based on the nakshatra.",
        "Preparing an altar with offerings and symbols associated with the deity.",
        "Reciting prayers, mantras, and hymns dedicated to the ruling deity.",
      ],
      aboutPooja:
        "Nakshatra Pooja is performed to appease the ruling deity of an individual's birth star and seek blessings for health, prosperity, and overall well-being. It's considered auspicious and beneficial to perform this pooja regularly.",
      afterPooja: [
        "Continue to honor the ruling deity through prayers and offerings.",
        "Observe positive changes in life and express gratitude for blessings received.",
      ],
      whyBookWithDivineConnection: [
        "Experienced priests proficient in Nakshatra Pooja rituals.",
        "Guidance on determining the ruling deity and auspicious timings for the pooja.",
        "Assistance in performing the pooja with devotion and sincerity.",
      ],
    },
    {
      name: "Pitra Dosh Nivaran Pooja",
      description:
        "Remedial worship performed to alleviate the ancestral curse (pitra dosh) affecting one's lineage and seeking blessings for peace, harmony, and prosperity.",
      benefits: [
        "Neutralizes the negative effects of ancestral curses and obstacles in the lineage.",
        "Promotes peace, harmony, and prosperity in the family.",
        "Fosters spiritual growth, redemption, and liberation of ancestors.",
      ],
      howItHappens: [
        "Determining the presence and severity of pitra dosh through astrological analysis.",
        "Performing specific rituals, prayers, and offerings to appease the ancestors.",
        "Seeking forgiveness, redemption, and blessings for ancestral souls.",
      ],
      aboutPooja:
        "Pitra Dosh Nivaran Pooja is performed to alleviate the ancestral curse (pitra dosh) affecting one's lineage and seek blessings for peace, harmony, and prosperity. It's believed to bring relief from obstacles and sufferings caused by ancestral karma.",
      afterPooja: [
        "Continue to honor and remember the ancestors through prayers and rituals.",
        "Observe positive changes in family life and express gratitude for blessings received.",
      ],
      whyBookWithDivineConnection: [
        "Experienced priests proficient in Pitra Dosh Nivaran Pooja rituals.",
        "Guidance on determining the presence and severity of pitra dosh.",
        "Assistance in performing the pooja with devotion and sincerity for ancestral redemption.",
      ],
    },
    {
      name: "Manglik Dosh Nivaran Pooja",
      description:
        "Remedial worship performed to alleviate the malefic effects of Mars (Mangal) in one's horoscope and seeking blessings for marital harmony, happiness, and well-being.",
      benefits: [
        "Neutralizes the negative effects of Mangal dosh and promotes marital harmony.",
        "Resolves obstacles, conflicts, and delays in marriage or relationships.",
        "Fosters peace, understanding, and happiness in the marital bond.",
      ],
      howItHappens: [
        "Determining the presence and severity of Mangal dosh through astrological analysis.",
        "Performing specific rituals, prayers, and offerings to appease Mars.",
        "Seeking blessings for marital harmony, happiness, and well-being.",
      ],
      aboutPooja:
        "Manglik Dosh Nivaran Pooja is performed to alleviate the malefic effects of Mars (Mangal) in one's horoscope and seek blessings for marital harmony, happiness, and well-being. It's often recommended for individuals facing challenges or delays in marriage due to Mangal dosh.",
      afterPooja: [
        "Continue to honor and propitiate Mars through prayers and rituals.",
        "Observe positive changes in marital life and express gratitude for blessings received.",
      ],
      whyBookWithDivineConnection: [
        "Experienced priests proficient in Manglik Dosh Nivaran Pooja rituals.",
        "Guidance on determining the presence and severity of Mangal dosh.",
        "Assistance in performing the pooja with devotion and sincerity for marital harmony.",
      ],
    },
  ];

  const [pooja, setpooja] = useState();

  useEffect(() => {
    setpooja(data[name]);
  }, [name]);

  return (
    <div
      style={{
        width: "100%",
        padding: "20px",
      }}
    >
      {pooja && (
        <div
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "#FCF2F8",
            border: "4px solid #ccc",
            borderRadius: "8px",
            padding: "20px",
            margin: "10px auto", // Centering horizontally
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            maxWidth: "550px", // Adjust as needed
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start"
          }}
        >
          <h2 style={{textAlign:"start", fontWeight:"bold"}}>{pooja.name}</h2>
          <div>
            {/* <strong>Description:</strong> */}
            <ul>
                <li style={{textAlign:"start"}}>{pooja.description}</li>
            </ul>
            < hr style={{border: "1px solid black", marginTop: "5px"}} />
          </div>
          <div style={{width:"100%"}}>
            <h2 style={{textAlign:"start", fontWeight:"bold"}}>Benefits:</h2>
            <ul>
              {pooja.benefits.map((benefit, index) => (
                <li key={index} style={{textAlign:"start"}}>{benefit}</li>
              ))}
            </ul>
            < hr style={{border: "1px solid black", marginTop: "5px"}} />
          </div>
          <div style={{width:"100%"}}>
            <h2 style={{textAlign:"start", fontWeight:"bold"}}>How It Happens:</h2>
            <ul>
              {pooja.howItHappens.map((step, index) => (
                <li key={index} style={{textAlign:"start"}}>{step}</li>
              ))}
            </ul>
            < hr style={{border: "1px solid black", marginTop: "5px"}} />
          </div>
          <div style={{width:"100%"}}>
            <h2 style={{textAlign:"start", fontWeight:"bold"}}>About Pooja:</h2>
            <ul>
                <li style={{textAlign:"start"}}>{pooja.aboutPooja}</li>
            </ul>
            < hr style={{border: "1px solid black", marginTop: "5px"}} />
          </div>
          <div style={{width:"100%"}}>
            <h2 style={{textAlign:"start", fontWeight:"bold"}}>After Pooja:</h2>
            <ul>
              {pooja.afterPooja.map((action, index) => (
                <li key={index} style={{textAlign:"start"}}>{action}</li>
              ))}
            </ul>
            < hr style={{border: "1px solid black", marginTop: "5px"}} />
          </div>
          <div style={{width:"100%"}}>
            <h2 style={{textAlign:"start", fontWeight:"bold"}}>Why Book With Divine Connection:</h2>
            <ul>
              {pooja.whyBookWithDivineConnection.map((reason, index) => (
                <li key={index} style={{textAlign:"start"}}>{reason}</li>
              ))}
            </ul>
            < hr style={{border: "1px solid black", marginTop: "5px"}} />
          </div>
          <h4 style={{marginTop:"10px", fontWeight:"bold"  }}>5000/-</h4>
          <button
            style={{
              backgroundColor: "black",
              border: "none",
              color: "white",
              padding: "5px 30px",
              textAlign: "center",
              textDecoration: "none",
              display: "block", 
              fontSize: "16px",
              margin: "10px 0",   
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            <Link
              to={`/book/${name}`}
              style={{ color: "white", textDecoration: "none" }}
            >
              Book
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};
