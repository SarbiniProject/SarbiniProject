import { useEffect } from 'react';

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

export default MsgTest;
