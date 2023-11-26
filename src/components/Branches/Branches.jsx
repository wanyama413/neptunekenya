import { getNews } from "../../../services";
import styles from "./Branches.module.css";
import { useEffect, useState } from "react";
const Branches = () => {
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
  return (
    <section className={styles.branch}>
      <div className={styles.card}>
        Latest News
        {news?.slice(0, 8).map((art) => {
          return (
            <div className={styles.newsCard} key={art?.node?.titleSlug}>
              <img src={art?.node?.photo?.url} alt="" />
              <h4 className={styles.newsTitle}>
                {art?.node?.title.slice(0, 50)}
              </h4>
            </div>
          );
        })}
      </div>
      <div className={styles.mapouter}>
        <div className={styles.gmap_canvas}>
          <iframe
            src="https://maps.google.com/maps?q=5%20Mota%20Gur%20Street%20%20%20%20%20%20%20%20PO%20Box%203092%20%20%20%20%20%20%20%20Petach%20Tikvah%20%204951623&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            frameBorder="0"
            scrolling="no"
            style={{ width: 430 + "px", height: 400 + "px" }}
          ></iframe>
          <a href="https://blooketjoin.org">blooket join</a>
        </div>
      </div>
    </section>
  );
};

export default Branches;
