import React, { useState } from "react";
import styles from "./WorkCard.module.css";
import { useRouter } from "next/router";
import Text from "../Text.js";
import TextB from "../TextB.js";

const WorkCard = () => {
  const router = useRouter();
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
      title: "Ecolab",
      category: "Others",
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
      title: "KIWI Auto Marketplace",
      category: "Others, Start-ups",
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
      title: "Furama Hotels",
      category: "Lifestyle",
      image: "https://cdn.codigo.co/uploads/2021/04/FURAMA-0@2x.jpg",
      flex: 1,
      icons: [
        "https://www.codigo.co/img/ui/ico-app.svg",

        "https://www.codigo.co/img/ui/ico-uiux.svg",
      ],
    },
    {
      id: 5,
      title: "Woodlands Transport",
      category: "Transport & Logistics",
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
      title: "Ready To Travel (SATS)",
      category: "Lifestyle, Retail & Entertainment, Start-ups",
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
      title: "Yoga Movement",
      category: "Lifestyle",
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
      title: "Don Don Donki",
      category: "Retail & Entertainment",
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
      title: "TAP Ride Hailing",
      category: "Transport & Logistics",
      image: "https://cdn.codigo.co/uploads/2021/04/TAP-0@2x.jpg",
      flex: 1,
      icons: ["https://www.codigo.co/img/ui/ico-app.svg"],
    },
    {
      id: 10,
      title: "FWD Insurance",
      category: "Others",
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
      title: "Isetan",
      category: "Retail & Entertainment",
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
      title: "HBO GO",
      category: "Retail & Entertainment",
      image: "https://cdn.codigo.co/uploads/2021/04/HBO-0@2x-2.jpg",
      flex: 2,
      icons: [
        "https://www.codigo.co/img/ui/ico-app.svg",

        "https://www.codigo.co/img/ui/ico-uiux.svg",
      ],
    },
    {
      id: 13,
      title: "MyRepublic Mobile",
      category: "Telco",
      image: "https://cdn.codigo.co/uploads/2018/12/MYR.jpg",
      flex: 1,
      icons: [
        "https://www.codigo.co/img/ui/ico-app.svg",

        "https://www.codigo.co/img/ui/ico-uiux.svg",
      ],
    },
    {
      id: 14,
      title: "ComfortDelGro",
      category: "Transport & Logistics",
      image: "https://cdn.codigo.co/uploads/2018/08/CDG-2-1.jpg",
      flex: 1,
      icons: ["https://www.codigo.co/img/ui/ico-app.svg"],
    },
    {
      id: 15,
      title: "7Rewards",
      category: "Retail & Entertainment",
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
      title: "FairPrice Online",
      category: "Retail & Entertainment",
      image: "https://cdn.codigo.co/uploads/2018/08/FPOL.jpg",
      flex: 2,
      icons: ["https://www.codigo.co/img/ui/ico-uiux.svg"],
    },
    {
      id: 17,
      title: "Charles & Keith / Pedro",
      category: "Retail & Entertainment",
      image: "https://cdn.codigo.co/uploads/2018/12/ck.jpg",
      flex: 2,
      icons: ["https://www.codigo.co/img/ui/ico-app.svg"],
    },
    {
      id: 18,
      title: "Justice League",
      category: "Retail & Entertainment",
      image:
        "https://cdn.codigo.co/uploads/2018/11/thumbnail-justice_league@2x.jpg",
      flex: 2,
      icons: ["https://www.codigo.co/img/ui/ico-app.svg"],
    },
    {
      id: 19,
      title: "Fullerton Health",
      category: "Healthcare",
      image:
        "https://cdn.codigo.co/uploads/2018/11/fullerton-health-thumbnail@2x.jpg",
      flex: 1,
      icons: ["https://www.codigo.co/img/ui/ico-app.svg"],
    },
    {
      id: 20,
      title: "Sky Premium",
      category: "Lifestyle",
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
      title: "T Singapore",
      category: "Lifestyle",
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
      title: "SingPost",
      category: "Transport & Logistics",
      image: "https://cdn.codigo.co/uploads/2018/12/singpost-thumbnail@2x.jpg",
      flex: 1,
      icons: [
        "https://www.codigo.co/img/ui/ico-app.svg",

        "https://www.codigo.co/img/ui/ico-uiux.svg",
      ],
    },
    {
      id: 23,
      title: "Dine Inn",
      category: "Co-incubation, Start-ups, Food & Beverage",
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
      title: "Siemens Engineering",
      category: "Transport & Logistics",
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
      title: "Singapore Grand Prix",
      category: "",
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
      title: "FastFast Delivery",
      category: "Transport & Logistics, Co-incubation, Start-ups",
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
      title: "McDonald's",
      category: "Food & Beverage",
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
            onClick={() => router.push("/ocbc-pay-anyone")}
          >
            <div className={styles.img_category}>
              <Text
                style={{
                  ...(v.id == 14 || v.id == 6 || v.id == 17
                    ? { color: "#000" }
                    : {}),
                  ...{ fontSize: "0.875vw" },
                }}
              >
                {v.category}
              </Text>
            </div>
            <div className={styles.img_title}>
              <TextB
                style={{
                  ...(v.id == 14 || v.id == 6 || v.id == 17
                    ? { color: "#000" }
                    : {}),
                  ...{ fontSize: "1.5vw" },
                }}
              >
                {v.title}
              </TextB>
            </div>
            {v.icons[0] && (
              <div
                className={styles.icon_container}
                style={{
                  left: "30px",
                }}
              >
                <img className={styles.icon} src={v.icons[0]} />
              </div>
            )}
            {v.icons[1] && (
              <div
                className={styles.icon_container}
                style={{
                  left: "70px",
                }}
              >
                <img className={styles.icon} src={v.icons[1]} />
              </div>
            )}
            {v.icons[2] && (
              <div
                className={styles.icon_container}
                style={{
                  left: "110px",
                }}
              >
                <img className={styles.icon} src={v.icons[2]} />
              </div>
            )}
            {v.icons[3] && (
              <div
                className={styles.icon_container}
                style={{
                  left: "150px",
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
