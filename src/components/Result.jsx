import { useContext, useState, useEffect } from 'react';
import { DataContext } from '../context/DataProvider';
import { Box , styled} from '@mui/material';

const Container = styled(Box)`
     height: 41vh;
`
const Result = () => {
  const [src, setSrc] = useState('');
  const { html, css, js } = useContext(DataContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const srcCode = `
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `;
      setSrc(srcCode);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <Container>
      <iframe
        srcDoc={src}
        title='Output'
        sandbox='allow-scripts'
        frameBorder={0}
        height='100%'
        width='100%'
      />
    </Container>
  );
};

export default Result;
