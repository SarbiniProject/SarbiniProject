import React, { useEffect,useState } from 'react';
import axios from 'axios';

// Move the MsgTest component here
function MsgTest() {
  



    useEffect(() => {
    const s1 = document.createElement('script');
    s1.async = true;
    s1.src = 'https://embed.tawk.to/65b2f1490ff6374032c4ff89/1hl1ft2eb';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    document.body.appendChild(s1);

    return () => {
      // Cleanup the script when the component is unmounted
      document.body.removeChild(s1);
    };
  }, []);

  return <div>{/* Your component JSX here */}</div>;
}

const TawkToChat = () => {
    const [data, setData] = useState([]);
  useEffect(() => {
    const siteId = '65b2f1490ff6374032c4ff89';
    const apiKey = '021ba0c82be4551b2351507544062ba087733327';

    axios.get(`https://api.tawk.to/v1/sites/${siteId}/chats/${apiKey}`)
      .then(response => {
        console.log('Chat data:', response.data);
        // You can handle the chat data here
        setData(response.data)
      })
      .catch(error => {
        console.error('Error fetching chat data:', error);
      });
  }, []);

  return (
    <div>
      {/* Include the MsgTest component */}
      <MsgTest />

      {/* Your chat component goes here */}
      <div>
        <h2>Welcome to Our Chat {data}</h2>
        <p>Feel free to ask any questions!</p>
      </div>
      {/* You can add more UI components here */}
    </div>
  );
};

export default TawkToChat;
