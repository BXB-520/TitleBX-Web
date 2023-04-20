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
import { Avatar, Button, Card, List, Tooltip, message } from "antd";

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

  const data = [
    {
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
  ];

  return (
    <>
      <div className={styles.background}>
        <div className={styles.content}>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                    />
                  }
                  title={<a href="https://ant.design">{item.title}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    </>
  );
}
