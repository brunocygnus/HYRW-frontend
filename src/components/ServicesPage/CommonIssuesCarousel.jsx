import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import anxiety_img from "../../assets/anxiety_img.png";
import ADHD_img from "../../assets/ADHD_img.png";
import Assertiveness_img from "../../assets/Assertiveness_img.png";
import PTSD_img from "../../assets/PTSD_img.png";
import ERP_img from "../../assets/ERP_img.png";
import low_self_esteem_img from "../../assets/low_self_esteem_img.png";
import family_conflict_img from "../../assets/family_conflict_img.png";
import sexual_issues_img from "../../assets/sexual_issues_img.png";
import life_transitions_img from "../../assets/life_transitions_img.png";
import family_conflict_1_img from "../../assets/family_conflict_1_img.png";
import couples_conflict_img from "../../assets/couples_conflict_img.png";
import depression_img from "../../assets/depression_img.png";

export default function CommonIssuesCarousel() {
  const treatmentsData = [
    {
      id: 1,
      title: "Anxiety",
      image: anxiety_img,
    },
    {
      id: 2,
      title: "ADHD",
      image: ADHD_img,
    },
    {
      id: 3,
      title: "Assertiveness",
      image: Assertiveness_img,
    },
    {
      id: 4,
      title: "PTSD (Post Traumatic Stress Disorder)",
      image: PTSD_img,
    },
    {
      id: 5,
      title: "ERP for OCD (Obsessive-Compulsive Disorder)",
      image: ERP_img,
    },
    {
      id: 6,
      title: "Family Conflict",
      image: family_conflict_img,
    },
    {
      id: 7,
      title: "Couples conflict",
      image: couples_conflict_img,
    },
    {
      id: 8,
      title: "Depression",
      image: depression_img,
    },
    {
      id: 9,
      title: "Low Self esteem",
      image: low_self_esteem_img,
    },
    {
      id: 10,
      title: "Family Conflict",
      image: family_conflict_1_img,
    },
    {
      id: 11,
      title: "Life transitions",
      image: life_transitions_img,
    },
    {
      id: 12,
      title: "Sexual Issues",
      image: sexual_issues_img,
    },
  ];
  return (
    <div>
      {" "}
      <div className='w-screen px-10 mb-5 flex flex-col items-center'>
        <Slider
          dots={true}
          infinite={true}
          speed={800}
          slidesToShow={5}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={2000}
          arrows={true}
          responsive={[
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
          className='w-full h-80 mb-5 px-0'
        >
          {treatmentsData.map((item) => (
            <div key={item.id} className=' w-56'>
              <img
                src={item.image}
                alt={item.title}
                className='h-60 w-56 object-cover rounded-lg shadow-md'
              />
              <p className='w-48 font-Inter text-center mt-2 font-semibold'>
                {item.title}
              </p>
            </div>
          ))}
        </Slider>{" "}
      </div>
    </div>
  );
}
