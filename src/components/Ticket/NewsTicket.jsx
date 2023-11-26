import styles from "./NewsTicket.module.css";
import { getNews } from "../../../services";
import { useEffect, useState } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { formatDistance, parseISO } from "date-fns";
const NewsTicket = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetcher = async () => {
      try {
        const data = await getNews();

        setNews(data);
      } catch (error) {
        console.error("Error fetching news:", error);
        // Handle the error as needed
      }
    };

    fetcher();
  }, []);
  console.log(news);
  return (
    <Carousel
      swipeable
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className={styles.carou}
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 6,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
    >
      {news?.map((art) => {
        return (
          <div className={styles.newsCard} key={art?.node?.title}>
            <Link to={`/news/${art?.node?.titleSlug}`}>
              <img src={art?.node?.photo?.url} alt="" />
              <h4 className={styles.newsTitle}>
                {art?.node?.title.slice(0, 50)}
              </h4>
            </Link>
            <p className={styles.date}>
              {`${formatDistance(
                parseISO(art?.node?.createdAt),
                new Date()
              )} ago`}
            </p>
          </div>
        );
      })}
    </Carousel>
  );
};

export default NewsTicket;
