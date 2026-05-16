// Media sourced from oboylelandscaping.com (Wix static CDN)
const W = "https://static.wixstatic.com/media";

export const portfolio: { src: string; title: string; category: string }[] = [
  { src: `${W}/af87f9_e0bb193b090e41e796b3d06e52bf919b~mv2_d_2052_1366_s_2.jpg`, title: "Front Yard Refresh", category: "Landscape Design" },
  { src: `${W}/af87f9_cd8c08fbe1f64fecbd568c577193ef6a~mv2_d_2052_1368_s_2.jpg`, title: "Curb-Appeal Plantings", category: "Landscape Design" },
  { src: `${W}/af87f9_75dc776eafde4d1db49c378669a33007~mv2_d_2044_1362_s_2.jpg`, title: "Stone Walkway", category: "Hardscape" },
  { src: `${W}/af87f9_f747e0b870ab41cf9668fba341786d0b~mv2_d_4705_3070_s_4_2.jpg`, title: "Backyard Patio Retreat", category: "Hardscape" },
  { src: `${W}/af87f9_2f11b632486948a499133d00bea811ec~mv2_d_2048_1366_s_2.jpg`, title: "Bluestone Steps", category: "Hardscape" },
  { src: `${W}/af87f9_85c67fdd018748bd9be0bb9949a8a9a7~mv2_d_2052_1376_s_2.jpg`, title: "Mixed Border Garden", category: "Landscape Design" },
  { src: `${W}/af87f9_48252ee3283847c2b25a1cb6cf0200d4~mv2_d_3264_2403_s_4_2.jpg`, title: "Walkway & Lighting", category: "Hardscape" },
  { src: `${W}/af87f9_c467e36928a049aaa1035647584f4737~mv2_d_3648_5472_s_4_2.jpg`, title: "Garden Wall Detail", category: "Hardscape" },
  { src: `${W}/af87f9_2baf3714969d4535b8736109683795ec~mv2_d_3648_5472_s_4_2.jpg`, title: "Seasonal Plantings", category: "Landscape Design" },
  { src: `${W}/af87f9_38f57fb2e5dd4935b4657ad6a4cebc21~mv2_d_5472_3648_s_4_2.jpg`, title: "Outdoor Living Patio", category: "Outdoor Living" },
  { src: `${W}/af87f9_e71928b248624a2f8119896636a3853e~mv2_d_5472_3648_s_4_2.jpg`, title: "Lawn Maintenance", category: "Maintenance" },
  { src: `${W}/af87f9_851b2e473121429ea0daa7aed3a637be~mv2_d_3505_5314_s_4_2.jpg`, title: "Tiered Garden Beds", category: "Landscape Design" },
  { src: `${W}/af87f9_840c10a1adfd40948ecaff5727c8efb6~mv2_d_5184_3456_s_4_2.jpg`, title: "Driveway & Lighting", category: "Hardscape" },
  { src: `${W}/af87f9_9827732da74b49e283e463379c02e876~mv2_d_5472_3648_s_4_2.jpg`, title: "Custom Outdoor Kitchen", category: "Outdoor Living" },
  { src: `${W}/af87f9_70c922c8b9e34d9092e2eef34405b8db~mv2_d_4983_3245_s_4_2.jpg`, title: "Backyard Stonework", category: "Hardscape" },
  { src: `${W}/af87f9_b525df53141541e0801ac1e87dc023bf~mv2_d_5472_3648_s_4_2.jpg`, title: "Sod & New Lawn", category: "Maintenance" },
  { src: `${W}/af87f9_68335fbc14e24ea0a04f4e6ec7c501ff~mv2_d_4764_3395_s_4_2.jpg`, title: "Fire Pit Patio", category: "Outdoor Living" },
  { src: `${W}/af87f9_5cc0a66eb7a744baaa6238f6ef4a6a14~mv2_d_5472_3648_s_4_2.jpg`, title: "Estate Landscape", category: "Landscape Design" },
  { src: `${W}/af87f9_8137e430395a427ca3b607f9d45c0ac9~mv2_d_5472_3648_s_4_2.jpg`, title: "Manicured Front Lawn", category: "Maintenance" },
  { src: `${W}/af87f9_8e7d87295904450aa1b17343401162aa~mv2_d_3648_5472_s_4_2.jpg`, title: "Hedge & Border Pruning", category: "Maintenance" },
  { src: `${W}/af87f9_de75656a728c4cc094d9b414558b981e~mv2_d_5472_3648_s_4_2.jpg`, title: "Paver Patio with Wall", category: "Hardscape" },
  { src: `${W}/af87f9_acbfb0d9a7f142caa7006ffbcf9dbe01~mv2_d_2673_3400_s_4_2.jpg`, title: "Perennial Garden", category: "Landscape Design" },
  { src: `${W}/af87f9_80da89b1b78e4d708c3da24704408143~mv2_d_3345_5036_s_4_2.jpg`, title: "Stone Stairway", category: "Hardscape" },
  { src: `${W}/af87f9_97a6ac0ce69d42378942f1ab89a663a0~mv2_d_5069_3648_s_4_2.jpg`, title: "Commercial Property Care", category: "Maintenance" },
  { src: `${W}/af87f9_1fc2f22580c74503a1d5ea77704e77da~mv2_d_3648_5472_s_4_2.jpg`, title: "Seasonal Color Display", category: "Landscape Design" }
];

export const hero = {
  primary: portfolio[3].src,
  alt: portfolio[9].src,
  rotator: [portfolio[3].src, portfolio[9].src, portfolio[13].src, portfolio[20].src, portfolio[16].src]
};

export const team = [
  {
    name: "Martin O'Boyle Sr",
    role: "Founder",
    bio: "Founded O'Boyle Landscaping over 50 years ago. Still the standard for craftsmanship and customer care on every job.",
    img: `${W}/af87f9_99f6f13e41c24fb6bacdc41bc304b714~mv2_d_3456_5184_s_4_2.jpg`
  },
  {
    name: "Martin O'Boyle Jr",
    role: "Owner",
    bio: "Second-generation owner. Leads design and field operations across residential and commercial projects throughout Essex County.",
    img: `${W}/af87f9_d7ae7fcfafb14c73a05e24d935a5aeac~mv2_d_3456_5184_s_4_2.jpg`
  },
  {
    name: "Brent Danieli",
    role: "Operations Manager",
    bio: "Runs the maintenance side of the business — schedules, crews, equipment — keeping every property on time and on standard.",
    img: `${W}/af87f9_7b5d4e8fabe64ed88d145d7ae64dea08~mv2_d_3456_5184_s_4_2.jpg`
  }
];

export const gardenCenter = {
  exterior: `${W}/af87f9_48040c49acfc498096e8c397142b0fe4~mv2.jpg`,
  url: "https://www.brooksidegcandflorist.com"
};

export const company = {
  name: "Martin O'Boyle Landscaping",
  shortName: "O'Boyle Landscaping",
  since: 1973,
  yearsExperience: "50+",
  phone: "(973) 743-3820",
  phoneDigits: "9737433820",
  email: "info@oboylelandscaping.com",
  address: { line1: "551 Broad Street", city: "Bloomfield", state: "NJ", zip: "07003" },
  license: "13VH02259800",
  social: {
    instagram: "https://www.instagram.com/oboylelandscaping",
    facebook: "https://www.facebook.com/oboylelandscaping"
  },
  servingArea: "Essex County & Northern New Jersey"
};
