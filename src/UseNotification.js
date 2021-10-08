const UseNotification = () => {
  const handleNotification = async () => {
    console.log("Notification.permission", Notification.permission);

    if (Notification.permission !== "granted") {
      const isPermission = await Notification.requestPermission();

      if (isPermission !== "granted") {
        console.log("You denied permission!");
        return;
      }
    } else {
      console.log("exec!");

      new Notification("Hello", {
        body: "How are you?",
      });
    }
  };

  return (
    <>
      <h2>✅ UseNotification</h2>
      <button onClick={handleNotification}>Notification</button>
    </>
  );
};

export default UseNotification;
