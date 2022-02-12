import { useState, useEffect } from "react";
const CleanupChat = (props) => {
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    if (!friend) return;
    console.log(`Effect: subscribe chat message dari ${friend}`);

    return () => {
      console.log(`cleanup: unsubscribe chat message dari ${friend}`);
    };
  }, [friend]);

  return (
    <div>
      <button onClick={(e) => setFriend("Faiz")}>Faiz</button>
      <button onClick={(e) => setFriend("Hid")}>Hid</button>
      <br />
      <br />
      {friend ? `friend ${friend}` : "no opened friend"}
    </div>
  );
};
export default CleanupChat;
