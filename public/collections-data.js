/* ===== EDIT ME =====
   TVAK footwear collection (5 pairs) and Abstract Wedding Designs (7 domains x 5).
   To add a photo: put the file in /public/images, then set img:"/images/yourfile.jpg"
   (or vid:"/images/yourvideo.mp4"). Change t (title) and d (write-up) freely. */
window.TVAK = [
  { n: "TVAK 01", t: "Mṛttikā | मृत्तिका", d: "Earth · Clay -Mṛttikā draws from the raw character of earth. Its warm, embossed leather, sculpted ankle form, and substantial block heel create a grounded silhouette. The textured surface resembles something shaped by hand and weathered over time, bringing an organic, almost earthen quality to contemporary footwear.", img: "/media/The Knitted Sneaker.png"},
  { n: "TVAK 02", t: "Vajra | वज्र", d: "Thunderbolt · Strength -Vajra expresses strength through visible construction. Rich textured leather, intricate lacing, layered panels, and a rugged ribbed sole give the shoe a powerful presence. Its exposed craftsmanship becomes part of its identity, suggesting something forged, assembled, and built to endure.", img: "/media/The Knitted Sneaker (1).png"},
  { n: "TVAK 03", t: "Sandhyā | सन्ध्या", d: "Twilight · Transition -Sandhyā captures the meeting of two worlds. Deep brown and warm tan leather flow into one another like the changing colours of twilight. The pointed silhouette, restrained heel, and softly contrasting panels create a balance between formal elegance and earthy warmth.", img: "/media/The Knitted Sneaker (2).png"},
  { n: "TVAK 04", t: "Chāyā | छाया", d: "Shadow · Reflection -Chāyā is built around the language of light and shadow. Its dark leather body, warm brown detailing, elevated block heel, and platform construction create distinct layers across the foot. The silhouette feels architectural yet wearable, revealing depth through contrast rather than ornament.", img: "/media/The Knitted Sneaker (3).png"},
  { n: "TVAK 05", t: "Puṣpa | पुष्प", d: "Flower · Blossom -Puṣpa transforms the language of nature into adornment. Delicate leather petals bloom across the sandal, following the contours of the foot like a botanical second skin. Layered floral elements, warm earthy tones, and an open silhouette create a meeting point between craft, femininity, and organic form.", img: "/media/The Knitted Sneaker (4).png"},
];
const _w = (domain) => [1, 2, 3, 4, 5].map((i) => ({ n: domain + " 0" + i, t: domain + " design 0" + i, d: "Describe this abstract wedding design: concept, colours, materials.", img: "", vid: "" }));
window.WEDDING = {
  Footwear: [
    {
      n: "Footwear 01",
      t: "Tarangā | तरङ्गा",
      d: "Tarangā captures the rhythmic pulse of the ocean through vibrant colour and sculptural form. Coral-like straps, pearl accents and a seashell-inspired heel create a lively surface that seems to move around the foot. Pink and blue become the colours of an ocean alive with energy, playfulness and freedom.",
      img: "/media/Minimalist portfolio 2025 Logo/5.png",
    },

    {
      n: "Footwear 02",
      t: "Paramparā | परम्परा",
      d: "Paramparā is a tribute to what survives through generations. Earthy tones, antique-inspired surfaces, carved heels and sculptural straps recall traditional craftsmanship and ceremonial ornamentation. The sandal becomes more than footwear, carrying the visual memory of heritage while translating it into a bold contemporary form.",
      img: "/media/Minimalist portfolio 2025 Logo/6.png",
    },

    {
      n: "Footwear 03",
      t: "Anantā | अनन्ता",
      d: "Anantā embodies the quiet eternity of a wedding vow. Soft blue, pearls and delicate floral details create a feeling of purity and tenderness, while the spiral heel suggests continuity without beginning or end. Designed for the bride, the sandal becomes a small symbol of love made enduring.",
      img: "/media/Minimalist portfolio 2025 Logo/7.png",
      
    },

    {
      n: "Footwear 04",
      t: "Nakṣatrā | नक्षत्रा",
      d: "Nakṣatrā draws its language from the night sky. A fiery orange-red surface carries geometric arrangements of stones and beads, resembling constellations scattered across a celestial field. Traditional bridal ornament meets cosmic geometry, creating footwear that feels as though the heavens themselves are witnessing the ceremony.",
      img: "/media/Minimalist portfolio 2025 Logo/8.png",
      
    },

    {
      n: "Footwear 05",
      t: "Makara | मकर",
      d: "Makara draws from the mythological aquatic creature found across Indian visual traditions. Its sculptural animal-like heel, gold surface and jewel-encrusted body transform footwear into a miniature work of ceremonial art. Rich reds, blues and mirrored details give the form a regal, fantastical presence inspired by the imagination of the sea.",
      img: "/media/Minimalist portfolio 2025 Logo/9.png",
      
    },
  ],

  Accessories: [
    {
      n: "Accessories 01",
      t: "YUGALA | যুগল",
      d: "Inspired by the bride and groom as two halves entering a shared life, Yugala depicts union through the visual language of Bengali alpana. The paired figures, ceremonial headpieces, jewellery and red woven ground transform the artwork into a celebration of marriage, companionship and the beginning of a shared journey.",
      img: "/media/Bengali Wedding Kulo- Alpona Designs/6.png",
      
    },

    {
      n: "Accessories 02",
      t: "VIJAYA | विजया",
      d: "Vijaya celebrates the architectural and cultural identity of Kolkata through the Victoria Memorial. Rendered through an indigenous craft language, the monument becomes more than architecture. It becomes a memory of the city, where colonial history, Bengali artistry and contemporary interpretation meet within a single alpana-inspired composition.",
      img: "/media/Bengali Wedding Kulo- Alpona Designs/2.png",
      
    },

    {
      n: "Accessories 03",
      t: "JALAKRĪḌĀ | जलक्रीडा",
      d: "Jalakrīḍā imagines an underwater world through the playful language of alpana. The jellyfish-like figures, crowned characters, fish, stars and aquatic vegetation transform the sea into a fantastical stage. It celebrates fluidity, imagination and the mysterious life beneath the surface, where nature becomes folklore.",
      img: "/media/Bengali Wedding Kulo- Alpona Designs/3.png",
      
    },

    {
      n: "Accessories 04",
      t: "NAKṢATRA | नक्षत्र",
      d: "Nakṣatra translates the language of the cosmos into a traditional decorative form. Constellations, planetary symbols, geometric geometry and the central sun-moon motif create a visual map of the heavens. The artwork explores humanity's timeless fascination with the stars, translating cosmic order into the intimate scale of alpana.",
      img: "/media/Bengali Wedding Kulo- Alpona Designs/4.png",
      
    },

    {
      n: "Accessories 05",
      t: "SAMUDRA-MAITRĪ | समुद्र-मैत्री",
      d: "Samudra-Maitrī portrays the sea as a world of companionship. Two seahorses meet within an aquatic landscape surrounded by waves, shells and marine forms. The composition transforms an everyday natural encounter into a tender folk narrative, celebrating connection, harmony and the quiet poetry of life beneath the water.",
      img: "/media/Bengali Wedding Kulo- Alpona Designs/5.png",
      
    },
  ],

  Jewellery: [
    {
      n: "Jewellery 01",
      t: "Haritā | हरिता",
      d: "Haritā brings the richness of nature into bridal jewellery. Emerald-green stones, pink accents, pearls, and intricate gold settings create a lush botanical palette. The choker, pendant, earrings, and bracelet combine traditional gemstone ornament with floral geometry, evoking abundance, prosperity, and the vitality of new beginnings.",
      img: "/media/jewel/1.png",
      
    },

    {
      n: "Jewellery 02",
      t: "Puṣpavatī | पुष्पवती",
      d: "Puṣpavatī turns flowers into flowing jewellery. Fine gold curves carry daisy-like blossoms across the neckline, while deep red gemstones punctuate the composition like drops of vermilion. The open, cascading structure gives the set a sense of movement, balancing delicacy with a striking sculptural presence.",
      img: "/media/jewel/2.png",
      
    },

    {
      n: "Jewellery 03",
      t: "Mallikā | मल्लिका",
      d: "Mallikā transforms the jasmine flower into jewellery. Intricate floral forms, ivory pearls, delicate goldwork, and a restrained touch of pink create an almost botanical surface. The layered necklace and matching ornaments evoke the traditional association of jasmine with Indian bridal beauty, purity, and celebration.",
      img: "/media/jewel/3.png",
      
    },

    {
      n: "Jewellery 04",
      t: "Ratnajā | रत्नजा",
      d: "Ratnajā is an exploration of geometry and brilliance. Clear-cut stones framed in gold create a structured rhythm, softened by strands of pearls. The coordinated necklace, earrings, and bracelet balance regal symmetry with contemporary restraint, making the collection feel refined, luminous, and distinctly bridal.",
      img: "/media/jewel/4.png",
      
    },

    {
      n: "Jewellery 05",
      t: "Mālatī | मालती",
      d: "Mālatī draws from the quiet romance of jasmine flowers woven through bridal adornment. Pink and blue floral stones, pearls, and teardrop beads create a soft garden-like composition. The layered necklace, earrings, and bracelet celebrate femininity through the delicate rhythm of blossoms, colour, and traditional bridal ornamentation.",
      img: "/media/jewel/5.png",
      
    },
  ],

  Cards: [
    {
      n: "Cards 01",
      t: "Samudrikā | सामुद्रिका",
      d: "Samudrikā brings the romance of the ocean into a celebratory keepsake. A vivid seahorse illustration, shells, coral and underwater flora create an immersive marine world, framed within a rich red presentation box. The flowing ribbon adds a ceremonial touch, turning the card into a gift of wonder and affection.",
      img: "/media/crd/1.png",
      
    },

    {
      n: "Cards 02",
      t: "Lalitā | ललिता",
      d: "Lalitā celebrates the beauty of intricate pattern and crafted detail. Delicate cutwork transforms the card into a layered play of positive and negative space, with red revealed beneath an ivory surface. The composition feels simultaneously traditional and contemporary, making the act of opening the card part of its visual experience.",
      img: "/media/crd/2.png",
      
    },

    {
      n: "Cards 03",
      t: "Anantam | अनन्तम्",
      d: "Anantam is a celebration of love beyond time. Celestial symbols, planets, stars, the sun and moon surround the words “Always & Forever,” creating a universe built around permanence. Bright colour and playful cosmic imagery transform a simple message into a visual declaration of enduring connection.",
      img: "/media/crd/3.png",
      
    },

    {
      n: "Cards 04",
      t: "Smaraṇa | स्मरण",
      d: "Smaraṇa is designed around the intimacy of remembering someone. Layered architectural strips, monochrome imagery and a vivid orange ribbon create a tactile composition that feels like a carefully preserved memory. The understated message, “Thinking of You,” gives the design its emotional centre, turning structure into sentiment.",
      img: "/media/crd/4.png",
      
    },

    {
      n: "Cards 05",
      t: "Jalabindu | जल-बिन्दु",
      d: "Jalabindu explores the delicate world beneath the surface. A vivid jellyfish becomes the centre of a layered composition surrounded by shells, marine forms and flowing water. Circular framing creates the feeling of looking through a portal into the ocean, while contrasting blue, pink and yellow bring the underwater world to life.",
      img: "/media/crd/5.png",
      
    },
  ],

  Bags: [
    {
      n: "Bags 01",
      t: "Vastragandha | वस्त्रगन्धा",
      d: "Vastragandha celebrates the richness of Indian textiles through a deep red velvet potli embroidered with delicate gold florals. Twisted cords, metallic beads and traditional tassels turn the drawstring silhouette into a ceremonial object, evoking the warmth, intimacy and craftsmanship of a bridal trousseau.",
      img: "/media/bags/1.png",
     
    },

    {
      n: "Bags 02",
      t: "Suvarṇarekha | सुवर्णरेखा",
      d: "Suvarṇarekha translates the language of woven heritage into a contemporary statement bag. Rich brocade panels fold into a sculptural silhouette, while metallic edging and pearl-like details trace its structure. The hidden red potli becomes a jewel-like centre, balancing traditional textile craft with modern geometry.",
      img: "/media/bags/2.png",
     
    },

    {
      n: "Bags 03",
      t: "Haripattrā | हरिपत्रा",
      d: "Haripattrā draws its identity from the deep green of nature and the intricate rhythm of Indian ornament. Gold floral filigree spreads across the compact silhouette like a botanical motif, while the structured body and long strap give the traditional decorative language a refined contemporary expression.",
      img: "/media/bags/3.png",
      
    },

    {
      n: "Bags 04",
      t: "Nīlāmbara | नीलाम्बरा",
      d: "Nīlāmbara is an ode to deep blue silk and the quiet richness of gold. Its soft gathered body, antique clasp, long chain and dramatic tassel create a balance between fluidity and structure. The bag carries the elegance of evening bridalwear while retaining the intimacy of a traditional potli.",
      img: "/media/bags/4.png",
      
    },

    {
      n: "Bags 05",
      t: "Padmāvalī | पद्मावली",
      d: "Padmāvalī transforms floral ornament into a sculptural accessory. Rich crimson velvet forms the base, while a procession of gold filigree flowers travels across the front like a ceremonial garland. The metallic frame and chain add structure, creating a piece that feels simultaneously regal, feminine and rooted in Indian craft.",
      img: "/media/bags/5.png",
      
    },
  ],

  "Resin Phone Covers": [
    {
      n: "Resin Phone Cover 01",
      t: "Sāgarika",
      d: "Sāgarika captures the joy of the ocean through a playful arrangement of seashells, pearls, seahorses, starfish and marine-inspired forms. A personal photograph sits at the centre, surrounded by a handcrafted underwater garden, creating a nostalgic keepsake that blends childhood wonder with contemporary accessory design.",
      img: "/media/phc/1.png",
      
    },

    {
      n: "Resin Phone Cover 02",
      t: "Ākāśa Smriti",
      d: "A whimsical memory case built around the idea of shared moments under an open sky. Soft pink florals frame a personal photograph, while clouds, a radiant sun and celestial motifs create a dreamy visual narrative. It turns personal memories into a small, portable story.",
      img: "/media/phc/2.png",
      
    },

    {
      n: "Resin Phone Cover 03",
      t: "Swarna Smriti",
      d: "This design combines floral craft, ornamental gold elements and a personal photograph within a transparent composition. Raised flowers, pearl detailing and golden accents create a warm, nostalgic aesthetic, giving the phone case the character of a miniature framed keepsake.",
      img: "/media/phc/3.png",
      
    },

    {
      n: "Resin Phone Cover 04",
      t: "Gulshan-e-Yād",
      d: "A romantic memory case inspired by vintage portrait frames and botanical ornamentation. Pearl borders, golden filigree, sculpted roses and a personal photograph come together to create the feeling of a treasured heirloom, turning an everyday phone accessory into a celebration of memory.",
      img: "/media/phc/4.png",
      
    },

    {
      n: "Resin Phone Cover 05",
      t: "Samudra Smriti",
      d: "A handcrafted phone case that transforms personal memories into a miniature oceanic world. Seashells, pearls, starfish, jellyfish and coral-inspired elements are layered around a cherished photograph, creating a playful keepsake where coastal nostalgia meets expressive craft.",
      img: "/media/phc/5.png",
      
    },
  ],
};
