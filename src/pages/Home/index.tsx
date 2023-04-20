import HomeBg from "@/assets/images/home-bg.png";
import Tools from "@/assets/images/tools.png";
import App from "@/assets/images/app.jpg";
import App2 from "@/assets/images/app2.jpg";
import Xin from "@/assets/images/xin.png";
import Liu from "@/assets/images/liu.jpg";
import Li from "@/assets/images/li.jpg";
import Qiu from "@/assets/images/qiu.jpg";
import Yay from "@/assets/images/yay.jpg";
import styles from "./index.less";
import { Button, Card, Tooltip, message } from "antd";

export default function HomePage() {
  const [messageApi] = message.useMessage();

  const peoples = [
    {
      name: "Steve Xin",
      heade: Xin,
      des: "A front-end programmer who also enjoys researching application development",
    },
    {
      name: "doubid z",
      heade: Liu,
      des: "This person is lazy and left nothing behind",
    },
    {
      name: "Smith Li",
      heade: Li,
      des: "A struggling boy who likes his younger sister",
    },
    {
      name: "QiuYue Bai",
      heade: Qiu,
      des: "Civil engineering major, self-taught programming, always carrying buckets and running errands",
    },
  ];

  return (
    <div>
      <div
        className={styles.bg}
        style={{
          backgroundImage: `url(${HomeBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          height: "610px",
          maxHeight:"610px",
          width: "100%",
        }}
      >
        <div className={styles.main}>
          <div className={styles.left}>
            <div className={styles.title}>
              I will provide you with some useful tools. Welcome to my personal
              website
            </div>
            <div className={styles.buttons}>
              <Button
                className={styles.buttons1}
                onClick={() => message.info("Please wait for further updates")}
              >
                docs
              </Button>
              <Button
                className={styles.buttons2}
                onClick={() => message.info("Please wait for further updates")}
              >
                download
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        {peoples.map((items: any, index: number) => {
          return (
            <div key={index} className={styles.card}>
              <div className={styles.showen}>
                <img src={items.heade} alt="" />
                <div>{items.name}</div>
              </div>
              <div className={styles.hidde}>{items.des}</div>
            </div>
          );
        })}
      </div>
      <div className={styles.contents}>
        <div className={styles.left}>
          <div>Network switching tool</div>
          <div>
            This tool helps you switch network priorities. When your work is
            restricted by the network and you need to constantly switch networks
            to achieve your work goals, this tool can help you switch faster
          </div>

          <div>
            <Tooltip placement="top" title="password:9999">
              <Button
                className={styles.button}
                onClick={() => {
                  window.open("https://wwdp.lanzouw.com/i3ez00ti0tli");
                }}
              >
                download
              </Button>
            </Tooltip>
          </div>
        </div>
        <div className={styles.right}>
          <img src={Tools} alt="" />
        </div>
      </div>
      <div className={styles.contents}>
        <div className={styles.left}>
          <div>React Cordova App</div>
          <div>
            This is an H5 app framework developed based on React and Cordova.
            You can develop it using typescript language, debug it on a PC, and
            then run it on Android and iOS phones
          </div>

          <div>
            <Tooltip placement="top" title="Preview H5">
              <Button
                className={styles.button}
                onClick={() => {
                  window.open("http://114.132.187.155:8082/");
                }}
              >
                Preview
              </Button>
            </Tooltip>
          </div>
        </div>
        <div className={styles.right}>
          <img
            src={App}
            style={{
              height: "360px",
              width: "176px",
              zIndex: "120",
              position: "relative",
              borderRadius: "43px",
              left: "30px",
            }}
            alt=""
          />
          <img
            src={App2}
            style={{
              height: "360px",
              width: "176px",
              zIndex: "99",
              position: "relative",
              transform: "rotate(45deg)",
              borderRadius: "43px",
              left: "-60px",
              top: "-6px",
            }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
