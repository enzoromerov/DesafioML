const notificationInitialState = {
    notificationType: "notificationCommon",
    show: false,
    title: "",
    text: "",
  };
  
export default function NotifReducer(state = notificationInitialState, action) {
    switch (action.type) {
      case "showNotification":
        return {
          ...state,
          ...action.data,
          show: true,
        };
      case "closeNotification":
        return {
          ...state,
          ...action.data,
          show: false,
        };
      default:
        return { ...state };
    }
  }