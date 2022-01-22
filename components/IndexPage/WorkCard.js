import React, { useState } from "react";
import styles from "./WorkCard.module.css";

const WorkCard = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "OCBC Pay Anyone",
      category: "Banking & Finance",
      image: "https://cdn.codigo.co/uploads/2021/04/PAO-0@2x.jpg",
      flex: 2,
      icons: [
        "https://www.codigo.co/img/ui/ico-app.svg",
        "https://www.codigo.co/img/ui/ico-uiux.svg",
      ],
    },
    {
      id: 2,
      title: "Others",
      category: "Ecolab",
      image: "https://cdn.codigo.co/uploads/2021/04/ECO-0@2x.jpg",
      flex: 1,
      icons: [
        "https://www.codigo.co/img/ui/ico-app.svg",
        "https://www.codigo.co/img/ui/ico-cms.svg",
        "https://www.codigo.co/img/ui/ico-uiux.svg",
      ],
    },
    {
      id: 3,
      title: "Others, Start-ups",
      category: "KIWI Auto Marketplace",
      image: "https://cdn.codigo.co/uploads/2021/04/KIWI-0@2x.jpg",
      flex: 1,
      icons: [
        "https://www.codigo.co/img/ui/ico-app.svg",
        "https://www.codigo.co/img/ui/ico-web.svg",
        "https://www.codigo.co/img/ui/ico-cms.svg",
        "https://www.codigo.co/img/ui/ico-uiux.svg",
      ],
    },
    {
      id: 4,
      title: "Lifestyle",
      category: "Furama Hotels",
      image: "https://cdn.codigo.co/uploads/2021/04/FURAMA-0@2x.jpg",
      flex: 1,
      icons: [
        "https://www.codigo.co/img/ui/ico-app.svg",

        "https://www.codigo.co/img/ui/ico-uiux.svg",
      ],
    },
    {
      id: 5,
      title: "Transport & Logistics",
      category: "Woodlands Transport",
      image: "https://cdn.codigo.co/uploads/2021/04/WTS-0@2x.jpg",
      flex: 1,
      icons: [
        "https://www.codigo.co/img/ui/ico-app.svg",
        "https://www.codigo.co/img/ui/ico-web.svg",
        "https://www.codigo.co/img/ui/ico-cms.svg",
        "https://www.codigo.co/img/ui/ico-uiux.svg",
      ],
    },
    {
      id: 6,
      title: "Lifestyle, Retail & Entertainment, Start-ups",
      category: "Ready To Travel (SATS)",
      image: "https://cdn.codigo.co/uploads/2021/04/RTT-0@2x.jpg",
      flex: 2,
      icons: [
        "https://www.codigo.co/img/ui/ico-app.svg",
        "https://www.codigo.co/img/ui/ico-web.svg",
        "https://www.codigo.co/img/ui/ico-cms.svg",
        "https://www.codigo.co/img/ui/ico-uiux.svg",
      ],
    },
    {
      id: 7,
      title: "Lifestyle",
      category: "Yoga Movement",
      image: "https://cdn.codigo.co/uploads/2021/04/YM-0@2x-1.jpg",
      flex: 2,
      icons: [
        "https://www.codigo.co/img/ui/ico-app.svg",
        "https://www.codigo.co/img/ui/ico-web.svg",
        "https://www.codigo.co/img/ui/ico-cms.svg",
        "https://www.codigo.co/img/ui/ico-uiux.svg",
      ],
    },
    {
      id: 8,
      title: "Retail & Entertainment",
      category: "Don Don Donki",
      image: "https://cdn.codigo.co/uploads/2021/04/DONKI-0@2x.jpg",
      flex: 2,
      icons: [
        "https://www.codigo.co/img/ui/ico-app.svg",

        "https://www.codigo.co/img/ui/ico-cms.svg",
        "https://www.codigo.co/img/ui/ico-uiux.svg",
      ],
    },
    {
      id: 9,
      title: "Transport & Logistics",
      category: "TAP Ride Hailing",
      image: "https://cdn.codigo.co/uploads/2021/04/TAP-0@2x.jpg",
      flex: 1,
      icons: ["https://www.codigo.co/img/ui/ico-app.svg"],
    },
    {
      id: 10,
      title: "Others",
      category: "FWD Insurance",
      image: "https://cdn.codigo.co/uploads/2021/04/FWD-0@2x.jpg",
      flex: 2,
      icons: [
        "https://www.codigo.co/img/ui/ico-app.svg",

        "https://www.codigo.co/img/ui/ico-cms.svg",
        "https://www.codigo.co/img/ui/ico-uiux.svg",
      ],
    },
    {
      id: 11,
      title: "Retail & Entertainment",
      category: "Isetan",
      image: "https://cdn.codigo.co/uploads/2021/04/ISETAN-0@2x.jpg",
      flex: 1,
      icons: [
        "https://www.codigo.co/img/ui/ico-app.svg",

        "https://www.codigo.co/img/ui/ico-cms.svg",
        "https://www.codigo.co/img/ui/ico-uiux.svg",
      ],
    },
    {
      id: 12,
      title: "Retail & Entertainment",
      category: "HBO GO",
      image: "https://cdn.codigo.co/uploads/2021/04/HBO-0@2x-2.jpg",
      flex: 2,
      icons: [
        "https://www.codigo.co/img/ui/ico-app.svg",

        "https://www.codigo.co/img/ui/ico-uiux.svg",
      ],
    },
    {
      id: 13,
      title: "Telco",
      category: "MyRepublic Mobile",
      image: "https://cdn.codigo.co/uploads/2018/12/MYR.jpg",
      flex: 1,
      icons: [
        "https://www.codigo.co/img/ui/ico-app.svg",

        "https://www.codigo.co/img/ui/ico-uiux.svg",
      ],
    },
    {
      id: 14,
      title: "Transport & Logistics",
      category: "ComfortDelGro",
      image: "https://cdn.codigo.co/uploads/2018/08/CDG-2-1.jpg",
      flex: 1,
      icons: ["https://www.codigo.co/img/ui/ico-app.svg"],
    },
    {
      id: 15,
      title: "Retail & Entertainment",
      category: "7Rewards",
      image: "https://cdn.codigo.co/uploads/2018/04/711.jpg",
      flex: 2,
      icons: [
        "https://www.codigo.co/img/ui/ico-app.svg",
        "https://www.codigo.co/img/ui/ico-web.svg",
        "https://www.codigo.co/img/ui/ico-cms.svg",
      ],
    },
    {
      id: 16,
      title: "Retail & Entertainment",
      category: "FairPrice Online",
      image: "https://cdn.codigo.co/uploads/2018/08/FPOL.jpg",
      flex: 2,
      icons: ["https://www.codigo.co/img/ui/ico-uiux.svg"],
    },
    {
      id: 17,
      title: "Retail & Entertainment",
      category: "Charles & Keith / Pedro",
      image: "https://cdn.codigo.co/uploads/2018/12/ck.jpg",
      flex: 2,
      icons: ["https://www.codigo.co/img/ui/ico-app.svg"],
    },
    {
      id: 18,
      title: "Retail & Entertainment",
      category: "Justice League",
      image:
        "https://cdn.codigo.co/uploads/2018/11/thumbnail-justice_league@2x.jpg",
      flex: 2,
      icons: ["https://www.codigo.co/img/ui/ico-app.svg"],
    },
    {
      id: 19,
      title: "Healthcare",
      category: "Fullerton Health",
      image:
        "https://cdn.codigo.co/uploads/2018/11/fullerton-health-thumbnail@2x.jpg",
      flex: 1,
      icons: ["https://www.codigo.co/img/ui/ico-app.svg"],
    },
    {
      id: 20,
      title: "Lifestyle",
      category: "Sky Premium",
      image:
        "https://cdn.codigo.co/uploads/2018/11/skypremium-thumbnail@2x.jpg",
      flex: 1,
      icons: [
        "https://www.codigo.co/img/ui/ico-app.svg",
        "https://www.codigo.co/img/ui/ico-web.svg",
      ],
    },
    {
      id: 21,
      title: "Lifestyle",
      category: "T Singapore",
      image:
        "https://cdn.codigo.co/uploads/2018/12/TSingapore-thumbnail@2x.jpg",
      flex: 2,
      icons: [
        "https://www.codigo.co/img/ui/ico-web.svg",
        "https://www.codigo.co/img/ui/ico-cms.svg",
      ],
    },
    {
      id: 22,
      title: "Transport & Logistics",
      category: "SingPost",
      image: "https://cdn.codigo.co/uploads/2018/12/singpost-thumbnail@2x.jpg",
      flex: 1,
      icons: [
        "https://www.codigo.co/img/ui/ico-app.svg",

        "https://www.codigo.co/img/ui/ico-uiux.svg",
      ],
    },
    {
      id: 23,
      title: "Co-incubation, Start-ups, Food & Beverage",
      category: "Dine Inn",
      image: "https://cdn.codigo.co/uploads/2018/12/dineinn.jpg",
      flex: 1,
      icons: [
        "https://www.codigo.co/img/ui/ico-app.svg",
        "https://www.codigo.co/img/ui/ico-web.svg",
        "https://www.codigo.co/img/ui/ico-cms.svg",
      ],
    },
    {
      id: 24,
      title: "Transport & Logistics",
      category: "Siemens Engineering",
      image: "https://cdn.codigo.co/uploads/2018/11/siemens.jpg",
      flex: 1,
      icons: [
        "https://www.codigo.co/img/ui/ico-app.svg",
        "https://www.codigo.co/img/ui/ico-web.svg",
        "https://www.codigo.co/img/ui/ico-cms.svg",
      ],
    },
    {
      id: 25,
      title: "",
      category: "Singapore Grand Prix",
      image: "https://cdn.codigo.co/uploads/2018/12/f1.jpg",
      flex: 1,
      icons: [
        "https://www.codigo.co/img/ui/ico-app.svg",
        "https://www.codigo.co/img/ui/ico-web.svg",
        "https://www.codigo.co/img/ui/ico-cms.svg",
      ],
    },
    {
      id: 26,
      title: "Transport & Logistics, Co-incubation, Start-ups",
      category: "FastFast Delivery",
      image: "https://cdn.codigo.co/uploads/2018/12/FF-1.jpg",
      flex: 2,
      icons: [
        "https://www.codigo.co/img/ui/ico-app.svg",
        "https://www.codigo.co/img/ui/ico-web.svg",
        "https://www.codigo.co/img/ui/ico-cms.svg",
      ],
    },
    {
      id: 27,
      title: "Food & Beverage",
      category: "McDonald's",
      image: "https://cdn.codigo.co/uploads/2018/12/mc-cafe-thumbnail@2x.jpg",
      flex: 1,
      icons: ["https://www.codigo.co/img/ui/ico-app.svg"],
    },
  ]);

  return (
    <>
      <div className={styles.container}>
        {items.map((v) => (
          <figure
            key={v.id}
            className={styles.img_figure}
            style={{ gridColumn: `span ${v.flex}` }}
          >
            <div className={styles.img_title}>{v.title}</div>
            <div className={styles.img_category}>{v.category}</div>
            {v.icons[0] && (
              <div
                className={styles.icon_container}
                style={{
                  left: "16px",
                }}
              >
                <img className={styles.icon} src={v.icons[0]} />
              </div>
            )}
            {v.icons[1] && (
              <div
                className={styles.icon_container}
                style={{
                  left: "56px",
                }}
              >
                <img className={styles.icon} src={v.icons[1]} />
              </div>
            )}
            {v.icons[2] && (
              <div
                className={styles.icon_container}
                style={{
                  left: "96px",
                }}
              >
                <img className={styles.icon} src={v.icons[2]} />
              </div>
            )}
            {v.icons[3] && (
              <div
                className={styles.icon_container}
                style={{
                  left: "136px",
                }}
              >
                <img className={styles.icon} src={v.icons[3]} />
              </div>
            )}
            <img className={styles.img} src={v.image} />
          </figure>
        ))}
      </div>
    </>
  );
};

export default WorkCard;
