import {
  service1,
  service2,
  service3,
  features1,
  features2,
  features3,
  stars,
  google,
  netflix,
  airbnb,
  amazon,
  facebook,
  grab,
} from "../assets/icons";

export const sponsor = [google, netflix, airbnb, amazon, facebook, grab];

import { news1, news2, news3, news4, testimoni } from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#carrees", label: "Carrees" },
  { href: "#blog", label: "Blog" },
  { href: "#about-us", label: "About Us" },
];

export const services = [
  {
    imgURL: service1,
    label: "Online Billing, Invoicing, & Contracts",
    subtext:
      "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts",
  },
  {
    imgURL: service2,
    label: "Easy Scheduling & Attendance Tracking",
    subtext:
      "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
  },
  {
    imgURL: service3,
    label: "Customer Tracking",
    subtext:
      "Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization ",
  },
];

export const features = [
  {
    imgURL: features1,
    subText:
      "Teachers don’t get lost in the grid view and have a dedicated Podium space.",
  },
  {
    imgURL: features2,
    subText: "TA’s and presenters can be moved to the front of the class.",
  },
  {
    imgURL: features3,
    subText: "Teachers can easily see all students and class data at one time.",
  },
];

export const testimonials = [
  {
    imgURL: testimoni,
    text: `{"Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking."}`,
    name: "Gloria Rose",
    review: stars,
    label: "12 reviews at Yelp",
  },
];

export const newsUtama = [
  {
    imgURL: news1,
    label: "NEWS",
    text: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively neque eveniet nesciunt quia reprehenderit accusamus consequuntur libero, aliquam error velit reiciendis veritatis aperiam, amet itaque ipsa porro.",
  },
];

export const news = [
  {
    imgURL: news2,
    label: "PRESS RELEASE",
    text: "Class Technologies Inc., the company that created Class, Class Technologies Inc., the company that created Class, Class Technologies Inc., the company that created Class,Class Technologies Inc., the company that created Class",
  },
  {
    imgURL: news3,
    label: "NEWS",
    text: "Zoom was never created to be a consumer product. Nonetheless, the Class Technologies Inc., the company that created Class, Class Technologies Inc., the company that created Class,Class Technologies Inc., the company that created Class",
  },
  {
    imgURL: news4,
    label: "PRESS RELEASE",
    text: "This year, investors have reaped big financial returns from betting on Zoom Class Technologies Inc., the company that created Class, Class Technologies Inc., the company that created Class,Class Technologies Inc., the company that created Class",
  },
];