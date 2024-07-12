import { useContext } from "react";
import { Box, styled } from "@mui/material";
import Editor from "./Editor";
import { DataContext } from "../context/DataProvider"; // Ensure the correct path

const Container = styled(Box)`
  display: flex;
  background-color: #060606;
  height: 50vh;
`;

const Code = () => {
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);

  return (
    <Container>
      <Editor
        heading="HTML"
        icons="/"
        color="red"
        value={html}
        onChange={setHtml}
      />
      <Editor
        heading="CSS"
        icons="*"
        color="#0EBEFF"
        value={css}
        onChange={setCss}
      />
      <Editor
        heading="JavaScript"
        icons="<>"
        color="#FCD000"
        value={js}
        onChange={setJs}
      />
    </Container>
  );
};

export default Code;
