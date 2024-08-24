export type ISocial =  {
  link: string;
  icon: string;
  name: string;
}

const social_links:ISocial[] = [
  {
    link: "https://www.facebook.com/vitalfutclub?mibextid=ZbWKwL",
    icon: "fab fa-facebook-f",
    name: "VitalFutClub",
  },
  {
    link: "https://www.instagram.com/vitalfutclub?igsh=MW96YjQ4NWx3aDVzbw==",
    icon: "fab fa-instagram",
    name: "VitalFutClub",
  },
  // {
  //   link: "https://www.behance.net/",
  //   icon: "fab fa-behance",
  //   name: "Behance",
  // },
  // {
  //   link: "https://dribbble.com/",
  //   icon: "fab fa-dribbble",
  //   name: "Dribbble",
  // },
]

export default social_links;
