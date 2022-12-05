import React from "react";
import Notification from "./Notification";

const reserveNotifications = [
  {
    id: 1,
    message: "안녕하세요, 오늘 일정을 알려들비니다.",
  },
  {
    id: 2,
    message: "점심식사 시간입니다.",
  },
  {
    id: 3,
    message: "이제 곧 미팅이 시작됩니다.",
  },
  {
    id: 4,
    message: "이제 곧 미팅이 시작됩니다.2222",
  },
  {
    id: 5,
    message: "이제 곧 미팅이 시작됩니다.3333",
  },
  {
    id: 6,
    message: "이제 곧 미팅이 시작됩니다.4444",
  },
];

let timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [],
    };
  }

    componentWillUnmount() {
      if (timer) {
        clearInterval(timer);
      }
    }

  componentDidMount() {
    const { notifications } = this.state;
    timer = setInterval(() => {
      if (notifications.length < reserveNotifications.length) {
        const index = notifications.length;
        notifications.push(reserveNotifications[index]);
        this.setState({
          notifications: notifications,
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  }

  render() {
    console.log("render");
    return (
      <div>
        {this.state.notifications.map((notification) => {
          return <Notification key={notification.id} id={notification.id} message={notification.message} />;
        })}
      </div>
    );
  }
}

export default NotificationList;
